## jQuery PlayGround

Related Links

1. [jQuery-PlayGroud on GitHub pages](http://diliara.github.io/jQuery-PlayGround/)
1. [jQuery API Documentation] (http://api.jquery.com/)



## Refresher


### Selection and Traversal

Functions for finding content in the document and navigating among the contents of the document.
	
#### Selectors

1. **Multiple Selectors** - selects multiple selectors. Ex:
	
		$('ul, ol')
		
1. **Child Selector** - selects all DIRECT children ONLY. In ex, would select only direct child `li`s:
	
		$('ul > li')

1. **Descendant Selector** - selects all elements that are descendants of a given ancestor. In ex, would select even grand `li`s:
	
		$('ul li')
		
		
#### Filter Selectors

1. **`:even`** - select even elements, **zero-indexed**. In ex, selects the **first** and every other after that (#0, #2, #4...):
	
		$('ul li:even')

1. **`:odd`** - select even elements, **zero-indexed** (#1, #3, #5...)
	
1. **`:first`** 

1. **`:last`**
			
		$('ul li:last')


#### Traversing the DOM

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
	    
1. [** `.filter()`**](http://api.jquery.com/filter/)

		Example
		---------
		
		HTML:   <div id="filters">
                	<button data-filter=".asia" class="filter">Asia</button>
                	<button data-filter=".europe" class="filter">Europe</button>
            	</div>
            	
        JS:  	$(".filter").click(function () {
        			var by = $(this).data('filter');
        			//whatever you wanna do with the filter
        			$('.highlighted').removeClass('highlighted');
        			$('.vacation').filter(by).addClass('highlighted');
    			);


	    
	    
	    


### Manipulation and [CSS](http://api.jquery.com/category/css/)

Functions for editing and changing document content and working with CSS

1. **`.append(<element>)`** & **`.appendTo(<element>)`** - way to add a node as a **last child**. (different order of syntax)

		Example
		---------

		$(this).append($('<p>Hello</p>'));

    	$($('<p>Hello</p>')).appendTo(this);

1. **`.prepend(<element>)`** & **`.prependTo(<element>)`** - ways to add a node as a **first child**. (different order of syntax)

1. **`.after(<element>)`** & **`.insertAfter(<element>)`** - way to add a node **after**. (different order of syntax)

1. **`.before(<element>)`** & **`.insertBefore(<element>)`** - way to add a node **before**. (different order of syntax)


1. **`.addClass(<class>)`**, **`.removeClass(<class>)`** and **`.toggleClass(<class>)`**




1. [**`.hasClass()`**](http://api.jquery.com/hasclass/) 

1. [**`.val()`**](http://api.jquery.com/val/)



### [Events](http://api.jquery.com/category/events/)

1. **`.click()`**

1. **`.on()`** -


        $('.quantity').on('keyup', function () {
           var price = +$(this).closest('.vacation').data('price')
           var quantity = +$(this).val();
           var total = $(this).closest('.vacation').find('.total');
           $(total).text(price * quantity);
        });

	Note: Use + (plus) to convert string to a number

1. **`.keyup()`**


1. [**`event.preventDefault()`**](http://api.jquery.com/event.preventdefault/) - prevents default action of the event. For example, if there is a js event on `<a href="#"></a>`, we can use preventDefault to prevent browser action on `href="#"`

		HTML: 	<a href="#">More Details</a>


		JS:		$(".show-hide-btn").on('click', showDetails)

				function showDetails(evt) {
    				evt.preventDefault();
    				...
				}






### [Effects](http://api.jquery.com/category/effects/)

1. **`.slideDown()`**, **`.slideUp()`**, and **`.slideToggle()`**

		Example
		---------

		HTML:   <div>
		            <p class="show-hide-btn"><a>More Details</a></p>
                    <div class="details">
                        <p>Some details here</p>
                    </div>
                </div>

        JS:     $(".show-hide-btn").click(function () {
                    $(this).siblings().not(".show-hide-btn").slideToggle();
                });


1. **`.fadeIn()`**, **`.fadeOut()`**, and **`.fadeToggle()`**



### [Utilities](http://api.jquery.com/category/utilities/)

1. **`.each()`**


		Example
		---------

		HTML:  ...<p class="price">$<span class="price-amount">0</span> / ticket</p>...

        JS:     $('.price-amount').each(function () {
                    var priceAmount = $(this).closest('.vacation').data('price');
                    $(this).text(priceAmount);
                })


1. **`.data(obj)`** - store data associated with the matched elements.

		Example
		---------

	 	HTML:   <div class="vacation" data-price="1845">...



### AJAX



### PROPERTIES

1. [**`.length`**](http://api.jquery.com/length/) - number of elements in jQuery object.

		JS: 	console.log($('button').length);
		
		Outputs number of buttons on the page