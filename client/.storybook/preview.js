import {StylesProvider} from "@material-ui/styles";
import {addDecorator} from "@storybook/react";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


const StylesDecorator = storyFn => (
    <StylesProvider injectFirst>
      {storyFn()}
    </StylesProvider>
);

addDecorator(StylesDecorator);