import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { RLModal } from "./RLModal";
import { RLButton } from "../RLButton/RLButton";

const meta: Meta<typeof RLModal> = {
  title: "RatherLabs/RLModal",
  component: RLModal,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const [isModalHidden, setIsModalHidden] = useState(true);
    return (
      <>
        {!isModalHidden && (
          <RLModal
            onClose={() => {
              setIsModalHidden((_) => !_);
            }}
          >
            <div>Modal Content</div>
          </RLModal>
        )}
        <div>
          <RLButton
            label="Open RLModal"
            onClick={() => {
              setIsModalHidden((_) => !_);
            }}
          />
        </div>
      </>
    );
  },
};
