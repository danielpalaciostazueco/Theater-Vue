<script setup lang="ts">
import MainBlockComponent from '@/components/MainBlockComponent.vue';

</script>
<template>
    <main>
        <MainBlockComponent></MainBlockComponent>
        <article class="contact-container">
            <div class="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2108.1839335373115!2d-0.8694685255356075!3d41.64661674807271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd59144d20190641%3A0xbfdbaff9968efca7!2sLas%20Fuentes%2C%20Zaragoza!5e0!3m2!1ses!2ses!4v1702157638821!5m2!1ses!2ses"
                    width="600" height="450" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="contact-details">
                <h2>{{ $t("Contact.information") }}</h2>
                <div class="info-row">
                    <span class="label">{{ $t("Contact.text") }}</span>
                    <span class="value">50002</span>
                </div>
                <div class="info-row">
                    <span class="label">{{ $t("Contact.text4") }}</span>
                    <span class="value">Calle de la Villa Chiprana</span>
                </div>
                <div class="info-row">
                    <span class="label">{{ $t("Contact.text3") }}</span>
                    <span class="value">+976 545 677</span>
                </div>
                <div class="info-row">
                    <span class="label">{{ $t("Contact.text2") }}</span>
                    <span class="value">urbantheater@gmail.com</span>
                </div>
            </div>
        </article>
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
