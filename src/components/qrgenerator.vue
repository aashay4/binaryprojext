<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">QR Code Reader</h1>
          <button v-on:click="reset()" style="width: 100%">Clear all the fields</button><br><br>
          <p class="error">{{ error }}</p>
          <p>Note:<b>Our API does not browse files in the Chrome for Mobile devices, CAMARA scanning is running for all the devices, to use the featurem click on choose file button.</b></p>
          <p class="decode-result w3-border w3-padding-large w3-padding-32 w3-center" style="width: 100%" v-bind:style="styleObject">{{ result }}
        </p>
          <qrcode-stream @decode="onDecode" @init="onInit" />
          <qrcode-capture @decode="onDecode" />
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
import VueQrcodeReader from 'vue-qrcode-reader'
import header from './header.vue';
import footer from './footer.vue';

Vue.use(VueQrcodeReader)

export default {
  metaInfo: {
     title: 'QR Code Reader – Scan your QR Codes',
     meta: [

       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'description', content: 'Best online QR code reader. Visit our website and scan QR codes very easily.'}
     ],
     links: [
       {rel: 'canonical', href: 'http://binarytotext.net/qr-code-reader'}
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
            result: '',
            text_val: null,
            title: "QR code generator",
            error: "",
            styleObject: {
            color: 'green',
            fontSize: '25px'
          }
}
},
  methods: {
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permisson"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: API is not supported in this browser"
        }
      }
    },
    onDecode (result) {
      this.result = result
    },
   reset() {
     this.message = '',
     this.text_value= null
   }
  }
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
