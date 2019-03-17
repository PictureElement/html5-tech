# DOM Manipulation

jQuery was created for a single reason: DOM traversal and manipulation. It came 
out at a time when manipulation of the DOM to enable rich, dynamic web 
experiences was somewhat new.

It used to be much more popular a few years ago, and now some of the needs of 
jQuery have been superseded by modern browsers, but this JavaScript library is 
still used by a lot of people.

## Selectors

The three main types of selectors in jQuery are:

1. Tag selectors: `$('tagname')`
2. Class selectors: `$('.classname')`
3. Id selectors: `$('#idname')`

Consider the following HTML:

```html
<div id='list-wrapper'>
  <ul class='name-list'>
    <li>Mario</li>
    <li>Kate</li>
    <li>Andrew</li>
  </ul>
</div>
```

We can use selectors to select and style elements on the page.

```javascript
// Id selector
$('#list-wrapper').css('border', '3px solid red');
// Class selector
$('.name-list').css('background', 'green'); 
// Tag selector
$('li').css('color', 'blue');
```

**Demo:**

<iframe style="width:100%;height:94px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/2.html"></iframe>

?> For more information on selectors please visit this [link](https://api.jquery.com/category/selectors/).

## DOM Traversal

jQuery provides a variety of methods that allow us to traverse the DOM. Most 
traversal methods are tree-traversal and that make sense since the DOM is a 
tree representation of the document. With traversal methods we can move up, down 
or sideways, visiting ancestors, descendants and siblings.

1. `.parent([selector ])`: Get the parent of each element in the current set of 
matched elements, optionally filtered by a selector.
2. `.parents([selector])`: Get the ancestors of each element in the current set 
of matched elements, optionally filtered by a selector.
3. `.children([selector])`: Get the children of each element in the set of 
matched elements, optionally filtered by a selector.
4. `.siblings([selector])`: Get the siblings of each element in the set of 
matched elements, optionally filtered by a selector.
5. `.find(selector)`: Get the descendants of each element in the current set of 
matched elements, filtered by a selector, jQuery object, or element.

?> Mind that parameters inside [] are optional.

Consider the following HTML:

```html
<div id='Marios'>
  Marios
  <div id='Ioanna'>
    ----Ioanna
    <div id='Konstantina'>
      --------Konstantina
      <div id='Antreas'>
        ------------Antreas
        <div id='Neofitos'>
          ----------------Neofitos
          <div id='Georgia'>
            --------------------Georgia
            <div id='Lakis'>
              ------------------------Lakis
            </div>
            <div id='Alekos'>
              ------------------------Alekos
            </div>
          </div>
          <div id='Sotiris'>
            --------------------Sotiris
            <div id='Athos'>
              ------------------------Athos
            </div>
          </div>
        </div>
        <div id='Eleni'>
          ----------------Eleni
        </div>
      </div>
      <div id='Giannis'>
        ------------Giannis
      </div>
    </div>
  </div>
</div>
```

... and CSS:

```css
.cyan::first-line {
  color: cyan;
}

.red::first-line {
  color: red;
}

.purple::first-line {
  color: purple;
}

.green::first-line {
  color: green;
}

.yellow::first-line {
  color: yellow;
}
```

```javascript
// Immediate ancestor
var ancestor = $('#Antreas').parent();
ancestor.addClass('cyan');

// Ancestors (Use 'div' to filter out the <body>)
var ancestors = $('#Konstantina').parents('div');
ancestors.addClass('red');

// Immediate descendants
var immediateDesc = $('#Antreas').children();
immediateDesc.addClass('purple');

// Descendants (Unlike the other methods the parameter for the
// find() method is mandatory)
var descendants = $('#Neofitos').find('*');
descendants.addClass('green');

// Siblings
var siblings = $('#Antreas').siblings();
siblings.addClass('yellow');
```

**Demo:**

<iframe style="width:100%;height:220px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/3.html"></iframe>

?> For more information on traversal methods please visit this [link](https://api.jquery.com/category/traversing/).

## Toggling Classes

1. `.addClass(className)`: Add the specified class(es) to each element in the 
set of matched elements.
2. `.addClass(function)`: Add the specified class(es) to each element in the set 
of matched elements.
3. `.toggleClass(className)`: Add or remove one or more classes from each 
element in the set of matched elements.
4. `.next([selector])`: Get the immediately following sibling of each element in 
the set of matched elements.

?> Mind that parameters inside [] are optional.

Consider the following HTML:

```html
<div id='example-1'>
  <strong>Example 1</strong>
</div>
<br>
<div id='example-2'>
  <strong>Example 2</strong>
</div>
<br>
<div id='example-3' class='yellow-bg'>
  <strong>Example 3</strong>
</div>
<br>
<div id='example-4'>
  <strong>Example 4</strong>
</div>
<br>
<div id='example-5.1' class='lime-border'>
  <strong>Example 5.1</strong>
</div>
<div id='example-5.2'>
  <strong>Example 5.2</strong>
</div>
```

... and CSS:

```css
.red-border {
  border: 5px solid red;
  padding: 10px;
}

.green-border {
  border: 5px solid green;
  padding: 10px;
}

.orange-border {
  border: 5px solid orange;
}

.lime-border {
  border: 5px solid lime;
}

.blue-bg {
  background: blue;
}

.yellow-bg {
  background: yellow;
}

.purple-bg {
  background: purple;
}
```

We can add or remove classes on various elements with jQuery as follows:

```javascript
// Example 1: Add 'red-border' class to div#example-1
$('#example-1').addClass('red-border');

// Example 2: Add 'green-border' & 'blue-bg' classes to div#example-2
function myFunct1() {
  var cssClass = 'green-border blue-bg';
  return cssClass;
}
$('#example-2').addClass(myFunct1);

// Example 3: Toggle (remove) 'yellow-bg' class from div#example-3 & add an 
// 'orange-border' class
var example3 = $('.yellow-bg');
example3.toggleClass('yellow-bg');
example3.addClass('orange-border');

// Example 4: Toggle (add) 'purple-bg' class to div#example-4
$('#example-4').toggleClass('purple-bg');

// Example 5: Toggle (remove) 'lime-border' class from div#example-5.1 & add 
// it to div#example-5.2
var example5_1 = $('.lime-border');
example5_1.toggleClass('lime-border');
var example5_2 = example5_1.next();
example5_2.toggleClass('lime-border');
```

**Demo:**

<iframe style="width:100%;height:265px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/4.html"></iframe>

## Changing Attributes

1. `.attr(attributeName)`: Get the value of an attribute for the first element 
in the set of matched elements.
2. `.attr(attributeName, value)`: Set one or more attributes for the set of 
matched elements.
3. `.first()`: Reduce the set of matched elements to the first in the set.
4. `.find(selector)`: Get the descendants of each element in the current set of 
matched elements, filtered by a selector, jQuery object, or element.

Consider the following HTML:

```html
<ul>
  <li><a>Microsoft</a></li>
  <li><a href='https://www.apple.com/'>Apple</a></li>
  <li><a href='https://www.amazon.com/'>Amazon</a></li>
  <li><a href='https://abc.xyz/'>Alphabet</a></li>
  <li><a href='https://www.ibm.com'>IBM</a></li>
</ul>
```

**Demo:**

<iframe style="width:100%;height:130px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/5-1.html"></iframe>

We can use jQuery to add an href attribute on the anchor element like that:

```javascript
// Select all of the list items
var items = $('ul li');
// Select the first list item
var firstItem = items.first();
// Select the anchor element
var link = firstItem.find('a');
// Add 'href' attribute
$(link).attr('href', 'https://www.microsoft.com');
```

**Demo:**

<iframe style="width:100%;height:130px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/5-2.html"></iframe>

## Modifying CSS

1. `.css(propertyName)`: Get the computed style properties for the first element 
in the set of matched elements.
2. `.css(propertyName, value)`: Set one or more CSS properties for the set of 
matched elements by modifying the element's 'style' property.

Consider the following HTML:

```html
<h1 id='heading'>HELLO WORLD</h1>
```

We can set one or more CSS properties with jQuery as follows:

```javascript
// Select heading
var heading = $('#heading');
// Apply a single style
heading.css('color', '#007f7f');
// Apply multiple styles
heading.css({
  'text-decoration': 'overline',
  'text-shadow': '-2px 0 #333'
});
```

**Demo:**

<iframe style="width:100%;height:85px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/6.html"></iframe>

## Pulling HTML/Text

1. `.html()`: Get the HTML contents of the first element in the set of matched 
elements.
2. `.text()`: Get the combined text contents of each element in the set of 
matched elements, including their descendants.

Consider the following HTML:

```html
<div id='wrapper'>
  <h3>Largest car manufacturers (2016)</h3>
  <ul>
    <li>Toyota</li>
    <li>Volkswagen</li>
    <li>Hyundai/Kia</li>
    <li>General Motors</li>
  </ul>
</div>
```

**Demo:**

<iframe style="width:100%;height:160px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/7.html"></iframe>

We can pull HTML and Text with jQuery as follows:

```javascript
var htmlContents = $('#wrapper').html();
console.log(htmlContents);
/*
<h3>Largest car manufacturers (2016)</h3>
<ul>
    <li>Toyota</li>
    <li>Volkswagen</li>
    <li>Hyundai/Kia</li>
    <li>General Motors</li>
</ul>
*/
var htmlText = $('#wrapper').text();
console.log(htmlText);
/*
Largest car manufacturers (2016)
    Toyota
    Volkswagen
    Hyundai/Kia
    General Motors
*/
```

## Collecting Values

1. `.text(text)`: Set the content of each element in the set of matched elements 
to the specified text.
2. `.change(handler)`: Bind an event handler to the 'change' JavaScript event, 
or trigger that event on an element. The change event is sent to an element when 
its value changes. This event is limited to &lt;input>, &lt;select>, and 
&lt;textarea>. For select boxes, checkboxes, and radio buttons, the event is 
fired immediately when the user makes a selection with the mouse, but for other 
element types such as input fields, the event is postpone until the element 
loses focus.
3. `on('change', handler)`: Bind an event handler to the 'change' JavaScript 
event, or trigger that event on an element. The change event is sent to an 
element when its value changes. This event is limited to &lt;input>, 
&lt;select>, and &lt;textarea>. For select boxes, checkboxes, and radio buttons, 
the event is fired immediately when the user makes a selection with the mouse, 
but for other element types such as input fields, the event is postpone until 
the element loses focus.
4. `.val()`: Get the current value of the first element in the set of matched 
elements. Primarily used to get the values of form elements such as &lt;input>, 
&lt;select> and &lt;textarea>.

?> Mind that `.change(handler)` is equivalent to `.on('change', handler)`

Consider the following HTML:

```html
<p>Write something in the input field below, and then click outside the field.</p>
<form>
  Custom Header Text:
  <input id='input' type='text'>
</form>
<h1 style='color:#007f7f;text-shadow:-2px 0 #333;' id='live-header'>Default Text</h1>
```

We can add an event listener that runs every time the input changes. The event 
handler will get the value from the input field and use it to set the header 
content:

```javascript
// Event listener that will run any time the input changes
$('#input').change(function () {
  // Get the curent value of the input element
  var val = $('#input').val();
  // Set the content of heading element
  $('#live-header').text(val);
});
```

**Demo:**

<iframe style="width:100%;height:155px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/8.html"></iframe>

## Removing DOM Elements

1. `.remove([selector])`: Remove the set of matched elements from the DOM.
2. `.children([selector])`: Get the children of each element in the set of 
matched elements, optionally filtered by a selector.

?> Mind that parameters inside [] are optional.

Consider the following HTML:

```html
<h3>Largest Countries in the World</h3>
<ol>
  <li>Russia</li>
  <li>Canada</li>
  <li>USA</li>
  <li>China</li>
  <li>Brazil</li>
</ol>
```

**Demo:**

<iframe style="width:100%;height:170px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/9-1.html"></iframe>

We can use `.remove()` to remove the list and its content from the DOM as 
follows:

```javascript
// Select list
var list = $('#list-wrapper').children('ol');
// Remove the list itself, as well as everything inside it
list.remove();
```

**Demo:**

<iframe style="width:100%;height:170px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/9-2.html"></iframe>

## Adding DOM Elements

1. `.append(content, [content])`: Insert content, specified by the parameter, to 
the end of each element in the set of matched elements.
2. `.prepend(content, [content])`: Insert content, specified by the parameter, 
to the beginning of each element in the set of matched elements.
3. `.insertBefore(target)`: Insert every element in the set of matched elements 
before the target.
4. `.insertAfter(target)`: Insert every element in the set of matched elements 
after the target.
5. `.before(content[,content])`: Insert content, specified by the parameter, 
before each element in the set of matched elements.
6. `.after(content[,content])`: Insert content, specified by the parameter, 
after each element in the set of matched elements.

?> The **content** type could be a DOM element, a text node, an array of 
elements and text nodes, an HTML string, or a jQuery object. Mind that 
parameters inside [] are optional.

**Example 1:**

*HTML(Before)*

```html
<h3>Adding childs</h3>
<div id='example-1'>
  <hr>
</div>
<h3>Adding siblings</h3>
<div id='example-2'>
  <hr>
</div>
```

*jQuery*

```javascript
// Add child elements
$('#example-1').append('<p>.append()</p>');
$('#example-1').prepend('<p>.prepend()</p>');

// Add sibling elements
var content1 = $('<p>.insertAfter()</p>');
var content2 = $('<p>.insertBefore()</p>');
content1.insertAfter('#example-2');
content2.insertBefore('#example-2');
```

*HTML (After)*

```html
<h3>Adding childs</h3>
<div id='example-1'>
  <p>.prepend()</p>
  <hr>
  <p>.append()</p>
</div>
<h3>Adding siblings</h3>
<p>.insertBefore()</p>
<div id='example-2'>
  <hr>
</div>
<p>.insertAfter()</p>
```

**Example 2:**

```html
<div id='family-tree'>
  <div id='family1'>
    <h3>Family1</h3>
    <div id='alex'>
      <h4>Alex</h4>
      <div id='jane'>
        <h5>Jane</h5>
      </div>
    </div>
    <div id='taylor'>
      <h4>Taylor</h4>
      <div id='bob'>
        <h5>Bob</h5>
      </div>
    </div>
  </div>
</div>
```

**Demo:**

<iframe style="width:100%;height:220px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/10-1.html"></iframe>

Using jQuery we are going to add the following elements to the DOM:

1. `#family2` should be a sibling of and come after `#family1`.
2. `#bruce` should be the only immediate child of `#family2`.
3. `#bruce` should have two &lt;div>s as children, `#madison` and `#hunter`.

```javascript
// Add '#family2' after '#family1'
var content = $("<div id='family2'><h3>Family2</h3></div>");
content.insertAfter('#family1');

// Add '#bruce' as a child of '#family2'
$('#family2').append("<div id='bruce'><h4>Bruce</h4></div>");

// Add '#madison' as a child of '#bruce'
$('#bruce').append("<div id='madison'><h5>Madison</h5></div>");

// Add '#hunter' as a child of '#bruce'
$('#bruce').append("<div id='hunter'><h5>Hunter</h5></div>");
```

**Demo:**

<iframe style="width:100%;height:380px;padding:0 1.4rem;margin:0;" src="_demos/basic-jquery/10-2.html"></iframe>
