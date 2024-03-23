<script setup>
import { ref } from 'vue';
import { supabase } from '../supabaseClient';
let dt=new Date();

let date=ref(dt.getFullYear()+'-'+(dt.getMonth()+(+1))+'-'+dt.getDate())
async function AddDay(){
console.log(date.value)
let res =await supabase.from('scan').insert([{date:date.value, kcaltotal:0}])
console.log(res);
}

</script>

<template>
    <div class="flex flex-col items-center mt-10 ">
    <div class="flex flex-col w-[80%] items-center  gap-3">

        <input class="font-mono w-[59%]" type="date" v-model="date" placeholder="date">
        <RouterLink class=" bg-green-500 border-white border-2 text-center foodcard p-2 w-[59%]" to="/day" @click="AddDay()" > Add</RouterLink>
    </div>
    </div>
</template>

<style scoped>

</style>
