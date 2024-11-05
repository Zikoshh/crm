import { FC } from 'react';

import { TextareaProps } from './types';
import s from './styles.module.scss';

const Textarea: FC<TextareaProps> = ({
  size = 'm',
  error = false,
  success = false,
  rows = 2,
  label,
  errorMessage,
  disabled,
  className,
  ...props
}) => {
  return (
    <div className={`${className} ${s.textareaContainer}`}>
      {label ? <p className={s.label}>{label}</p> : ''}
      <textarea
        className={s.textarea}
        data-error={disabled ? false : error}
        data-success={disabled ? false : success}
        data-size={size}
        rows={rows}
        {...props}
      />
      {error && !success && !disabled ? (
        <p className={s.error}>{errorMessage}</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Textarea;
