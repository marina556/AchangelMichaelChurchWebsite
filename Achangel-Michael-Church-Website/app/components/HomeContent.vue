<template>
    <div class="flex gap-4 h-128">
        <div class="fixed inset-0 z-20 grid place-content-center bg-black/90" @click.self="imageIsOpen = false" v-if="imageIsOpen">
            <span class="text-2xl text-white cursor-pointer absolute top-8 right-8 transition-all hover:border border-white w-14 h-14 rounded-full grid place-content-center font-arial" @click="imageIsOpen = false">X</span>
            <NuxtImg src="/events/Temp1.png" alt="Event Image" class="w-[80vw] max-h-[70vh] object-contain rounded-4xl" />
        </div>
        <div class="flex-1 mt-4 flex flex-col justify-between gap-4">
            <div class="flex-1 rounded-4xl">
                <div class=" h-full max-h-93.75 relative  rounded-4xl overflow-hidden group">
                    <div
                    @click="imageIsOpen = true"
                        class="overlay  cursor-zoom-in absolute grid place-content-center inset-0 bg-black/70 group-hover:opacity-100 opacity-0 transition-all">
                        <NuxtImg src="/zoom-icon.svg" class="w-20" />
                    </div>
                    <NuxtImg src="/events/Temp1.png" alt="Event Image"
                        class="w-full h-full max-h-93.75 object-cover object-[40%] mb-4" />
                </div>
            </div>
            <SocialMedia />
        </div>

        <div class="flex flex-col  justify-between w-100 shrink-0">
            <NuxtImg src="/logos/logo-2.svg" alt="Archangel Michael Church" class="z-10 -mt-32 h-64.75 w-100.5" />

            <p class="text-center text-2xl -mt-8 leading-5.5 font-medium text-beige-dark">
                يَا رَبُّ، أَحْبَبْتُ مَحَلَّ بَيْتِكَ وَمَوْضِعَ مَسْكَنِ مَجْدِكَ
                <span class="text-base font-normal">
                    (سفر المزامير 26: 8)
                </span>
            </p>

            <ul class="flex gap-4 items-center justify-center">
                <li v-for="(button, index) in buttons" :key="button.title"
                    class="w-27.25 cursor-pointer shrink-0 rounded-b-3xl rounded-t-[4rem] bg-beige-light pb-4">
                    <!-- Navigation Link -->
                    <a v-if="button.link" :href="button.link" target="_blank" rel="noopener noreferrer"
                        class="flex flex-col items-center gap-2">
                        <div
                            class="grid h-27.25 w-27.25 place-items-center overflow-hidden rounded-full border border-beige bg-[linear-gradient(to_bottom,#B8833B,#DFB378)]">
                            <NuxtImg :src="button.icon" :class="[button.classes, 'max-w-full', 'max-h-full']"
                                :alt="button.title" />
                        </div>

                        <span class="text-center text-2xl font-medium">
                            {{ button.title }}
                        </span>
                    </a>

                    <!-- Tab Button -->
                    <button v-else type="button" class="flex cursor-pointer w-full flex-col items-center gap-2"
                        :aria-pressed="activeBtnIndex === index" @click="activeBtnIndex = index">
                        <div :class="[
                            'grid h-27.25 w-27.25 place-items-center overflow-hidden rounded-full border border-beige transition-all',
                            activeBtnIndex === index
                                ? 'scale-110 bg-white'
                                : 'bg-[linear-gradient(to_bottom,#B8833B,#DFB378)]'
                        ]">
                            <NuxtImg :src="activeBtnIndex === index
                                ? button.activeIcon
                                : button.icon
                                " :class="[button.classes, 'max-w-full', 'max-h-full']" :alt="button.title" />
                        </div>

                        <span class="text-center text-2xl font-medium">
                            {{ button.title }}
                        </span>
                    </button>
                </li>
            </ul>
        </div>

        <div class="flex-1">
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
