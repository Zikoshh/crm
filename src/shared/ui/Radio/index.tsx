import { FC } from 'react';

import s from './styles.module.scss';
import { RadioProps } from './types';

const Radio: FC<RadioProps> = ({ label, size = 'm', className, ...props }) => {
  return (
    <label className={`${s.radioWrapper} ${className ? className : ''}`}>
      <input className={s.input} type="radio" data-size={size} {...props} />
      <span className={`${s.radio} ${s[`radio__${size}`]}`} />
      {label}
    </label>
  );
};

export default Radio;
