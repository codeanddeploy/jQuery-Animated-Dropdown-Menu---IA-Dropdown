function handleDropdowns() {
  const dropdowns = $("[data-dropdown-wrapper]").each(function (
    index,
    wrapper
  ) {
    const dropdown = new Dropdown({ wrapper, transformOrigin: false }).init();
  });
}
$(function () {
  handleDropdowns();
});