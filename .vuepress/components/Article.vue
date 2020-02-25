<template>
    <div>
        <header class="header">
            <a class="headline_page" href="/"><h1>{{$site.pages[0].frontmatter.page_headline}}</h1></a>
            <div class="languagepicker">
                <form>
                <label for="language-picker-select">Language:</label>
                <select v-model="currentLocale">
                    <option v-for="locale in locales" v-bind:value="locale.id">{{locale.name}}</option>
                </select>
                </form>
            </div>
        </header>

        <!-- Testbereich -->
        <!-- <h1>frontmatter</h1>
        <p>{{$site.pages[0].frontmatter.de}}</p>  -->

        <div class="article">

            <!-- <h3>{{currentLocale}}</h3> -->

            <h2 class=".article__headline">{{articleText[0].headline}}</h2>
            <p class="article__abstract">{{articleText[0].abstract}}</p>
            <img class="article__headerImage" :src="articleText[0].header_image" alt="Header Image">
            <p class="article__text">{{articleText[0].text}}</p>
            <a class="link" href="/">{{currentLocaleHelp[currentLocale][1]}}</a>
        </div>

    </div>
</template>

<script>
// import Layout from '../theme/Layout';

export default {
    // components: {
    //     Layout
    // },
    // props: {
    //    setlng: String
    // },

    data () {
        return {
            articleHeadline: [],
            articleAbstract: [],
            articleImage: [],
            articleText: [],

            currentLocale: 'de',
            currentLocaleHelp: {
              de: ["Mehr lesen", "Weitere Artikel"],
              en: ["Read More", "Check out further Articles"]
            },
            locales: [ {id: 'en', name: 'English', more: 'Read more'}, {id: 'de', name: 'Deutsch', more: 'Mehr lesen'}],


        }
    },
    mounted() {
        console.log(this.$route.params.slug);
        // this.currentLocale = this.setLanguage;
        console.log(this.currentLocale);
        // console.log(this.setlng);
        
        const slug = this.$route.params.slug;
            this.articleText = this.$site.pages[0].frontmatter.de.filter( item => item.slug === slug);

    }
}
</script>