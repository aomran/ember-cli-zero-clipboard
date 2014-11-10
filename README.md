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

or 

```
{{zero-clipboard cbTarget=TARGET_ELEMENT_ID label=LABEL}}
```

* TEXT: String, to be copied when button is clicked.
* TARGET_ELEMENT_ID: String, value or html contents to be copied.
* LABEL: String, the value of the button.

#### Example

```
{{zero-clipboard text=repoPath label="Copy" innerClass="btn btn-default"}}
```

will output:

```html
<div title="Copy to clipboard" data-clipboard-text="https://github.com/aomra015/ember-cli-zero-clipboard">
  <button class="btn btn-default">Copy</button>
</div>
```

### Extending

You can subclass this module if you want to add specific behaviours or want to customize the output HTML in any way:

```
// file: your-app/components/zero-clipboard.js

import ZeroClipboard from 'ember-cli-zero-clipboard/components/zero-clipboard';

export default ZeroClipboard.extend({
  actions: {
    afterCopy: function(){
      // this gets triggered after the copy event
      alert("after copy");
    }
  }
});
```

``` hbs
// file: your-app/templates/components/zero-clipboard.hbs

<!-- because you don't want a button -->
<a {{bind-attr class=innerClass}}><i class="fa fa-clipboard"></i>{{label}}</a>
```
