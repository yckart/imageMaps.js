/*!
 * imagemaps.js 0.0.1 - https://github.com/yckart/imageMaps.js
 * Responsive image maps to all browsers
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/09/11
 **/

(function ($) {

    this.imageMaps = function (img) {

        var resize = function () {

            var usemap = img.getAttribute('usemap');
            if (!usemap) return;

            var map = usemap.slice(1);
            var areas = document.querySelector('map[name=' + map + ']').getElementsByTagName('area');

            var tmp = new Image();
            tmp.onload = function () {
                this.onload = null;

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
                        coordsPercent[c] = !(c % 2) ? ((coords[c] / w) * 100) * wPercent : ((coords[c] / h) * 100) * hPercent;
                    }
                    area.setAttribute('coords', coordsPercent.join());
                }
            };
            tmp.setAttribute('src', img.getAttribute('src'));
        };

        resize();
        if (window.addEventListener) return window.addEventListener('resize', resize);
        if (window.attachEvent) return window.attachEvent('onresize', resize);
    };

    if ($) $.fn.imageMaps = function () {
        return this.each(function () {
            imageMaps(this);
        });
    };

}(this.jQuery || this.Zepto));