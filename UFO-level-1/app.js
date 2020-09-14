// from data.js
var tableData = data;
var tblColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]



var tbody = d3.select("tbody");
var searchDate = d3.select("#searchDate");
var btnSearch = d3.select("#btnSearch");
var btnReset = d3.select("#btnReset");

var loadTable = (Data) => { // makes this re-usable to loop through data
	// clears table
    tbody.html("");
	
	// adds a new row for each row of Data
	Data.forEach(dataRow => { 
		var tblRow = tbody.append("tr");  
		
		// adds columns
		tblColumns.forEach(column => tblRow.append("td").text(dataRow[column]))
	});
}

// loads table with Data
loadTable(tableData);



// search button
btnSearch.on("click", () => {
	// prevent refresh
	d3.event.preventDefault();
	
	// search variable
    var searchedDate = searchDate.property("value");
	
	// filter data
    var tableData_Filtered = tableData.filter(tableData => tableData.datetime === searchedDate);
	
	// load only the data based on the search
	if(tableData_Filtered.length !== 0) {
		tbody.html("");
		loadTable(tableData_Filtered);
	}
	else { // no matches found
		tbody.html("");
		tbody.append("tr").append("td").text("No sightings on this date");
	}
})
