<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Binary to Octal</h1>
          <p>Want to convert Binary to Octal value? Enter the desired binary number below and click on the button to get the conversion of a binary number into the octal. Enter numbers like 16, 32 or 64 here and find out the equivalent binary values of these numbers. Same way you can enter zeros and ones to find out the octal values of those numbers.</p>
          <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/><br><br>
          <button v-on:click="bintooct()" style="width: 33%">Binary to Octal</button>
          <button v-on:click="octtobin()" style="width: 33%">Octal to binary</button>
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
          <h1 class="w3-text-teal">Binary Numbers</h1>
            <p>In the digital world, binary numbers are everywhere. The biggest advantage of these numbers is nothing the simple implementation in the electronic hardware. Travel through this table and get to know about the conversions of different numbers.</p>
            <b>Octal Number</b>
            <p>Oct numbers have the base 8. It is really easy to convert any number(decimals, binary or hexadecimal) into the oct numbers. Please find the conversion of octs into zeros and ones. You can also use our tool if you are looking for an online conversion tool, it is totally for free.</p>
            <p><table style="width:25%">
    <tr>
      <th>Oct</th>
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
      <td>10</td>
      <td>1000</td>
    </tr>
    <tr>
      <td>11</td>
      <td>1001</td>
    </tr>
    <tr>
      <td>12</td>
      <td>1010</td>
    </tr>
    <tr>
      <td>13</td>
      <td>1011</td>
    </tr>
     <tr>
      <td>14</td>
      <td>1100</td>
    </tr>
    <tr>
     <td>15</td>
     <td>1101</td>
   </tr>
   <tr>
    <td>20</td>
    <td>10000</td>
  </tr>
  <tr>
   <td>40</td>
   <td>100000</td>
 </tr>
 <tr>
  <td>100</td>
  <td>1000000</td>
</tr>
<tr>
 <td>1000</td>
 <td>1000000000</td>
</tr>
<tr>
 <td>2000</td>
 <td>10000000000</td>
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

export default {

  metaInfo: {
     title: 'Binary to Octal',
     meta: [

       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'description', content: 'Best online binary to octal converter.'}
     ],
     links: [
       {rel: 'canonical', href: 'http://binarytotext.net/binary-to-octal'}
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
