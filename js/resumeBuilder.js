/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
 	"name": "Wayne Hsieh",
 	"role": "Full Stack Developer",
 	"contacts" : {
 		"email": "john00184@gmail.com",
 		"mobile": "0934257955",
 		"Github": "DCWei",
 		"location": "Taipei, Taiwan"
 	},
 	"skills": ["C#", "ASP.NET", "SQL Server", "C/C++", "Python"],
 	"picture": "https://scontent-tpe1-1.xx.fbcdn.net/hphotos-xpa1/t31.0-8/10428276_10204035779279527_3449145194189399550_o.jpg",
 	"welcomeMessage": "Welcome to check my resume!",
 	"display": function() {
 		$("#header").append(HTMLheaderName.replace("%data%", this.name));
		$("#header").append(HTMLheaderRole.replace("%data%", this.role));
		$("#header").append(HTMLbioPic.replace("%data%", this.picture));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
 		if(bio.skills.length > 0) {
		 	$("#header").append(HTMLskillsStart);
		 	for(i=0;i<bio.skills.length;i++){
		 		formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		 		$("#skills").append(formattedSkills);
 			}
 		}
 		$("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
 		$("#footerContacts").append(HTMLemail.replace("%data%", this.contacts.email));
 		$("#footerContacts").append(HTMLgithub.replace("%data%", this.contacts.Github));
 		$("#footerContacts").append(HTMLlocation.replace("%data%", this.contacts.location));
 	}
 };

 var work = {
 	"jobs": [
	 	{
		 	"company": "Trend Micro",
		 	"years": "2013~2015",
		 	"jobTitle": "Software Engineer",
		 	"location": "Taipei, Taiwan",
		 	"description": "This job is my first job, and learn a lot during the job. I become familiar with C#, SQL server, Python."
	 	}
 	]
 };

 var education = {
 	"schools": [
 		{
 			"name": "National Sun Yat-Sen University",
 			"degree": "BA",
 			"location": "Kaoshung, Taiwan",
 			"years": "2007~2011",
 			"major": ["Computer Science"]
 		},
 		{
 			"name": "National Chiao Tung University",
 			"degree": "Masters",
 			"location": "Hsinchu, Taiwan",
 			"years": "2011~2013",
 			"major": ["Computer Science"]
 		}
 	],
 	"onlineCourses": [
 		{
 			"title": "JavaScript Syntax",
 			"school": "Udacity",
 			"dates": 2015,
 			"url": "https://www.udacity.com/course/ud804"
 		}
 	],
 	"display": function() {
 		for(var s in this.schools)
 		{
 			$("#education").append(HTMLschoolStart);
 			$(".education-entry:last").append(HTMLschoolName.replace("%data%", this.schools[s].name) + HTMLschoolDegree.replace("%data%", this.schools[s].degree));
 			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", this.schools[s].years));
 			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", this.schools[s].location));
 			for(var m in this.schools[s].major)
 			{
 				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", this.schools[s].major[m]));
 			}
 		}
 		for(var oc in this.onlineCourses)
 		{
 			$("#education").append(HTMLonlineClasses);
 			$("#education").append(HTMLonlineTitle.replace("%data%", this.onlineCourses[oc].title) + HTMLonlineSchool.replace("%data%", this.onlineCourses[oc].school));
 			$("#education").append(HTMLonlineDates.replace("%data%", this.onlineCourses[oc].dates));
 			$("#education").append(HTMLonlineURL.replace("%data%", this.onlineCourses[oc].url));
 		}
 	}
 };

 var project = {
 	"projects": [
 		{
 			"title": "My Resume",
 			"date": "2015-11-07",
 			"description": "This project is main to show my job experiences and education. In this project, I will show all the skills I have to present my resume.",
 			"url": "",
 			"image": ["https://s3.amazonaws.com/content.udacity-data.com/site-svgs/upsell_icon.svg"]
 		}
 	],
 	"display": function() {
 		for(var p in this.projects)
 		{
 			$("#projects").append(HTMLprojectStart);
 			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[p].title));
 			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[p].date));
 			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[p].description));
 			for(var img in this.projects[p].image)
 			{
 				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[p].image[img]));
 			}
 		}
 	}
 };

function displayWork(job) {
 	for(j in work.jobs) {
 		$("#workExperience").append(HTMLworkStart);
 		$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[j].company) + HTMLworkTitle.replace("%data%", work.jobs[j].jobTitle));
 		$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[j].years));
 		$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[j].location));
 		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[j].description));
 	}
 }

function inName(name){
	var tmp = name.split(" ");
	tmp[0] = tmp[0][0].toUpperCase()+tmp[0].slice(1).toLowerCase();
	tmp[1] = tmp[1].toUpperCase();
	var newName = tmp.join(" ");

	return newName;
}

$(document).ready(initializeMap);

 
bio.display();
education.display();
displayWork();
project.display();
$("#mapDiv").append(googleMap);
