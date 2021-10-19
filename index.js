var checkedStatus = localStorage.getItem("theme");
if(checkedStatus == "false") {
    checkboxTheme.checked = true;
    bodyElement.classList.toggle("dark-mode"); 
}