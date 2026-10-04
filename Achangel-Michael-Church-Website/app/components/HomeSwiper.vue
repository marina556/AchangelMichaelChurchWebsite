<template>
  <ClientOnly>
    <div class="relative">
      <swiper-container
        ref="containerRef"
        :init="false"
        @swiperslidechange="handleSlideChange"
      >
        <swiper-slide
          v-for="(slide, index) in slides"
          :key="index"
        >
          <NuxtImg
            :src="slide"
            alt="Church banner"
            class="w-full h-auto rounded-4xl"
          />
        </swiper-slide>
      </swiper-container>

      <!-- Custom pagination -->
      <div
        class="absolute bottom-15 left-7.5 z-10 flex flex-col items-center gap-2"
      >
        <button
          v-for="(_, index) in slides"
          :key="index"
          type="button"
          :aria-label="`Go to slide ${index + 1}`"
          class="h-16.25 w-10  rounded-full transition-all duration-300 border border-beige cursor-pointer text-2xl font-normal grid place-content-center"
          :class="
            activeIndex === index
              ? 'bg-beige text-black'
              : 'bg-transparent hover:bg-beige/50 text-beige'
          "
          @click="goToSlide(index)"
        >
        <span>0{{ index + 1 }}</span>
      </button>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
const containerRef = ref(null)

const slides = [
  '/banner-swiper/headerPic-1.png',
  '/banner-swiper/headerPic-2.jpg',
  '/banner-swiper/headerPic-3.jpg',
]

const activeIndex = ref(0)

const swiper = useSwiper(containerRef, {
  effect: 'fade',

  fadeEffect: {
    crossFade: true,
  },

  loop: true,

  autoplay: {
    delay: 3000,
  },
})

const goToSlide = (index) => {
  containerRef.value?.swiper?.slideToLoop(index)
}

const handleSlideChange = (event) => {
  const swiperInstance = event.detail?.[0]

  if (!swiperInstance) return

  activeIndex.value = swiperInstance.realIndex
}
</script>

<style>
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
