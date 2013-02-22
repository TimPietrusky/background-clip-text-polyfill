# -webkit-background-clip: text polyfill

A SVG polyfill for ```-webkit-brackground-clip: text```

## How to use it?

Add the ```background-clip-text-polyfill.js``` to your page:

```html
<script src="https://raw.github.com/TimPietrusky/background-clip-text-polyfill/master/background-clip-text-polyfill.js"></script>
```

Use it on any element, put keep in mind that the SVG ```text``` can't handle line breaks, so your content will be in one line.

```javascript
var element = document.querySelector('.myelement'); 

/*
 * Call the polyfill
 *
 * patternID : the unique ID of the SVG pattern
 * patternURL : the URL to the background-image
 * class : the css-class applied to the SVG
 */
element.backgroundClipPolyfill({
  'patternID' : 'mypattern',
  'patternURL' : 'url/to/background/pattern',
  'class' : 'myelement'
});
```

## Live example

You can see this in action on my CodePen: [background-clip: text Polyfill](http://codepen.io/TimPietrusky/pen/cnvBk). 