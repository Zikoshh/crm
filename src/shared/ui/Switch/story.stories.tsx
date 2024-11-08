import { Meta, StoryObj } from '@storybook/react';
import Switch from './index';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Overview: Story = {
  args: {},
};
