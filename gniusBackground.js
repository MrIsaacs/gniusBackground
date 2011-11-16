 /*
---

script: gniusBackground.js

version: 0.3.4

name: gniusBackground

description: gniusBackground resizes the background image dependent on its aspec ratio and with centered to a focus point.

license: MIT-style license

authors:
- Ivan Ilić (http://www.gnius.at/)

requires:
- core/Element.Dimensions

provides: [gniusBackground]

...
*/

window.addEvents({
    domready    : function(){
        gniusBackground();
    },
    resize        : function(){
        gniusBackground();
    }
});

function gniusBackground(){
    var imageRatio = 1920 / 1020;
    var windowRatio = window.getSize().x / window.getSize().y;

    //width of window is more than width of image
    if(windowRatio > imageRatio)
    {
        $('background').setStyles(
        {
            width    : window.getSize().x,
            height   : window.getSize().x / imageRatio
        });
    }
    //width of window is smaller than width of image
    else
    {
        $('background').setStyles(
        {
            width    : window.getSize().y / (1 / imageRatio),
            height   : window.getSize().y
        });
    }

    $('bg').setStyles({
        'margin-top'    : (-$('background').getSize().y / 2) - 2,
        'margin-left'   : -($('background').getStyle('width').toInt() / 2),
        'height'        : $('background').getSize().y,
        'width'         : (window.getSize().x + $('background').getSize().x) / 2
    });
}