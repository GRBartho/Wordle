import { Story } from "@storybook/react";
import CharacterContainer from "./CharacterContainer";
import { CharacterContainerProps } from "./CharacterContainerTypes";

export default {
  title: "CharacterContainer/CharacterContainer",
  component: CharacterContainer,
};

const Template: Story<CharacterContainerProps> = (args) => (
  <CharacterContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  character: "a",
  // Provide default values for your component props here
} as CharacterContainerProps; // Explicitly cast Default.args to the correct type
