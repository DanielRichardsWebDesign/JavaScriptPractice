function calculateArea(){
	var side1 = 5;
	var side2 = 6;
	var side3 = 7;

	var sideSum = (side1 + side2 + side3) / 2;
	var area = Math.sqrt(sideSum * ((sideSum - side1) * (sideSum - side2) * (sideSum - side3)));

	document.getElementById("area").innerHTML = "The area of a triangle with sides of 5, 6 & 7 is: " + area;
}