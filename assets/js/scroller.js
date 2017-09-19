console.log('scroller connected');

// ScrollMagic functions

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement : '#name',
        triggerHook: 0.4,
        duration: '100%'
    })
    .setClassToggle('#home', 'highlight')
    .addIndicators({
        name: 'highlight home',
        colorTrigger: 'pink',
        colorStart: 'blue',
        colorEnd: 'green'
    })
    .addTo(controller);

    var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '.content',
        triggerHook: 0.4,
        duration: '100%'
    })
    .setClassToggle('#about', 'highlight')
    .addIndicators({
        name: 'highlight about',
        colorTrigger: 'pink',
        colorStart: 'orange',
        colorEnd: 'purple'
    })
    .addTo(controller);

    var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '#project',
        triggerHook: 0.4,
        duration: '100%'
    })
    .setClassToggle('#work', 'highlight')
    .addIndicators({
        name: 'highlight work',
        colorTrigger: 'pink',
        colorStart: 'red',
        colorEnd: 'yellow'
    })
    .addTo(controller);
});

// ScrollMagic funtions

// $(document).ready(function(){

//     var controller = new ScrollMagic.Controller();

//     // pin the name
//     var pinNameScene = new ScrollMagic.Scene({
//         triggerElement: 'span #letter', //triggered by
//         triggerHook: 0.2, //the actual trigger
//         duration: '50%'
//     })
//     .setPin('span #letter', {pushFollowers: false})
//     .addTo(controller);

//     var ourScene = new ScrollMagic.Scene({
//         triggerElement: 'span #letter', //triggered by
//         triggerHook: 0.2, //the actual trigger
//         duration: '40%'
//     })
//     .addIndicators({
//         name: "fade scene",
//         colorTrigger: "black",
//         colorStart: "blue",
//         colorEnd: "pink"
//     })
//     .addTo(controller);
// });