alert ("Welcome!!. Learn about Ghana and get your Akan name.")

let day = document.getElementbyId("year").value
let gender = document.getElementById("gender").value
let newDate = new Date(date);
let date_of_birth = newDate.getFullYear();

cc=year.toString().substr(0,2);
yy=year.toString().substr(-2);
mm=month;
dd = day;

day_of_week = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7
day_of_week = parseInt(day_of_week)

if (day_of_week == 0 && gender == "male"){
	console.log("Kwasi");
    console.log("Sunday")
}

if (day_of_week == 1 && gender == "male"){
	console.log("Kwadwo");
    console.log("Monday")
}

if (day_of_week == 2 && gender == "male"){
	console.log("Kwabena");
    console.log("Tuesday")
}

if (day_of_week == 3 && gender == "male"){
	console.log("Kwaku");
    console.log("Wednesday")
}

if (day_of_week == 4 && gender == "male"){
	console.log("Yaw");
    console.log("Thursday")
}

if (day_of_week == 5 && gender == "male"){
	console.log("Koffi")
    console.log("Friday")
}

if (day_of_week == 6 && gender == "male"){
	console.log("Kwame");
    console.log("Saturday")
}

if (day_of_week == 0 && gender == "female"){
	console.log("Akosua");
    console.log("Sunday")
}

if (day_of_week == 1 && gender == "female"){
	console.log("Adwoa");
    console.log("Monday")
}

if (day_of_week == 2 && gender == "female"){
	console.log("Abeenaa");
    console.log("Tuesday")
}

if (day_of_week == 3 && gender == "female"){
	console.log("Akua");
    console.log("Wednesday")
}

if (day_of_week == 4 && gender == "female"){
	console.log("Yaa");
    console.log("Thursday")
}

if (day_of_week == 5 && gender == "female"){
	console.log("Afua");
    console.log("Friday")
}

if (day_of_week == 6 && gender == "female"){
	console.log("Ama");
    console.log("Saturday")
}