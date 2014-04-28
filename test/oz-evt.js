
var Oz = require('oz');
var evtTag = require('oz-evt');
var assert = require('assert');
var trigger = require('trigger-event');
var children = require('children');

Oz.use(evtTag);

describe("Events", function(){

  it('should emit events based on DOM events', function(next){
    var template = Oz('<div oz-evt="click:save"></div>');
    var el = children(template.render())[0];

    template.on('save', function (_el) {
      assert(_el === el);
      next();
    });

    // simulate event
    trigger(el, 'click');
    
  });

  it('should pass the current context to the event handler', function(next){
    var template = Oz('<div oz-evt="click:save"></div>');
    var person = { name: 'Tobi' };
    var el = children(template.render(person))[0];

    template.on('save', function (_el, e, ctx) {
      assert(ctx === person);
      next();
    });

    // simulate event
    trigger(el, 'click');
  });

  it('should only execute one event, even after re-rendering', function(next){
    var template = Oz('<div oz-evt="click:save;dblclick:delete"></div>');
    var el = children(template.render())[0];
    template.update();

    var count = 0;

    template.on('save', function () {
      count++;
      assert(count === 1);
    });

    template.on('delete', function(){
      next();
    });

    // simulate event
    trigger(el, 'click');
    trigger(el, 'dblclick');
  });
});
