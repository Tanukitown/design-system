import { Button } from "./Button";

import { type Meta, type StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary"] },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Primary Button" },
};

export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary Button" },
};
