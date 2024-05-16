import { Avatar } from '@mui/material';
import { FC } from 'react';

interface HeaderAvatarProps {
  nameAvatar: string;
  avatar: string;
}

const HeaderAvatar: FC<HeaderAvatarProps> = ({
  nameAvatar,
  avatar,
}) => {
  return (
    <Avatar
      sx={{
        bgcolor: '#625DF5',
        width: '32px',
        height: '32px',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '22px',
        cursor: 'pointer',
      }}
      alt={nameAvatar}
      src={avatar}
    >
      {nameAvatar ? nameAvatar : ''}
      {/* <IconButton
          sx={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            backgroundColor: '#625DF5',
            verticalAlign: 'middle',
            textAlign: 'center',
            position: 'absolute',
            top: '0',
            right: '0',
            padding: '0',
            '&:hover': {
              backgroundColor: '#625DF5',
            },
          }}
          disableRipple
        >
          <CameraIcon />
        </IconButton> */}
    </Avatar>
  );
};

export default HeaderAvatar;


