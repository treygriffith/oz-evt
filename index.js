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

