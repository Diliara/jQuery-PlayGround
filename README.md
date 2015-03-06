# jQuery PlayGround

## Selection and Traversal

Functions for finding content in the document and navigating among the contents of the document.
	
### Selectors

1. **Multiple Selectors** - selects multiple selectors. Ex:
	
		$('ul, ol')
		
1. **Child Selector** - selects all DIRECT children ONLY. In ex, would select only direct child `li`s:
	
		$('ul > li')

1. **Descendant Selector** - selects all elements that are descendants of a given ancestor. In ex, would select even grand `li`s:
	
		$('ul li')
		
		
### Filter Selectors

1. **`:even`** - select even elements, **zero-indexed**. In ex, selects the **first** and every other after that (#0, #2, #4...):
	
		$('ul li:even')

1. **`:odd`** - select even elements, **zero-indexed** (#1, #3, #5...)
	
1. **`:first`** 

1. **`:last`**
			
		$('ul li:last')


### Traversing the DOM

1. **`.find('selector')`** - walks **down** the DOM to get specified descendants filtered by a selector, jQuery object, or element.
	
		$('ul li') => $('ul').find('li');

1. **`.first()`**

1. **`.last()`**

1. **`.prev()`**

1. **`.next()`**

		Selects second li:

		$('li').first().next();


1. **`.parent()`**

1. **`.children()`** - walks **down** the DOM to get specified DIRECT descendants ONLY

1. **`.closest('selector')`** - walks **up** the DOM to get first ancestor with specified selector.

	    $(this).closest('.someClass');


## Manipulation and CSS

Functions for editing and changing document content and working with CSS

1. **`.append(<element>)`** & **`.appendTo(<element>)`** - way to add a node as a **last child**. (different order of syntax)

			$(this).append($('<p>Hello</p>'));
    		$($('<p>Hello</p>')).appendTo(this);

1. **`.prepend(<element)`** & **`.prependTo(<element>)`** - ways to add a node as a **first child**. (different order of syntax)

1. **`.after(<element)`** & **`.insertAfter(<element>)`** - way to add a node **after**. (different order of syntax)

1. **`.before(<element)`** & **`.insertBefore(<element>)`** - way to add a node **before**. (different order of syntax)




## Events


## Effects


## AJAX

	 	
	 	
## Data Storage

1. **`.data(obj)`** - store data associated with the matched elements. Ex:

	 	HTML: <li data-price> </li>

	 	JS: .data('price');

