import { Card, CardContainer, Div, Separator } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import { FC, Fragment, HTMLAttributes } from "react";

interface Content extends HTMLAttributes<HTMLDivElement> { };

const Content: FC<Content> = () => {

  const value = useGlobalValue(DATA);

  const handlerGoods = async (type: string) => {
    nextPage({ popout: "loading", freeze: true });
    // const result = await executeShop(type);
    backPage({ ignoreFreeze: true, toStay: "game" })
  }

  return (
    <Fragment>
      <CardContainer>
        {value.shop && value.shop.map((elem) =>
          <Card
            key={`shop_${elem.type} + ${elem.isOver}`}
            title={elem.title}
            image={elem.type}

            heart={elem.heart}
            kiss={elem.kiss}

            // elf={elem.elf}
            // snowflake={elem.snowflake}
            // cone={elem.cone}

            // onInfo={() => handlerInfo(elem.type)}
            onClick={() => handlerGoods(elem.type)}
          />
        )}
      </CardContainer>

      <Separator size={"l"} />


      {value.improve && value.improve.map((elem) =>
        <Div
          top={"12px"}
          left={"12px"}
          right={"12px"}
        >
          <Card
            mode={"horizontal"}
            key={`improve_${elem.type} + ${elem.isOver}`}
            title={elem.title}
            image={elem.type}

            heart={elem.heart}
            kiss={elem.kiss}

            // elf={elem.elf}
            // snowflake={elem.snowflake}
            // cone={elem.cone}

            // onInfo={() => handlerInfo(elem.type)}
            onClick={() => handlerGoods(elem.type)}
          />
        </Div>
      )}

    </Fragment>

  )
}

export default Content;
