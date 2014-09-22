# Ember Zero Clipboard

This is an Ember CLI addon for adding a [Zero Clipboard](http://zeroclipboard.org/) component. 

### Installation

```
$ npm install --save-dev ember-cli-zero-clipboard
```

### Usage

In your handlebars template just do:

```
{{zero-clipboard text=TEXT label=LABEL}}
```

* TEXT: String, to be copied when button is clicked.
* LABEL: String, the value of the button.

#### Example

```
{{zero-clipboard text=repoPath label="Copy" class="btn btn-default"}}
```

will output:

```html
<button
	title="Copy to clipboard"
	class="btn btn-default"
	data-clipboard-text="https://github.com/aomra015/ember-cli-zero-clipboard">Copy</button>
```