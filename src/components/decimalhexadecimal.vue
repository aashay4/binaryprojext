<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Decimal to Hexadecimal</h1>
          <p>Enter a decimal value into the text box if you want to convert decimal to hex and click on the button to get the correct conversion. For example, enter "8888" and click on the conversion button and you will get "22B8" answer. You can also convert hex number into the equivalent decimal by entering a value and clicking on the button.</p>
          <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/><br><br>
          <button v-on:click="dectohex()" style="width: 33%">Decimal to Hexadecimal</button>
          <button v-on:click="hextodec()" style="width: 33%">Hexadecimal to Decimal</button>
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
          <h1 class="w3-text-teal">Decimal and Hexadecimal Numbers</h1>
            <p>The decimal numbers have base 10 and they include 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. The hexadecimal numbers have base 16 and they are counted as the modern version of binary numbers. The conversion of these numbers is also really easy. Find the process below.</p>
        </div>
      </div>
      <div class="w3-row" style="text-align: justify;">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Conversion</h1>
            <p>The decimal to hex conversion is really simple, you can also take help of our tool to find out the correct answer. First, divide the given decimal number by 16. Get the number quotient. Get the reminder for the further hex digits. Keep on looping these steps until you get quotient to 0.</p>
        <b>Hex to Dec</b>
          <p>The conversion of any number into a hex number is really simple. The regular hex number is the sum of digits multiplied with the power of 16. For example, if you are given the number "AE88" then convert the character "A" & "E" into their equivalent decimal value. After converting, you will get an answer of "44680".</p>
          <table style="width:25%">
  <tr>
    <th>Hex</th>
    <th>Decimal</th>
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
    <td>2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3</td>
  </tr>
  <tr>
    <td>4</td>
    <td>4</td>
  </tr>
  <tr>
    <td>5</td>
    <td>5</td>
  </tr>
  <tr>
    <td>6</td>
    <td>6</td>
  </tr>
  <tr>
    <td>7</td>
    <td>7</td>
  </tr>
  <tr>
    <td>8</td>
    <td>8</td>
  </tr>
  <tr>
    <td>9</td>
    <td>9</td>
  </tr>
  <tr>
    <td>A</td>
    <td>10</td>
  </tr>
  <tr>
    <td>B</td>
    <td>11</td>
  </tr>
  <tr>
    <td>C</td>
    <td>12</td>
  </tr>
  <tr>
    <td>D</td>
    <td>13</td>
  </tr>
  <tr>
    <td>E</td>
    <td>14</td>
  </tr>
  <tr>
    <td>F</td>
    <td>15</td>
  </tr>
  <tr>
    <td>10</td>
    <td>16</td>
  </tr>
  <tr>
    <td>11</td>
    <td>17</td>
  </tr>
  <tr>
    <td>12</td>
    <td>18</td>
  </tr>
  <tr>
    <td>13</td>
    <td>19</td>
  </tr>
  <tr>
    <td>14</td>
    <td>20</td>
  </tr>
  <tr>
    <td>15</td>
    <td>21</td>
  </tr>
  <tr>
    <td>16</td>
    <td>22</td>
  </tr>
  <tr>
    <td>17</td>
    <td>23</td>
  </tr>
  <tr>
    <td>18</td>
    <td>24</td>
  </tr>
  <tr>
    <td>19</td>
    <td>25</td>
  </tr>
  <tr>
    <td>20</td>
    <td>32</td>
  </tr>
  <tr>
    <td>21</td>
    <td>33</td>
  </tr>
  <tr>
    <td>22</td>
    <td>34</td>
  </tr>
  <tr>
    <td>23</td>
    <td>35</td>
  </tr>
  <tr>
    <td>24</td>
    <td>36</td>
  </tr>
  <tr>
    <td>25</td>
    <td>37</td>
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
     title: 'Decimal to Hexadecimal Converter',
     meta: [

       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'description', content: 'Best decimal to hexadecimal converter. Get the answers about the conversions and learn how to convert decimal number to a hexadecimal.'}
     ],
     links: [
       {rel: 'canonical', href: 'http://binarytotext.net/decimal-to-hexadecimal'}
     ]
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
    dectohex() {
    var x = new BigNumber(this.text_value, 10)
    var dectobin = x.toString(16).toUpperCase ();
    this.ans = dectobin;
            },
    hextodec() {
    var x = new BigNumber(this.text_value, 16)
    var dectobin = x.toString(10);
    this.ans = dectobin;
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
