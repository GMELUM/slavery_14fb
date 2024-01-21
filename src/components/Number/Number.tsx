import {
  useEffect,
  useRef,
  useState
} from "react";

import Zero from "./source/zero.svg";
import One from "./source/one.svg";
import Two from "./source/two.svg";
import Three from "./source/three.svg";
import Four from "./source/four.svg";
import Five from "./source/five.svg";
import Six from "./source/six.svg";
import Seven from "./source/seven.svg";
import Eight from "./source/eight.svg";
import Nine from "./source/nine.svg";
import Comma from "./source/comma.svg";

import style from "./Number.module.css";
import { formatNumber } from "engine";

interface Number {
  value: number;
  max?: number;
}

const Number: React.FC<Number> = ({
  value,
  max = 20
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState(formatNumber(value));
  useEffect(() => { setCount(formatNumber(value)) }, [value]);

  const styleSymbol = {
    maxWidth: max + "px",
    padding: "2px"
  }

  return (
    <div
      className={style.Number}
      ref={wrapperRef}
    >
      {Array.from(count).map((value, index) => {
        switch (value) {
          case "0": return <Zero key={`${index}_${value}`} style={styleSymbol} />;
          case "1": return <One key={`${index}_${value}`} style={styleSymbol} />;
          case "2": return <Two key={`${index}_${value}`} style={styleSymbol} />;
          case "3": return <Three key={`${index}_${value}`} style={styleSymbol} />;
          case "4": return <Four key={`${index}_${value}`} style={styleSymbol} />;
          case "5": return <Five key={`${index}_${value}`} style={styleSymbol} />;
          case "6": return <Six key={`${index}_${value}`} style={styleSymbol} />;
          case "7": return <Seven key={`${index}_${value}`} style={styleSymbol} />;
          case "8": return <Eight key={`${index}_${value}`} style={styleSymbol} />;
          case "9": return <Nine key={`${index}_${value}`} style={styleSymbol} />;
          case ",": return <Comma key={`${index}_${value}`} style={{
            ...styleSymbol,
            margin: "12px -6px 0 -6px"
          }} />;
        }
      })}
    </div>
  );
};

export default Number;