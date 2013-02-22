/**
 * A SVG polyfill for "-webkit-brackground-clip: text;".
 *
 * How to use:
 * 
 * 1. Add the polyfill to your page.
 *
 * 2. Call the polyfill

  var element = document.querySelector('.myelement'); 
  element.backgroundClipPolyfill({
    'patternID' : 'mypattern',
    'patternURL' : 'url/to/background/pattern',
    'class' : 'myelement'
  });
  
 * 
 * Variables:
 *
 * patternID : the unique ID of the SVG pattern
 * patternURL : the URL to the background-image
 * class : the css-class applied to the SVG
 *
 *
 * 2013 by Tim Pietrusky
 * timpietrusky.com
 */
Element.prototype.backgroundClipPolyfill = function () {
  var a = arguments[0],
      d = document,
      b = d.body,
      el = this;

  function hasBackgroundClip() {
    return b.style.webkitBackgroundClip != undefined;
  };
  
  function addAttributes(el, attributes) {
    for (var key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  }
  
  function createSvgElement(tagname) {
    return d.createElementNS('http://www.w3.org/2000/svg', tagname);
  }
  
  function createSVG() {
    var a = arguments[0],
        svg = createSvgElement('svg'),
        pattern = createSvgElement('pattern'),
        image = createSvgElement('image'),
        text = createSvgElement('text');
    
    // Add attributes to elements
    addAttributes(pattern, {
      'id' : a.id,
      'patternUnits' : 'userSpaceOnUse',
      'width' : a.width,
      'height' : a.height
    });
    
    addAttributes(image, {
      'width' : a.width,
      'height' : a.height
    });
    image.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a.url);
    
    addAttributes(text, {
      'x' : 0,
      'y' : 80,
      'class' : a.class,
      'style' : 'fill:url(#' + a.id + ');'
    });
    
    // Set text
    text.textContent = a.text;
      
    // Add elements to pattern
    pattern.appendChild(image);
      
    // Add elements to SVG
    svg.appendChild(pattern);
    svg.appendChild(text);
    
    return svg;
  };
  
  /*
   * Replace the element if background-clip
   * is not available.
   */
  if (!hasBackgroundClip()) {
    var img = new Image();
    img.onload = function() {
      var svg = createSVG({
        'id' : a.patternID,
        'url' : a.patternURL,
        'class' : a.class,
        'width' : this.width,
        'height' : this.height,
        'text' : el.textContent
      });
      
      el.parentNode.replaceChild(svg, el);
    }
    img.src = a.patternURL;
  }
};