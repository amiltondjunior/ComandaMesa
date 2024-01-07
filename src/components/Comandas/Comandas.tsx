import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Comandas.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:38 */
export const Comandas: FC<Props> = memo(function Comandas(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes._352020ArrowBack1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes._2639919CartShopping4}></div>
      <div className={classes._2639919CartShopping3}></div>
      <div className={classes._2639919CartShopping2}></div>
      <div className={classes.mesasComandas}>Mesas | Comandas</div>
      <div className={classes._2639919CartShopping1}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes._1500}>150,00</div>
      <div className={classes._3}>03</div>
      <div className={classes.fechamento}>Fechamento</div>
      <div className={classes.rectangle52}></div>
      <div className={classes._350}>35,00</div>
      <div className={classes._1}>01</div>
      <div className={classes.ocupada}>Ocupada</div>
      <div className={classes.rectangle53}></div>
      <div className={classes._15002}>150,00</div>
      <div className={classes._5}>05</div>
      <div className={classes.ocupada2}>Ocupada</div>
      <div className={classes.rectangle54}></div>
      <div className={classes._15003}>150,00</div>
      <div className={classes._10}>10</div>
      <div className={classes.ocupada3}>Ocupada</div>
      <div className={classes.rectangle55}></div>
      <div className={classes._15004}>150,00</div>
      <div className={classes._11}>11</div>
      <div className={classes.fechamento2}>Fechamento</div>
      <div className={classes.rectangle56}></div>
      <div className={classes._15005}>150,00</div>
      <div className={classes._12}>12</div>
      <div className={classes.ocupada4}>Ocupada</div>
      <div className={classes.rectangle57}></div>
      <div className={classes._15006}>150,00</div>
      <div className={classes._6}>06</div>
      <div className={classes.ocupada5}>Ocupada</div>
      <div className={classes.rectangle58}></div>
      <div className={classes._2}>02</div>
      <div className={classes.livre}>Livre</div>
      <div className={classes.rectangle59}></div>
      <div className={classes._4}>04</div>
      <div className={classes.livre2}>Livre</div>
      <div className={classes.rectangle510}></div>
      <div className={classes._7}>07</div>
      <div className={classes.livre3}>Livre</div>
      <div className={classes.rectangle511}></div>
      <div className={classes._8}>08</div>
      <div className={classes.livre4}>Livre</div>
      <div className={classes.rectangle512}></div>
      <div className={classes._9}>09</div>
      <div className={classes.livre5}>Livre</div>
    </div>
  );
});
