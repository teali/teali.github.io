var windowWidth = $(window).width();
var windowHeight = $(window).height();

var numberOfParticles = .00005 * (windowWidth * windowHeight);

function addParticle() {
    if (window.pJS_GUI.particles.array.length > numberOfParticles) {
        clearTimeout(timeOut);
        return;
    }

    window.pJS_GUI.particles.array.push(new window.pJS_GUI.fn.particle(
        {value: '#fff'},
        100
    ));

    timeOut = setTimeout(addParticle, 60);
}

function afterParticlesLoaded() {
    console.log('callback - particles.js config loaded');
    window.pJS_GUI = window.pJSDom[0].pJS;

    addParticle();
}

particlesJS.load('particles-js', 'particle_config.json', afterParticlesLoaded);

(function($){
    $(window).load(function(){
        $('.project-container').slick({
          dots: true,
        });
    });
})(jQuery);
