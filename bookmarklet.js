/**
 * Download FuckMyDom and call slowly()
 **/
(function( window, document, undefined ) {

  var stag;

  if( !window.FuckMyDom ) {
    stag = document.createElement( 'script' );
    stag.setAttribute( 'src', 'http://discom4rt.github.io/fuck-my-dom/fuck-my-dom.js' );
    stag.onload = function(){ FuckMyDom.slowly(); };
    document.body.appendChild( stag );
  } else {
    FuckMyDom.slowly();
  }

}( window, document ));