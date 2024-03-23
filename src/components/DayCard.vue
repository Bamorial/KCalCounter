<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';



const props=defineProps({
date: Date,
kcalTotal: Number,
id: Number
})

</script>

<template>


        <div class="w-[80%] h-[10%] border-white border-2 foodcard ">
            <div class="flex justify-between items-center">
                
                <div>
                    
                    <div class=" font-mono text-xl pl-2">{{ props.date }}</div>
                    <div class="font-mono text-sm pl-4">{{ props.kcalTotal }} kCal</div>
                </div>
                
            </div>
        </div>  

</template>

<style scoped>

</style>
