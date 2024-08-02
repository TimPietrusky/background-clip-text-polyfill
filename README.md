# -webkit-background-clip: text polyfill

A SVG polyfill for ```-webkit-background-clip: text```

## What?

If you want to use ```background-clip: text``` it's only available in WebKit based browser

```css
h1 {
  background: url(http://timpietrusky.com/cdn/army.png) repeat;
  -webkit-background-clip: text;
}
```

This polyfill uses CSS feature detection and if ```-webkit-background-clip: text``` is not available, it replaces the specified dom element with a SVG like this:

```xml
<svg>
  <pattern id="mypattern" patternUnits="userSpaceOnUse" width="750" height="800">
    <image width="750" height="800" xlink:href="http://timpietrusky.com/cdn/army.png"></image>
  </pattern>
  <text x="0" y="80" class="headline" style="fill:url(#mypattern);">background-clip: text | Polyfill</text>
</svg>
```

## How to use it?

### 1. Add the polyfill to your page:

```html
<script src="https://raw.github.com/TimPietrusky/background-clip-text-polyfill/master/background-clip-text-polyfill.js"></script>
```

### 2. Call the polyfill

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

You can see this in action on my CodePen: [-webkit-background-clip: text Polyfill](http://codepen.io/TimPietrusky/pen/cnvBk). 

--------

Handcrafted 2013 by [Tim Pietrusky](http://timpietrusky.com) in Germany.
