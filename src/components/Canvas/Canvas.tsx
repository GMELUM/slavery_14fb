import { FC, HTMLAttributes, useEffect, useMemo, useRef } from "react";
import { useEventListener } from "engine/hooks";

import "./Canvas.css";

export type Render = (opt: {
  width: number;
  height: number;
  quality: number;
  context: CanvasRenderingContext2D;
  next: () => void;
}) => void;

interface ICanvas extends HTMLAttributes<HTMLDivElement> {
  quality: number;
  limitFrames: number;
  onRender: Render;
  onInitial?: Render;
};

const Canvas: FC<ICanvas> = ({
  quality = 1,
  limitFrames = 60,
  onRender,
  onInitial,
  ...props
}) => {

  const container = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  const lastFrame = useRef<number>(Date.now());

  const handlerResize = () => {
    const localCanvas = canvas.current;
    const localContainer = container.current;
    if (localCanvas && localContainer) {
      localCanvas.width = localContainer.clientWidth * quality;
      localCanvas.height = localContainer.clientHeight * quality;
    }
  }

  useEventListener("resize", handlerResize, window, { passive: true });

  useEffect(() => {

    let timer: NodeJS.Timeout;
    let unmout: boolean = false;

    const localCanvas = canvas.current;
    const localContainer = container.current;
    if (localCanvas && localContainer) {
      const width = localContainer.clientWidth * quality;
      const height = localContainer.clientHeight * quality;
      const context = localCanvas.getContext("2d");
      if (context) {
        context.scale(devicePixelRatio, devicePixelRatio);
        localCanvas.width = width;
        localCanvas.height = height;
        const next = () => {

          if (unmout) { return; }

          const now = Date.now();
          const diff = now - lastFrame.current;

          lastFrame.current = (now - (diff % (1000 / limitFrames)));

          if (diff <= 1000 / limitFrames) {
            return requestAnimationFrame(() => { next() })
          }

          requestAnimationFrame(() => {
            try {
              if (!context) { return; }
              const width = localContainer.clientWidth * quality;
              const height = localContainer.clientHeight * quality;
              if (!width || !height) { return; }
              onRender({ width, height, quality, context, next });
            } catch (error) { console.log(error); next(); }
          });
        }

        const render = onInitial || onRender;
        render({ width, height, quality, context, next });

      }
    }

    return () => {
      clearTimeout(timer);
      unmout = true;
    }

  }, []);

  const element = useMemo(() => (
    <div className="Canvas" ref={container} {...props}>
      <canvas ref={canvas} />
    </div>
  ), []);

  return element;

}

export default Canvas;
