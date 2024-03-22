<script setup>
import { onMounted } from 'vue';

import {supabase} from '../supabaseClient'
import { ref } from 'vue';
import FoodCard from './FoodCard.vue'

let foodList=ref([])


async function GetFood(){
const data= await supabase.from('food').select()
foodList.value=data.data
console.log(foodList.value)
}
onMounted(()=>{
  GetFood()
})

</script>

<template >
    <div class="flex justify-center mt-4 gap-4 sticky top-2">

        <RouterLink to="/addFood" class="w-[20%] border-2 bg-[rgb(66,66,82)]  border-white foodcard p-3 text-center  font-mono ">
            Add
        </RouterLink>
        <div class="w-[54%] border-2 bg-[rgb(66,66,82)] border-white foodcard p-3 text-center text-red-500  font-mono"> Delete</div>
    </div>
  <div class=" h-screen flex flex-col gap-6 items-center justify-center  overflow-scroll mt-10">

    <FoodCard v-for="food in foodList" :name="food.name" :kcal="food.kcal"></FoodCard>

  </div>
</template>