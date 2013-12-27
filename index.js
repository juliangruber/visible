
/**
 * Module dependencies.
 */

var visibility = require('visibility')

/**
 * Listen for events.
 */

var visible = true;

visibility(function(e, state) {
  visible = state != 'hidden';
});

/**
 * Check for visibility.
 *
 * @return {Boolean}
 * @api public
 */

module.exports = function(){
  return visible;
};