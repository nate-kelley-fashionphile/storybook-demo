import AppIconComponent from "./AppIcon.vue";

export default {
  title: "Icons",
  component: AppIconComponent,
  argTypes: {
    onClick: {},
  },
};

export const AppIcon = (args) => ({
  components: { AppIconComponent },
  setup() {
    return { args };
  },
  template: '<AppIconComponent v-bind="args" />',
});
AppIcon.args = {
  icon: "trash",
};
