
import { FC, HTMLAttributes, memo } from 'react';

import { Modal } from "components";
import { useRouter, ACTIVE_MODAL } from 'elum-router/react';
import Product from './Product/Product';
import Shop from './Shop/Shop';
import Box from './Box/Box';
import Robot from './Robot/Robot';
import HowToPlay from './HowToPlay/HowToPlay';
import ShopBalance from './ShopBalance/ShopBalance';
import Presents from './Presents/Presents';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Share from './Share/Share';
import { useGlobalValue } from 'elum-state/react';

interface Modals extends HTMLAttributes<HTMLDivElement> { };

const Modals: FC<Modals> = () => {

  const modal = useRouter("modal");

  const m = useGlobalValue(ACTIVE_MODAL);

  console.log(modal, m)

  return (
    <Modal
      activeModal={modal}
    >

      <Product nav={"product"} />
      <Shop nav={"shop"} />
      <Box nav={"box"} />
      <Robot nav={"robot"} />
      <HowToPlay nav={"how_to_play"} />
      <ShopBalance nav={"shop_balance"} />
      <Presents nav={"present"} />
      <SpecialOffer nav={"special_offer"} />
      <Share nav={"share"} />

    </Modal>
  )

}

export default memo(Modals);
