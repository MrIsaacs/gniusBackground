gniusBackground
===========

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
        <img src="http://th06.deviantart.net/fs32/PRE/f/2008/220/d/0/Save_the_World_Today_by_VoYtHAs.png" />
    </div>

###CSS:
    #gniusBackground{
        position    : fixed;
        top         : 50%;
        left        : 50%;
        overflow    : hidden;
        z-index     : 1;
    }