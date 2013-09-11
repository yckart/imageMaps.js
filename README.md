#No *full* documentation yet!

#Usage

##Vanilla
    <map name="beachmap">
        <area href="/" shape="poly" coords="17,51,42,35,66,51,66,89,17,89" title="Beach hut - where you get changed" />
        <area shape="circle" coords="99,92,12" />
        <area href="/" shape="circle" coords="99,92,23" title="Life ring - to help you swim" />
        <area href="/" shape="rect" coords="129,27,171,52" title="Flag - says if it safe to swim" />
    </map>
    <img src="http://www.howtocreate.co.uk/tutorials/jsexamples/imagemap.png" usemap="#beachmap" />

    var imgs = document.querySelectorAll('img[usemap]');
    for (var i = 0, img; (img = imgs[i]); i++) {
        imageMaps(img);
    }

##jQuery

    $('img[usemap]').imageMaps();

#Support

[@yckart](http://twitter.com/yckart/) #imagemaps


###License
Copyright (c) 2013 Yannick Albert ([http://yckart.com](http://yckart.com))

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.