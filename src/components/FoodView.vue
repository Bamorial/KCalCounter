<script setup>
import { onMounted } from 'vue';

import {supabase} from '../supabaseClient'
import { ref } from 'vue';
import FoodCard from './FoodCard.vue'

let foodList=ref([])
let currentId=-1
let isSelected=ref([])

function SelectItem(item,index){
  isSelected.value.fill(0)
  isSelected.value[index]=1
  console.log(isSelected.value)
currentId=item.id
console.log(currentId)
}
async function  Delete(){
  let res = await supabase.from('food').delete().eq("id",currentId).then(()=>{
foodList.value=foodList.value.filter((food)=>{
  return food.id!=currentId
})

  })
  isSelected.value.fill(0)
  console.log(res)




  
}

async function GetFood(){
const data= await supabase.from('food').select()
foodList.value=data.data
console.log(foodList.value)
for(let a in foodList.value){
  isSelected.value.push(0)
}
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
        <div @click="Delete()" class="w-[54%] border-2 bg-[rgb(66,66,82)] border-white foodcard p-3 text-center text-red-500  font-mono"> Delete</div>
    </div>
  <div class=" flex flex-col gap-6 items-center justify-center mt-10 mb-[30%]">

    <FoodCard :class="{selected: isSelected[index]}" @click="SelectItem(food, index)" v-for="food, index in foodList" :name="food.name" :kcal="food.kcal"></FoodCard>

  </div>
</template>