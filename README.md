#No *full* documentation yet!

##Usage

    <map name="uniqueimagemapname">
        <area href="/" shape="poly" coords="125.9,377.6,311.03,259.13,488.8,377.6,488.8,658.9,125.9,658.9" title="Poly">
        <area href="/" shape="circle" coords="733.2,681.1,170.3" title="Arc">
        <area href="/" shape="rect" coords="955.3,199.9,1266.35,384.9" title="Rect">
    </map>
    <img src="imagemap.png" usemap="#uniqueimagemapname" />

###Vanilla

    var imgs = document.querySelectorAll('img[usemap]');
    for (var i = 0, img; (img = imgs[i]); i++) {
        imageMaps(img);
    }

###jQuery

    $('img[usemap]').imageMaps();

#Support

[@yckart](http://twitter.com/yckart/) #imagemaps


###License
Copyright (c) 2013 Yannick Albert ([http://yckart.com](http://yckart.com))

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.