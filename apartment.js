document.getElementById("advSearc").addEventListener("click",openAdvSearch);
document.getElementById("closeAdv").addEventListener("click", closeAdvSearch);

function openAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "visible";
	document.getElementById("advancedSearchFilters").style.width = "300px";
	document.getElementById("advancedSearchFilters").style.height	= "250px";
}
function closeAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "hidden";
	document.getElementById("advancedSearchFilters").style.width = "0px";
	document.getElementById("advancedSearchFilters").style.height	= "0px";
}