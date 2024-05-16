import { Box, Typography } from '@mui/material';
import Logo from './assets/crm.svg?react';
import HeaderButtons from '../../entities/HeaderButtons';
import { User } from './utils/constants';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '1440px',
        height: '48px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        margin: '0 auto',
      }}
    >
      <Box sx={{ display: 'flex', columnGap: '9px', alignItems: 'center' }}>
        <Logo />
        <Typography
          sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}
        >
          CRM Ambassador
        </Typography>
      </Box>
      <HeaderButtons
        firstName={User.firstName}
        lastName={User.lastName}
        avatar={User.avatar}
        isNotificationsEmpty={false}
        isNotificationsOpen={false}
      />
    </Box>
  );
};

export default Header;
