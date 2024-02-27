import { Story } from "@storybook/react";
import WordContainer from "./WordContainer";
import { WordContainerProps } from "./WordContainerTypes";

export default {
  title: "WordContainer/WordContainer",
  component: WordContainer,
};

const Template: Story<WordContainerProps> = (args) => (
  <WordContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  word: "hello",
  confirmed: false,
  typedWord: "false",
  // Provide default values for your component props here
} as WordContainerProps; // Explicitly cast Default.args to the correct type
