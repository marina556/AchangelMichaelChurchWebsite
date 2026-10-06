<template>
    <div :class="['border-2 border-beige rounded-[2.5rem] relative px-8 pb-4', title?'pt-8 mt-6':'pt-4']">
        <h2 v-if="title"
            class="bg-beige text-white w-max px-5 min-h-13 grid place-content-center  font-bold text-[1.875rem] leading-9.5 rounded-xl absolute -top-6.5">
            {{ title }}
        </h2>
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<style scoped></style>