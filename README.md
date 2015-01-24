# jQuery PlayGround

###1. Selection and Traversal:

Functions for finding content in the document and nagivating among the contents of the document.
	
1. **Selectors**
	1. **Multiple Selectors** - selects the combined results of 	all the specified selectors. Ex:		
	
			$(ul, ol)
		
	1. **Child Selector** - selects all *direct child* elements. In ex, would select only direct child `li`s:
	
			$(ul > li)

	1. **Descendant Selector** - selects all elements that are descendants of a given ancestor. In ex, would select even grand `li`s:
	
			$(ul li)
		
1. **Filter Selectors**

	1. **`:even`** - select even elements, *zero-indexed*. In ex, selects the *first* and every other after that (#0, #2, #4...):
	
			$('ul li:even')
			
	1. **`:odd`** - select even elements, *zero-indexed* (#1, #3, #5...)
	
	1. **`:first`** 

	1. **`:last`**
			
			$('ul li:last')

1. **Walking the DOM**

	1. **`.find(selector)`** - get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
	
			$('ul li') => $('ul').find('li');

	1. **`.closest(selector)`** - get the first ancestor element that matches the selector, beginning at the current element and walking *up* through the DOM.
	
	1. **`.first()`**			
		
	1. **`.prev()`**			
	
	1. **`.next()`**	
			
			Selects second li:
	
			$('li').first().next();
	
###2. Core Functionality:

Implements core jQuery functions as well as commonly used utilities.

1. **`.data(obj)`** - store data associated with the matched elements. Ex: 
	 	
	 	HTML: <li data-price> </li>
	 	
	 	JS: .data('price');

###3. **Events**


###4. **Effects**
	 	
	 	

