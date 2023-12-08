<template>
    <div>
        <div class="container">
            <div class="imgbox">
                <img src="@/assets/myphoto1.jpg" style="height: 500px;"/>
            </div>
            <div class="english-intro">
                <h2>hello! I am Sumin Lee </h2>
                <h3>Studying for being developer :-) </h3>
            </div>
        </div>
        <div class="container2">

        </div>
    </div>
</template>

<script setup>




</script>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.imgbox img{
    max-width: 100%;
    height: auto;
}
.english-intro{
    margin-left: 30px;
}




</style>