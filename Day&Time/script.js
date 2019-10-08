function dateAndTime(){
	var date = new Date();
	var dayOfWeek = new Array(7);

	dayOfWeek[0] = "Sunday";
	dayOfWeek[1] = "Monday";
	dayOfWeek[2] = "Tuesday";
	dayOfWeek[3] = "Wednesday";
	dayOfWeek[4] = "Thursday";
	dayOfWeek[5] = "Friday";
	dayOfWeek[6] = "Saturday";

	var today = dayOfWeek[date.getDay()];
	var hour = date.getHours();
	var minute = date.getMinutes();

	document.getElementById("day").innerHTML = "Today is: " + today;
	document.getElementById("time").innerHTML = "Current time is: " + hour + ":" + minute;
}