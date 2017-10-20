// JSON to publish data
/* -------------------------------------------------------------------------------------------------------- */
// Introductory details like name, role, skills, contact details etc.
var bio = {
    "name": "Abha Ramchandani",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+1 (***) ***-****",
        "email": "****.****@gmail.com",
        "github": "AbhaRamchandani",
        // twitter was optional and I do not have a twitter account!
        "location": "Zürich"
    },
    "welcomeMessage": "I am looking for a career switch from Data Warehousing expert to a Web Developer.",
    "skills": ["Programming", "Datawarehousing", "Maths", "Teaching"],
    "biopic": "images/profpic.jpg"
};

// Display bio. 
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedcontactGeneric = formattedmobile + formattedemail + formattedgithub + formattedlocation;
    //$("#topContacts").append(formattedcontactGeneric);
    //$("#footerContacts").append(formattedcontactGeneric);
    // alternate way to do the same - 
    $("#footerContacts, #topContacts").append(formattedcontactGeneric);

    var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

// Function call.
bio.display();

/* -------------------------------------------------------------------------------------------------------- */

// Work Experience Information.
var work = {
    "jobs": [{
        "employer": "University of Cincinnati",
        "title": "Teaching Assistant",
        "location": "Cincinnati",
        "dates": "September 2011 - December 2013",
        "description": "Worked as full time instructor for Algebra and Trigonometry, Calc 3." +
            " Worked as Teaching Assistant for Calc 1, Calc 2, Calc 3, Calc 4 and Differential Equations."
    }, {
        "employer": "TATA Consultancy Services",
        "title": "IT Analyst",
        "location": "Indianapolis",
        "dates": "October 2010 - August 2011",
        "description": "Designed, developed, implemented and maintained Datawarehousing System for the client." +
            " Managed team’s activities - assigned tasks, tracked status, reviewed deliverables, set goals, conducted performance reviews." +
            " Collaborated with onsite cross-functional teams." +
            " Handled Audits and Project Management Reviews." +
            " Trained the team on new reporting tool."
    }, {
        "employer": "TATA Consultancy Services",
        "title": "Assistant Systems Engineer",
        "location": "New Delhi",
        "dates": "August 2006 - September 2010",
        "description": "Built Datawarehousing solution to Integrate data from multiple sources." +
            " Built end-to-end data migration package for transferring data from CSV files to Microsoft SQL Server using Informatica." +
            " Prepared test cases/data, performed unit, system and integration testing." +
            " Monitor all the processes that deliver data into and out of the Data Warehouse."
    }]
};

// Display work experience.
work.display = function() {
    //var len = work.jobs.length;
    //for (var job = 0; job < len; job++) {
    // 'for' replaced 'by forEach'
    work.jobs.forEach( function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      $(".work-entry:last").append(formattedDescription);
    })
};

// Function call.
work.display();

/* -------------------------------------------------------------------------------------------------------- */

// List of projects worked on.
var projects = {
    "projects": [{
        "title": "Web Crawling",
        "dates": "September 2015 - December 2015",
        "description": "Wrote Scala Web crawler that autonomously traverses (a small portion of) the Internet," +
            "following the pages’ hyperlink structure. Every time the crawler encounters an unseen " +
            "page, that page, in turn, is crawled and analyzed.",
        "images": ["images/WebCrawler.jpg"]
    }, {
        "title": "Public Key Cryptosystems",
        "dates": "September 2012 - December 2012",
        "description": "Implemented of various Public Key Cryptosystems using Magma.",
        "images": ["images/PKC.jpg"]
    }, {
        "title": "Applications of Petrinets",
        "dates": "January 2006 - May 2006",
        "description": "Built mathematical model of some chemical reactions using Petrinets.",
        "images": ["images/H2O.jpg"]
    }]
};

// Function to display projects.
projects.display = function() {
    var l = projects.projects.length;
    for (var project = 0; project < l; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            var len = projects.projects[project].images.length;
            for (var image = 0; image < len; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

// Function call
projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

/* -------------------------------------------------------------------------------------------------------- */

// Education history - contains array of schools and online courses.
var education = {
    "schools": [{
        "name": "Swiss Federal Institute of Technology in Zürich (ETHZ)",
        "location": "Zürich",
        "degree": "Certificate of Advanced Studies",
        "majors": ["Information Systems", " Distributed Systems"],
        "dates": "January 2015 - present",
        "url": "https://www.ethz.ch/en/studies/continuing-education/programmes-and-courses/cas.html?polycourseId=1168"
    }, {
        "name": "University of Delhi",
        "location": "New Delhi",
        "degree": "Bachelor of Science with Honors",
        "majors": ["Mathematics"],
        "dates": "July 2001 - June 2004",
        "url": "http://maths.du.ac.in/"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "2015 - 2016",
        "url": "http://www.udacity.com"
    }]
};

// Display function for education.
education.display = function() {
    if (education.schools.length > 0 || education.onlineCourses.length > 0) {
        var len = education.schools.length;
        for (var edu = 0; edu < len; edu++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
            $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
            $(".education-entry:last").append(formattedSchoolMajors);
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            var l = education.onlineCourses.length;
            for (var ed = 0; ed < l; ed++) {
                $("#education").append(HTMLschoolStart);

                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[ed].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[ed].school);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[ed].dates);
                $(".education-entry:last").append(formattedOnlineDates);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[ed].url);
                $(".education-entry:last").append(formattedOnlineURL);

            }
        }

    }
};

//Function call.
education.display();

/* -------------------------------------------------------------------------------------------------------- */

// Collecting all the locations I have been to for study or work.
function locationizer(work_obj) {
    var locationArray = [];
    var len = work_obj.jobs.length;
    for (var job = 0; job < len; job++) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;

}

// Changing name to international style. Not implemented right now.
/*function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase();
    name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);*/

// Include map pin pointing all locations I have worked or studied.
$("#mapDiv").append(googleMap);