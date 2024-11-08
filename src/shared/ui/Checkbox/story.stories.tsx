import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

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
