import { TextareaHTMLAttributes } from 'react';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
  size?: 's' | 'm' | 'l';
  errorMessage?: string;
}
