<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Decimal to Binary</h1>
          <button v-on:click="dectobin()" style="width: 33%">Decimal to Binary</button>
          <button v-on:click="bintodec()" style="width: 33%">Binary to Decimal</button>
          <button v-on:click="reset()" style="width: 34%">clear all the fields</button><br><br>
            <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/>
            <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; overflow: scroll">Conversion: {{ ans }}</p>
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

  metaInfo: {
     title: 'Decimal to Binary Online Converter for Free',
     meta: [

       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'description', content: 'With Decimal to Binary converter, get the numbers converted really easily. Get to know about the conversion process of binary to decimal and vice a versa.'}
     ],
     links: [
       {rel: 'canonical', href: 'http://binarytotext.net/decimal-to-binary/'}
     ]
   },

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
    dectobin() {
      this.aaa = parseInt(this.text_value)
    var dectobin = this.aaa.toString(2);
    this.ans = dectobin;
            },
    bintodec() {
      this.aaa = parseInt(this.text_value, 2);
       this.ans = this.aaa;
     },
   reset() {
     this.ans = '',
     this.text_value= null
   },
  }
}
</script>

<style scoped>
#box {
  background-color: lightgrey;
   width: 300px;
   border: 5px solid gray;
   padding: 10%;
   margin-left: 30%;

}
</style>
