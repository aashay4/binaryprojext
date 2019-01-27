<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">About Creator</h1>
          <div class="container-fluid bg-1 text-center">
<h4>Aashay Trivedi is the creator of Texttobinary. He is the CEO of Lantech Infocom. Because of his enthusiasm towards learning new technologies, he has worked on
modern technologies like Vue.js, D3.js, Socket.IO. Being the CEO, Aashay takes care of business development activities and exploring new technologies to get the
best possible results for the clients.</h4><br>
<i class="fa fa-envelope" style="width:30px"> </i> <b>aashay@lantechinfocom.com</b><br>
<i class="fa fa-skype" style="width:30px"> </i> <b>live:aashay.trivedi1</b><br>
</div>
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
