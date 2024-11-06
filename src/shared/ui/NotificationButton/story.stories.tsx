import { Meta, StoryObj } from '@storybook/react';
import NotificationButton from './index';

const meta: Meta<typeof NotificationButton> = {
  title: 'UI/NotificationButton',
  component: NotificationButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof NotificationButton>;

export const Overview: Story = {
  args: {
    haveNotifications: false,
  },
};
