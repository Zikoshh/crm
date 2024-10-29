import { FC, ForwardedRef, forwardRef } from 'react';

import s from './styles.module.scss';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = forwardRef(
  (
    {
      children,
      className,
      variant = 'primary',
      plain = true,
      size = 'm',
      loading = false,
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        data-variant={variant}
        data-plain={plain}
        data-loading={loading}
        {...props}
        className={`${className ? className : ''} ${s.button} ${s[`button__${size}`]}`}
      >
        {children}
      </button>
    );
  }
);

export default Button;
