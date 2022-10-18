document.getElementById("advSearc").addEventListener("click",openAdvSearch);
document.getElementById("closeAdv").addEventListener("click", closeAdvSearch);

function openAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "visible";
	document.getElementById("advancedSearchFilters").style.width = "400px";
	document.getElementById("advancedSearchFilters").style.height	= "330px";
}
function closeAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "hidden";
	document.getElementById("advancedSearchFilters").style.width = "0px";
	document.getElementById("advancedSearchFilters").style.height	= "0px";
}

/*
colors: 
white: #fff8f6
pink: #fff2f1
gray: #d0cdc9
green: #7d8743
beige: #dabaa4
darker beige: #c9a291
cream: #f9f2ef
brown: #886a5b
orange text: #f6c197
light purple #dec2f1
teal: #c2ecf1
lime green: #d4f1c2
*/