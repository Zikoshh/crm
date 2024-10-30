import { Meta, StoryObj } from '@storybook/react';
import Typography from './index';

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Overview: Story = {
  args: {
    children: 'Typography text',
    component: 'p',
    size: 'base',
    fontWeight: 'medium',
  },
};
