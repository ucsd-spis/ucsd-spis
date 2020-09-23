// takes info from upgrades.json to update variables

// TRY PARSING JSON 
// PROBLEM: LINKS NO WORK BUT EVERYTHING ELSE DOES -> FIXED
var applicationLink, internalWebsiteLink;
var mapLink, faq, confidentialHealthHistory;
var evaluationConsent, mediaReleaseWaiver, waiverOfLiability;

$.getJSON("upgrades.json", function(json) {
    console.log(json);
    var year = json.year;
    var applicationStart = json.applicationStart;
    var applicationEnd = json.applicationEnd;
    var fee = json.fee;
    var programStart = json.programStart;
    var programEnd = json.programEnd;
    var acceptanceNotification = json.acceptanceNotification;
    var acceptanceConfirmation = json.acceptanceConfirmation;
    var feeDue = json.feeDue;
    var registrationDue = json.registrationDue;
    applicationLink = json.applicationLink;
    internalWebsiteLink = json.internalWebsiteLink;
    mapLink = json.mapLink;
    faq = json.faq;
    confidentialHealthHistory = json.confidentialHealthHistory;
    evaluationConsent = json.evaluationConsent;
    mediaReleaseWaiver = json.mediaReleaseWaiver;
    waiverOfLiability = json.waiverOfLiability;


    // strip links of "https://" or "http://"

    if (applicationLink.includes("https://")) {
        applicationLink = applicationLink.substring(8);
    }
    else if (applicationLink.includes("http://")) {
        applicationLink = applicationLink.substring(7);
    }

    if (internalWebsiteLink.includes("https://")) {
        internalWebsiteLink = internalWebsiteLink.substring(8);
    }
    else if (internalWebsiteLink.includes("http://")) {
        internalWebsiteLink = internalWebsiteLink.substring(7);
    }

    if (mapLink.includes("https://")) {
        mapLink = mapLink.substring(8);
    }
    else if (mapLink.includes("http://")) {
        mapLink = mapLink.substring(7);
    }

    if (faq.includes("https://")) {
        faq = faq.substring(8);
    }
    else if (faq.includes("http://")) {
        faq = faq.substring(7);
    }

    if (confidentialHealthHistory.includes("https://")) {
        confidentialHealthHistory = confidentialHealthHistory.substring(8);
    }
    else if (confidentialHealthHistory.includes("http://")) {
        confidentialHealthHistory = confidentialHealthHistory.substring(7);
    }

    if (evaluationConsent.includes("https://")) {
        evaluationConsent = evaluationConsent.substring(8);
    }
    else if (evaluationConsent.includes("http://")) {
        evaluationConsent = evaluationConsent.substring(7);
    }

    if (mediaReleaseWaiver.includes("https://")) {
        mediaReleaseWaiver = mediaReleaseWaiver.substring(8);
    }
    else if (mediaReleaseWaiver.includes("http://")) {
        mediaReleaseWaiver = mediaReleaseWaiver.substring(7);
    }

    if (waiverOfLiability.includes("https://")) {
        waiverOfLiability = waiverOfLiability.substring(8);
    }
    else if (waiverOfLiability.includes("http://")) {
        waiverOfLiability = waiverOfLiability.substring(7);
    }

    // automatically update every occurance of variables on site

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
});
