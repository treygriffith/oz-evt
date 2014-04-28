
build: components index.js
				@component build --dev

dist: components
				@component build --standalone oz-evt --name oz-evt --out dist
				@uglifyjs dist/oz-evt.js -o dist/oz-evt.min.js

components: component.json
				@component install --dev

clean:
				rm -fr build components template.js dist

test: build
				component-test phantom

.PHONY: clean oz-evt test
