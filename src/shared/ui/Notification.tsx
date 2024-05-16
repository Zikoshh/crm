import { FC } from 'react';
import { IconButton } from '@mui/material';
import activeEmpty from '../assets/notification/activeEmpty.svg';
import activeBadge from '../assets/notification/activeBadge.svg';
import defaultEmpty from '../assets/notification/defaultEmpty.svg';
import defaultBadge from '../assets/notification/defaultBadge.svg';
import hoverEmpty from '../assets/notification/hoverEmpty.svg';
import hoverBadge from '../assets/notification/hoverBadge.svg';

interface NotificationProps {
  isNotificationsEmpty: boolean;
  isNotificationsOpen: boolean;
}

const Notification: FC<NotificationProps> = ({
  isNotificationsEmpty,
  isNotificationsOpen,
}) => {
  return (
    <IconButton
      sx={{
        backgroundImage: `url(${
          isNotificationsEmpty
            ? isNotificationsOpen
              ? activeEmpty
              : defaultEmpty
            : isNotificationsOpen
            ? activeBadge
            : defaultBadge
        })`,
        width: '32px',
        height: '32px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&:hover': {
          backgroundImage: `url(${
            isNotificationsEmpty ? hoverEmpty : hoverBadge
          })`,
        },
      }}
    />
  );
};

export default Notification;
