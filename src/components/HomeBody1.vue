<template>
    <div class="background-image-container">
        <img class="sm:hidden block" src="@/assets/img/section-top-small.png"/> 
        <div class="container mx-auto">
            <div class="sm:grid sm:grid-cols-3 py-auto h-screen lg:items-center">
                <div class="space-y-5 sm:px-0 px-5">
                    <p class="sm:block hidden lg:text-6xl md:text-4xl text-2xl font-bold">VIBERで毎日をもっと楽しく。</p>
                    <p class="lg:text-lg sm:text-left text-center font-bold lg:w-3/5  text-blue-900">世界で14億人以上に選ばれる無料通話＆メッセージアプリ、Viber（バイバー）</p>
                    <a href="#" class="block bg-green-500 p-3 rounded-lg sm:w-max text-center text-white hover:bg-green-400">ダウンロード <font-awesome-icon icon="fa-solid fa-chevron-right"/></a>
                    <div class="px-3 pb-3 pt-1 bg-gray-200">
                        <p class="m-2 font-bold lg:text-base text-xs mx-auto block text-center">\いまならダウンロードキャンペーン実践中/</p>
                        <img src="@/assets/img/viber_campaign_bnr_1200x200_v3.png"/>
                    </div>
                    <a href="#" class="md:font-bold lg:text-base text-xs block text-red-500 underline sm:text-left text-center">【重要】楽天を装った不審なメールにご注意ください</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeBody1"
}
</script>  

<style>
.background-image-container {
  background-image: url('@/assets/img/section-top.png');
  background-size: cover;
  background-position: center;
  height: 700px;
}

@media (max-width: 640px) {
  .background-image-container {
    background-image: none;
  }
}
</style>