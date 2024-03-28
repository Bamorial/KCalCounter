<script setup>
import { onMounted } from 'vue';

import {supabase} from '../supabaseClient'
import { ref } from 'vue';
import FoodCard from './FoodCard.vue'
import { useRoute, useRouter } from 'vue-router';

let route=useRoute()
let router=useRouter()
let searchInput
let pageId=route.params.id
let foodList=ref([])
let currentId=-1
function SelectItem(item){
currentId=item.id
console.log(currentId)
}


async function GetFood(){
const data= await supabase.from('food').select()
foodList.value=data.data
console.log(foodList.value)
}
onMounted(()=>{
  
  GetFood()
})

async function  Select(id){
    console.log(pageId)
    console.log(id)
let res= await supabase.from('food_item').insert([{scan_id:pageId, food_id:id}])
console.log(res)
router.go(-1)
}
async function  Search(){
  console.log(searchInput)
let res= await supabase.from('food').select().ilike('name','%'+searchInput+'%')
foodList.value=res.data
console.log(res)
}


</script>

<template>
  <div class="flex justify-center mt-4 gap-4 sticky top-2">

<input type="text" @change="Search()" v-model="searchInput" placeholder="search" class="w-[80%] border-2 bg-slate-200 text-slate-500  border-white foodcard p-3 text-center  font-mono ">
    


</div>
    <div class=" flex flex-col gap-6 items-center justify-center mt-10 mb-[30%]">
<FoodCard @click="Select(food.id)" v-for="food in foodList" :name="food.name" :kcal="food.kcal"></FoodCard>
</div>
</template>

<style scoped>

</style>
