<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Write for Us!</h1>
            <p class="w3-padding-32 w3-right" style="width: 100%; text-align: justify">
              We welcome individual bloggers and writers to <b>"write for us"</b>! If writing is your passion and you can write creative content then do not hesitate to pitch us. We
              are accepting articles on Technology, Computer networking, LAN Tricks, and Programming. Before pitching us please go through the guidelines.
            </p>
            <h2>Guidelines</h2>
            <ul><li>Your article should be 100% unique, it should not be published anywhere(even on your website)</li></ul>
            <ul><li>An article should be at least 1000 Words long</li></ul>
            <ul><li>Do not write for length or just a link back to your website</li></ul>
            <ul><li>Include real-time examples, research or case study along with the screenshots</li></ul>
            <h2>What you will get?</h2>
            <p>You will get two Do-follow backlinks for your website, one in the content and another in the about author.</p>
            <h2>About us!</h2>
            <p>Text to Binary is an online tool which provides various technology, LAN, and mathematical solution totally for free. It is powered by
              Lantech Infocom, a computer networking company.
            </p>
            <h3>What's the process?</h3>
            <p style="text-align: justify">Please do not start writing an article without our approval. Please share your idea along with the summary of your article at <b>aashay@lantechinfocom.com</b>
              with the subject of <b>"Guest post on Binary to Text"</b>. Once we approve your idea, then you can start writing the content. We are also accepting
              paid posts, for that mail us with the subject of <b>"Sponsered Post on Binary to Text"</b>.
            </p>
        </div>
        <div class="w3-third w3-container">
          <p class="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
          <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
        </div>
      </div>
      <footer-app></footer-app>
  </div>
</div>
</template>

<script>
import header from './header.vue';
import footer from './footer.vue';

export default {

  components:{
    'header-app': header,
    'footer-app': footer
  },
  data () {
    return {
      text_value: null,
            total: null,
            ans: "",
            aaa: null,
            text_val: null
    }
  },
  methods: {
    bintooct() {
      this.aaa = parseInt(this.text_value);
      var bintooct = parseInt(this.aaa, 2).toString(8);
      this.ans = bintooct;
            },
    octtobin() {
      this.aaa = parseInt(this.text_value);
      var octtobin = (parseInt(this.aaa, 8).toString(2));
      this.ans = octtobin;
     },
   reset() {
     this.ans = '',
     this.text_value= null
   },
  }
}
</script>

<style>
#box {
  background-color: lightgrey;
   width: 300px;
   border: 5px solid gray;
   padding: 10%;
   margin-left: 30%;

}
</style>
