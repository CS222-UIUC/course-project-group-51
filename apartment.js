var apartmentsCompleteList;
var currentFilteredApartments;
//will need to figure out if we need to initialize this variable outside of function
document.addEventListener("load", getAllApartments);
function getAllApartments() {
	//filler for now
	//once we have json and/or csv: will be called every time page loads 
	//will pull all of the information necessary and store the apartment data
	//in an array or array-like object 
	//array will need to be a global variable most likely
		//will put the info into apartmentsCompleteList
	//probably an array of dictionaries so that we can access the different properties\
	
	sortFilteredApartments(apartmentsCompleteList);
	displayApartments(apartmentsCompleteList, 0);
}
document.getElementById("clearSearch").addEventListener("click", clearSearch);
function clearSearch() {
	//need to go back to displaying full array 
	displayApartments(apartmentsCompleteList, 0);
}
document.getElementById("advSearc").addEventListener("click",openAdvSearch);
document.getElementById("closeAdv").addEventListener("click", closeAdvSearch);

//function changes advanced search filter box to be visible and take up space
function openAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "visible";
	document.getElementById("advancedSearchFilters").style.width = "400px";
	document.getElementById("advancedSearchFilters").style.height	= "330px";
}

//function closes the advanced search filter box and shrinks it to take up no space
function closeAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "hidden";
	document.getElementById("advancedSearchFilters").style.width = "0px";
	document.getElementById("advancedSearchFilters").style.height	= "0px";
}
document.getElementById("search").addEventListener("click", search);
document.getElementById("submitAdv").addEventListener("click", advancedSearch);
function search() {
	//empty for now
	//will be implemented once there is access to data pulled from web
	
	/* 
	pseudocode: 
	array filtered = filterbycompanyname(full array);
	display filtered apartments in table 
	*/
}
function advancedSearch() {
	//same as search
	//will also have to deal with filters 
	
	/*
	pseudocode:
	array filtered = full array 
	put array through each filter function 
	display filtered apartments in table 
	*/
	
	filtered = applyFilters(/*global var for apartments*/);
	//continue with the rest of the filtering functions
	
	displayApartments(filtered);
}
function applyFilters(apartments) {
	filtered = filterByCompanyName(apartments);
	filtered = filterByMaxRent(filtered);
	filtered = filterByNumBedrooms(filtered);
	filtered = filterByNumBathrooms(filtered);
	filtered = filterByType(filtered);
	filtered = filterByGreen(filtered);
	filtered = filterByTown(filtered);
	//need to do a bunch of calls to filterOneCheckbox
		//have to figure out what the attribute parameter will be first 
	return filtered;
}
function filterByCompanyName(apartments) {
	/*
	pseudocode: 
	create new array 
	pull company name from text box 
	for apartment in apartments: 
		if apartment.companyName == companyName: 
			add apartment to array 
	return new array 
	*/
}
function filterByMaxRent(apartments) {
	/*
	pseudocode: 
	create new array 
	pull maxrent from text box 
	for apartment in apartments: 
		if apartment.rent <= maxRent: 
			add apartment to array 
	return new array 
	*/
}
function filterByNumBedrooms(apartments) {
	/*
	pseudocode: 
	create array of ints created by pulling bools from checkboxes and 
		adding if bool is true 
	create new array 
	for apartment in apartments: 
		for num in numRoomsArray:
			if apartment.numBedrooms == num: 
				add apartment to array 
	return new array 
	*/
}
function filterByNumBathrooms(apartments) {
	/*
	pseudocode: 
	create array of ints created by pulling bools from checkboxes and 
		adding if bool is true 
	create new array 
	for apartment in apartments: 
		for num in numRoomsArray:
			if apartment.numBathrooms == num: 
				add apartment to array 
	return new array 
	*/
}
function filterByType(apartments) {
	//another filter function 
}
function filterByGreen(apartments) {
	//another filter function 
}
function filterByTown(apartments) {
	//another filter function 
}
function filterOneCheckbox(apartments, attribute) {
	//arbitrary function that will work for all filters in second column 
	//will pull selection based on what attribute is and filter based on that 
}
function sortFilteredApartments(apartments) {
	//will have to decide if we need this and how array will be sorted 
	//should we allow user to choose sort type? 
}
function displayApartments(filteredApartments, startIndex) {
	for (var lineNum = 0; lineNum < filteredApartments.length() && lineNum < 6; lineNum++) {
		displayApartment(filteredApartments[startIndex + lineNum], lineNum);
	}
	//code that will put apartments and their data into the table on the page 
	//will need to somehow save the filtered apartments so that when 
	//the next button is clicked, the next 6 apartments will show
	
}
function displayApartment(apartment, lineNumber) {
	//will display a single apartment 
}
document.getElementById("previousSet").addEventListener("click", displayPreviousSet);
function displayPreviousSet() {
	//might need parameters 
	//will take previous 6 apartments and display them if possible
}
document.getElementById("nextSet").addEventListener("click", displayNextSet);
function displayNextSet() {
	//might need parameters 
	//will take next 6 apartments and display them if possible 
}
