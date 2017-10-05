var bio = {
	"name": "Ross Parker",
	"role": "Senior Project Manager",
	"contacts": {
		"mobile": "555-555-5555", 
		"email": "blank@att.net",
		"github": "crestwood09",
		"location": "Birmingham, AL"
	},
	"welcomeMessage": "I'm currently working as a Senior Project Manager in Birmingham, AL. Throughout my career, I've coordinated successful sales strategies and initiatives designed to increase revenue.",
	"skills": ["Sales Operations", "Reporting & Analytics", "Web Design"],
	"biopic": "images/me.jpg",

	display: function() {

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").prepend(formattedName + formattedRole);
		$("#topContacts, #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMessage);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			for(var i = 0, len = bio.skills.length; i < len; i++) {
				var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);

				$("#skills").append(formattedSkills);
			}
		}
	}
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
	],

	display: function() {

		if (work.jobs.length > 0) {

			for (var i = 0, len = work.jobs.length; i < len; i++) {
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
				var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
				var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location);
				var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
				var formattedEmployerTitle = formattedEmployer + formattedTitle;

				$("#workExperience").append(HTMLworkStart);
				$(".work-entry:last").append(formattedEmployerTitle);
				$(".work-entry:last").append(formattedDates);
				$(".work-entry:last").append(formattedLocation);
				$(".work-entry:last").append(formattedDescription);
			}
		}
	}
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
	],

	display: function() {

		if(projects.projects.length > 0) {
			for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {

				var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
				var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
				var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
				
				$("#projects").append(HTMLprojectStart);
				$(".project-entry:last").append(formattedTitle);
				$(".project-entry:last").append(formattedDates);
				$(".project-entry:last").append(formattedDescription);

				for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++) {
						var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
						
						$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "Mississippi State University",
			"location": "Starkville, MS",
			"degree": "BA",			
			"majors": ["Marketing"],
			"dates": 2004,
		}
	],
	"onlineCourses": [
		{
			"title": "Intro to Programming",
			"school": "Udacity",
			"dates": "2017 - in progress",
			"url": "https://udacity.com"
		}
	],

	display: function() {

		if(education.schools.length > 0 || education.onlineCourses.length > 0) {
			for (var i = 0, iLen = education.schools.length; i < iLen; i++) {

				var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
				var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
				var formattedNameDegree = formattedName + formattedDegree;

				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(formattedNameDegree);
				$(".education-entry:last").append(formattedSchoolDates);
				$(".education-entry:last").append(formattedLocation);

				for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
					var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);

					$(".education-entry:last").append(formattedMajor);
				}
			}

			$("#education").append(HTMLonlineClasses);

			for (var k = 0, len = education.onlineCourses.length; k < len; k++) {

				var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace("#", education.onlineCourses[k].url);
				var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
				var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url);
				var formattedTitleSchool = formattedTitle + formattedSchool;

				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(formattedTitleSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedUrl);
			}
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);







