<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

interface Props {
    icon: string;
}

const { icon } = defineProps<Props>();

const iconClass = computed(() => {
    return `fa fa-${icon}`;
})

function onClick() {
    emit("onClick");
}

const emit = defineEmits<{
    (e: "onClick"): void;
}>();
</script>

<template>
    <i :class="iconClass" @click="onClick"></i>
</template>

<style lang="scss">
//@import "@fortawesome/fontawesome-free/all.min.css";
</style>