# Fuck My Dom

Fuck My Dom messes up the structure of the document by randomly rearanging elements.

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

.up( [options] )

```options``` An object containing configuration information for the call

* ```iterations``` The number of rearrangements to perform.
* ```parentable``` A selector string representing elements that can have children appended to them
* ```childable``` A selector string representing elements that cannot become children

### slowly

Randomly rearrange all the elements on the page and pause
before each rearrangement

.slowly( [options] )

```options``` An object containing configuration information for the call

* ```iterations``` The number of rearrangements to perform.
* ```timeout``` The number of milliseconds to wait between each rearrangement
* ```parentable``` A selector string representing elements that can have children appended to them
* ```childable``` A selector string representing elements that cannot become children

### once

Randomly rearrange one element on the page.

.once( [options] )

```options``` An object containing configuration information for the call

* ```parentable``` A selector string representing elements that can have children appended to them
* ```childable``` A selector string representing elements that cannot become children
