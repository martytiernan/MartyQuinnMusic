
/* create a dropdown list with content from "dropdown-content" */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


/* create a dropdown list with content from "dropdown-content" */
var hiddenDropdown = document.getElementsByClassName("hidden-dropdown-btn");
var j;

for (j = 0; j < hiddenDropdown.length; j++) {
  hiddenDropdown[j].addEventListener("click", function () {
    this.classList.toggle("active");
    var hiddenDropdownContent = this.nextElementSibling;
    if (hiddenDropdownContent.style.display === "block") {
      hiddenDropdownContent.style.display = "none";
    } else {
      hiddenDropdownContent.style.display = "block";
    }
  });
}



