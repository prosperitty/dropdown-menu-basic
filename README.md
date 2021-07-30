# Dropdown
A simple dropdown in vanilla javascript

### How it works

---
Hover over the element with the class of "dropdown-btn". While hovered, the menu should appear. Move the cursor away from the menu or toggler to collapse the menu.

### Download

---
Download and install the package by running:

    npm install dropdown-menu-basic --save-dev
    
### Usage

---
A dropdown requires a hoverable element and a list of links/options.

- First, create a container, such as a div, and add a class name of "dropdown" to the container. 

- Then, in the container, add an element such as a button with a class name of "dropdown-btn". This will create a hoverable element which will open the menu.

- Finally, add an ul with a class name of "dropdown-menu". You may then add as many li elements with a class name of "dropdown-item" inside the ul. The "dropdown-menu" is hidden by default.

- Hover over the button or element with the class "dropdown-btn" to open the menu. Move the cursor away from the container to collapse the menu.

You may customize the styles to suit your project.

### Usage example

---
```js
    import { activateDropDown } from 'dropdown-menu-basic';
```


    <div class="dropdown">
      <button class="dropdown-btn">menu</button>
      <ul class="dropdown-menu">
          <li class="dropdown-item">link 1</li>
          <li class="dropdown-item">link 2</li>
          <li class="dropdown-item">link 3</li>
      </ul>
    </div>

### Methods

---
|Method|Description|
|----|----|
|Hover|Activated on mouseover the hoverable button, deactivated on mouseleave

### npm package link

[npm](https://www.npmjs.com/package/dropdown-menu-basic)