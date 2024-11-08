import { FC } from 'react';

import s from './styles.module.scss';
import { SwitchProps } from './types';

const Switch: FC<SwitchProps> = ({ className, ...props }) => {
  return (
    <label className={`${s.switch_wrapper} ${className ? className : ''}`}>
      <input className={s.input} type="checkbox" {...props} />
      <span className={s.switch}></span>
    </label>
  );
};

export default Switch;
