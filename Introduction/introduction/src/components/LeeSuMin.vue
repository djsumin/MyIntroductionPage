<template>
    <div>
        <div class="myinfo">
            <div class="image-container">
                <img src="@/assets/myphoto/이수민1.jpg" style="width: 400px;" class="round-image">
            </div>
            <h2>이름 : 이수민</h2>
            <h2>생년월일 : 1999.07.27</h2>
            <h2>학교/전공 : 충남대학교 미생물분자생명과학과 + 응용화학공학과 복수전공</h2>
            <h2>거주지 : 대전 동구 </h2>
            <RouterLink :to="{name: 'home'}">🏠홈으로</RouterLink>
        </div>
        <div class="balloon"></div>
    </div>
    </template>
<script setup>

</script>

<style scoped>
.myinfo{
    margin-top: 5%;
    text-align: center;
}

a{
    text-decoration: none;
    color: black;
    font-size: larger;
    font-weight: bold;
}

.image-container{
    display: flex;
    justify-content: center;
    align-items: center;
}   
.round-image {
    border-radius: 50%;
    object-fit: cover;
    width: 400px;
    height: 400px;
}

</style>