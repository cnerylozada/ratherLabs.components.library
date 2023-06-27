import type { Meta, StoryObj } from "@storybook/react";
import { RLLoading } from "./RLLoading";

const meta: Meta<typeof RLLoading> = {
  title: "RatherLabs/RLLoading",
  component: RLLoading,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    message: "Cargando ...",
  },
};
