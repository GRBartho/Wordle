import { Story } from "@storybook/react";
import GameGrid from "./GameGrid";
import { GameGridProps } from "./GameGridTypes";

export default {
  title: "GameGrid",
  component: GameGrid,
};

const Template: Story<GameGridProps> = (args) => <GameGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  word: "hello",
} as GameGridProps;
