  //All the JS and JQuery code will be written inside this anonymous function
$(document).ready(function() {
    // This function launch our application, and is tasked with the initialisation of every aspect of it
    function init(showAtStartup) {
        navigateView(showAtStartup);
        $('[data-target]').on('click', function() {
            navigateView(this.dataset.target);
        });
        $('[data-ajax]').on('click', function() {
            //https://swapi.co/api/people/1
            $.get("https://swapi.co/api/people/1", function(data) {
                let name = "Nom et prénom : " + data.name;
                let birthDate = "Date de naissance : " + data.birth_year;
                let mass = "Poid : " + data.mass;
                $('[data-page="home"]').append('<p>' + name + '</p>')
                $('[data-page="home"]').append('<p>' + birthDate + '</p>')
                $('[data-page="home"]').append('<p>' + mass + '</p>')
            });
        });
    }
    // Allow to hide and show every section of our application
    function navigateView(sectionToShow) {
        let sections = $('[data-page]');
        let error = true;
        for (let i = 0; i < sections.length; i++) {
            if(sections[i].dataset.page == sectionToShow) {
                sections[i].classList.remove('hidden');
                error = false;
            } else {
                sections[i].classList.add('hidden');
            }
       };
       if(error) {
           throw ('Selector error, nothing found for ' + sectionToShow);
       }
        //$('[data-page="' + sectionToShow + '"]').removeClass('hidden');
    }
    init('home');
});