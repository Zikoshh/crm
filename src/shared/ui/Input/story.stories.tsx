import { Meta, StoryObj } from '@storybook/react';
import Input from './index';
import LoadingIcon from '../../assets/loading.svg?react';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '300px' }}>
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

type Story = StoryObj<typeof Input>;

export const Overview: Story = {
  args: {
    type: 'text',
    size: 'm',
    placeholder: 'Плейсхолдер инпута',
    error: false,
    label: 'Лейбл',
    success: false,
  },
};

export const WithAdornments: Story = {
  args: {
    type: 'text',
    size: 'm',
    placeholder: 'Плейсхолдер инпута',
    label: 'Лейбл',
    success: false,
    error: false,
    leftAdornment: LoadingIcon,
    rightAdornment: LoadingIcon,
  },
};

export const Error: Story = {
  args: {
    type: 'text',
    size: 'm',
    placeholder: 'Плейсхолдер инпута',
    errorMessage: 'error',
    error: true,
    label: 'Лейбл',
    success: false,
  },
};

export const Success: Story = {
  args: {
    type: 'text',
    size: 'm',
    placeholder: 'Плейсхолдер инпута',
    label: 'Лейбл',
    success: true,
  },
};
