/**
 * Download FuckMyDom and call slowly()
 **/
(function( window ) {

  var stag;

  if( !window.FuckMyDom ) {
    stag = document.createElement( 'script' );
    stag.setAttribute( 'src', 'https://rawgithub.com/discom4rt/fuck-my-dom/master/fuck-my-dom.js' );
    stag.onload = function(){ FuckMyDom.slowly(); };
    document.body.appendChild( stag );
  } else {
    FuckMyDom.slowly();
  }

}( window ));