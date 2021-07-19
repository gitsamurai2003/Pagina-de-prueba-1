$(document).ready(function () {
    
    // Slider
    if (window.location.href.indexOf('index') > -1) {
        
        $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: false,
        randomStart: false,
        preloadImages: 'all',
        speed: 500
        });
    }

    //Posts
    
    if (window.location.href.indexOf('index') > -1) {

            var posts= [

        {
            title: 'Prueba de articulo 1',
            date: 'Publicado el' + " " + moment().format("dddd Do MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        },
        {
            title: 'Prueba de articulo 2',
            date: 'Publicado el' + " " + moment().format("dddd Do MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: 'Prueba de articulo 3',
            date: 'Publicado el' + " " + moment().format("dddd Do MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: 'Prueba de articulo 4',
            date: 'Publicado el' + " " + moment().format("dddd Do MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: 'Prueba de articulo 5',
            date: 'Publicado el' + " " + moment().format("dddd Do MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: 'Prueba de articulo 6',
            date: 'Publicado el' + " " + moment().format("dddd Do MMMM YYYY"),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },

        ];

        posts.forEach((item, index) => {
            var post =`
            <article class = "post">
            <h2>${item.title}</h2> 
            <span class = "date"> ${item.date}</span>
            <p>
            ${item.content} 
            </p> 
            <a href ="#" class = "button-more" > Leer mas </a> 
            </article>
            `;
            $("#posts").append(post);
        });

    };

    // Selector de tema

    var theme= $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "green.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "blue.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "red.css");
    });

    // Scroll hacia arriba de la web 

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
           scrollTop: 0 
        }, 500);

        return false;
    });

    // Login falso (incompleto)

    $('#login form').submit(function(){
        var form_name= $('#form_name').val();

        localStorage.setItem('form_name', form_name);

    });

    var form_name= localStorage.getItem('form_name');

    if (form_name != null && form_name != 'undefined') {
        var about_parrafo= $('#about p')
        about_parrafo.html('<br><strong>Bienvenido, '+form_name+'</strong><br>');
        about_parrafo.append('<a href="#" id="logout">Cerrar sesion</a>');
        
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    };
    
    // Acordeon

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion({
            animate:500
        });
    }
    
    // Reloj

    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(() => {
            var reloj= moment().format("h:mm:ss");
            $('#reloj').html(reloj);
        },1000);
       
    }
    
    // Validacion de formulario

    if (window.location.href.indexOf('contact') > -1) {
    
        $("form input[name='date']").datepicker({
            dateFormat: 'yy/mm/dd'
        });
    
        $.validate({
        lang: 'es',
        errorMessagePosition: 'top', //mensajes de error al validar formularios
        scrollToTopOnError: true
        });
    };

});
