import { FC } from 'react';

import s from './styles.module.scss';
import { AvatarProps } from './types';

const Avatar: FC<AvatarProps> = ({
  size = 'm',
  shape = 'circle',
  src,
  firstName,
  lastName,
}) => {
  return (
    <div className={`${s.avatar} ${s[size]} ${s[shape]}`}>
      {src ? (
        <img src={src} alt={firstName + ' ' + lastName} className={s.image} />
      ) : (
        <span className={s.placeholder}>
          {firstName[0].toUpperCase() + lastName[0].toUpperCase()}
        </span>
      )}
    </div>
  );
};
export default Avatar;
