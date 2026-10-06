<template>
    <div class="space-y-4">
        <ScheduleSectionUi :title="section.title" v-for="(section, sectionIndex) in scheduleSections"
            :key="sectionIndex">
            <div class="grid dddd grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="day in section.days" :key="day.day" class="min-w-0">
                    <h3 :class="titleClasses">
                        {{ day.day }}
                    </h3>

                    <div class="flex flex-col gap-2">
                        <div v-for="item in day.items" :key="item.title" :class="[
                            subsectionClasses,
                            item.highlighted && 'bg-beige-light',
                        ]">
                            <h4 class="text-center mb-1 font-normal text-[0.875rem]">
                                {{ item.title }}
                            </h4>

                            <p class="text-center text-[0.875rem] font-light leading-4.75">
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
        title: 'التربيــة الكنسيــة',
        days: [
            {
                day: 'من KG الي 6 ابتدائي',
                items: [
                    {
                        title: 'يــوم الجمعة',
                        from: '9:30',
                        to: '11:00',
                        period: 'صبـــاحاً',
                    },

                ],
            },
            {
                day: 'أعدادي وثانوي',
                items: [
                    {
                        title: 'يوم الجمعه',
                        from: '11:00',
                        to: '1:00',
                        period: 'ظهـراً',
                        highlighted: true,
                    },

                ],
            },
            {
                day: 'اعــداد خــدام',
                items: [
                    {
                        title: 'يــوم الخميس',
                        from: '7:00',
                        to: '9:00',
                        period: 'مســـاءاً',
                    },
                ],
            },
        ],
    },
    {
        title: 'مواعـيد الأجتـماعات',
        days: [
            {
                day: 'أجتـماع الأمـهات',
                items: [
                    {
                        title: 'يوم الجمعة',
                        from: '9:30',
                        to: '11:00',
                        period: 'صبـاحاً',
                    },
                ],
            },
            {
                day: 'أجتماع الشباب',
                items: [
                    {
                        title: 'يوم الجمعة',
                        from: '6:30',
                        to: '9:00',
                        period: 'مســـاءاً',
                        highlighted: true,
                    },
                ],
            },
            {
                day: 'أجتماع الحرفيين',
                items: [
                    {
                        title: 'يوم الجمعة',
                        from: '6:30',
                        to: '9:00',
                        period: 'مســـاءاً',
                    },
                ],
            },
            {
                day: 'أجتماع الأسـرة',
                items: [
                    {
                        title: 'يوم الخميس',
                        from: '7:00',
                        to: '9:00',
                        period: 'مســـاءاً',
                        highlighted: true,
                    },
                ],
            },
            {
                day: 'مدرســة الشـمامسة',
                items: [
                    {
                        title: 'يوم الخميس',
                        from: '7:00',
                        to: '9:00',
                        period: 'مســـاءاً',
                    },
                ],
            },
        ],
    },
]

const titleClasses =
    'font-medium text-[1.5rem] leading-[2.375rem] mb-1 text-center'

const subsectionClasses =
    'border border-beige-light rounded p-2'
</script>


<style scoped></style>