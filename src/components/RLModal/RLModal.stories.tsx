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
            <div className="md:w-[400px] relative">
              <div className="text-justify">
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was
                </div>
              </div>
              <div className="sticky left-0 bottom-0 w-full text-center">
                <RLButton
                  label="Send Answers"
                  onClick={() => {
                    console.log("send answers");
                  }}
                />
              </div>
            </div>
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
