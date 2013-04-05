(function( window, document ) {

  /**
   * Fuck My Dom messes up the structure of the document by randomly rearanging elements.
   *
   * @version 2.0.1
   **/
  var FuckMyDom = function() {

        /* {Integer} The default number of milliseconds to wait between each rearrangement */
    var DEFAULT_TIMEOUT                   = 50,

        /* {Integer} The default number of times to rearrange the DOM */   
        DEFAULT_ITERATIONS                = 350,

        /* {String} The selector string representing elements that can have children appended to them */   
        DEFAULT_PARENTABLE                = '*:not(link):not(script):not(head):not(meta):not(input):not(textarea):not(select):not(img)',

        /* {String} The selector string representing elements that cannot become children */ 
        DEFAULT_CHILDABLE                 = '*:not(body)',

        /* {Object} Select defaults for each method */
        DEFAULTS                          = {     
          timeout: DEFAULT_TIMEOUT,
          iterations: DEFAULT_TIMEOUT,
          parentable: DEFAULT_PARENTABLE,
          childable: DEFAULT_CHILDABLE
        },

        /* {Object} Stores temporary support data */
        cache                             = {};   

    /**
     * Extend a given object with all the properties in passed-in object(s).
     *
     * @param {Object} obj The object whose properties will be overridden
     * @return {Object} The merged object
     **/
    function merge( obj ) {
      var args = Array.prototype.slice.call( arguments, 1 ),
        len = args.length,
        i;

      for( i = 0; i < len; i++ ) {
        var mergee = args[ i ];

        if ( mergee ) {
          for (var prop in mergee) {
            obj[ prop ] = mergee[ prop ];
          }
        }
      }

      return obj;
    }

    /**
     * Retrieve and cache a collection of the elements specified by the given 
     * selector.
     *
     * @param {String} selector If the cache of all elements should be reloaded
     *  from the page.
     * @param {Boolean} reload If the cache of all elements should be reloaded
     *  from the page.
     * @return {NodeList} The collection of all elements in the document.
     **/
     function getElements( selector, reload ) {
      if( reload || !cache[ selector ] ) {
        cache[ selector ] = document.querySelectorAll( selector );
      }

      return cache[ selector ];
    }

    /**
     * Retrieve a random element from the document.
     *
     * @return {HTMLElement} The randomly retireved element.
     **/
    function getRandomElement( selector ) {
      var matchedElements = getElements( selector ),
        randomIndex = Math.ceil( Math.random() * matchedElements.length );

      return matchedElements[ randomIndex ];
    }

    /**
     * Choose two random elements and make the first a child of the second.
     *
     * @param {Object} options {
     *  parentable: A selector string representing elements that can have children appended to them
     *  childable: A selector string representing elements that cannot become children
     * }
     **/
    this.once = function( options ) {
      var options = merge( {}, DEFAULTS, options ),
        randomElement1 = getRandomElement( options.childable ),
        randomElement2 = getRandomElement( options.parentable );

      try {
        randomElement2.appendChild( randomElement1 );
        // if we get some sort of exception, try again. Seems dangerous.
      } catch ( exception ) {
        this.once( options );
      }
    };

    /**
     * Choose two random elements and make the first a child of the second for
     * iterations or the total number of elements in the document times.
     *
     * @param {Object} options {
     *  iterations: The number of times the DOM should be rearranged
     *  parentable: A selector string representing elements that can have children appended to them
     *  childable: A selector string representing elements that cannot become children
     * }
     **/
    this.up = function( options ) {
      var options = merge( {}, DEFAULTS, options );

      while( options.iterations-- ) {
        this.once( options );
      }
    };

    /**
     * Choose two random elements and make the first a child of the second for
     * iterations or the total number of elements in the document times, waiting
     * timeout milliseconds between each rearrangement.
     *
     * @param {Object} options {
     *  iterations: The number of times the DOM should be rearranged
     *  timeout: The number of milliseconds to wait between each rearrangement
     *  parentable: A selector string representing elements that can have children appended to them
     *  childable: A selector string representing elements that cannot become children
     * }
     **/
    this.slowly = function( options ) {
      var options = merge( {}, DEFAULTS, options ),
        self = this;

      (function upWithTimeout() {
        if( options.iterations !== 0 ) {
          self.once( options );
          options.iterations--;
          setTimeout( upWithTimeout, options.timeout );
        }
      }());
    };

  };

  window.FuckMyDom = new FuckMyDom();

}( window, document ));