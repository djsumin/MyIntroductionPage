<template>
    <div>
        <h2>What I made</h2>
        <h3>Click and see my project</h3>
        <div class="container">
            <a href="https://github.com/djsumin/GingGing_Front"><img src="@/assets/gingging.gif" style="width: 400px;"></a>
            <div class="comingsoon">
                coming soon.. :)
            </div>
        </div>
</div>
</template>

<script setup>

</script>

<style scoped>
h2, h3{
    margin: 40px;
}

img{
    border-radius: 10px;
    height: 180px;
}
.container{
    display: flex;
    flex-wrap: wrap;
    padding: 2%;
    margin-bottom: 500px;
}
.comingsoon{
    margin: 0px 10px 0px 10px;
    width: 400px;
    height: 180px;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: rgb(219, 210, 210);
    text-align: center;
    line-height: 170px;
    font-weight: bold;
    font-size: larger;
}
</style>