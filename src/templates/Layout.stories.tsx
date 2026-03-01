import { Layout } from "./Layout";

import { type Meta, type StoryObj } from "@storybook/react";

const meta: Meta<typeof Layout> = {
  title: "Templates/Layout",
  component: Layout,
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    children: <div className="col-span-12">Page content</div>,
  },
};
