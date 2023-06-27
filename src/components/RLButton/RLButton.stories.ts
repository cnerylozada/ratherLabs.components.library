import type { Meta, StoryObj } from "@storybook/react";
import { RLButton } from "./RLButton";

const meta: Meta<typeof RLButton> = {
  title: "RatherLabs/RLButton",
  component: RLButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Rather button",
    onClick: () => {
      console.log("onclick rl-button");
    },
    theme: "blue",
    disabled: true,
  },
};
