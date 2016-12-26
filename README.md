# youtube.js

generate YouTube player

## Installation

```sh
$ npm install sasaplus1-prototype/youtube.js
```

## Usage

via `require()`

```js
var youtube = require('youtube');
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

callback style:

```js
youtube.register(function() {
  var instances = youtube.generate('.js-youtube', {
    onReady: function() {
      console.log('ready');
    }
  });
});
```

Promise style:

```js
youtube.register().then(function() {
  var instances = youtube.generate('.js-youtube', {
    onReady: function() {
      console.log('ready');
    }
  });
});
```

if you want to use Promise polyfill:

```js
youtube.Promise = require('bluebird');
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
- `return`
  - `Promise`

callback set to `window.onYouTubeIframeAPIReady` and register YouTube script.

## License

The MIT license.
