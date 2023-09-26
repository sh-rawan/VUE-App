import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import DownloadScreen from '@/components/DownloadScreen'
import HomeScreen from '@/components/HomeScreen'
import NewsScreen from '@/components/NewsScreen'
import ViberOutScreen from '@/components/ViberOutScreen'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop, faBars, faChevronRight, faUserSecret, faCartShopping, faCar, faXmark, faBicycle, faEye, faHand, faHashtag, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDesktop, faChevronRight, faBars, faUserSecret, faCartShopping, faFacebook, faXTwitter, faCar, faXmark, faBicycle, faEye, faHand, faHashtag, faCircleXmark)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'HomeScreen',
            component: HomeScreen
        },
        {
            path: '/downloads',
            name: 'DownloadScreen',
            component: DownloadScreen
        },        
        {
            path: '/news',
            name: 'NewsScreen',
            component: NewsScreen
        },
        {
            path: '/viber_out',
            name: 'ViberOut',
            component: ViberOutScreen
        },
    ],
});

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
