var jsmData = `Company,Address,Rent,Bedrooms,Bathrooms
JSM,102 E. Gregory,"$1065 ",1 Beds,1 Bath
JSM,102 E. Gregory,$1380-1530,2 Beds,1 Bath
JSM,102 E. Gregory,"$3520 ",6 Beds,3 Bath
JSM,105 E. Chalmers,"$1265 ",2 Beds,1 Bath
JSM,105 E. Chalmers,$750-860,1 Beds,1 Bath
JSM,105 E. Green,$840-860,0 Beds,1 Bath
JSM,105 E. Chalmers,$745 ,0 Beds,1 Bath
JSM,107 E. Chalmers,"$1815 ",3 Beds,1 Bath
JSM,110 S. Gregory,$685-765,1 Beds,1 Bath
JSM,110 S. Gregory,$640 ,0 Beds,1 Bath
JSM,201 S. Wright,$1040-1155,1 Beds,1 Bath
JSM,201 E. Healey,"$1760 ",3 Beds,2 Bath
JSM,203 E. Stoughton,$800-820,1 Beds,1 Bath
JSM,301 S. Water,$2180-2330,4 Beds,2 Bath
JSM,302 S. Fourth,$1330-1350,2 Beds,1 Bath
JSM,303 S. Wright,$1340-1370,2 Beds,1 Bath
JSM,306 E. Armory,"$3175 ",5 Beds,2 Bath
JSM,307 E. Armory,$580-595,0 Beds,1 Bath
JSM,308 E. Armory,"$1640 ",2 Beds,2 Bath
JSM,308 E. Armory,"$1035 ",0 Beds,1 Bath
JSM,401 E. Chalmers,$625-645,0 Beds,1 Bath
JSM,401 E. Chalmers,$855-875,1 Beds,1 Bath
JSM,403 E. White,$1330-1350,2 Beds,1 Bath
JSM,405 E. White,"$1130 ",1 Beds,1 Bath
JSM,405 E. White,$730 ,0 Beds,1 Bath
JSM,405 E. White,"$1045 ",2 Beds,1 Bath
JSM,406 E. Clark,$785 ,1 Beds,1 Bath
JSM,408 E. Stoughton,$885-1055,1 Beds,1 Bath
JSM,408 E. White,"$1890 ",3 Beds,1 Bath
JSM,408 E. Stoughton,"$1410 ",2 Beds,1 Bath
JSM,408 E. Stoughton,$760-805,0 Beds,1 Bath
JSM,408 E. White,"$1350 ",2 Beds,1 Bath
JSM,501 E. Healey,"$1980 ",3 Beds,2 Bath
JSM,502 E. White,$660-795,0 Beds,1 Bath
JSM,502 E. John,"$1690 ",2 Beds,2 Bath
JSM,505 E. Clark,$765-795,0 Beds,1 Bath
JSM,505 E. Healey,"$1980 ",3 Beds,2 Bath
JSM,505 E. Healey,"$3250 ",5 Beds,3 Bath
JSM,508 E. Stoughton,"$1340 ",2 Beds,1 Bath
JSM,508 E. Stoughton,$885 ,1 Beds,1 Bath
JSM,510 E. Green,"$1970 ",3 Beds,1 Bath
JSM,601 S. Sixth,"$1210 ",1 Beds,1 Bath
JSM,601 E. White,$905-925,1 Beds,1 Bath
JSM,601 S. Sixth,$1545-1760,2 Beds,1 Bath
JSM,602 E. Clark,$695-850,0 Beds,1 Bath
JSM,603 E. White,$905-925,1 Beds,1 Bath
JSM,604 E. Clark,"$1170 ",2 Beds,1 Bath
JSM,605 E. White,$905-925,1 Beds,1 Bath
JSM,607 E. White,$905-925,1 Beds,1 Bath
JSM,700 S. Gregory,$880-1220,1 Beds,1 Bath
JSM,700 S. Gregory,"$1220 ",2 Beds,1 Bath
JSM,701 S. Gregory,"$1150 ",2 Beds,1 Bath
JSM,701 S. Gregory,$850-1150,1 Beds,1 Bath
JSM,707 S. Sixth,$1230-1440,2 Beds,1 Bath
JSM,707 S. Sixth,$1065-1185,1 Beds,1 Bath
JSM,902 S. Lincoln,$945-1150,1 Beds,1 Bath
JSM,902 S. Lincoln,"$1570 ",2 Beds,2 Bath
JSM,902 S. Lincoln,"$1470 ",2 Beds,1 Bath
JSM,1103 S. Euclid,"$1470 ",2 Beds,1 Bath
JSM,1103 S. Euclid,"$1935 ",3 Beds,1 Bath
JSM,1103 S. Euclid,"$3185 ",5 Beds,2 Bath
JSM,102 E. Gregory,"$1065 ",1 Beds,1 Bath
JSM,102 E. Gregory,$1380-1530,2 Beds,1 Bath`;
var bankierData = `Company,Title,Address
Bankier,1107 S 2nd St.,"1107 S 2nd St, Champaign, IL"
Bankier,112 E Green,"112 E Green St, Champaign, IL"
Bankier,Skyline Tower,"519 E Green St, Champaign, IL"
Bankier,Skyline West,"509 E Green St, Champaign, IL"
Bankier,509 1/2 E. Green St.,"509 E Green St, Champaign, IL"
Bankier,Skylight Court,"410 E Green St, Champaign, IL"
Bankier,408 E. Green St.,"408 E Green St, Champaign, IL"
Bankier,Park Place Tower,"202 E Green St, Champaign, IL
Bankier,406 E. Green St.,"406 E Green St, Champaign, IL"
Bankier,624 S. 5th St.,"624 S 5th St, Champaign, IL"
Bankier,403 E. Green St.,"403 E Green St, Champaign, IL"
Bankier,621 E. Green St.,"621 E Green St, Champaign, IL"`;

var ramshawData = `Company,Address,Rent,Bedrooms,Bathrooms
Ramshaw,"1002 S. Second St., Champaign", $560 Per Bedroom,4 Bed,2 Bath 
Ramshaw,"1010 S. First St., Champaign", $490-$640 Per Month,2 Bed,1 Bath 
Ramshaw,"1012 S. First St., Champaign", $490 Per Bedroom,2 Bed,1 Bath 
Ramshaw,"102 N. Gregory St, Urbana", $720 Per Month,2 Bed,1 Bath 
Ramshaw,"107 E. Daniel, Champaign"," $320 Per Bedroom/$1280 Per Month",4 Bed,2 Bath 
Ramshaw,"107 S. Wright St, Champaign"," $665-$1920 per month",5 Bed,1.5 Bath 
Ramshaw,"109 W. Church, Savoy", $545 - $930  per month,1 Bed,1 Bath 
Ramshaw,"110 & 112 Tomaras Ave, Savoy"," $1150 per month",3 Bed,1.5 Bath 
Ramshaw,"1105 W. Main St, Urbana", Fully Leased,2 or 3 Bed,1 Bath 
Ramshaw,"1105 W. Oregon St., Urbana", $750 - $850 Per Month,2 Bed,1 Bath 
Ramshaw,"1107 W. Oregon St., Urbana", $750 - 850 per month,2 Bed,1 Bath 
Ramshaw,"1108 W. Nevada St., Urbana"," $775 - 1140 per month",3 Bed,1 Bath 
Ramshaw,"1110 W. Stoughton St, Urbana", $805 - $885  per month,2 Bed,1 Bath 
Ramshaw,"1604B Lyndhurst, Savoy"," $1500 per month",2 Bed,1.5 Bath 
Ramshaw,"1606 W. Healey St, Champaign"," $815- $1300 per month",3 Bed,1 Bath 
Ramshaw,"201 S. Elm St, Champaign", $800 - $850 per month,1 Bed,1 Bath 
Ramshaw,"202 Munroe St., Bondville", $615 - $645 per month,1 Bed,1 Bath 
Ramshaw,"202 W. Columbia Ave., Champaign", Fully Leased,1 Bed,1 Bath 
Ramshaw,"208 W. Washington St., Champaign", Fully Leased,4 Bed,2 Bath 
Ramshaw,"209 N. Coler, Urbana", $640-$910 per month,2 Bed,1 Bath 
Ramshaw,"210 W. Washington St., Champaign"," $1060 per month",4 Bed,2 Bath 
Ramshaw,"212 W. Washington St., Champaign", $999 per month,3 Bed,2 Bath 
Ramshaw,"2407 Carrelton, Champaign", $1400 per month,4 Bed,2 Bath 
Ramshaw,"2407 John, Champaign", $850 per month,2 Bed,1.5 Bath 
Ramshaw,"3 Angela Court, Savoy", $1850 per month,3 Bed,2 Bath 
Ramshaw,"302 S. Cedar St., Urbana", $399-$950 Per Month,2 Bed,1 Bath 
Ramshaw,"303 & 305 E Clark, Champaign", $520 - $550 per month,1 Bed 
Ramshaw,"305 E John St., Champaign"," $900 - 1700 per month",4 Bed,3 Bath 
Ramshaw,"308 E. Clark St, Champaign"," $1380 per month",4 Bed,3 Bath 
Ramshaw,308 W Green St Urbana,, $685 - 850 per month,1 Bed,1 Bath 
Ramshaw,"310 E. Chalmers St., Champaign", $575-$860 Per Month,1 Bed,1 Bath 
Ramshaw,"310 W. Green St., Urbana"," $1650 per month",3 Bed,2 Bath 
Ramshaw,"311 Columbia, Champaign"," $815 - $1300 per month",2 Bed,1 Bath 
Ramshaw,"312 Columbia, Champaign", Fully Leased,2 Bed,1 Bath 
Ramshaw,"312 W. Springfield Ave., Urbana", $850 Per Month,2 Bed,1 Bath 
Ramshaw,"312 W. Springfield, Champaign", $800-850 per month,1 Bed,1 Bath 
Ramshaw,"402 S. Race St., Urbana", Fully Leased,1 Bath,1 Bed 
Ramshaw,"404 S. Busey, Urbana"," 1650 per month",4 Bed,2 Bath 
Ramshaw,"412 Church, Champaign", $400 - $600 per month,1 Bed,1 Bath 
Ramshaw,"508 W Columbia, Champaign", $995 per month,3 Bed,1 Bath 
Ramshaw,"509 N Willis Ave, Champaign"," $625 - $1400  per month",2 Bed,1 Bath 
Ramshaw,"509 W. Main St, Urbana", $650 Per Month,1 Bed,1 Bath 
Ramshaw,"510 S. Mattis Ave, Champaign"," $1025 - $1150 per month",2 Bed,2.5 Bath 
Ramshaw,"59 E. John St., Champaign", $325 Per Bedroom/Per Month,3 Bed,2 Bath 
Ramshaw,"605 W. Green St., Urbana"," $2340 - 2540 per month",4 Bed,4 Bath 
Ramshaw,"606 W. Healey St, Champaign", Leased,1 Bed,1 Bath 
Ramshaw,"616 W. Healey, Champaign", $599 per month,,1 Bath
Ramshaw,"702 W. Western Ave, Urbana", $725-745 per month,1 Bed,1 Bath 
Ramshaw,"703 W. Park Ave., Champaign", $670-795 per month,1 Bath,1 Bed 
Ramshaw,"704 Stoughton St., Urbana", $585-$750 per month,,1 Bath
Ramshaw,"705 W. Main St., Urbana"," $585-1400 per month",,1 Bath
Ramshaw,"706 S. Locust, Champaign", $445-$825 Per Month,,1 Bath
Ramshaw,"802 W. Iowa St., Urbana IL"," $1545 per month",5 Bed,2 Bath 
Ramshaw,"804 W. Church St, Champaign", $550-750 per month,1 Bath,1 Bed 
Ramshaw,"905 S. Second St., Champaign", $445 Per Bedroom,2 Bed,1 Bath 
Ramshaw,Busey Lincoln Apartments,, $740 per month,2 Bed 
Ramshaw,"Capstone Quarters, Champaign", Per Bedroom $425 - $625 ,2 Bed,2 Bath 
Ramshaw,"Cobblefield Condos, Champaign"," $1200 per month",2 Bed 
Ramshaw,"Crescent Drive, Champaign", $900 - $995 per month,3 Bed,1.5 Bath 
Ramshaw,"Kobuck Apartments, Savoy", $650 - $950 per month,2 Bed 
Ramshaw,"Park Place ??? Plymouth, Champaign", Fully Leased,1 Bed,1 Bath 
Ramshaw,"Parkland Cove, Champaign", Fully Leased,2 Bed,2 Bath 
Ramshaw,"Parkview Apartments ??? 111 Park, Urbana", $565 - $745 per month,,1 Bath
Ramshaw,"Pomona Drive Condos, Champaign", Fully Leased,3 Bed,2 Bath 
Ramshaw,"Prestwick Point Apartments, Champaign", Fully Leased,2 Bed,2 Bath 
Ramshaw,"Single Family Homes, Champaign", $740 - $850 per month,2 Bed 
Ramshaw,"Southwest Place ??? 1901-1902 Karen Ct, Champaign", Fully Leased,2 Bed,1.5 Bath 
Ramshaw,"Southwest Place ??? 2403 Leeper, Champaign", Fully Leased,2 Bed,1.5 Bath 
Ramshaw,"Southwest Place ??? 2404 Leeper, Champaign", Fully Leased,1 Bed,1 Bath 
Ramshaw,"Southwest Place ??? 2502 Myers Ct, Champaign", $990 per month,2 Bed,1.5 Bath 
Ramshaw,"Southwest Place ??? 2503 Leeper Dr, Champaign","$995 - 1095 per month",2 Bed,1.5 Bath 
Ramshaw,"Southwest Place ??? 2504 Leeper, Champaign", Fully Leased,2 Bed,1.5 Bath 
Ramshaw,"Southwest Place ??? 2504 Myers, Champaign", $995 Per Month,2 Bed,1.5 Bath 
Ramshaw,"Southwest Place ??? 2508 Myers, Champaign", $995 per month,2 Bed,1 Bath 
Ramshaw,"Southwest Place ??? 2509 Leeper, Champaign","$1090 per month",2 Bed,2 Bath 
Ramshaw,"Southwest Place ??? 2510 Myers, Champaign", Fully Leased,2 Bed 
Ramshaw,"Southwest Place ??? 2517-2525 Leeper Dr, Champaign", $890 per month,2 Bed,1.5 Bath 
Ramshaw,"Southwest Place- 1907 Nancy, Champaign","$1045 per month",1 Bath,1 Bed 
Ramshaw,"Stratford Residences, Urbana","$825 - $1100 per month",2 Bed,2.5 Bath`;
var apartmentsCompleteList = [];
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
	var delimiter = ",";
	var str = bankierData;
	const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
	const rows = str.slice(str.indexOf("\n") + 1).split("\n");

	 const arr = rows.map(function (row) {
    const values = row.split(delimiter);
	var address1 = values[2];
	if (address1 == undefined) address1 = "";
	else if (address1.substring(0,1) == "\"") address1 = address1.substring(1);
	if (address1.substring(address1.length - 1) == "\"") address1 = address1.substring(0, address1.length - 1);
	const address = address1 + "," + values[3];
    const el = headers.reduce(function (object, header, index) {
	  var strs = values[index];
	  if (strs == undefined) strs = " ";
	  if (strs.substring(0,1) == "\"") strs = strs.substring(1);
	  if (strs.substring(strs.length - 1) == "\"") strs = strs.substring(0, strs.length - 1);
      object[header] = strs;
	  object["Address"] = address;
      return object;
    }, {});
    return el;
  });
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
	  apartmentsCompleteList.push(arr[i]);
  }
}
function getJSMApartments() {
	//read csv 
	var delimiter = ",";
	var str = jsmData;
	const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
	const rows = str.slice(str.indexOf("\n") + 1).split("\n");

	 const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
	  var str = values[index];
	  if (str == undefined) str = "";
	  if (str.substring(0,1) == "\"") str = str.substring(1);
	  if (str.substring(str.length - 1) == "\"") str = str.substring(0, str.length - 1);
      object[header] = str;
      return object;
    }, {});
    return el;
  });
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
	  apartmentsCompleteList.push(arr[i]);
  }
}
function getRamshawApartments() {
	var delimiter = ",";
	var str = ramshawData;
	const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
	const rows = str.slice(str.indexOf("\n") + 1).split("\n");

	 const arr = rows.map(function (row) {
    const values = row.split(delimiter);
	var address1 = values[1];
	if (address1 == undefined) address1 = "";
	else if (address1.substring(0,1) == "\"") address1 = address1.substring(1);
	if (address1.substring(address1.length - 1) == "\"") address1 = address1.substring(0, address1.length - 1);
	if (values[2] != undefined) {
		if (values[2].substring(values[2].length - 1) == "\"") values[2] = values[2].substring(0,values[2].length - 1);
	}
	const address = address1 + "," + values[2];
    const el = headers.reduce(function (object, header, index) {
	  var strs = values[index];
	  if (strs == undefined) strs = "";
	  if (strs.substring(0,1) == "\"") strs = strs.substring(1);
	  if (strs.substring(strs.length - 1) == "\"") strs = strs.substring(0, strs.length - 1);
      object[header] = strs;
	  var rent = values[3];
	  if (rent != undefined && rent.substring(0,1) == "\"") rent = rent.substring(1, rent.length-1);
	  var beds = values[4];
	  if (beds != undefined && beds.substring(0,1) == "\"") beds = beds.substring(1, beds.length-1);
	  var baths = values[5];
	  if (baths != undefined && baths.substring(0,1) == "\"") baths = baths.substring(1, baths.length-1);
	  object["Bedrooms"] = beds;
	  object["Bathrooms"] = baths;
	  object["Rent"] = rent;
	  object["Address"] = address;
      return object;
    }, {});
    return el;
  });
  console.log(arr);
  for (var i = 0; i < arr.length; i++) {
	  apartmentsCompleteList.push(arr[i]);
  }
}
function getSmileApartments() {
	//readcsv
}
//apartmentsCompleteList = dummyArrayForTesting;
//note to self: add flexbox div for sort functionality and implement fxns for it 

document.getElementById("advSearc").addEventListener("click",openAdvSearch);
document.getElementById("closeAdv").addEventListener("click", closeAdvSearch);

//function changes advanced search filter box to be visible and take up space
function openAdvSearch() {
	document.getElementById("advancedSearchFilters").style.visibility	= "visible";
	document.getElementById("advancedSearchFilters").style.width = "400px";
	document.getElementById("advancedSearchFilters").style.height	= "290px";
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
	//filtered = filterByType(filtered);
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
		if (apartments[index].Company == name) {
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
			var rentString = apartments[index]["Rent"];
			if (rentString == undefined) continue;
			if (rentString.includes("-")) {
				var rent1 = parseFloat(rentString.substring(1,rentString.indexOf("-")));
				var rent2 = rentString.substring(rentString.indexOf("-"));
				if (rent1 <= maxRent) {
					filtered.push(apartments[index]);
				}
			} else {
				rentString = parseFloat(rentString.substring(1));
				if (rentString <= maxRent) {
					filtered.push(apartments[index]);
				}
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
			var str = apartments[index]["Bedrooms"];
			if (str == undefined) str = "";
			if (str.includes(possibilities[number])) {
				filtered.push(apartments[index]);
				break;
			} else if ((str.includes("5") || str.includes("6") || str.includes("7")) && parseFloat(possibilities[number]) == 5) {
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
			var str = apartments[index]["Bathrooms"];
			if (str == undefined) str = "";
			if (str.includes(possibilities[number])) {
				filtered.push(apartments[index]);
				break;
			} else if ((str.includes("5") || str.includes("6") || str.includes("7")) && parseFloat(possibilities[number]) == 5) {
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
	dataCells[0].innerHTML = apartment.Company;
	dataCells[1].innerHTML = apartment.Address;
	dataCells[2].innerHTML = apartment.Rent;
	//dataCells[3].innerHTML = "Apartment";
	dataCells[3].innerHTML = apartment.Bedrooms;
	dataCells[4].innerHTML = apartment.Bathrooms;
	for (var i = 0; i < 5; ++i) {
		if (dataCells[i].innerHTML == "undefined") {
			dataCells[i].innerHTML = "";
		}
	}
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
	
	
	getJSMApartments();
	getRamshawApartments();
	getBankierApartments();
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
		if (apartmentsCompleteList[index].Company == name) {
			filtered.push(apartmentsCompleteList[index]);
		}
	}
	displayApartments(filtered, 0);
}
function advancedSearch() {
	var filtered = applyFilters(apartmentsCompleteList);
	currentStartIndex = 0;
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
		}
}
function displayApartments(filteredApartments, startIndex) {
	currentFilteredApartments = filteredApartments;
	clearCells();
	if (filteredApartments == null) return;
	for (var lineNum = 0; lineNum < filteredApartments.length - currentStartIndex; lineNum++) {
		if (lineNum < 6) {
			console.log(lineNum);
			console.log(currentStartIndex);
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
