(function() {
    var app = angular.module('kevinliao_website', [ ]);

    app.controller('home_page', function() {
        this.homePageData = home_page_info;
        this.homeSkills   = skills;
        console.log(this.homeSkills[0].description);
    });

    var home_page_info = {
        title: "Hello.", 
        greeting: "I'm Kevin. I'm a full stack developer based in Taipei, Taiwan and Haverford, Pennsylvania. Wherever I am, I'm ready to build something awesome with you. \n Are you interested? Let's work together.  ",
        profile_pic: 'images/profile.jpg',
    };

    var skills = [
        {
            name: "Python Web Development",
            description: "I am confident in backend web development with Django."
        },
        {
            name: "JavaScript Web Development",
            description: "I built this website to demonstrate my proficiency in the MEAN stack."
        },
        {   name: "iOS Mobile App Development",
            description: "I have almost completed Udemy's iOS App Development Tutorial with Swift, which is the highest rated introduction to Swift on hackr.io."
        }
    ]

    var portfolio = [
        {
            name: "Polititrends",
            description: "A web app that allows you to research how the New York Times' political leanings have changed on an issue over time.",
            technologies: "HTML, CSS, JavaScript, Python, indico.io, Google App Engine",
        }, 
    ];
})();
