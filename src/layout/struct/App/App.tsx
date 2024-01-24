import { FC, HTMLAttributes, useEffect } from "react";
import { nextPage, useRouter } from "elum-router/react";

import { View } from "components";
import Default from "./Default/Default";
import Shop from "./Shop/Shop";
import Rating from "./Rating/Rating";
import { useGlobalState } from "elum-state/react";
import { DATA } from "engine/state/atoms";

interface App extends HTMLAttributes<HTMLDivElement> {
  nav: string
};

const App: FC<App> = ({
  nav
}) => {

  const activePanel = useRouter("panel");

  const [data, setData] = useGlobalState(DATA);

  useEffect(() => {
    if (data.robot_mining) {
      nextPage({ modal: "robot", params: { count: data.robot_mining } })
      setData((value) => ({ ...value, robot_mining: 0 }))
    }
  }, [])

  return (
    <View
      nav={nav}
      activePanel={activePanel}
    >

      <Default nav={"default"} />
      <Shop nav={"shop"} />
      <Rating nav={"rating"} />

    </View>
  )
}

export default App;
