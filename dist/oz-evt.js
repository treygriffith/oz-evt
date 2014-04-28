
;(function(){

/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("oz-evt", function (exports, module) {
/**
 * Export plugin
 */
module.exports = function (Oz) {
  Oz.tag('oz-evt', render);
};

module.exports.render = render;

/**
 * Listen for DOM events
 * template: <div oz-evt="click:save"></div>
 * output: template.on('save', fn); // fired when <div> is clicked
 */

function render (el, ctx, prop, scope, next) {

  var self = this;

  this.split(prop, function (name, val) {

    self.events.bind(el, name, function (e) {
      self.emit(val, el, e, ctx);
    });
  });

  next();
}


});

if (typeof exports == "object") {
  module.exports = require("oz-evt");
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return require("oz-evt"); });
} else {
  this["oz-evt"] = require("oz-evt");
}
})()
