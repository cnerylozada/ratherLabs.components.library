import type { Meta, StoryObj } from "@storybook/react";
import { RLButton } from "./RLButton";

const meta: Meta<typeof RLButton> = {
  title: "RatherLabs/Button",
  component: RLButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Rather button",
  },
};
