'use strict';

// NOTE: get global object by any environment
var Promise = Function('return this')().Promise;

var origin = require('location-origin').get();

/**
 * generate YouTube player
 *
 * @param {String} selector
 * @param {Object} events
 * @return {Object[]}
 */
function generate(selector, events) {
  var elements = document.querySelectorAll(selector),
      instances = [],
      i, len, element, script, params;

  for (i = 0, len = elements.length; i < len; ++i) {
    element = elements[i];

    script = element.querySelector('script[type="application/json"]') || {};
    params = JSON.parse(script.innerHTML || '{}');

    params.playerVars || (params.playerVars = {});
    params.playerVars.origin = origin;

    params.events = events || {};

    instances.push(
      new YT.Player(element, params)
    );
  }

  return instances;
}

/**
 * register YouTube Iframe API script
 *
 * @param {Function} [callback]
 * @return {Promise}
 */
function register(callback) {
  var youtubeScript, firstScript;

  if (typeof callback === 'function') {
    window.onYouTubeIframeAPIReady = callback;
  } else if (typeof Promise !== 'undefined') {
    return new Promise(register);
  } else {
    throw new TypeError('callback must be a Function');
  }

  youtubeScript = document.createElement('script');
  youtubeScript.async = true;
  youtubeScript.src = 'https://www.youtube.com/iframe_api';

  firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode.insertBefore(youtubeScript, firstScript);
}

module.exports = {
  Promise: Promise,
  generate: generate,
  register: register
};
