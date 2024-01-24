import React, { useState, useRef, HTMLAttributes } from 'react';
import style from './AnimationLevel.module.css';

interface Element {
  id: number;
  x: number;
  y: number;
  show: boolean;
}

const initialElements: Element[] = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  x: 0,
  y: 0,
  show: false
}));

interface AnimationLevel extends HTMLAttributes<HTMLDivElement> {
  level: number;
};

const AnimationLevel: React.FC<AnimationLevel> = ({ level }) => {
  const [elements, setElements] = useState<Element[]>(initialElements);
  const lastUsedElement = useRef<number>(-1);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const nextIndex = (lastUsedElement.current + 1) % elements.length;
    const updatedElements = [...elements];
    updatedElements[nextIndex] = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      id: Date.now(),
      show: true
    };
    setElements(updatedElements);
    lastUsedElement.current = nextIndex;
  };

  return (
    <div className={style.AnimationLevel} onClick={handleClick}>
      {elements.map((element) => (
        <div
          key={element.id}
          className={style.AnimationLevel__element}
          style={{
            top: element.y,
            left: element.x,
            animation: element.show ? '_floatAndFade 1s forwards' : "none",
            opacity: element.show ? "1" : "0"
          }}
        >
          +{level}
        </div>
      ))}
    </div>
  );
};

export default AnimationLevel;
