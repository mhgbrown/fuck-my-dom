# Fuck My Dom

Fuck My Dom messes up the structure of the document by randomly rearanging elements.

[Try it]()

[Bookmarklet](javascript:(function(\) {
	var stag = document.createElement( 'script' \);
	stag.setAttribute( 'src', 'https://raw.github.com/discom4rt/fuck-my-dom/master/fuck-my-dom.js' \);
	stag.setAttribute( 'async' \);
	document.body.appendChild( stag \);
}(\)\))

## Example

	/**
	 * Destroy this thing
	 **/
	window.onload = function() {
		FuckMyDom.up();
	};

## Usage

### up

Randomly rearrange all the elements on the page.

.up( [iterations] )

```iterations``` The number of rearrangements to perform.

### slowly

Randomly rearrange all the elements on the page and pause
before each rearrangement

.slowly( [iterations], [timeout] )

```iterations``` The number of rearrangements to perform.

```timeout``` The number of milleseconds to wait between each rearragement.

### once

Randomly rearrange one element on the page.

.once()
