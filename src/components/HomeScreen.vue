<template>
    <div>
        <HomeBody1/>
        <HomeBody2/>
    </div>
</template>

<script>
import HomeBody1 from './HomeBody1.vue';
import HomeBody2 from './HomeBody2.vue';

export default {
    name: 'HomeScreen',
    components: { HomeBody1, HomeBody2 }
}
</script>

