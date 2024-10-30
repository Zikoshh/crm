import { ElementType, ReactNode } from 'react';

export interface TypographyProps {
  component?: ElementType;
  children: ReactNode;
  fontWeight?: 'regular' | 'medium' | 'semi-bold' | 'bold';
  size?: 'extra-small' | 'small' | 'base' | 'medium' | 'large' | 'extra-large';
}
