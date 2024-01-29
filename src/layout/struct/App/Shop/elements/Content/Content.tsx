import { Card, CardContainer, Div, Separator } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA, Goods, Improve } from "engine/state/atoms";
import { FC, Fragment, HTMLAttributes } from "react";

interface Content extends HTMLAttributes<HTMLDivElement> { };

const Content: FC<Content> = () => {

  const value = useGlobalValue(DATA);

  const handlerProduct = (elem: Goods | Improve) => {
    nextPage({ modal: "product", params: elem })
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

            sold={elem.isOver}

            onClick={() => handlerProduct(elem)}
          />
        )}
      </CardContainer>

      <Separator size={"l"} />

      {value.improve && value.improve.map((elem) =>
        <Div
          key={`improve_${elem.type} + ${elem.isOver}`}
          top={"12px"}
          left={"12px"}
          right={"12px"}
        >
          <Card
            mode={"horizontal"}
            title={elem.title}
            image={elem.type}

            heart={elem.heart}
            kiss={elem.kiss}

            sold={elem.isOver}

            onClick={() => handlerProduct(elem)}
          />
        </Div>
      )}

      <Div bottom={"12px"} />

    </Fragment>

  )
}

export default Content;
