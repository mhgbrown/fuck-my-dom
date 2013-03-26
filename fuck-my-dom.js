(function( window, document ) {

  /**
   * Fuck My Dom messes up the structure of the document by randomly rearanging elements.
   *
   * @version 1.0.0
   **/
  window.FuckMyDom = {

    /* {String} The cache key to retrieve all elements */
    ALL_ELEMENTS_CACHE_KEY: 'ae',

    /* {Integer} The default number of milliseconds to between   */
    DEFAULT_TIMEOUT: 100,

    /* {Object} Stores temporary support data */
    cache: {},

    /**
     * Retrieve and cache a collection of all the elements on the page.
     *
     * @param {Boolean} reload If the cache of all elements should be reloaded
     *  from the page.
     * @return {HTMLCollection} The collection of all elements in the document.
     **/
    getAllElements: function( reload ) {
      if( reload || !this.cache[ this.ALL_ELEMENTS_CACHE_KEY ] ) {
        this.cache[ this.ALL_ELEMENTS_CACHE_KEY ] = document.getElementsByTagName( '*' );
      }

      return this.cache[ this.ALL_ELEMENTS_CACHE_KEY ];
    },

    /**
     * Retrieve a random element from the document.
     *
     * @return {HTMLElement} The randomly retireved element.
     **/
    getRandomElement: function() {
      var allElements = this.getAllElements(),
        randomIndex = Math.ceil( Math.random() * allElements.length );

      return allElements[ randomIndex ];
    },

    /**
     * Choose two random elements and make the first a child of the second.
     **/
    once: function() {
      var randomElement1 = this.getRandomElement(),
        randomElement2 = this.getRandomElement();

      try {
        randomElement2.appendChild( randomElement1 );
        // if we get some sort of exception, try again. Seems dangerous.
      } catch ( exception ) {
        this.once();
      }
    },

    /**
     * Choose two random elements and make the first a child of the second for
     * iterations or the total number of elements in the document times.
     *
     * @param {Integer} iterations The number of times to rearrange DOM elements
     **/
    up: function( iterations ) {
      var times = iterations || this.getAllElements().length;

      while( times-- ) {
        this.once();
      }
    },

    /**
     * Choose two random elements and make the first a child of the second for
     * iterations or the total number of elements in the document times, waiting
     * timeout milliseconds between each rearrangement.
     *
     * @param {Integer} iterations The number of times to rearrange DOM elements.
     * @param {Integer} timeout The number of milliseconds to wait between each rearrangement.
     **/
    slowly: function( iterations, timeout ) {
      var wait = timeout || this.DEFAULT_TIMEOUT,
        self = this,
        times;

      if( iterations === 0 ) {
        times = 0;
      } else {
        times = iterations || this.getAllElements().length;
      }

      if( times === 0 ) {
        return;
      } else {
        this.once();
        setTimeout(function() {
          self.slowly( --times, wait );
        }, wait);
      }
    }
  };

}( window, document ));