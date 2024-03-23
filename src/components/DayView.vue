<script setup>
import { onMounted } from 'vue';
import DayCard from './DayCard.vue';
import { ref } from 'vue';
import { supabase } from '../supabaseClient';
import { useRouter } from 'vue-router';

let currentDate=ref('')
let kcal=ref(0)
let dayList=ref([])
let router=useRouter()

async function GetDates(){
    let res= await supabase.from('scan').select()
    dayList.value=res.data
    console.log(res)
    dayList.value.sort((a,b)=>{
     return new Date(b.date) - new Date(a.date);
    })
}
function Navigate(id){
router.push('/day/'+id)
}
onMounted(()=>{

GetDates()
})

</script>

<template>
     <div class="flex justify-center mt-4 gap-4 sticky top-2">

<RouterLink to="/addDay" class="w-[20%] border-2 bg-[rgb(66,66,82)]  border-white foodcard p-3 text-center  font-mono ">
    Add
</RouterLink>

</div>
     <div class=" flex flex-col gap-6 items-center justify-center mt-10 mb-[30%]">
<DayCard @click="Navigate(date.id)" v-for="date in dayList" :id="date.id" :date="date.date" :kcal-total="date.kcaltotal"></DayCard>
     </div>
</template>

<style scoped>

</style>
