<script setup>
import { onMounted } from 'vue';
import DayCard from './DayCard.vue';
import { ref } from 'vue';
import { supabase } from '../supabaseClient';
let currentDate=ref('')
let kcal=ref(0)
let dayList=ref([])
async function GetDates(){
    let res= await supabase.from('scan').select()
    dayList.value=res.data
    console.log(res)
}
onMounted(()=>{

GetDates()
})

</script>

<template>
     <div class=" flex flex-col gap-6 items-center justify-center mt-10 mb-[20%]">
<DayCard v-for="date in dayList" :date="date.date" :kcal-total="date.kcaltotal"></DayCard>
     </div>
</template>

<style scoped>

</style>
