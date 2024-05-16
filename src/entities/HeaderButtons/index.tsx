import { FC } from 'react';
import HeaderAvatar from '../../shared/ui/HeaderAvatar';
import Notification from '../../shared/ui/Notification';
import { Box } from '@mui/material';

interface HeaderButtonsProps {
  firstName: string;
  lastName: string;
  avatar: string;
  isNotificationsEmpty: boolean;
}

const HeaderButtons: FC<HeaderButtonsProps> = ({
  firstName,
  lastName,
  avatar,
  isNotificationsEmpty,
}) => {
  return (
    <Box sx={{ display: 'flex', columnGap: '12px' }}>
      <Box
        sx={{
          backgroundColor: '#E1E1F7',
          borderRadius: '10px',
          width: '32px',
          height: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Notification isNotificationsEmpty={isNotificationsEmpty} />
      </Box>
      <HeaderAvatar nameAvatar={firstName[0] + lastName[0]} avatar={avatar} />
    </Box>
  );
};

export default HeaderButtons;
