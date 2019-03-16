# Basic jQuery

jQuery is a popular JavaScript library. The reasons that made jQuery so successful are:

- Easy DOM manipulation
- Easy selection
- Cross-browser compatibility
- Simplicity
- Fast & small footprint

jQuery is defined as a function. The `$` is just a pointer to the `jQuery` function. Therefore, `$` is equivalent to `jQuery`:

```javascript
// The following two statements are equivalent
$('#id').append(content);
jQuery('#id').append(content);
```
## jQuery for DOM

jQuery exists because sometimes manipulating the DOM with Vanilla JavaScript isn't easy. 

The sample code below shows how we can add new page content using JavaScript and jQuery:

[](_demos/4.html ':include :type=code html')

This will render as:

<iframe style="width:100%;height:90px;padding: 0 1.4rem;" src="_demos/4.html"></iframe>

## Document Object Model

The Document Object Model (DOM) is a programming interface for HTML documents. It's an object-oriented representation of the web page itself. The DOM represents the document as nodes and objects thus allowing page modifications via a scripting language (DOM is language agnostic) such as JavaScript. Different browsers have different implementations of the DOM however, they all comply with certain web standards.

```html
<body>
  <div>
    <div>
      <form>
        <input>
      </form>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</body>
```

The DOM representation of the document above resembles a tree-like structure:

```text
body (root)
div
div
form, ul
input, li, li (leaves)
```

## How to include jQuery

```html
<!-- Local -->
<script src='jquery-3.2.1.min.js'></script>
<!-- Official -->
<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<!-- CDN -->
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
```

?> If you use a CDN, users' browsers will recognize that they already have a cached copy of jQuery from the same CDN. When the site loads, they don't need to download it again. So those extra KBs from jquery.min.js won't be downloaded, and your site will load faster.