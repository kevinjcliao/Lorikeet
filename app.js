(function() {
    var app = angular.module('kevinliao_website', [ ]);

    app.controller('home_page', function() {
        this.homePageData = home_page_info;
        console.log(this.homePageData.greeting);
        console.log(this.homePageData.profile_pic);
    });

    var home_page_info = {
        title: "Kevin Liao", 
        greeting: "Hello. I'm Kevin. I'm a full stack developer based in Taipei, Taiwan and Haverford, Pennsylvania. Wherever I am, I'm ready to build something awesome with you. \n Are you interested? Let's work together.  ",
        profile_pic: 'images/profile.jpg'
    };

    var portfolio = [
        {
            name: "Polititrends",
            description: "A web app that allows you to research how the New York Times' political leanings have changed on an issue over time.",
            technologies: "HTML, CSS, JavaScript, Python, indico.io, Google App Engine",
        }, 
    ];
})();
