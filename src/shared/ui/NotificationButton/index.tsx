import { FC } from 'react';

import s from './styles.module.scss';
import { NotificationButtonProps } from './types';

import NotificationEmptyIcon from '../../assets/notificationEmpty.svg?react';
import NotificationBadgeIcon from '../../assets/notificationBadge.svg?react';

const NotificationButton: FC<NotificationButtonProps> = ({
  haveNotifications,
}) => {
  return (
    <button className={s.button}>
      {haveNotifications ? (
        <NotificationBadgeIcon />
      ) : (
        <NotificationEmptyIcon />
      )}
    </button>
  );
};
export default NotificationButton;
