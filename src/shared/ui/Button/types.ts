import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'danger' | 'default';
  plain?: boolean;
  loading?: boolean;
  size?: 'xs' | 's' | 'm' | 'l';
}
