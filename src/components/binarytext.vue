<template>
  <div>
    <header-app></header-app>
    <div class="w3-main" style="margin-left:250px">
      <div class="w3-row w3-padding-64">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">Binary To Text</h1>
          <button v-on:click="binarytotext()" style="width: 33%">Binary to Text</button>
          <button v-on:click="texttobinary()" style="width: 33%">Text to Binary</button>
          <button v-on:click="reset()" style="width: 34%">clear all fields</button><br><br>
            <input type="text" v-model="text_value" style="width: 100%" class="w3-border w3-padding-large w3-padding-32 w3-center" placeholder="Enter a value"/>
            <p class="w3-border w3-padding-large w3-padding-32 w3-right" style="width: 100%; overflow: scroll"><b>Conversion:</b> {{ ans }}</p>
        </div>
        <div class="w3-third w3-container">
          <p class="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
          <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
        </div>
      </div>

      <div class="w3-row" style="text-align: justify;">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">How to Convert Text to Binary?</h1>
            <p>Take the first character of the text string and convert it into the ASCII value. And then convert the ASCII value to the equivalent binary number. After the conversion the number you will get should be of 8-bits, if it is less then 8-bits then add zeros and make it 8-bits long.</p>
        </div>
        <div class="w3-third w3-container">
          <p class="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
          <p class="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
        </div>
      </div>

      <div class="w3-row w3-padding-64" style="text-align: justify;">
        <div class="w3-twothird w3-container">
          <h1 class="w3-text-teal">How to convert Binary to Text?</h1>
          <p>Take first eight characters binary given to you and convert it into the ASCII values. Now find out the ASCII value of the specific character.</p>
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
