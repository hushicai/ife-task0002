/**
 * @file slider
 * @author hushicai(bluthcy@gmail.com)
 */

/* global SlideEffect, Slider*/

var effect = new SlideEffect({
    duration: 1000
});

var slider = new Slider({
    prefix: 'slider',
    itemClass: 'slider-item',
    auto: 1,
    cycle: 1,
    effect: effect
});

slider.play();
