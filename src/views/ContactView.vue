<script setup lang="ts">
import MainBlockComponent from '@/components/MainBlockComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';

</script>
<template>
    <main>
        <MainBlockComponent></MainBlockComponent>
        <ContactComponent></ContactComponent>
    </main>
</template>

<style scoped>
body,
h1,
h2,
p,
ul,
li,
a {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}


body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

.contact-container {
    display: flex;
    width: 764px;
    height: 858px;
    margin: 7px auto;
    border: 20px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    background-color: #1e3367;
    color: #fff;
    font-size: 20px;
    flex-direction: column;
}

.map-section {
    flex: 1;
    text-align: center;
    margin-top: 8vh;
}

.map-section img {
    width: 100%;
    height: auto;
}

.contact-details {
    flex: 0.5;
    padding: 20px;
}

h2 {
    text-align: center;
    margin-bottom: 3vh;
}

.info-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.label {
    font-weight: bold;
}

.value {
    flex: 1;
    margin-left: 10px;
}




article {
    display: flex;
    justify-content: right;
    margin-top: 10vh;
}

@media screen and (max-width: 768px) {

    body,
    h1,
    h2,
    p,
    ul,
    li,
    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body {
        font-family: 'Roboto';
        line-height: 1.6;
        overflow: auto;
    }


    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
    }

    .contact-container {
        display: flex;
        width: 320px;
        height: 858px;
        margin: 7px auto;
        border: 20px solid #ccc;
        border-radius: 5px;
        overflow: hidden;
        background-color: #1e3367;
        color: #fff;
        font-size: 20px;
        flex-direction: column;
    }

    .map-section {
        flex: 1;
        text-align: center;
        margin-top: 8vh;
    }

    .map-section img {
        width: 100%;
        height: auto;
    }

    .contact-details {
        flex: 0.5;
        padding: 20px;
    }

    h2 {
        text-align: center;
        margin-bottom: 3vh;
    }

    .info-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .label {
        font-weight: bold;
    }

    .value {
        flex: 1;
        margin-left: 10px;
    }




    article {
        display: flex;
        justify-content: right;
        margin-top: 10vh;
    }
}
</style>
