How to use
===========================================

Javascript:
#JS

new gniusBackground('myElement',{
    width   : 894,
    height  : 894
});

HTML:
#HTML
<div id="myElement">
    <img src="http://th06.deviantart.net/fs32/PRE/f/2008/220/d/0/Save_the_World_Today_by_VoYtHAs.png" />
</div>

CSS:
#CSS
body{
    margin    : 0;
    padding    : 0;
}
#gniusBackground{
    position    : fixed;
    top         : 50%;
    left        : 50%;
    overflow    : hidden;
    z-index     : 1;
}