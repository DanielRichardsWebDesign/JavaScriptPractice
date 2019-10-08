function currentDate(){
	var d = new Date();
	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();

	document.getElementById("date").innerHTML = "Current Date is: " + day + "/" + month + "/" + year;
}