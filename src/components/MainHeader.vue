<template>
    <div>
        <img class="block mx-auto" src="@/assets/img/230725_pointgadget_pc_1440x50.png" />
        <div class="bg-gray-100 py-4 border-b">
            <div class="container mx-auto">
                <div class="flex items-center justify-between">
                    <div>
                        <a href="#">
                            <router-link to="/" class="text-xl font-bold text-blue-900 ml-4">Rakuten Viber</router-link>
                        </a>
                    </div>
                    <div class="lg:flex items-center justify-between space-x-14 hidden">
                        <router-link to="downloads">ダウンロード</router-link>
                        <router-link to="news">ニュース</router-link>
                        <router-link to="viber_out">Viber Out</router-link>
                        <router-link to="downloads">よくあるご質問</router-link>
                        <span>サポート</span>
                    </div>
                    <div class="lg:flex items-center justify-between space-x-4 hidden">
                        <font-awesome-icon icon="fa-brands fa-x-twitter" color="black" size="xl"/>
                        <font-awesome-icon icon="fa-brands fa-facebook" color="blue" size="xl"/>
                        <a href="#" class="text-blue-700">楽天市場へ</a>
                    </div>
                    <div class="mx-4 lg:hidden block">
                        <button @click="toggleFloatingBox">
                            <font-awesome-icon icon="fa-solid fa-bars" color="black" size="xl"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <transition name="fade" mode="out-in">
            <div v-if="showFloatingBox" class="fixed top-0 left-0 w-full h-full bg-gray-600 opacity-95 transition-all duration-500 flex justify-center items-center">
                <div class="bg-violet-800 text-white p-4 rounded-lg block shadow-2xl w-5/6 h-5/6">
                    <div class="grid gap-4 ">
                        <div class="flex flex-row justify-between bg-violet-900 p-3">
                            <router-link to="/" @click="closeFloatingBox" class="block">トップ</router-link>
                            <button @click="closeFloatingBox"><font-awesome-icon icon="fa-solid fa-xmark" color="white" size="xl"/></button>
                        </div>
                        <router-link @click="closeFloatingBox" to="downloads" class="p-3">
                            ダウンロード
                        </router-link>
                        <router-link @click="closeFloatingBox" to="news" class="p-3">
                            ニュース
                        </router-link>
                        <router-link @click="closeFloatingBox" to="viber_out" class="p-3">
                            Viber Out
                        </router-link>
                        <router-link @click="closeFloatingBox" to="downloads" class="p-3">
                            よくあるご質問
                        </router-link>
                        <div @click="closeFloatingBox" class="p-3">
                            サポート
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name:'MainHeader',
    data() {
        return {
        showFloatingBox: false,
        };
    },
    methods: {
        toggleFloatingBox() {
        this.showFloatingBox = !this.showFloatingBox;
        },
        closeFloatingBox() {
        this.showFloatingBox = false;
        },
    },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>


