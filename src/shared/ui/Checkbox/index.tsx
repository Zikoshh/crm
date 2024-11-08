import { FC, ForwardedRef, forwardRef } from 'react';

import s from './styles.module.scss';
import { CheckboxProps } from './types';

const Checkbox: FC<CheckboxProps> = forwardRef(
  (
    { label, size = 'm', className, ...props },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={`${s.checkbox_wrapper} ${className ? className : ''}`}>
        <input ref={ref} className={s.input} type="checkbox" {...props} />
        <span className={`${s.checkbox} ${s[`checkbox__${size}`]}`}>
          <div className={s.icon}></div>
        </span>
        {label}
      </label>
    );
  }
);

export default Checkbox;
