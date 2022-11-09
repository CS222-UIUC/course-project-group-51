var apartmentsCompleteList;
var currentFilteredApartments;
var currentStartIndex = 0;
var dummyArrayForTesting = [
	{Name: "dog", Address: "in Champaign", Rent: 100, Bedrooms: 3, Bathrooms: 1, Type: "Apartment"}, 
	{Name: "cat", Address: "1234 Lincoln Ave., Urbana, IL", Rent: 1222, Bedrooms: 2, Bathrooms: 2, Type: "House"}, 
	{Name: "cow", Address: "Urbana", Rent: 23, Bedrooms: 1, Bathrooms: 3, Type: "Apartment"}, 
	{Name: "pig", Address: "888 Champaign", Rent: 10, Bedrooms: 3, Bathrooms: 4, Type: "House"}, 
	{Name: "ant", Address: "Champaign's ant hill", Rent: 0, Bedrooms: 2, Bathrooms: 5, Type: "Apartment"}, 
	{Name: "duck", Address: "pond in Urbana", Rent: 2, Bedrooms: 6, Bathrooms: 6, Type: "House"}, 
	{Name: "hippo", Address: "zoo Champaign", Rent: 0, Bedrooms: 2, Bathrooms: 5, Type: "Apartment"}, 
	{Name: "dino", Address: "Urbana and Champaign fossilized", Rent: 0, Bedrooms: 2, Bathrooms: 5, Type: "House"}, 
	{Name: "tiger", Address: "jungle UChampaign", Rent: 0, Bedrooms: 2, Bathrooms: 5, Type: "Apartment"}, 

];
function getBankierApartments() {
	//read csv 
}
function getJSMApartments() {
	//read csv 
}
function getRamshawApartments() {
	//read csv
}
function getSmileApartments() {
	//readcsv
}
apartmentsCompleteList = dummyArrayForTesting;
//note to self: add flexbox div for sort functionality and implement fxns for it 

document.getElementById("advSearc").addEventListener("click",openAdvSearch);
document.getElementById("closeAdv").addEventListener("click", closeAdvSearch);

//function changes advanced search filter box to be visible and take up space
function openAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "visible";
	document.getElementById("advancedSearchFilters").style.width = "400px";
	document.getElementById("advancedSearchFilters").style.height	= "330px";
	document.getElementById("searchBar").style.visibility = "hidden";
	document.getElementById("searchBar").style.width = "0px";
	document.getElementById("searchBar").style.height = "0px";
	
}

//function closes the advanced search filter box and shrinks it to take up no space
function closeAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "hidden";
	document.getElementById("advancedSearchFilters").style.width = "0px";
	document.getElementById("advancedSearchFilters").style.height	= "0px";
	document.getElementById("searchBar").style.visibility = "visible";
	document.getElementById("searchBar").style.width = "450px";
	document.getElementById("searchBar").style.height = "10px";
}
document.getElementById("search").addEventListener("click", search);
document.getElementById("submitAdv").addEventListener("click", advancedSearch);

function applyFilters(apartments) {
	filtered = filterByCompanyName(apartments);
	filtered = filterByMaxRent(filtered);
	filtered = filterByNumBedrooms(filtered);
	filtered = filterByNumBathrooms(filtered);
	filtered = filterByType(filtered);
	/*
	filtered = filterByGreen(filtered);
	*/
	filtered = filterByTown(filtered);
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
			//console.log(apartments[index]);
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
	var possibilities = [];
	var checkboxes = document.getElementsByClassName("bedrooms");
	for (var i = 0; i < checkboxes.length; ++i) {
		if (checkboxes[i].checked) {
			possibilities.push(checkboxes[i].name);
		}
	}
	if (possibilities.length == 0) return apartments;
	var filtered = [];
	for (var index = 0; index < apartments.length; ++index) {
		for (var number = 0; number < possibilities.length; ++number) {
			if (apartments[index]["Bedrooms"] == parseFloat(possibilities[number])) {
				filtered.push(apartments[index]);
				break;
			} else if (apartments[index]["Bedrooms"] > 5 && parseFloat(possibilities[number]) == 5) {
				filtered.push(apartments[index]);
				break;
			}
		}
	}
	return filtered;
}
function filterByNumBathrooms(apartments) {
	var possibilities = [];
	var checkboxes = document.getElementsByClassName("bathrooms");
	for (var i = 0; i < checkboxes.length; ++i) {
		if (checkboxes[i].checked) {
			possibilities.push(checkboxes[i].name);
		}
	}
	if (possibilities.length == 0) return apartments;
	var filtered = [];
	for (var index = 0; index < apartments.length; ++index) {
		for (var number = 0; number < possibilities.length; ++number) {
			if (apartments[index]["Bathrooms"] == parseFloat(possibilities[number])) {
				filtered.push(apartments[index]);
				break;
			} else if (apartments[index]["Bathrooms"] > 5 && parseFloat(possibilities[number]) == 5) {
				filtered.push(apartments[index]);
				break;
			}
		}
	}
	return filtered;
}
function filterByType(apartments) {
	var filtered = [];
	if ((document.getElementById("apartmentsType").checked && 
		document.getElementById("houseType").checked) || (
		!(document.getElementById("apartmentsType").checked) && 
		!(document.getElementById("houseType").checked))) {
		return apartments;	
	} else if (document.getElementById("apartmentsType").checked) {
		for (var index = 0; index < apartments.length; ++index) {
			if (apartments[index]["Type"] == "Apartment") {
				filtered.push(apartments[index]);
			}
		}
		return filtered;
	} else {
		for (var index = 0; index < apartments.length; ++index) {
			if (apartments[index]["Type"] == "House") {
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
	if (document.getElementById("Urbana").checked == 
		document.getElementById("Champaign").checked) {
		return apartments;	
	}
	var filtered = [];
	if (document.getElementById("Urbana").checked) {
		for (var a = 0; a < apartments.length; ++a) {
			if (apartments[a].Address.includes("Urbana")) {
				filtered.push(apartments[a]);
			}
		}
	} else if (document.getElementById("Champaign").checked) {
		for (var a = 0; a < apartments.length; ++a) {
			if (apartments[a].Address.includes("Champaign")) {
				filtered.push(apartments[a]);
			}
		}
	}
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
	var tableRow = document.getElementById((lineNumber + 1).toString());
	var dataCells = tableRow.getElementsByTagName("td");
	dataCells[0].innerHTML = apartment.Name;
	dataCells[1].innerHTML = apartment.Address;
	dataCells[2].innerHTML = apartment.Rent;
	dataCells[3].innerHTML = apartment.Type;
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
	
	getBankierApartments();
	getJSMApartments();
	getRamshawApartments();
	getSmileApartments();
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
document.getElementById("clearFilters").addEventListener("click", clearSearch);
function clearSearch() {
	clearCells();
	clearBoxes();
	currentStartIndex = 0;
	displayApartments(apartmentsCompleteList, 0);
}
