import { FC } from 'react';

import s from './styles.module.scss';
import { TypographyProps } from './types';

const Typography: FC<TypographyProps> = ({
  component = 'p',
  children,
  size = 'base',
  fontWeight = 'medium',
}) => {
  const Tag = component;

  return (
    <Tag
      className={`${s.text} ${s[`text__${size}`]}`}
      data-font-weight={fontWeight}
    >
      {children}
    </Tag>
  );
};

export default Typography;
