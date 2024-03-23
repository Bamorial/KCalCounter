<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '../supabaseClient';
import FoodCard from './FoodCard.vue';
import { ref } from 'vue';

let router=useRoute()
let currentId
let id=router.params.id
let addUrl=router.path+'/addNewFood'
let foods=ref([])
let total=ref(0)
let ids=[]
let isSelected=ref([])
async function  Delete(){
  let res = await supabase.from('food_item').delete().eq("id",currentId)
  let pos=ids.indexOf(currentId)
 foods.value=[]
 total.value=0
 isSelected.value.fill(0)
 GetFood()


  
}
function Select(index){
    isSelected.value.fill(0)
    isSelected.value[index]=1
currentId=ids[index]
console.log(currentId)
console.log(isSelected.value)
}
async function GetFood(){
    let food= await supabase.from('food_item').select().eq('scan_id',id)
    console.log(food.data)
    let foodData=food.data
    
    for(let f of foodData){
        let currentFood=await supabase.from('food').select().eq('id', f.food_id)
        let foodData=currentFood.data
        ids.push(f.id)
        foods.value.push(foodData[0])
        console.log(currentFood)
        total.value=total.value+foodData[0].kcal
        isSelected.value.push(0)
    }
    let res= await supabase.from('scan').update({kcaltotal:total.value}).eq('id',id)
    console.log(foods.value)
    console.log(ids)
    console.log(isSelected.value)
}
onMounted(()=>{

    GetFood()
 
})
</script>

<template>
 <div class="flex justify-center mt-4 gap-4 sticky top-2">

     <div class="font-mono border-2 bg-[rgb(66,66,82)] border-white foodcard p-3 text-center">Total: {{ total }}</div>
<RouterLink :to="addUrl" class="w-[20%] border-2 bg-[rgb(66,66,82)]  border-white foodcard p-3 text-center  font-mono ">
    Add
</RouterLink>
<div @click="Delete()" class="w-[34%] border-2 bg-[rgb(66,66,82)] border-white foodcard p-3 text-center text-red-500  font-mono"> Delete</div>

</div>
  <div class=" flex flex-col gap-6 items-center justify-center mt-10 mb-[30%]">

    <FoodCard :class="{selected: isSelected[index]}" @click="Select(index)" v-for="foodItem, index in foods" :name="foodItem.name" :kcal="foodItem.kcal"></FoodCard>

</div>
</template>

<style scoped>

</style>
