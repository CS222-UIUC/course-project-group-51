var apartmentsCompleteList;
var currentFilteredApartments;
var dummyArrayForTesting = [
	{Name: "dog", Address: "house", Rent: 100, Bedrooms: 3, Bathrooms: 1}, 
	{Name: "cat", Address: "house", Rent: 1222, Bedrooms: 2, Bathrooms: 2}, 
	{Name: "cow", Address: "barn", Rent: 23, Bedrooms: 1, Bathrooms: 3}, 
	{Name: "pig", Address: "mud", Rent: 10, Bedrooms: 3, Bathrooms: 4}, 
	{Name: "ant", Address: "ant hill", Rent: 0, Bedrooms: 2, Bathrooms: 5}, 
	{Name: "duck", Address: "pond", Rent: 2, Bedrooms: 6, Bathrooms: 6}

];
apartmentsCompleteList = dummyArrayForTesting;


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

function applyFilters(apartments) {
	filtered = filterByCompanyName(apartments);
	filtered = filterByMaxRent(filtered);
	/*
	filtered = filterByNumBedrooms(filtered);
	filtered = filterByNumBathrooms(filtered);
	filtered = filterByType(filtered);
	filtered = filterByGreen(filtered);
	filtered = filterByTown(filtered);
	*/
	//need to do a bunch of calls to filterOneCheckbox
		//have to figure out what the attribute parameter will be first 
	return filtered;
}
function filterByCompanyName(apartments) {
	if (document.getElementById("company").value == "") return apartments;
	var filtered = [];
	var name = document.getElementById("company").value;
	for (var index = 0; index < apartments.length; ++index) {
		if (apartments[index].Name == name) {
			console.log(apartments[index]);
			filtered.push(apartments[index]);
		}
	}
	return filtered;
}
function filterByMaxRent(apartments) {
	if (document.getElementById("rent").value == "") return apartments;
	console.log(apartments.length);
	var filtered = [];
	var maxRent = parseFloat(document.getElementById("rent").value);
	for (var index = 0; index < apartments.length; ++index) {
		if (parseFloat(apartments[index]["Rent"]) <= maxRent) {
			filtered.push(apartments[index]);
		}
	}
	return filtered;
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
	var filtered = apartments;
	return filtered;
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
	var filtered = apartments;
	return filtered;
}
function filterByType(apartments) {
	//another filter function 
	var filtered = apartments;
	return filtered;
}
function filterByGreen(apartments) {
	//another filter function 
	var filtered = apartments;
	return filtered;
}
function filterByTown(apartments) {
	//another filter function 
	var filtered = apartments;
	return filtered;
}
function filterOneCheckbox(apartments, attribute) {
	//arbitrary function that will work for all filters in second column 
	//will pull selection based on what attribute is and filter based on that 
}
function sortFilteredApartments(apartments) {
	//will have to decide if we need this and how array will be sorted 
	//should we allow user to choose sort type? 
}
function displayApartment(apartment, lineNumber) {
	//will display a single apartment 
	console.log("displaying apartment");
	console.log(apartment);
	var tableRow = document.getElementById((lineNumber + 1).toString());
	var dataCells = tableRow.getElementsByTagName("td");
	dataCells[0].innerHTML = apartment.Name;
	dataCells[1].innerHTML = apartment.Address;
	dataCells[2].innerHTML = apartment.Rent;
	dataCells[3].innerHTML = apartment.Rent;
	dataCells[4].innerHTML = apartment.Bedrooms;
	dataCells[5].innerHTML = apartment.Bathrooms;
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

window.addEventListener("load", getAllApartments);
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
function search() {
	var filtered = [];
	var name = document.getElementById("mainSearch").value;
	for (var index = 0; index < apartmentsCompleteList.length; ++index) {
		if (apartmentsCompleteList[index].Name == name) {
			filtered.push(apartmentsCompleteList[index]);
		}
	}
	displayApartments(filtered, 0);
}
function advancedSearch() {
	var filtered = applyFilters(apartmentsCompleteList);
	console.log(filtered.length);
	displayApartments(filtered, 0);
}
function clearCells() {
	for (var row = 1; row < 7; row++) {
		var tableRow = document.getElementById(row.toString());
		var dataCells = tableRow.getElementsByTagName("td");
		dataCells[0].innerHTML = "";
		dataCells[1].innerHTML = "";
		dataCells[2].innerHTML = "";
		dataCells[3].innerHTML = "";
		dataCells[4].innerHTML = "";
		dataCells[5].innerHTML = "";
	}
}
function displayApartments(filteredApartments, startIndex) {
	clearCells();
	if (filteredApartments == null) return;
	for (var lineNum = 0; lineNum < filteredApartments.length; lineNum++) {
		if (lineNum < 6) {
			displayApartment(filteredApartments[startIndex + lineNum], lineNum);
		}
	} 
	//will need to somehow save the filtered apartments so that when 
	//the next button is clicked, the next 6 apartments will show
	
}
document.getElementById("clearSearch").addEventListener("click", clearSearch);
function clearSearch() {
	clearCells();
	displayApartments(apartmentsCompleteList, 0);
}
