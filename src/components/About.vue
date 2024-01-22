<template>
  <div class='about'>
    <!-- <p>Mini Weather App - це веб-додаток, який дозволяє користувачам отримувати інформацію про погоду в певному місці. Він
      забезпечує зручний інтерфейс для доступу до поточних і прогнозованих даних про погоду для будь-якого місця, просто
      ввівши назву міста. Додаток розроблено таким чином, щоб бути простим і легким у використанні, що робить його
      ідеальним для людей, які хочуть отримувати швидкі оновлення погоди без потреби в більш складній і
      багатофункціональній програмі погоди.</p>
    <p>Додаток використовує API для отримання даних про погоду та відображення їх користувачеві у візуально привабливому
      вигляді. Він містить основну інформацію про погоду, таку як температура.</p>
    <p>Програма Mini Weather створена за допомогою сучасних веб-технологій, таких як Vue.js, HTML, CSS і JavaScript, що
      робить її легкою та швидкою програмою.</p>
    <p>Загалом, Mini Weather App є чудовим інструментом для тих, хто хоче швидко та легко отримати доступ до інформації
      про погоду. Його простий та інтуїтивно зрозумілий інтерфейс робить його ідеальним вибором для тих, хто хоче бути в
      курсі погоди без необхідності переглядати безліч функцій і даних.</p>
    <p>Незалежно від того, чи плануєте ви подорож чи просто хочете дізнатися прогноз на день, додаток Mini Weather
      допоможе вам.</p> -->

    <p>Mini Weather App is a web application that allows users to get information about the weather in a specific
      location. It provides a user-friendly interface to access current and forecasted weather data for any location by
      simply entering the city name. The app is designed to be simple and easy to use, making it ideal for people who want
      to get quick weather updates without the need for a more complex and feature-rich weather app.</p>
    <p>The app uses an API to retrieve weather data and display it to the user in a visually appealing way. It contains
      basic weather information such as temperature.</p>
    <p>Mini Weather is built using modern web technologies such as Vue.js, HTML, CSS and JavaScript, making it a
      lightweight and fast app.</p>
    <p>Overall, the Mini Weather App is a great tool for anyone who wants quick and easy access to weather information.
      Its simple and intuitive interface makes it the perfect choice for those who want to stay up-to-date on the weather
      without having to sift through tons of features and data. </p>
    <p>Whether you're planning a trip or just want to know the forecast for the day, the Mini Weather app has you covered.
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
  setup() {
    return {}
  }
});
</script>

<style>
.about {
  background-image: url('../assets/about.png');
  background-size: cover;
  background-position: bottom;

  height: 100vh;

  padding-top: 30px;
}

.about p {
  padding: 10px 25px;
}</style>