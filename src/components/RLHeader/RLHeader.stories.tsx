import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { RLHeader } from "./RLHeader";

const meta: Meta<typeof RLHeader> = {
  title: "RatherLabs/RLHeader",
  component: RLHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

const MyChildren = () => <div>:)</div>;
export const Basic: Story = {
  args: {
    children: <MyChildren />,
  },
};
