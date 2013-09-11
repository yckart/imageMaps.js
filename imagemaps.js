/*!
 * imagemaps.js 0.0.1 - https://github.com/yckart/imageMaps.js
 * Responsive image maps to all browsers
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/09/11
 **/

var imageMaps = function (imgs) {

    var resize = function () {
        for (var i = 0, img; (img = imgs[i]); i++) {

            var usemap = img.getAttribute('usemap');
            if (!usemap) continue;

            var map = usemap.slice(1);
            var areas = document.querySelector('map[name=' + map + ']').getElementsByTagName('area');

            var tmp = new Image();
            tmp.onload = (function (i) {
                return function () {
                    this.onload = null;
                    img = imgs[i];

                    var w = img.getAttribute('width') || this.width;
                    var h = img.getAttribute('height') || this.height;

                    var wPercent = img.clientWidth / 100;
                    var hPercent = img.clientHeight / 100;

                    for (var a = 0, area; (area = areas[a++]);) {

                        if (!area.coord) area.coord = area.getAttribute('coords');

                        var coords = area.coord.split(','),
                            c = coords.length,
                            coordsPercent = [];

                        while (c--) {
                            coordsPercent[c] = !(c % 2) ?
                                ((coords[c] / w) * 100) * wPercent :
                                ((coords[c] / h) * 100) * hPercent;
                        }
                        area.setAttribute('coords', coordsPercent.join());
                    }
                };
            }(i));
            tmp.setAttribute('src', img.getAttribute('src'));
        }
    };

    resize();
    if (window.addEventListener) return window.addEventListener('resize', resize, false);
    if (window.attachEvent) return window.attachEvent('onresize', resize);
};