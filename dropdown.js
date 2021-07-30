export { activateDropDown }

function dropDownHover(
  dropdownContainer,
  dropdownMenu,
  className = 'dropdown-menu-visible'
) {
  dropdownContainer.addEventListener('mouseenter', () =>
    dropdownMenu.classList.add(className)
  );
  dropdownContainer.addEventListener('mouseleave', () =>
    dropdownMenu.classList.remove(className)
  );
}

function activateDropDown() {
  const dropdown = document.querySelectorAll('.dropdown');
  dropdown.forEach((e) => {
    const dropdownChildren = [...e.children];
    for (let child of dropdownChildren) {
      if (child.classList.contains('dropdown-menu')) {
        dropDownHover(e, child);
      }
    }
  });
}
