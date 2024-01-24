
import { FC, HTMLAttributes, memo } from 'react';

import { Modal } from "components";
import { useRouter } from 'elum-router/react';
import Product from './Product/Product';
import Shop from './Shop/Shop';
import Box from './Box/Box';
import Robot from './Robot/Robot';
import HowToPlay from './HowToPlay/HowToPlay';

interface Modals extends HTMLAttributes<HTMLDivElement> { };

const Modals: FC<Modals> = ({ }) => {

  const modal = useRouter("modal");

  return (
    <Modal
      activeModal={modal}
    >

      <Product nav={"product"} />
      <Shop nav={"shop"} />
      <Box nav={"box"} />
      <Robot nav={"robot"} />
      <HowToPlay nav={"how_to_play"} />

    </Modal>
  )

}

export default memo(Modals);
