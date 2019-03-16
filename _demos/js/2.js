// "bio" OBJECT
var bio = {
    // string
    "name": "Marios Sofokleous",
    // sring
    "role": "Web Developer",
    // object
    "contact": {
        "mobile": "99-111844",
        "email": "marios.sofokleous@yandex.com",
        "github": "PictureElement",
        "location": "Pafos"
    },
    // string
    "pic": "../images/100x100.png",
    // array
    "skills": ["HTML", "CSS", "JavaScript", "WordPress.org"]
};
// DOM MANIPULATION
$("#bio").append(`<img src="${bio.pic}" width="100"><br>`);
$("#bio").append("Name: " + bio.name + "<br>");
$("#bio").append("Role: " + bio.role + "<br>");
$("#bio").append("Mobile: " + bio.contact.mobile + "<br>");
$("#bio").append("Email: " + bio.contact.email + "<br>");
$("#bio").append("GitHub: " + bio.contact.github + "<br>");
$("#bio").append("Location: " + bio.contact.location + "<br>");
$("#bio").append("Skills: " + bio.skills[0] + ", ");
$("#bio").append(bio.skills[1] + ", ");
$("#bio").append(bio.skills[2] + ", ");
$("#bio").append(bio.skills[3]);
// "work" OBJECT
var work = {};
// dot notation
work.position = "Web Developer";
work.employer = "Linux Foundation";
work.yearsOfEmployment = 2;
work.city = "Los Angeles";
// DOM MANIPULATION
$("#work").append("Position: " + work.position + "<br>");
$("#work").append("Employer: " + work.employer + "<br>");
$("#work").append("Years of Employment: " + work.yearsOfEmployment + "<br>");
$("#work").append("City: " + work.city);
// "education" OBJECT
var education = {};
// bracket notation
education["university"] = "University of Cyprus";
education["degree"] = "Computer Engineering";
education["yearsOfAttendance"] = 5;
// DOM MANIPULATION
$("#education").append("University: " + education["university"] + "<br>");
$("#education").append("Degree: " + education["degree"] + "<br>");
$("#education").append("Years of Attendance: " + education["yearsOfAttendance"]);
