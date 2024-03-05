
import { FC, HTMLAttributes, memo } from 'react';

import { Modal } from "components";
import { useRouter } from 'elum-router/react';
import Product from './Product/Product';
import Shop from './Shop/Shop';
import Box from './Box/Box';
import Robot from './Robot/Robot';
import HowToPlay from './HowToPlay/HowToPlay';
import ShopBalance from './ShopBalance/ShopBalance';
import Presents from './Presents/Presents';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Share from './Share/Share';

interface Modals extends HTMLAttributes<HTMLDivElement> { };

const Modals: FC<Modals> = () => {

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
      <ShopBalance nav={"shop_balance"} />
      <Presents nav={"present"} />
      <SpecialOffer nav={"special_offer"} />
      <Share nav={"share"} />

    </Modal>
  )

}

export default memo(Modals);
