import { Meta, StoryObj } from '@storybook/react';
import Avatar from './index';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
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

type Story = StoryObj<typeof Avatar>;

export const Overview: Story = {
  args: {
    size: 'm',
    shape: 'circle',
    src: 'https://i.scdn.co/image/ab67616d00001e02d8b8ac081653ac8fc3009026',
    firstName: 'Дети',
    lastName: 'Анархии',
  },
};

export const Placeholder: Story = {
  args: {
    size: 'm',
    shape: 'circle',
    firstName: 'Дети',
    lastName: 'Анархии',
  },
};
