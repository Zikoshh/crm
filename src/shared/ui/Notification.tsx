import { FC } from 'react';
import { IconButton } from '@mui/material';
import IconEmpty from '../assets/notificationEmpty.svg?react';
import IconBadge from '../assets/notificationBadge.svg?react';

interface NotificationProps {
  isNotificationsEmpty: boolean;
}

const Notification: FC<NotificationProps> = ({ isNotificationsEmpty }) => {
  return (
    <IconButton
      sx={{
        padding: '0',
        color: '#000',
        '&:hover': {
          color: '#342DF2',
        },
        '&:active': {
          color: '#140DDA',
        },
      }}
      disableRipple
    >
      {isNotificationsEmpty ? <IconEmpty /> : <IconBadge />}
    </IconButton>
  );
};

export default Notification;
