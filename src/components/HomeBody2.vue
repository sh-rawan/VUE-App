<template>
    <div>
        <div class="grid md:grid-cols-3 grid-cols-4 p-2 mb-9">
            <img class="ml-auto px-5 my-auto" src="@/assets/img/section-free-talk-l.png"/>
            <div class="md:col-span-1 col-span-2">
                <img src="@/assets/img/txt-free-talk.png"/>
                <p class="md:text-xl text-xs md:m-7 m-2">Viberアプリユーザー同士の通話は0円※です。通常の音声通話のほか、ビデオ通話も楽しめます。</p>
                <p class="md:text-xl text-xs md:m-7 m-2">また、通話やメッセージが暗号化されており、プライバシーが守られ、安心・安全です。</p>
                <p class="md:text-xl text-xs md:m-7 m-2">※モバイル回線にて利用時は別途パケット通信料が発生します。</p>
            </div>
            <img class="mr-auto px-5 my-auto" src="@/assets/img/section-free-talk-r.png"/>
        </div>

        <div class="grid grid-cols-2 my-9 mx-3">
            <img class="my-auto" src="@/assets/img/section-message.png"/>
            <div class="my-auto">
                <img class="" src="@/assets/img/txt-message.png"/>
                <p class="md:text-xl text-xs md:m-7 m-2">手書きで文字や絵をラクガキしたり、さらに、テキスト、画像、動画に音声も!あなたの思いを、いろいろなかたちで伝えられます。</p>
            </div>
        </div>

        <!-- <div class="my-9 mb-14">
            <p class="bg-gray-200 px-8 py-1 md:text-base text-sm">楽天グループからのお知らせ</p>
            <div>
                <transition-group name="fade" tag="div">
                    <div v-for="i in [currentIndex]" :key="i">
                        <img class="img block mx-5 my-5" :src="currentImg" />
                    </div>
                </transition-group>
                <a class="prev" @click="prev" href="#">&#10094; Previous</a>
                <a class="next" @click="next" href="#">&#10095; Next</a>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name:'HomeBody2',
    data() {
    return {
      images: [
        require("@/assets/img/rakuten-check-02.png"),
        require("@/assets/img/pointmall.png"),
        require("@/assets/img/rakuten_referral.jpg"),
        require("@/assets/img/rakuten-minshu.jpg"),
        require("@/assets/img/rakuten-insight-02.png"),
        require("@/assets/img/rakuten-uranai.gif"),
        require("@/assets/img/rakuten-fashion-03.jpg"),
        require("@/assets/img/rakuten-energy-04.png"),
        require("@/assets/img/rakuten-beauty-02.jpg"),
        require("@/assets/img/rakuten-carservice-05.jpg"),
        require("@/assets/img/m_mall.png"),
        require("@/assets/img/rakuten-shaken-02.gif"),
        require("@/assets/img/rakuten-24.jpg"),
        require("@/assets/img/rakuten-minijob-01.png"),
        require("@/assets/img/your_money.png"),
        require("@/assets/img/rakuten-insurances-04.png"),
        require("@/assets/img/rakuten-insurance.jpg"),
        require("@/assets/img/rakuten-ichiba-boss.png"),
        require("@/assets/img/rakuten-mobile.png"),
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
}
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  opacity: 0;
}

.img {
  height:40px;
  width:70%;
}

@media (min-width: 640px) {
    .img {
    height:70px;
    width:30%;
    }
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>
