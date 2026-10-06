<template>
    <div class="flex sm:flex-row flex-col gap-4 sm:h-128">
        <div class="fixed inset-0 z-20 grid place-content-center bg-black/90" @click.self="imageIsOpen = false" v-if="imageIsOpen">
            <span class= "text-[1.25rem] sm:text-2xl text-white cursor-pointer absolute top-8 right-8 transition-all hover:border border-white w-14 h-14 rounded-full grid place-content-center font-arial" @click="imageIsOpen = false">X</span>
            <NuxtImg src="/events/Temp1.png" alt="Event Image" class="w-[80vw] max-h-[70vh] object-contain rounded-4xl" />
        </div>
        <div class="flex-1 mt-4 flex flex-col justify-between gap-4 sm:order-1 order-3">
            <div class="sm:flex-1 rounded-4xl">
                <div class="h-full sm:max-h-93.75 relative  rounded-4xl overflow-hidden group">
                    <div
                    @click="imageIsOpen = true"
                        class="overlay  cursor-zoom-in absolute grid place-content-center inset-0 bg-black/70 group-hover:opacity-100 opacity-0 transition-all">
                        <NuxtImg src="/zoom-icon.svg" class="w-20" />
                    </div>
                    <NuxtImg src="/events/Temp1.png" alt="Event Image"
                        class="w-full sm:h-full h-auto sm:max-h-93.75 object-cover sm:object-[40%] sm:mb-4" />
                </div>
            </div>
            <SocialMedia />
        </div>

        <div class="flex flex-col items-end justify-between relative sm:w-100 shrink-0 sm:order-2 order-1">
            <NuxtImg src="/logos/logo-2.svg" alt="Archangel Michael Church" class="z-10 sm:-mt-32 -mt-[3.75rem] sm:ms-0 me-4 sm:h-64.75 sm:w-100.5 w-[11.6875rem] h-[7.5rem]" />

            <p class="text-center max-w-[40vw] sm:max-w-full right-4 top-3 z-10 text-[0.5625rem] sm:static absolute sm:text-2xl sm:-mt-8 sm:leading-5.5 leading-[0.6875rem] font-medium text-beige-dark">
                يَا رَبُّ، أَحْبَبْتُ مَحَلَّ بَيْتِكَ وَمَوْضِعَ مَسْكَنِ مَجْدِكَ
                <span class="text-[0.375rem] sm:text-base font-normal">
                    (سفر المزامير 26: 8)
                </span>
            </p>

            <ul class="grid grid-cols-3 sm:gap-4 gap-6 items-center justify-center">
                <li v-for="(button, index) in buttons" :key="button.title"
                    class=" w-full cursor-pointer shrink-0 rounded-b-3xl rounded-t-[4rem] bg-beige-light pb-4">
                    <!-- Navigation Link -->
                    <a v-if="button.link" :href="button.link" target="_blank" rel="noopener noreferrer"
                        class="flex flex-col items-center gap-2">
                        <div
                            class="grid aspect-square w-full place-items-center overflow-hidden rounded-full border border-beige bg-[linear-gradient(to_bottom,#B8833B,#DFB378)]">
                            <NuxtImg :src="button.icon" :class="[button.classes, 'max-w-full', 'max-h-full']"
                                :alt="button.title" />
                        </div>

                        <span class="text-center text-[1.25rem] sm:text-2xl font-medium">
                            {{ button.title }}
                        </span>
                    </a>

                    <!-- Tab Button -->
                    <button v-else type="button" class="flex cursor-pointer w-full flex-col items-center gap-2"
                        :aria-pressed="activeBtnIndex === index" @click="activeBtnIndex = index">
                        <div :class="[
                            'grid aspect-square w-full place-items-center overflow-hidden rounded-full border border-beige transition-all',
                            activeBtnIndex === index
                                ? 'scale-110 bg-white'
                                : 'bg-[linear-gradient(to_bottom,#B8833B,#DFB378)]'
                        ]">
                            <NuxtImg :src="activeBtnIndex === index
                                ? button.activeIcon
                                : button.icon
                                " :class="[button.classes, 'max-w-full', 'max-h-full']" :alt="button.title" />
                        </div>

                        <span class="text-center text-[1.25rem] sm:text-2xl font-medium">
                            {{ button.title }}
                        </span>
                    </button>
                </li>
            </ul>
        </div>

        <div class="flex-1 sm:order-3 order-2">
            <MassSchedule v-if="activeBtnIndex === 0" />
            <MeetingSchedules v-else-if="activeBtnIndex === 1" />
        </div>
    </div>
</template>

<script setup>
import churchIcon from '/buttons/church-icon.png'
import churchIconActive from '/buttons/church-icon-active.png'
import loggedIcon from '/buttons/logged-icon.png'
import meetingIcon from '/buttons/meeting-icon.png'
import meetingIconActive from '/buttons/meeting-icon-active.png'

const activeBtnIndex = ref(0)
const imageIsOpen = ref(false);

const buttons = [
    {
        title: 'مواعيد القداسات',
        icon: churchIcon,
        activeIcon: churchIconActive,
        classes: 'w-[3.25rem] h-[3.6875rem]',
    },
    {
        title: 'مواعيد الاجتماعات',
        icon: meetingIcon,
        activeIcon: meetingIconActive,
        classes: 'w-[4.125rem] h-[2.625rem]',
    },
    {
        title: 'تسجيل البيانات',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf-O242SGKoNS38Wy3KtXOUqHT9VesSICBY_p9v9JtFQSqxWw/viewform?usp=dialog',
        icon: loggedIcon,
        activeIcon: loggedIcon,
        classes: 'w-[3.8125rem] h-[4.375rem]',
    },
]
</script>
