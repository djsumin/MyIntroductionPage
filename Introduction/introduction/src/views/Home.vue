<template>
    <div>
        <div class="container">
            <div class="imgbox">
                <img src="@/assets/myphoto1.jpg" style="height: 500px;"/>
            </div>
            <div class="intro">
              <h2>안녕하세요:) 개발자 준비 중인 <RouterLink :to="{name: 'LeeSuMin'}"><span class="box">이수민</span></RouterLink>입니다!</h2>
              <h2><span class="box">25살</span> 토끼띠🐰고, 활발한 ESFJ입니다.</h2>
              <h2>올해 미생물분자생명과학과와 화학공학과를 <RouterLink :to="{name: 'Graduation'}"><span class="box">무사졸업</span></RouterLink>하고</h2>
              <h2><span class="box">새로운 꿈</span>을 찾아서 항해중입니다.</h2>
              <h2><RouterLink :to="{name: 'Travel'}"><span class="box">여행</span></RouterLink>다니고 <span class="box">맛집</span> 찾아다니는 것을 좋아해요.</h2>
              <h2>✨제 개발 이야기가 궁금하시면 눌러주세요.✨</h2>
              <button @click="more()" class="btn">MORE</button>
              <h2></h2>
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
.intro{
    margin-left: 30px;
}
.box{
    background-color: #B0A695;
}
a{
    text-decoration: none;
    color: black;
}

.btn{
    font-size: 20px;
    border-radius: 10px;
    background-color: #cbc0ab;
}


</style>