import ScrollMagic from 'scrollmagic';

function scroller(trigger){
    let contoller = new ScrollMagic.Controller();

    console.log(trigger);
   
    new ScrollMagic.Scene({
        duration: '200%',
        offset: 1
        //triggerElement: panel
    })
    .setPin(trigger)
    .addTo(contoller);

}

export default scroller;