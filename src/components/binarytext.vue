<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Binary To Text</h1>
          <p>To use the binary to text tool, enter a binary number into the box, click on the button and get the equivalent text into the output. For example, insert “01000011 01101111 01101110 01110110 01100101 01110010 01110100” into the box and click on the button, you will get the text string “Convert”.
If you want to convert text to binary, then enter any text into the text box and click on the button “Text to binary”. You will get the equivalent binary value in the converter.
</p>
          <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/><br><br>
          <button v-on:click="binarytotext()" style="width: 33%">Binary to Text</button>
          <button v-on:click="texttobinary()" style="width: 33%">Text to Binary</button>
          <button v-on:click="reset()" style="width: 34%">clear all fields</button><br><br>
            <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; overflow: scroll"><b>Conversion:</b> {{ ans }}</p>
        </div>
        <div class="w3-third w3-container">
          <Adsense
    data-ad-client="pub-8485628208613195"
    data-ad-slot="7853167734">
</Adsense>
          <p class="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
          <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
        </div>
      </div>

      <div class="w3-row" style="text-align: justify;">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Binary</h1>
            <p>Binary is just a number system that uses only two digits, o and 1 to rectify different queries. This number system one of the most popular systems in modern computer processing, electronics, wireless networking systems, data process over a network layer. A computer system can only understands the binary numbers and for that reason, it has become one of the most popular terms in digital world.</p>
        </div>
      </div>

      <div class="w3-row w3-padding-64" style="text-align: justify;">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">How to convert Binary to Text?</h1>
          <p>For example, if you want to convert a binary number "01000001" into its equivalent text number. Take the first eight characters binary given to you(That's probably 01000001) and convert it into the ASCII values. Now find out the ASCII value of the specific character. And you will get the number "A" for that binary number. If you have been given number (0100000101010111). Now take the first eight characters, find the equivalent text number. After the completion, take another eight characters and find their relevant values.</p>
        </div>
        <div class="w3-third w3-container">
          <p class="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
          <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
        </div>
      </div>

      <div class="w3-row" style="text-align: justify;">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">How to Convert Text to Binary?</h1>
            <p>If you want to convert the string "Text" into the binary number then follow these simple steps. Take the first character of the text(it would be "T") string and convert it into the ASCII value. And then convert the ASCII value to the equivalent binary number. The binary number for the string "T" will be 01110100. After the conversion, the number you will get should be of 8-bits, if it is less then 8-bits then add zeros and make it an 8-bits long. After the conversion of a number T, do the same conversion with other numbers, E, X, and the last one T. After completion of the operation, you will get this answer(01010100 01100101 01111000 01110100).</p>
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
     title: 'Binary to Text Converter | Online Binary Translator',
     meta: [

       {name: 'viewport', content: 'width=device-width, initial-scale=1'},
       {name: 'description', content: 'Binary to text helps you convert zeros and ones to the text or the text to binary. Use this free binary translator to convert any given string.'}
     ],
     links: [
       {rel: 'canonical', href: 'http://binarytotext.net/'}
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
            aaa: null,
    }
  },
  methods: {
    texttobinary() {

            for (var i=0; i < this.text_value.length; i++)
            {
              var e = this.text_value[i].charCodeAt(0);
              var s = "";
              do {
                var a = e % 2;
                e = (e - a) / 2;
        s = a + s;
      }while(e!=0);
        while(s.length<8) {
          if(s.length === 7) {
            s = " 0" + s;
            this.ans += s;
          }
          if(s.length === 6) {
          s = " 00" + s;
          this.ans += s;
          }
          if(s.length === 5) {
          s = " 000" + s;
          this.ans += s;
          }
          if(s.length === 4) {
          s = " 0000" + s;
          this.ans += s;
          }
          if(s.length === 3) {
          s = " 00000" + s;
          this.ans += s;
          }
        }
              }
            },
    binarytotext() {
        var bintext, textresult="", binlength;
        this.aaa = this.text_value;
        bintext = this.aaa.replace(/[^01]/g, "");
			binlength = bintext.length-(bintext.length%8);
			for(var z=0; z<binlength; z=z+8) {
				textresult += String.fromCharCode(parseInt(bintext.substr(z,8),2));
                                this.ans = textresult;
        }
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
