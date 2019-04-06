<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Decimal to Octal</h1>
          <p>To get the conversion of decimal to octal, enter a value below and click on the button. Enter a decimal value "4444" and you will get the answer of "10534". Same way, you can also get an answer from the octal number to the decimal number. Enter the same number in the box and you will get the equivalent decimal conversion.</p>
          <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/><br><br>
          <button v-on:click="dectooct()" style="width: 33%">Decimal to Octal</button>
          <button v-on:click="octtodec()" style="width: 33%">Octal to Decimal</button>
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
          <h1 class="w3-text-teal">Octal Numbers</h1>
            <p>The oct is a short form for the octal numbers. It is the base-8 numbering system which uses digital from 0 to 7. In the octal numbering system each place is the power of eight. The biggest benefit of octal numbers is nothing but it can directly be converted into the binary number in the simplest manner. Even the decimal to octal conversion is also really simple, find the conversion technique below.</p>
        </div>
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Decimal to octal conversion</h1>
            <p>The repeated divison and reminder technique can help you to convert a decimal number into the octal. For example, if you are given a decimal number "8888" which you need to convert into the equivalent octal number. First, divide the number by 8. Divide the remaining Quotient by 8 again and keep on doing this process until you get 0. After the conversion, you will get this answer:21270.</p>
            <b>Oct to Dec</b>
              <p>The normal decimal number is nothing but the sum of numbers multiplied by 10 raise to X(Where x is any given decimal number). For example, if you want to convert 37 octal number into the decimal then the calculation would be as shown below,</p>
              <p><b>37 = (3*8) + (7*1) = 31</b></p>
                <p>You can also use our tool to perform a similar conversion.</p>
                <p>
                  <table style="width:25%">
          <tr>
            <th>Base 8</th>
            <th>Base 10</th>
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
            <td>10</td>
            <td>8</td>
          </tr>
          <tr>
            <td>11</td>
            <td>9</td>
          </tr>
          <tr>
            <td>12</td>
            <td>10</td>
          </tr>
          <tr>
            <td>13</td>
            <td>11</td>
          </tr>
          <tr>
            <td>14</td>
            <td>12</td>
          </tr>
          <tr>
            <td>15</td>
            <td>13</td>
          </tr>
          <tr>
            <td>24</td>
            <td>20</td>
          </tr>
          <tr>
            <td>32</td>
            <td>26</td>
          </tr>
          <tr>
            <td>40</td>
            <td>32</td>
          </tr>
          <tr>
            <td>64</td>
            <td>52</td>
          </tr>
          <tr>
            <td>72</td>
            <td>58</td>
          </tr>
          <tr>
            <td>100</td>
            <td>64</td>
          </tr>
        </table>
                </p>
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
     title: 'Decimal to Octal Converter',
     meta: [

       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'description', content: 'An online Decimal to octal converter.'}
     ],
     links: [
       {rel: 'canonical', href: 'http://binarytotext.net/decimal-to-octal'}
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
    dectooct() {
    var x = new BigNumber(this.text_value, 10)
    var dectobin = x.toString(8);
    this.ans = dectobin;
            },
    octtodec() {
    var x = new BigNumber(this.text_value, 8)
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

<style scoped>
#box {
  background-color: lightgrey;
   width: 300px;
   border: 5px solid gray;
   padding: 10%;
   margin-left: 30%;

}
</style>
