<template>
  <div class="container">

    <!-- Header-Section, die immer angezeigt wird -->
    <header class="header">
      
      <!-- H1 mit link der Seite "Layout"(View) erneut lädt -->
      <a class="headline_page" href="/"><h1>{{$frontmatter.page_headline}}</h1></a>

      <!-- Sprachauswahl welche sich auf Objekt currenLocale bezieht -->
      <div class="languagepicker">
        <form>
          <label for="language-picker-select">Language:</label>
          <select v-model="currentLocale">
            <option v-for="locale in locales" v-bind:value="locale.id">{{locale.name}}</option>
          </select>
        </form>
      </div>
    </header>

    <main>
      <!-- Teaser-Section -->
      <div class="teaser" v-for="teaseritem in $frontmatter[currentLocale]">
        <img :src="teaseritem.teaser_image" alt="Teaser Image">
        <div class="teaser__text">
            <h3>{{teaseritem.headline}}</h3>
            <p>{{teaseritem.abstract}}</p>
            <button class="button__link" v-on:click="
            $router.push({ path: teaseritem.slug })">
            {{currentLocaleHelp[currentLocale][0]}}</button>
        </div>
      </div>
    </main>
    <!-- <TestGroundLayout :setlng="currentLocale"/> -->
  </div>
</template>

<script>
// import TestGroundLayout from './TestGroundLayout';

export default {
    name: "Layout",
    // components: {
    //   TestGroundLayout
    // },
    data() {
        return {
            currentLocale:'de',
            currentLocaleHelp: {
              de: ["Mehr lesen", "Weitere Artikel"],
              en: ["Read More", "Check out further Articles"]
            },
            locales: [ {id: 'en', name: 'English', more: 'Read more'}, {id: 'de', name: 'Deutsch', more: 'Mehr lesen'}]
        }
    },
  mounted() {
      console.log("Layout.vue meldet sich per mounted")
  }
}

</script>