<script setup>
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import {supabase} from './supabaseClient'
import { ref } from 'vue';
import FoodCard from './components/FoodCard.vue'
import FoodView from './components/FoodView.vue'
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';





</script>

<template >
    

        <RouterView></RouterView>
        <NavBar class="fixed bottom-0 "></NavBar>
    
</template>


