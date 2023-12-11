<template>
    <div>
        <h2>제가 10살부터 지금까지 여행한 나라는 총 22개국입니다.</h2>
        <div class="image-container">
            <img src="@/assets/myphoto/여행1.jpg" style="width: 400px;">
            <img src="@/assets/myphoto/여행2.jpg" style="width: 400px;">
            <img src="@/assets/myphoto/여행3.jpg" style="width: 400px;">
        </div>
        <RouterLink :to="{name: 'home'}">🏠홈으로</RouterLink>
    </div>
</template>

<script setup>

</script>

<style scoped>
h2{
    margin-top: 4%;
    text-align: center;
}
a{
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: bold;
    display: flex;
    justify-content: center;
    margin-top: 2%;
}
.image-container{
    margin-top: 3%;
    display: flex;
    justify-content: center;
}
img{
    margin-left: 3%;
}
</style>