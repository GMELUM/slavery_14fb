import { Cells, Currency, Line, Notify, PanelHeader } from "components";
import { backPage, nextPage } from "elum-router/react";
import { useGlobalValue } from "elum-state/react";
import { DATA } from "engine/state/atoms";
import executeNotify from "handlers/executeNotify";
import { FC, HTMLAttributes } from "react";

interface Navigate extends HTMLAttributes<HTMLDivElement> { };

const Navigate: FC<Navigate> = () => {

  const value = useGlobalValue(DATA);

  const handlerNotify = async () => {
    nextPage({ popout: "loading", freeze: true });
    const result = await executeNotify();
    backPage({ ignoreFreeze: true, toStay: "app" });
  }

  const handleShop = () => nextPage({
    modal: "shop"
  })

  return (
    <Cells>
      <Notify
        show={value.notification}
        onClick={handlerNotify}
      />
      <Currency count={value.kiss} onClick={handleShop} />
    </Cells>
  )
}

export default Navigate;
