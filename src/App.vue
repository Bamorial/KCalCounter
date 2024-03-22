<script setup>
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import {supabase} from './supabaseClient'
import { ref } from 'vue';
import FoodCard from './components/FoodCard.vue'
import FoodView from './components/FoodView.vue'
import { useRoute } from 'vue-router';





</script>

<template >
<RouterView></RouterView>
</template>


