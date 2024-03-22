<script setup>


const props=defineProps({
    name:String,
    kcal:Number
})

</script>

<template>
<div class="w-[80%] h-[10%] border-white border-2 foodcard ">
    <div class="flex justify-between items-center">

        <div>
            
            <div class=" font-mono text-xl pl-2">{{ props.name }}</div>
            <div class="font-mono text-sm pl-4">{{ props.kcal }} kCal</div>
        </div>

    </div>
</div>  
</template>


