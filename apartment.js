var apartmentsCompleteList;
var currentFilteredApartments;
var currentStartIndex = 0;
var dummyArrayForTesting = [
	{Name: "dog", Address: "house", Rent: 100, Bedrooms: 3, Bathrooms: 1}, 
	{Name: "cat", Address: "house", Rent: 1222, Bedrooms: 2, Bathrooms: 2}, 
	{Name: "cow", Address: "barn", Rent: 23, Bedrooms: 1, Bathrooms: 3}, 
	{Name: "pig", Address: "mud", Rent: 10, Bedrooms: 3, Bathrooms: 4}, 
	{Name: "ant", Address: "ant hill", Rent: 0, Bedrooms: 2, Bathrooms: 5}, 
	{Name: "duck", Address: "pond", Rent: 2, Bedrooms: 6, Bathrooms: 6}, 
	{Name: "hippo", Address: "zoo", Rent: 0, Bedrooms: 2, Bathrooms: 5}, 
	{Name: "dino", Address: "fossilized", Rent: 0, Bedrooms: 2, Bathrooms: 5}, 
	{Name: "tiger", Address: "jungle", Rent: 0, Bedrooms: 2, Bathrooms: 5}, 

];
apartmentsCompleteList = dummyArrayForTesting;
//note to self: add flexbox div for sort functionality and implement fxns for it 

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
	filtered = filterByNumBedrooms(filtered);
	filtered = filterByNumBathrooms(filtered);
	/*
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
	var possibilities = [];
	var checkboxes = document.getElementsByClassName("bedrooms");
	for (var i = 0; i < checkboxes.length; ++i) {
		if (checkboxes[i].checked) {
			possibilities.push(checkboxes[i].name);
		}
	}
	console.log(possibilities);
	//get all checkboxes 
	var filtered = [];
	for (var index = 0; index < apartments.length; ++index) {
		for (var number = 0; number < possibilities.length; ++number) {
			if (apartments[index]["Bedrooms"] == parseFloat(possibilities[number])) {
				filtered.push(apartments[index]);
				console.log(apartments[index]["Bedrooms"]);
				console.log(parseFloat(possibilities[number]));
				break;
			} else if (apartments[index]["Bedrooms"] > 5 && parseFloat(possibilities[number]) == 5) {
				filtered.push(apartments[index]);
				break;
			}
			//check number vs possibility 
			//push if the possibility matches 
		}
	}
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
	var possibilities = [];
	var checkboxes = document.getElementsByClassName("bathrooms");
	for (var i = 0; i < checkboxes.length; ++i) {
		if (checkboxes[i].checked) {
			possibilities.push(checkboxes[i].name);
		}
	}
	//get all checkboxes 
	var filtered = [];
	for (var index = 0; index < apartments.length; ++index) {
		for (var number = 0; number < possibilities.length; ++number) {
			if (apartments[index]["Bathrooms"] == parseFloat(possibilities[number])) {
				filtered.push(apartments[index]);
			} else if (apartments[index]["Bathrooms"] > 5 && parseFloat(possibilities[number]) == 5) {
				filtered.push(apartments[index]);
			}
			//check number vs possibility 
			//push if the possibility matches 
		}
	}
	return filtered;
}
function filterByType(apartments) {
	var filtered = [];
	if (document.getElementById("apartmentType").checked && 
		document.getElementById("houseType").checked || 
		!(document.getElementById("apartmentType").checked) && 
		!(document.getElementById("houseType").checked)) {
		return apartments;	
	} else if (document.getElementById("apartmentType").checked) {
		for (var index = 0; index < apartments.length; ++index) {
			if (apartments[index][Type] == "Apartment") {
				filtered.push(apartments[index]);
			}
		}
		return filtered;
	} else {
		for (var index = 0; index < apartments.length; ++index) {
			if (apartments[index][Type] == "House") {
				filtered.push(apartments[index]);
			}	
		}
		return filtered;
	}
}
function filterByGreen(apartments) {
	var filtered = apartments;
	return filtered;
}
function filterByTown(apartments) {
	var filtered = apartments;
	return filtered;
}
function filterOneCheckbox(apartments, attribute) {
	if (document.getElementById(attribute).checked) {
		//create filtered list 
		//need to figure out what part of dictionary they will fall under
	} else return apartments;
	//arbitrary function that will work for all filters in second column 
	//will pull selection based on what attribute is and filter based on that 
}
function sortFilteredApartments(apartments) {
	//will have to decide if we need this and how array will be sorted 
	//should we allow user to choose sort type? 
}
function displayApartment(apartment, lineNumber) {
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
	if (currentStartIndex - 6 < 0) return;
	clearCells();
	currentStartIndex -= 6;
	displayApartments(currentFilteredApartments, currentStartIndex);
	
}
document.getElementById("nextSet").addEventListener("click", displayNextSet);
function displayNextSet() {
	if (currentStartIndex + 6 > currentFilteredApartments.length) return;
	clearCells();
	currentStartIndex += 6;
	displayApartments(currentFilteredApartments, currentStartIndex);
	
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
	if (document.getElementById("mainSearch").value == "") {
		displayApartments(apartmentsCompleteList, 0);
		return;
	}
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
	currentFilteredApartments = filteredApartments;
	clearCells();
	if (filteredApartments == null) return;
	for (var lineNum = 0; lineNum < filteredApartments.length - currentStartIndex; lineNum++) {
		if (lineNum < 6) {
			displayApartment(filteredApartments[startIndex + lineNum], lineNum);
		}
	} 
	
}
function clearBoxes() {
	var checkboxes = document.getElementsByTagName("input");
	for (var c = 0; c < checkboxes.length; ++c) {
		if (checkboxes[c].type != "button") {
			checkboxes[c].value = "";
			checkboxes[c].checked = false;
		}
	}
	
}
document.getElementById("clearSearch").addEventListener("click", clearSearch);
function clearSearch() {
	clearCells();
	clearBoxes();
	currentStartIndex = 0;
	displayApartments(apartmentsCompleteList, 0);
}
