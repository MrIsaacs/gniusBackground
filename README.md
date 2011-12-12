gniusBackground
===========

![gniusBackgroun](http://gnius.at/gniusBackground/gniusBackground.png)
gniusBackground resizes the image in full-screen with aspec ratio depended on its browsers window size. It also has options to be scrollable or fixed.

How to use
----------

Just add this Code below in each section.

###Javascript:

    new gniusBackground('myElement',{
        scrollable  : false,
        width       : 894,
        height      : 894
    });

###HTML:

    <div id="myElement">
        <img src="yourImageHere" />
    </div>

###CSS:

    #myElement{
        top         : 50%;
        left        : 50%;
        z-index     : 1;
    }