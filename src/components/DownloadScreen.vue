<template>
    <div class="container mx-auto my-10 min-h-screen">
        <h1 class="text-3xl font-bold m-4">ダウンロードページ</h1>
        <p class=" m-4">お好きなデバイスに、今すぐアプリをダウンロード</p>
        <div class="lg:text-center m-4 space-y-7 my-8">
            <h3>スマートフォン用</h3>
            <div class="grid lg:grid-cols-2 lg:space-x-10 grid-rows-2">
                <img class="lg:w-1/3 w-1/4 lg:ml-auto block" src="@/assets/img/GooglePlay.png"/>
                <img class="lg:w-1/3 w-1/4 lg:mr-auto block" src="@/assets/img/AppleStore.png"/>
            </div>
        </div>
        <div class="text-center m-4 space-y-7 my-8 lg:block hidden">
            <h3>パソコン用</h3>
            <div class="grid grid-cols-5 space-x-10">
                <div></div>
                <div class="bg-green-600 rounded-xl flex items-center justify-center mx-auto h-14 text-white"><font-awesome-icon icon="fa-solid fa-desktop" size="xl"/>&nbsp;&nbsp;Mac&nbsp;&nbsp; <font-awesome-icon icon="fa-solid fa-chevron-right"/></div>
                <div class="bg-green-600 rounded-xl flex items-center justify-center mx-auto h-14 text-white"><font-awesome-icon icon="fa-solid fa-desktop" size="xl"/>&nbsp;&nbsp;Windows&nbsp;&nbsp; <font-awesome-icon icon="fa-solid fa-chevron-right"/></div>
                <div class="bg-green-600 rounded-xl flex items-center justify-center mx-auto h-14 text-white"><font-awesome-icon icon="fa-solid fa-desktop" size="xl"/>&nbsp;&nbsp;Linux&nbsp;&nbsp; <font-awesome-icon icon="fa-solid fa-chevron-right"/></div>
                <div></div>
            </div>
        </div>
        <p>※利用登録はスマートフォンでのみ可能です。</p>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'DownloadScreen',
    components: { FontAwesomeIcon }
}
</script>