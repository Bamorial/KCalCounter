<script setup>
import { ref } from 'vue';
import {supabase} from '../supabaseClient'


let foodName= ref('')
let foodkCal=ref(0)

async function AddFood(){
    if(foodName.value!=''){

        const res= await supabase.from('food').insert({name:foodName.value, kcal:foodkCal.value})
        console.log(res)
    }
}
</script>

<template>
    <div class="flex flex-col items-center mt-10 ">
    <div class="flex flex-col w-[80%] items-center  gap-3">

        <input class="font-mono w-[59%]" v-model="foodName" type="text" placeholder="name">
        <input class="font-mono w-[59%]" v-model="foodkCal" type="number" placeholder="kcal">
        <RouterLink class=" bg-green-500 border-white border-2 text-center foodcard p-2 w-[59%]" to="/food" @click="AddFood()" > Add</RouterLink>
    </div>
    </div>

</template>

<style scoped>

</style>
