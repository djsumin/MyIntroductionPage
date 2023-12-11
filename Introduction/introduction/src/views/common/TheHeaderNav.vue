<template>
    <div>
        <header>
            <h1>✨LEE SU MIN✨</h1>
            <nav>
                    <RouterLink :to="{name: 'home'}"><h2>About</h2></RouterLink>
                    <RouterLink :to="{name: 'project'}"><h2>Project</h2></RouterLink>
                    <RouterLink :to="{name: 'contact'}"><h2>Contact</h2></RouterLink>
            </nav>
        </header>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
*{
    font-family: 'UhBeeKang-Ja';
}
header{
    height : 75px;
    padding: 1rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    margin: 0;
}

nav{
    margin: 0;
    padding: 0;
    text-align: center;
    flex: 1;
}

a {
    text-decoration: none;
    color: black;
    display: inline;
    /* margin: 0px 20px 0px 20px; */
}

a :hover{
    color: #776B5D;
}

a h2{
    display: inline-block;
    padding: 10px;
}




@font-face {
font-family: 'UhBeeKang-Ja';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeKang-Ja.woff') format('woff');
font-weight: normal;
font-style: normal;
}
</style>