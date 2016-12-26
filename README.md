# youtube.js

generate YouTube player

## Installation

```sh
$ npm install sasaplus1-prototype/youtube.js
```

## Usage

via `require()`

```js
var generateYoutube = require('youtube');
```

via `<script>`

```html
<script src="youtube.min.js"></script>
```

### Example

```html
<div class="js-youtube">
  <script type="application/json">
    {
      "width": 640,
      "height": 480,
      "videoId": "wCFIV8b9pxk",
      "playerVars": {
        "html5": 1
      }
    }
  </script>
</div>

<div class="js-youtube">
  <script type="application/json">
    {
      "width": 640,
      "height": 480,
      "videoId": "Y5n2zrS4x1I",
      "playerVars": {
        "html5": 1
      }
    }
  </script>
</div>
```

```js
youtube.register(function() {
  youtube.generate('.js-youtube', {
    onReady: function() {
      console.log('ready');
    }
  });
});
```

## Functions

### generate(selector, events)

- `selector`
  - `String`
- `events`
  - `Object`
- `return`
  - `Player[]`

create YT.Player instances.

### register([callback])

- `callback`
  - `Function`

callback set to `window.onYouTubeIframeAPIReady` and register YouTube script.

## License

The MIT license.
