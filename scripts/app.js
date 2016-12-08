$(document).ready(function(){
  var $menu = $("#sidebar-wrapper");
    /*Using the three-parameter version of .on() means we're using a technique
    called "Event delegation". Event delegation means that the event will be
    handled for all elements which match the selector in the second parameter,
    regardless of when they are added to the document. We won't use this super
    power now, but because jQuery projects can get very complicated very
    quickly, using Event delegation is a best practce.*/
    $(document).on("click", ".js-menu-open", function() {
      $menu.addClass("open");
      return false;
      /*It should be clear at this point why we used classes, but what about those return false; lines? When you return the value "false" from an event handling function, this prevents jQuery from acting on the event in "ancestor" elements. Notice the <div id="sidebar-wrapper"> tag is a child of the <body> tag. This means that if we didn't stop this "event bubbling" by returning false, both the open and close events would occur when you clicked inside the open sidebar-wrapper element. By adding this simple line, we make sure the sidebar opens when we want it open, and closes when we want it close.*/
    })

    $(document).on("click", ".js-menu-close", function() {
      $menu.removeClass("open");
      return false;
    })

})
