<template>
    <div class="min-h-screen space-y-4">
        <!-- section 1 -->
        <h1 class="text-center text-3xl font-bold text-blue-900 my-6">楽天グループの無料通話＆メッセージアプリ Viber（バイバー）</h1>
        <!-- section 2 -->
        <div class="bg-cyan-500 py-10 hallContainerOut text-white">
            <div class="grid grid-cols-3 hallContainerIn">
                <div class="col-span-2 space-y-10">
                    <h1 class="text-6xl font-bold w-4/5">世界中どこにいても自慢の格安通話料金</h1>
                    <div class="grid lg:grid-cols-2 lg:space-x-10 grid-rows-2">
                        <img class="lg:w-2/3 m-4 w-2/4 mx-auto block" src="@/assets/img/GooglePlay.svg"/>
                        <img class="lg:w-2/3 m-4 w-2/4 mx-auto block" src="@/assets/img/AppleStore.svg"/>
                    </div>
                </div>
                <div></div>
                <!-- <img src="@/assets/img/img-device.png" class=""/> -->
            </div>
        </div>
        <!-- section 3 -->
        <div class="hallContainerIn">
            <p class="text-sm">※ iOS、Android 以外は、「Viber ダウンロードページ」からダウンロードできます。</p>
            <div class="grid grid-cols-3 my-5">
                <img src="@/assets/img/img-call.png" class="p-10"/>
                <div class="col-span-2">
                    <div class="grid grid-cols-2">
                        <h1 class="text-4xl font-bold text-blue-900">いつでも、どこでも、携帯にも固定電話にも。</h1>
                        <img src="@/assets/img/img-device.png" class="-mt-64 mx-auto"/>
                    </div>
                    <p class="text-xl my-10">Viber Out（バイバーアウト） は、世界中の電話番号に格安の料金で通話できるVoIPサービスです。Viberユーザー以外の固定電話や携帯電話の番号にも電話をかけることができます。</p>
                    <p class="text-sm my-6">※ 「Viber Out」は、Viber ユーザー以外の番号にも Viber アプリから電話をかけることができる通話サービスです。</p>
                </div>
            </div>
        </div>

        <div class="p-7 hallContainerOut bg-gray-200">
            <div class="hallContainerIn grid grid-cols-3">
                <div class="col-span-2 space-y-4">
                    <p class="text-xl font-semibold text-blue-900">バイバー アウト</p>
                    <p class="text-3xl font-bold text-blue-900 w-2/3">Viberバイバー Outアウトなら、無料または低価格で通話できます。</p>
                    <p class="text-xl">例えば、$4.99 （701円※）で、最大185分 日本の固定電話への通話が可能です。</p>
                    <p class="text-sm">※ 2023年7月11日時点での為替レートによる換算です。</p>
                    <a href="https://account.viber.com/ja/call-japan" class="text-sm underline hover:no-underline text-blue-500">※ Viber Out通話料は為替レートにより変動します。最新の通話料はWebページをご確認ください。</a>
                </div>
                <img class="-mt-16 w-3/5 mx-auto" src="@/assets/img/img-device-02.png"/>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ViberOutScreen',
}
</script>

