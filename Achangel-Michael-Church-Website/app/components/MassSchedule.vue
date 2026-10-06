<template>
    <div class="space-y-4">
        <ScheduleSectionUi :title="section.title" v-for="(section, sectionIndex) in scheduleSections"
            :key="sectionIndex">
            <div class="grid dddd grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="day in section.days" :key="day.day" class="grid grid-cols-3 items-center sm:block gap-4">
                    <h3 :class="titleClasses">
                        {{ day.day }}
                    </h3>

                    <div class="flex flex-col gap-2 flex-1 col-span-2">
                        <div v-for="item in day.items" :key="item.title" :class="[
                            subsectionClasses,
                            item.highlighted && 'sm:bg-beige-light',
                        ]">
                            <h4 class="text-center mb-2 font-normal text-base">
                                {{ item.title }}
                            </h4>

                            <p class="text-center text-base font-light leading-4.75">
                                من {{ item.from }}
                                <!-- <br /> -->
                                حــتي {{ item.to }}
                                <!-- <br /> -->
                                {{ item.period }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ScheduleSectionUi>
    </div>
</template>


<script setup>
const scheduleSections = [
    {
        title: 'مـواعيد القداسـات',
        days: [
            {
                day: 'يـــوم الجمــــعة',
                items: [
                    {
                        title: 'قداس الأطفال',
                        from: '7:30',
                        to: '9:30',
                        period: 'صبـــاحاً',
                    },
                    {
                        title: 'القداس الكبير',
                        from: '7:30',
                        to: '10:30',
                        period: 'صبـــاحاً',
                    },
                ],
            },
            {
                day: 'يـــوم السـبت',
                items: [
                    {
                        title: 'القــــداس',
                        from: '8:30',
                        to: '10:30',
                        period: 'صبـاحاً',
                        highlighted: true,
                    },
                    {
                        title: 'العشــية والتسبــحة',
                        from: '7:00',
                        to: '9:30',
                        period: 'مســـاءاً',
                        highlighted: true,

                    },
                ],
            },
            {
                day: 'يـــوم الأحـــد',
                items: [
                    {
                        title: 'القــــداس',
                        from: '5:30',
                        to: '7:30',
                        period: 'صبـاحاً',
                    },
                ],
            },
        ],
    },
    {
        title: '',
        days: [
            {
                day: 'يـــوم الثلاثـــاء',
                items: [
                    {
                        title: 'القــــداس',
                        from: '8:30',
                        to: '10:30',
                        period: 'صبـاحاً',
                    },
                ],
            },
            {
                day: 'يـــوم الأربعـــاء',
                items: [
                    {
                        title: 'القــــداس',
                        from: '8:30',
                        to: '10:30',
                        period: 'صبـاحاً',
                        highlighted: true,
                    },
                ],
            },
            {
                day: 'يـــوم الخميــس',
                items: [
                    {
                        title: 'العشيـــــة',
                        from: '7:00',
                        to: '7:30',
                        period: 'مســـاءاً',
                    },
                ],
            },
        ],
    },
]

const titleClasses =
    'font-medium text-[1.25rem] min-w-max sm:text-[1.5rem] leading-[2.375rem] sm:mb-4 text-center'

const subsectionClasses =
    'border border-beige-light rounded p-2'
</script>


<style scoped></style>