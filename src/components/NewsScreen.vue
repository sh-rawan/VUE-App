<template>
    <div class="container mx-auto my-10 min-h-screen space-y-4">
        <div class="lg:font-bold font-bold lg:text-3xl md:text-2xl text-base">ニュース</div>
        <div>Viberのお知らせを掲載</div>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div v-for="news in currentNews" :key="news.name" class="space-y-1 m-4">
                <div class="news-image">
                    <a :href="news.link">
                        <img :src="news.image" alt="Viberのおトクなキャンペーン" width="300" height="150"/>
                    </a>
                </div>
                <div class="text-sm text-gray-400">{{news.dateText}}</div>
                <p class="text-blue-700 underline hover:no-underline ">
                    <a :href="news.link">{{news.newsTitle}}</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'NewsScreen',
    data() {
        return {
            currentNews: [
                {
                    name:"campaign", // name will be treated as key for this element
                    link:"/news/campaign/",  // link pages still need to be created
                    image:require("@/assets/img/600x300_news_list_v3.jpg"),
                    dateText:"2023年7月11日",
                    newsTitle:"Viberのおトクなキャンペーン情報をまとめました！"
                },
                {
                    name:"viber_kuji", // name will be treated as key for this element
                    link:"/news/viber_kuji/",  // link pages still need to be created
                    image:require("@/assets/img/600x300_news_list.png"),
                    dateText:"2023年6月20日",
                    newsTitle:"最大1,000ポイント！毎日引けるViberくじ開催中！"
                },
                {
                    name:"ai_chat", // name will be treated as key for this element
                    link:"/news/ai_chat/",  // link pages still need to be created
                    image:require("@/assets/img/600x300_news_list (1).png"),
                    dateText:"2023年5月19日",
                    newsTitle:"いま話題のChatGPTが無料で使える！「Viber AI チャット」登場！"
                },
                {
                    name:"friend_referral", // name will be treated as key for this element
                    link:"/news/friend_referral_2023-05_a/",  // link pages still need to be created
                    image:require("@/assets/img/600x300_news_list (2).png"),
                    dateText:"2023年4月26日",
                    newsTitle:"Viberの友達紹介キャンペーンを開始しました"
                },
            ]
        }
    },
}
</script>