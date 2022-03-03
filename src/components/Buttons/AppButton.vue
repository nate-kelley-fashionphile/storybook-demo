<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";
import AppIcon from "../Icon";
import { buttonTypeConfig, ButtonTypes } from "./config";

interface Props {
    text: string;
    disabled?: boolean;
    loading?: boolean;
    active?: boolean;
    block?: boolean;
    type?: ButtonTypes;
    appendedIcon?: string;
    prependedIcon?: string;
}

const {
    text,
    loading,
    block,
    active,
    disabled,
    type = ButtonTypes.primary,
    ...props
} = defineProps<Props>();

const dynamicClass = computed(() => {
    return {
        [buttonTypeConfig[type]]: true,
        loading: loading,
        active: active,
        "btn-block": block,
    };
});

function onClick() {
    if (!disabled) {
        emit("onClick");
    }
}

const emit = defineEmits<{
    (e: "onClick"): void;
}>();
</script>

<template>
    <button @click="onClick" class="app-button btn" :class="dynamicClass" :disabled="disabled">
        <AppIcon v-if="prependedIcon" :icon="prependedIcon" />
        {{ text }}
        <AppIcon v-if="appendedIcon" :icon="appendedIcon" />
    </button>
</template>

<style lang="scss" scoped>
.app-button.btn {
    &-secondary {
        color: rgb(79, 79, 79);
        background: rgb(229, 229, 229);
        border: none;
    }
}
</style>
