# Ember Zero Clipboard

This is an Ember CLI addon for adding a [Zero Clipboard](http://zeroclipboard.org/) component.

### Installation

```bash
$ npm install --save-dev ember-cli-zero-clipboard
```

### Usage

In your handlebars template just do:

```hbs
{{zero-clipboard text=TEXT label=LABEL}}
```

or

```hbs
{{zero-clipboard cbTarget=TARGET_ELEMENT_ID label=LABEL}}
```

* TEXT: String, to be copied when button is clicked.
* TARGET_ELEMENT_ID: String, value or html contents to be copied.
* LABEL: String, the value of the button.

#### Example

```hbs
{{zero-clipboard text=repoPath label="Copy" innerClass="btn btn-default"}}
```

will output:

```html
<div title="Copy to clipboard" data-clipboard-text="https://github.com/aomra015/ember-cli-zero-clipboard">
  <button class="btn btn-default">Copy</button>
</div>
```

### Extending

You can subclass this module if you want to add specific behaviours:

```js
// file: your-app/components/zero-clipboard.js

import ZeroClipboard from 'ember-cli-zero-clipboard/components/zero-clipboard';

export default ZeroClipboard.extend({
  actions: {
    afterCopy: function(){
      // this gets triggered after the copy event
      // see https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/api/ZeroClipboard.md#static-events for full list of events
      alert("after copy");
    }
  }
});
```

You can also pass a closure action, without subclassing the component.

```hbs
{{zero-clipboard afterCopy=(action "alertAfterCopy")}}

```

Pass a block if you want to customize the html:

``` hbs
{{#zero-clipboard text='Hello'}}
  <p>COPY ME!</p>
{{/zero-clipboard}}
```
