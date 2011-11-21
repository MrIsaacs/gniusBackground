/*
---

script: gniusBackground.js

version: 0.3.4

name: gniusBackground

description: gniusBackground resizes the background image dependent on its aspec ratio and with centered to a focus point.

license: MIT-style license

copyright: Copyright (c) Ivan Ilić (http://www.gnius.at/)

requires:
- core/Element.Dimensions

provides: [gniusBackground]

...
*/
var gniusBackground = new Class({
    Implements      : Options,

    options         : {
        width  : 1440,
        height : 900
    },

    initialize      : function(element, options){
        that = this;
        this.setOptions(options);

        window.addEvents({
            domready : function(){
                that.gniusBackground();
            },
            resize   : function(){
                that.gniusBackground();
            }
        });
    },

    gniusBackground : function(){
        var imageRatio  = this.options.width / this.options.height;
        var windowRatio = window.getSize().x / window.getSize().y;

        //width of window is more than width of image
        if(windowRatio > imageRatio)
        {
            $('gniusImg').setStyles(
            {
                width    : window.getSize().x,
                height   : window.getSize().x / imageRatio
            });
        }
        //width of window is smaller than width of image
        else
        {
            $('gniusImg').setStyles(
            {
                width    : window.getSize().y / (1 / imageRatio),
                height   : window.getSize().y
            });
        }

        $('gniusBackground').setStyles({
            'margin-top' : -($('gniusImg').getSize().y / 2) ,
            'margin-left': -($('gniusImg').getSize().x / 2)
        });
    }
});