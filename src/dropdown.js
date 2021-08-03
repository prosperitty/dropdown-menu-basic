function dropdownOnHover(
  dropdownContainer,
  dropdownMenu,
  className = 'dropdown-menu-visible'
) {
  dropdownContainer.addEventListener('mouseenter', () => {
    dropdownMenu.classList.add(className)
  });
  dropdownContainer.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove(className)
  });
}

function dropdownOnClick(
  dropdownContainer,
  dropdownMenu,
  className = 'dropdown-menu-visible'
) {
  dropdownContainer.addEventListener('click', () => {
    dropdownMenu.classList.toggle(className);
  });
  dropdownContainer.addEventListener('mouseleave', () => {
  dropdownMenu.classList.remove(className)
  });
}

function hoverDropdown() {
  const dropdownContainers = document.querySelectorAll('.dropdown-hover');

  dropdownContainers.forEach((e) => {
    const dropdownChildren = [...e.children];
    for (let child of dropdownChildren) {
      if (child.classList.contains('dropdown-menu')) {
        dropdownOnHover(e, child);
      }
    }
  });
}

function clickDropdown() {
  const dropdownContainers = document.querySelectorAll('.dropdown-click');

  dropdownContainers.forEach((e) => {
    const dropdownChildren = [...e.children];
    for (let child of dropdownChildren) {
      if (child.classList.contains('dropdown-menu')) {
        dropdownOnClick(e, child);
      }
    }
  });
}

function clickAndHoverDropdown() {
  hoverDropdown();
  clickDropdown();
}

hoverDropdown();

export { clickAndHoverDropdown , hoverDropdown, clickDropdown };