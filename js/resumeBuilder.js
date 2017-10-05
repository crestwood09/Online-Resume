var bio = {
	"name" : "Ross Parker",
	"role" : "Senior Project Manager",
	"contacts" : {
		"mobile" : "555-555-5555", 
		"email" : "blank@att.net",
		"github": "crestwood09",
		"location": "Birmingham, AL"
	},
	"welcomeMessage" : "I'm currently working as a Senior Project Manager in Birmingham, AL. Throughout my career, I've coordinated successful sales strategies and initiatives designed to increase revenue.",
	"skills" : ["Sales Operations", "Reporting & Analytics", "Web Design"],
	"biopic" : "images/me.jpg"
};

var education = {
	"schools": [
		{
			"name": "Mississippi State University",
			"location": "Starkville, MS",
			"degree": "BA",			
			"major": ["Marketing"],
			"dates": 2004,
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"title": "Senior Project Manager",
			"location": "Hoover, AL",
			"dates": "October 2012 - Present",			
			"description": "Responsible for managing workforce planning projects that support the Retail Sales organization."
		},
		{
			"employer": "AT&T",
			"title": "Sales Operations Lead",
			"location": "Birmingham, AL",
			"dates": "August 2008 - October 2012",			
			"description": "Responsible for ensuring flawless execution for the customer experience in retail locations in the Gulf States market including scheduling adherence, training, and reporting."
		},
		{
			"employer": "AT&T",
			"title": "Store Manager",
			"location": "Grand Prairie, TX",
			"dates": "August 2006 - August 2008",			
			"description": "Met and exceeded assigned sales performance goals. Achieved top store in the Dallas/Fort Worth area in wireline sales during the fourth quarter of 2007."
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Staffing Mix Project",
			"dates": "2016",
			"description": "Allocated staffing mix targets across 2,200 retail locations. Analyzed sales volume data to complete optimized headcount targets for each location for all job responsibilities in the retail sales organization.",
			"images": ["images/staffing.jpg"]
		},
		{
			"title": "Centralized Travel Project",
			"dates": "2014",
			"description": "Designed and implemented a project to create a new centralized logistics application that provides fast and efficient solutions for training and travel for new hire retail employees.",
			"images": ["images/travel.jpg"]
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMessage);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$('#skills').append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("footerContacts").append(formattedContactInfo[i]);
}

function displayWork(){

	if (work.jobs.length > 0) {

		$("#workExperience").append(HTMLworkStart);

		for (i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

displayWork();

projects.display = function() {
	if(projects.projects.length > 0) {
		for (i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);

			for (img in projects.projects[i].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
					$(".project-entry:last").append(formattedImage);
			}

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);

		}
	}
}

education.display();

$("#mapDiv").append(googleMap);







