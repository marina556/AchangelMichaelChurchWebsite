<template>
    <div class="sm:h-22.25 h-[2.8125rem] rounded-[3rem] border border-beige flex items-center justify-between sm:gap-4 gap-2 pe-2 sm:pe-4">
        <p
            class="text-sm sm:text-[2rem] min-w-max font-bold bg-beige text-white h-full w-max px-3 sm:px-6 rounded-[3rem]  grid place-content-center">
            تواصــل معنـــا</p>
        <ul class="flex items-center justify-between h-full sm:gap-3 gap-2 flex-row-reverse">
            <li v-for="(socialMedia, index) in socialMediaLinks" :key="index" class="flex items-center">
                <a :href="socialMedia.link" target="_blank" rel="noopener noreferrer" :title="socialMedia.title">
                    <NuxtImg :src="socialMedia.icon" :alt="socialMedia.title" class="w-16 h-16" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import facebook from '/socia-media/facbook.svg';
import whatsapp from '/socia-media/whatsapp.svg';
import youtube from '/socia-media/youtube.svg';
import location from '/socia-media/location.svg';
import mail from '/socia-media/mail.svg';
import bbsata from '/socia-media/bbsata.svg';

const socialMediaLinks = [

    {
        title: 'Facebook',
        icon: facebook,
        link: 'https://www.facebook.com/share/1FjbQwKvYa/?mibextid=wwXIfr',
    },
    {
        title: 'WhatsApp',
        icon: whatsapp,
        link: 'https://wa.me/201003905472',
    },
    {
        title: 'YouTube',
        icon: youtube,
        link: 'https://www.youtube.com/@ArchangelMichaelChurch-i7o',
    },
    {
        title: 'Location',
        icon: location,
        link: 'https://maps.app.goo.gl/noekRJWaFRxLVHGSA?g_st=iw',
    },
    {
        title: 'Email',
        icon: mail,
        link: 'mailto:archangelmichael6october@gmail.com',
    },
     {
        title: 'ببساطة',
        icon: bbsata,
        link: 'https://www.facebook.com/profile.php?id=61595120033055',
    },]
</script>

<style scoped></style>