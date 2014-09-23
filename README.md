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
{{zero-clipboard text=repoPath label="Copy" class="btn btn-default" innerClass="btn btn-other"}}
```

will output:

```html
<div class="btn btn-default" title="Copy to clipboard" data-clipboard-text="https://github.com/aomra015/ember-cli-zero-clipboard">
  <button class="btn btn-other">Copy</button>
</div>
```

### Extending

You can subclass this module if you want to add specific behaviours or want to customise the output HTML in any way. To extend in a ember-cli you just need to create a component that is a subclass of ZeroClipboard:
```
// file: your-app/components/custom-clipboard.js

import ZeroClipboard from './zero-clipboard';

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
// file: your-app/templates/components/custom-clipboard.js

<!-- because you don't want a button -->
<a class="btn blue small"><i class="fa fa-clipboard"></i>{{title}}</a>

```
