# ul2select
JQuery plugin that converts &lt;ul> list into &lt;select> and back.

## Demo

Take a [look to the demo](https://rawgit.com/carloscabo/ul2select/master/index.html), and you will understand how it works.

## Requirements

`JQuery`

## Usage

You can convert any `<ul>` into a `<select>` simply calling the `.ul2select();` function over the `<ul>` selector:

    $(document).ready(function() {
      $('.my-class').ul2select();
    });

The function will replace the original `<ul>`:

    <ul class="my-class">
      <li class="active"><a href="/url">Title of link 1</a></li>
      ...
      ...
    </ul>

With a `<select>` with this structure:

    <div class="u2s-wrapper">
      <span class="u2s-current">Currently selected option</span>
      <select class="my-class u2s-converted">
        <option value="/url">Title of link 1</option>
        ...
      </select>
    </div>

## Default functionallity

By default `ul2select` will wrap the resulting `<select>` with an `<div class="u2s-wrapper">` and will add an additional `<span>` to ease the CSS styling of custom selects.

It also maps the currently selected option in the list to the corresponding option in the select (and back when you "revert", see below).

It handles also multilevel `<ul>` indenting the `<select>` options with 3 spaces.

By defaul the `url` inside the `<li>` it's used as the `value` for the corresponding `<option>` inside the `<select>`.

## Custom options

You have several customizable options:

    $('.my-class').ul2select({
      // Class used in the <li> to mark active option
      // By default "active"
      active_class: 'selected',
      // Custom wrapper around the select
      select_wrapper: '<div id="my-custom-wrapper">'
    });

If you want a "plain select", without wrapper, span... etc

    $('.my-class').ul2select({
      // Do not add wrapper and span
      select_wrapper: null
    });

## Custom events on the resulting <select>

Probably you'll find yourself in situations where you need to add a custom event on the resulting `<select>`, to be fired on `change`... `focus`... etc. This can also done when initiating `ul2select`.

    $('.u2s-fake-select.sample-1').ul2select({
      custom_events: {
        // Custom "on change" event
        'change': function(){
          // $(this) refers the select
          console.log($(this).find('option:selected').text())
        }
      }
    });

## Revert to the original <ul>

You can revert the select back to the original `<ul>` list at any time simply calling the function with the `revert` option, this way:

    $('.my-class').ul2select('revert');
