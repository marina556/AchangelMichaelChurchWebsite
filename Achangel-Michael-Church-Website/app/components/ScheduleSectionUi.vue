<template>
    <div :class="['border-[0.125rem] border-beige rounded-[2.5rem] relative px-4 sm:px-8 pb-4 mb-0', title?'pt-8 mt-10':'pt-4 mt-4']">
        <h2 v-if="title"
            class="bg-beige text-white w-max px-5 min-h-13 grid place-content-center  font-bold text-[1.875rem] leading-9.5 rounded-xl absolute -top-6.5 sm:right-8 right-1/2 translate-x-1/2 sm:translate-x-0">
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