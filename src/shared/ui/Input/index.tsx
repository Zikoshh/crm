import { ChangeEventHandler, FC, MouseEventHandler } from 'react';

import s from './styles.module.scss';
import { InputProps } from './types';

import ClearIcon from '../../assets/input-clear-icon.svg?react';
import SuccessIcon from '../../assets/input-success-icon.svg?react';

const Input: FC<InputProps> = ({
  type = 'text',
  label,
  error = false,
  errorMessage,
  success = false,
  className,
  size = 'm',
  value,
  dispatch,
  leftAdornment,
  rightAdornment,
  disabled,
  ...props
}) => {
  const LeftAdornment = leftAdornment;
  const RightAdornment = rightAdornment;

  const handleClear: MouseEventHandler<HTMLButtonElement> = () => {
    if (dispatch) dispatch('RESET');
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (dispatch) dispatch('SET_VALUE', { payload: e.target.value });
  };

  return (
    <div className={`${className ? className : ''} ${s.inputContainer}`}>
      {label ? <p className={s.visualLabel}>{label}</p> : ''}
      <label
        className={s.label}
        data-error={disabled ? false : error}
        data-success={disabled ? false : success}
        data-size={size}
      >
        {LeftAdornment ? (
          <div className={s.leftAdornment}>
            <LeftAdornment />
          </div>
        ) : (
          ''
        )}
        <input
          className={s.input}
          type={type}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <div className={s.iconsContainer}>
          {RightAdornment ? <RightAdornment /> : ''}
          {error && !disabled ? (
            <button
              className={`${s.clearButton} ${success ? s.clearButton__color_gray : ''}`}
              onClick={handleClear}
            >
              <ClearIcon />
            </button>
          ) : (
            ''
          )}
          {success && !disabled ? <SuccessIcon /> : ''}
        </div>
      </label>
      {error && !success && !disabled ? (
        <p className={s.error}>{errorMessage}</p>
      ) : (
        ''
      )}
    </div>
  );
};

export default Input;
