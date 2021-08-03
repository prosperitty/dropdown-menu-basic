# Dropdown
A simple dropdown in vanilla javascript

### How it works

---
Hover or click the element to open the menu. Move the cursor away from the menu or toggler to collapse the menu.

### Download

---
Download and install the package by running:

    npm install dropdown-menu-basic --save-dev
    
### Usage

---
A dropdown requires a hoverable or clickable element and a list of links/options.

- First, create a container, such as a div, and add a class name of "dropdown-hover" to create a hoverable dropdown menu. Or, add a class name of "dropdown-click" to create a clickable dropdown menu.

- Then, in the container, add an element such as a button with a class name of "dropdown-btn". This will create an element which will open the menu.

- Finally, add an ul with a class name of "dropdown-menu". You may then add as many li elements with a class name of "dropdown-item" inside the ul. The "dropdown-menu" is hidden by default.

- Hover or click the button or element with the class "dropdown-btn" to open the menu. Move the cursor away from the container to collapse the menu.

You may customize the styles to suit your project.
The stylesheet is located under the example directory as style.css.

### Usage example

---
To use both a hoverable and clickable dropdown menu:
```js
import { clickAndHoverDropdown } from 'dropdown-menu-basic';
clickAndHoverDropdown();
```

To use one of both events:
```js
import { hoverDropdown } from 'dropdown-menu-basic';
hoverDropdown();
```
```js
import { clickDropdown } from 'dropdown-menu-basic';
clickDropdown();
```

A hoverable dropdown menu:
```
<div class="dropdown-hover">
    <button class="dropdown-btn">menu</button>
    <ul class="dropdown-menu">
        <li class="dropdown-item">link 1</li>
        <li class="dropdown-item">link 2</li>
        <li class="dropdown-item">link 3</li>
    </ul>
</div>
```

A clickable dropdown menu:
```
<div class="dropdown-click">
    <button class="dropdown-btn">menu</button>
    <ul class="dropdown-menu">
        <li class="dropdown-item">link 1</li>
        <li class="dropdown-item">link 2</li>
        <li class="dropdown-item">link 3</li>
    </ul>
</div>
```

### Event

---
|Event|Description|
|----|----|
|Hover|Activated on mouseover, deactivated on mouseleave
|----|----|
|Click|Activated on click, deactivated on mouseleave

### npm package link

[npm](https://www.npmjs.com/package/dropdown-menu-basic)