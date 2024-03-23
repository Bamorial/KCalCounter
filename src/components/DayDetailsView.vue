<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '../supabaseClient';
import FoodCard from './FoodCard.vue';
import { ref } from 'vue';

let router=useRoute()
let id=router.params.id
let addUrl=router.path+'/addNewFood'
let foods=ref([])
let total=ref(0)
async function GetFood(){
    let food= await supabase.from('food_item').select().eq('scan_id',id)
    console.log(food.data)
    let foodData=food.data
    
    for(let f of foodData){
        let currentFood=await supabase.from('food').select().eq('id', f.food_id)
        let foodData=currentFood.data
        foods.value.push(foodData[0])
        console.log(currentFood)
        total.value=total.value+foodData[0].kcal
    }
    let res= await supabase.from('scan').update({kcaltotal:total.value}).eq('id',id)
    console.log(foods.value)
}
onMounted(()=>{

    GetFood()
})
</script>

<template>
 <div class="flex justify-center mt-4 gap-4 sticky top-2">

<RouterLink :to="addUrl" class="w-[20%] border-2 bg-[rgb(66,66,82)]  border-white foodcard p-3 text-center  font-mono ">
    Add
</RouterLink>

</div>
<div class="font-mono">Total: {{ total }}</div>
  <div class=" flex flex-col gap-6 items-center justify-center mt-10 mb-[20%]">

    <FoodCard v-for="food in foods" :name="food.name" :kcal="food.kcal"></FoodCard>

</div>
</template>

<style scoped>

</style>
