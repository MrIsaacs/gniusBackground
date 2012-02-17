/*
---
description: Resizes the "background-image" depended on its aspec ratio and with centered to a focus point.

license: MIT-style

authors:
- Ivan Ilić

requires:
  - core/1.4.1: Dimensions

provides: 
  - gniusBackground
...
*/

var gniusBackground = new Class({
    Implements      : Options,

    options         : {
        scrollable  : false,
        width       : 1440,
        height      : 900
    },

    initialize      : function (element, options) {
        var that = this;
        this.setOptions(options);

        window.addEvents({
            domready    : function () {
                that.gniusBackground($(element));
            },
            resize      : function () {
                that.gniusBackground($(element));
            }
        });
    },

    gniusBackground : function (element) {
        var imageRatio  = this.options.width / this.options.height,
            windowRatio = window.getSize().x / window.getSize().y,
            gniusImg    = element.getChildren()[0];

        //width of window is more than width of image
        if (windowRatio > imageRatio) {
            gniusImg.setStyles({
                width   : window.getSize().x + 2,
                height  : window.getSize().x / imageRatio
            });
        } else {
            gniusImg.setStyles({
                width   : window.getSize().y / (1 / imageRatio),
                height  : window.getSize().y + 1
            });
        }

        if (!this.options.scrollable) {
            // Set not scrollable Style behaviour.
            element.setStyles({
                'position'      : 'fixed',
                'overflow'      : 'hidden',
                'margin-top'    : -(gniusImg.getSize().y / 2) - 1,
                'margin-left'   : -(gniusImg.getSize().x / 2) - 1
            });
        } else {
            // Set scrollable Style behaviour.
            $('body').setStyles({
                'overflow-x'    : 'hidden'
            });

            element.setStyles({
                'position'      : 'absolute',
                'overflow-x'    : 'hidden',
                'margin-top'    : (-gniusImg.getSize().y / 2) - 1,
                'margin-left'   : -(gniusImg.getStyle('width').toInt() / 2),
                'height'        : gniusImg.getSize().y,
                'width'         : ((window.getSize().x + gniusImg.getSize().x) / 2) + 1
            });
        }
    }
});
