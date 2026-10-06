<template>
    <div class="h-22.25  rounded-[3rem] border border-beige flex items-center justify-between gap-4 pe-4">
        <p class="text-[2.1875rem] font-bold bg-beige text-white h-full w-max px-6 rounded-[3rem]  grid place-content-center">تواصــل معنـــا</p>
        <ul class="flex items-center justify-between h-full gap-3">
            <li v-for="(socialMedia, index) in socialMediaLinks" :key="index" class="flex items-center">
                <a :href="socialMedia.link" target="_blank" rel="noopener noreferrer">
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

const socialMediaLinks = [
    {
        title: 'Facebook',
        icon: facebook,
        link: 'https://www.facebook.com/share/1FjbQwKvYa/?mibextid=wwXIfr',
    },
    {
        title: 'WhatsApp',
        icon: whatsapp,
        link: 'https://wa.me/01003905472',
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
        link: 'mailto:archangelmichaelchurch@gmail.com',
    }]
</script>

<style scoped></style>