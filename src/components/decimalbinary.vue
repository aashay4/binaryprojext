<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Decimal to Binary</h1>
          <p>To use this decimal to binary tool, enter a decimal number up to 19 characters and click on the conversion button. For example, enter a decimal number "44" into the text box and click on the button, you will get the binary number "101100". If you want to convert a binary number into the decimal then enter zero and ones into the box and click on specific converter button. You will get the specific decimal number for the zeros and ones.</p>
          <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/><br><br>
          <button v-on:click="dectobin()" style="width: 33%">Decimal to Binary</button>
          <button v-on:click="bintodec()" style="width: 33%">Binary to Decimal</button>
          <button v-on:click="reset()" style="width: 34%">clear all the fields</button><br><br>
            <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; overflow: scroll">Conversion: {{ ans }}</p>
        </div>
        <div class="w3-third w3-container">
          <p class="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
          <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
        </div>
      </div>
      <div class="w3-row" style="text-align: justify;">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Decimal Numbers</h1>
          <p>The Decimal numbers are nothing but zero and set of other counting numbers. In the number system, all the digits are placed to the left and right of the decimal point. All the decimal points let us know where the place of a specific number is.</p>
        </div>
      </div>
      <div class="w3-row" style="text-align: justify;">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Decimal to Binary to Decimal Conversion</h1>
            <p>Just for an example, if you want to convert the decimal number to binary number then follow these steps. Firstly, divide the given number by 2. After you are dividing it by 2, get the float for the next iteration. Note the reminder for the binary digit. For example, if you enter the number "4422" in the textbox and you will get this answer: 1000101000110.</p><br>
            <b>Binary to Decimal Conversion</b>
            <p>If you want to convert binary to decimal, the decimal number is nothing but the sum of the given binary digits, (Xn) times the power of 2.<p><br>
              <p>
              decimal number = x0×20 + x1×21 + x2×22 + ...
            </p>
            <p>
              So, it is the conversion formula, you can also use our tool. Just enter a binary number like "10001010111000" and the answer you get will be "10001010111000".
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
import { BigNumber } from 'bignumber.js';

export default {

  metaInfo: {
     title: 'Decimal to Binary Online Converter | Convert Numbers with this tool',
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
            ans: "",
    }
  },
  methods: {
    dectobin() {
      var x = new BigNumber(this.text_value, 10)
    var dectobin = x.toString(2);
    this.ans = dectobin;
            },
    bintodec() {
      var cc = new BigNumber(this.text_value, 2);
       this.ans = cc;
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
