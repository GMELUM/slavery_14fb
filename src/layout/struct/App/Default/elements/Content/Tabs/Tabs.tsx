import { ButtonRating, Grid } from "components";
import { nextPage } from "elum-router/react";
import { FC, HTMLAttributes } from "react";

interface Tabs extends HTMLAttributes<HTMLDivElement> { };

const Tabs: FC<Tabs> = () => {

  const handlerShop = () =>
    nextPage({ panel: "shop", stay: "shop" });

  const handlerRating = () =>
    nextPage({ panel: "rating", stay: "rating" });

  return (
    <Grid>

      {/* <ButtonRating
        area={"game"}
        value={"РЕЙТИНГ"}
        mode="right"
        color={"#d82a79"}
        subcolor={"#fc4f9e"}
      /> */}

      <ButtonRating
        area={"rating"}
        value={"РЕЙТИНГ"}
        mode="right"
        color={"#d82a79"}
        subcolor={"#fc4f9e"}
        onClick={handlerRating}
      />

      <ButtonRating
        area={"shop"}
        value={"МАГАЗИН"}
        mode="left"
        color={"#00847a"}
        subcolor={"#00baad"}
        onClick={handlerShop}
      />

    </Grid>
  )
}

export default Tabs;
