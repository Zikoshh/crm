import { Meta, StoryObj } from '@storybook/react';
import Textarea from './index';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
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

type Story = StoryObj<typeof Textarea>;

export const Overview: Story = {
  args: {
    size: 'm',
    error: false,
    success: false,
    label: 'Лейбл',
    placeholder: 'Плейсхолдер textarea',
    rows: 2,
  },
};

export const Error: Story = {
  args: {
    size: 'm',
    placeholder: 'Плейсхолдер textarea',
    errorMessage: 'error',
    error: true,
    label: 'Лейбл',
    success: false,
    rows: 2,
  },
};

export const Success: Story = {
  args: {
    size: 'm',
    placeholder: 'Плейсхолдер textarea',
    label: 'Лейбл',
    success: true,
    error: false,
    rows: 2,
  },
};
