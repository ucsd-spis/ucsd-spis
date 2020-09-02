// TODO: variables to update every year
var year = 2020;
var applicationStart = "April 4, 2020";
var applicationEnd = "May 13, 2020";
var fee = 900;
var programStart = "August 2, 2020";
var programEnd = "September 4, 2020";
//var staffSpeaker1 = "Pradeep Khosla, Chancellor, UC San Diego";
//var staffSpeaker2 = "Nadia Heninger, CSE Faculty";
//var studentSpeaker1 = "Diego Martinez, SPIS student";
//var studentSpeaker2 = "Faith Lu, SPIS student";
var acceptanceNotification = "May 18-25, 2020";
var acceptanceConfirmation = "June 2, 2020";
var feeDue = "June 15, 2020";
var registrationDue = "June 22, 2020";
// link after "https://"
var applicationLink = "docs.google.com/forms/d/e/1FAIpQLScKL_GQ5_kUx6SOrBCLfqTdaeIBGtwvLBrZPWLtsr4WS7g6sg/viewform";
var internalWebsiteLink = "sites.google.com/eng.ucsd.edu/ucsd-cse-spis-2020"

// DO NOT EDIT

// automatically update every occurance of year on site
for (i=0; i<document.getElementsByClassName("year").length; i++) {
    document.getElementsByClassName("year")[i].innerHTML = year;
}

for (i=0; i<document.getElementsByClassName("appStart").length; i++) {
    document.getElementsByClassName("appStart")[i].innerHTML = applicationStart;
}

for (i=0; i<document.getElementsByClassName("appEnd").length; i++) {
    document.getElementsByClassName("appEnd")[i].innerHTML = applicationEnd;
}

for (i=0; i<document.getElementsByClassName("fee").length; i++) {
    document.getElementsByClassName("fee")[i].innerHTML = fee;
}

for (i=0; i<document.getElementsByClassName("programStart").length; i++) {
    document.getElementsByClassName("programStart")[i].innerHTML = programStart;
}

for (i=0; i<document.getElementsByClassName("programEnd").length; i++) {
    document.getElementsByClassName("programEnd")[i].innerHTML = programEnd;
}

for (i=0; i<document.getElementsByClassName("appLink").length; i++) {
    document.getElementsByClassName("appLink")[i].innerHTML = applicationLink;
}

for (i=0; i<document.getElementsByClassName("feeDue").length; i++) {
    document.getElementsByClassName("feeDue")[i].innerHTML = feeDue;
}

for (i=0; i<document.getElementsByClassName("registrationDue").length; i++) {
    document.getElementsByClassName("registrationDue")[i].innerHTML = registrationDue;
}

for (i=0; i<document.getElementsByClassName("acceptDate").length; i++) {
    document.getElementsByClassName("acceptDate")[i].innerHTML = acceptanceNotification;
}

for (i=0; i<document.getElementsByClassName("confirmDate").length; i++) {
    document.getElementsByClassName("confirmDate")[i].innerHTML = acceptanceConfirmation;
}

//document.getElementById("speaker1").innerHTML = staffSpeaker1;
//document.getElementById("speaker2").innerHTML = staffSpeaker1;
//document.getElementById("speaker3").innerHTML = studentSpeaker1;
//document.getElementById("speaker4").innerHTML = studentSpeaker2;e
