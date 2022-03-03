import AppButtonComponent from "./AppButton.vue";
import { ButtonTypes } from "./config";

export default {
  title: "Buttons",
  component: AppButtonComponent,
  argTypes: {
    onClick: {},
    type: {
      options: [...Object.keys(ButtonTypes)],
      control: { type: "select" },
      defaultValue: Object.keys(ButtonTypes)[0],
    },
  },
};

export const AppButton = (args: any) => ({
  components: { AppButtonComponent },
  setup() {
    return { args };
  },
  template: '<AppButtonComponent v-bind="args" />',
});
AppButton.args = {
  text: "Testing 123",
};
