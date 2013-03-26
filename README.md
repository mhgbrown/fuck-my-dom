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

.up( [iterations] )

#### Parameters

```iterations``` The number of rearrangements to perform.

### slowly

Randomly rearrange all the elements on the page and pause
before each rearrangement

.slowly( [iterations], [timeout] )

#### Parameters

```iterations``` The number of rearrangements to perform.

```timeout``` The number of milleseconds to wait between each rearragement.

### once

.once()
