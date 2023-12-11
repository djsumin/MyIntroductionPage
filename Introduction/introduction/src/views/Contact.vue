<template>
    <div>
        <h2>Contact.</h2>
        <div class="container">
            <div class="github">
                <a href="https://github.com/djsumin"><img src="@/assets/githubicon.png" style="width: 100px;"></a>
                <div class="text">github</div>
            </div>
            <div class="tistory">
                <a href="https://qtsooming.tistory.com/"><img src="@/assets/tistory.png" style="width: 100px;"></a>
                <div class="text">tistory</div>
            </div>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style scoped>
h2{
    margin-top: 100px;
    text-align: center;
}
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.github{
    margin-top: 40px;
    margin-right: 80px ;
}
.tistory{
    margin-top: 40px;
    margin-bottom: 400px;
}
.text{
    text-align: center;
    font-weight: bold;
}
</style>