<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Binary to Hexadecimal</h1>
          <p>To use this converter, enter binary number into this text field and click on the button, "Binary to Hexadecimal", you will get the answer for the equivalent hexadecimal number of the binary number. For an example, enter the value "101011111" in the box and you will get an answer of "15F" as the answer. Just the same way, "8888" hex number to the equivalent answer, "1000100010001000" of this hex number.</p>
          <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/><br><br>
          <button v-on:click="bintohex()" style="width: 33%">Binary to Hexadecimal</button>
          <button v-on:click="hextobin()" style="width: 33%">Hexadecimal to binary</button>
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
          <h1 class="w3-text-teal">Hexadecimal Numbers</h1>
          <p>The hexadecimal is a base-16 numbering system. The hexadecimal numbers are nothing but 0-9 and then use A to F. The conversion of hexadecimal number to the binary number is really simple. You can either use our tool or perform the conversion operation by your self.</p>
          <p>The haxadecimal numbers are the modern way to show binary numbers to the computer systems. When showing the content from computer storage, one hexadecimal number can show the representation of four various binary numbers. Two hexadecimal numbers can represent eight binary digits and so on.</p>
          <p>You can have a look at different values of hex numbers along with zeros and one in the table below!</p>
          <table style="width:25%">
  <tr>
    <th>Hex</th>
    <th>Binary</th>
  </tr>
  <tr>
    <td>0</td>
    <td>0</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
    <td>10</td>
  </tr>
  <tr>
    <td>3</td>
    <td>11</td>
  </tr>
  <tr>
    <td>4</td>
    <td>100</td>
  </tr>
  <tr>
    <td>5</td>
    <td>101</td>
  </tr>
  <tr>
    <td>6</td>
    <td>110</td>
  </tr>
  <tr>
    <td>7</td>
    <td>111</td>
  </tr>
  <tr>
    <td>8</td>
    <td>1000</td>
  </tr>
  <tr>
    <td>9</td>
    <td>1001</td>
  </tr>
  <tr>
    <td>A</td>
    <td>1010</td>
  </tr>
  <tr>
    <td>B</td>
    <td>1011</td>
  </tr>
   <tr>
    <td>C</td>
    <td>1100</td>
  </tr>
  <tr>
    <td>D</td>
    <td>1101</td>
  </tr>
  <tr>
    <td>E</td>
    <td>1110</td>
  </tr>
  <tr>
    <td>F</td>
    <td>1111</td>
  </tr>
  <tr>
    <td>10</td>
    <td>10000</td>
  </tr>
  <tr>
    <td>20</td>
    <td>100000</td>
  </tr>
   <tr>
    <td>40</td>
    <td>1000000</td>
  </tr>
  <tr>
    <td>80</td>
    <td>10000000</td>
  </tr>
  <tr>
    <td>100</td>
    <td>100000000</td>
  </tr>
</table><br>
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
     title: 'Binary to Hexadecimal Online Converter | Convert to Hex Number',
     meta: [

       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'description', content: 'Binary to Hexadecimal converter. The simplest online translator of hexadecimal to binary conversions. Visit here and get answers!'}
     ],
     links: [
       {rel: 'canonical', href: 'http://binarytotext.net/binary-to-hexadecimal/'}
     ],
   },

  components:{
    'header-app': header,
    'footer-app': footer
  },
  data () {
    return {
      text_value: null,
            ans: ""
    }
  },
  methods: {
    bintohex() {
      var bin = this.text_value;
      var m = new  BigNumber(bin, 2)
      var binn = m.toString(16);
      this.ans = binn;
            },
    hextobin() {
      var hex = this.text_value;
      var x = new BigNumber(hex, 16);
      var dect = x.toString(2);
      this.ans = dect;
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
table, th, td {
  border: 1px solid black;
}
</style>
