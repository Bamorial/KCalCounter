<script setup>
import { onMounted } from 'vue';

import {supabase} from '../supabaseClient'
import { ref } from 'vue';
import FoodCard from './FoodCard.vue'
import { useRoute, useRouter } from 'vue-router';
let route=useRoute()
let router=useRouter()
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


</script>

<template>
<FoodCard @click="Select(food.id)" v-for="food in foodList" :name="food.name" :kcal="food.kcal"></FoodCard>
</template>

<style scoped>

</style>
