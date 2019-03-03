<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">QR Code Generator</h1>
          <button v-on:click="reset()" style="width: 100%">Clear all the fields</button><br><br>
            <input type="text" v-model="message" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/>
            <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; overflow: scroll">
            <qr-code :text="message"/>
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
import Vue from 'vue'
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)
import header from './header.vue';
import footer from './footer.vue';

export default {

  metaInfo: {
     title: 'QR code generator – Create QR codes for free',
     meta: [

       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'description', content: 'Generator QR codes easily with our free online tool – QR Code Generator. Visit the website and generate the QR code in the most pleasant way.'}
     ],
     links: [
       {rel: 'canonical', href: 'http://binarytotext.net/qr-code-generator'}
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
            text_val: null,
            title: "QR code generator",
            message: ''
    }
  },
  methods: {
   reset() {
     this.message = '',
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
