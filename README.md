oz-evt
========

Event propagation tag for [Oz](http://github.com/treygriffith/oz).


Installation
------------

Using component:

```
$ component install treygriffith/oz-evt
```

Using a script tag (UMD compatible)

```
<script src="./oz-evt.min.js"></script>
```

Usage
-----

Trigger an event on the template when an event occurs in the DOM. See [Events](http://github.com/treygriffith/oz#events) for more information.

Notation:

```html
<button oz-evt="click:save">Save</button>
```

Example:

```javascript
template.on('save', saveHandler);
```

```html
<button oz-evt="click:save">Save</button>
```

License
-------
MIT
