# Description

A demo project for fashionphile to showcase a common component library for Vue3

# How to Use

## Class Syntax

```
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { AppButton } from "@nate-kelley-fashionphile/vue3-common";

@Options({
  components: {
    AppButton,
  },
})
export default class App extends Vue {}
</script>

<template>
  <div>
    <AppButton text="swag" />
  </div>
</template>
```

## Composition Api Syntax

```
<script setup lang="ts">
import { AppButton } from "@nate-kelley-fashionphile/vue3-common";
</script>

<template>
  <div>
    <AppButton text="swag" />
  </div>
</template>
```

## Plugin Syntax

```
//main.ts
import plugin from "@nate-kelley-fashionphile/vue3-common";

const app = createApp(App);

app.use(plugin);

app.mount("#app");
```
