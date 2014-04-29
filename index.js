/**
 * Export plugin
 */
module.exports = function (Oz) {
  Oz.tag('oz-evt-*', render);
};

module.exports.render = render;

/**
 * Listen for DOM events
 * template: <div oz-evt-click="save"></div>
 * output: template.on('save', fn); // fired when <div> is clicked
 */

function render (el, val, scope, raw) {
  var name = raw.name.slice('oz-evt-'.length)
    , self = this;

  this.events.bind(el, name, function (e) {
    self.emit(raw.prop, el, e, raw.ctx);
  });
}

