import { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { ButtonProps } from './types';
import LoadingIcon from '../../assets/loading.svg?react';

const meta: Meta<ButtonProps> = {
  title: 'UI/Button',
  component: Button,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '100px' }}>
          <Story></Story>
        </div>
      );
    },
  ],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Overview: Story = {
  args: {
    children: 'Button',
    type: 'button',
    variant: 'primary',
    plain: false,
    size: 'm',
    loading: false,
    name: 'button',
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <LoadingIcon style={{ marginRight: '6px' }} />
        Button
      </>
    ),
    type: 'button',
    variant: 'danger',
    plain: true,
    size: 'l',
    loading: true,
    name: 'button',
  },
};
