import { Meta, StoryObj } from '@storybook/react';
import Radio from './index';

const meta: Meta<typeof Radio> = {
  title: 'UI/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Overview: Story = {
  args: {
    size: 'm',
  },
};

export const Label: Story = {
  args: {
    size: 'm',
    label: 'Лейбл',
  },
};
