<template>
    <div>
        <h2>home</h2>
        <div class="imgbox">
            <img src="@/assets/myphoto1.jpg" style="height: 200px;"/>
        </div>
        <p class="txt-title"></p>
    </div>
</template>

<script setup>

const $txt = document.querySelector(".txt-title");
const content= "Hello! Pre-developer, Lee Sumin :)";
let contentIndex = 0;

let typing = function(){
    $txt.innerHTML += content[contentIndex];
    contentIndex++;
    if (contentIndex > content.length){
        $txt.textContent = "";
        contentIndex=0;
    }
}
setInterval(typing, 200);




</script>

<style scoped>
.imgbox{
    width: 150px;
    height: 150px;
    border-radius: 70%;
    overflow: hidden;
}
</style>