<template>
    <div>
        <div class="txt">
            <h2>미생물분자생명과학과와 화학공학과를 전공했습니다.</h2>
            <h2>계산화학을 공부하려 대학원에 가려다, 개발자를 향해 나아가고 있습니다.</h2>
        </div>
        <div class="gradphoto">
            <img src="@/assets/myphoto/졸업1.jpg" style="width: 400px;">
            <img src="@/assets/myphoto/졸업2.jpg" style="width: 385px;">
        </div>
        <RouterLink :to="{name: 'home'}">🏠홈으로</RouterLink>
    </div>
</template>

<script setup>

</script>

<style scoped>
h2{
    text-align: center;
}
a{
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: bold;
}
.txt{
    margin-top: 100px;
}
.gradphoto{
    display: flex;
    justify-content: center
}
img{
    margin: 2%;
}
</style>