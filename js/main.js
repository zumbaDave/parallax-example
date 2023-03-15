const parallax = document.querySelector('.header');
let thresholdSets = [];

for (var i = 0; i < 1.0; i += 0.005) {
    thresholdSets.push(i);
}

let callback = function(entries, observer) {
    const scrollTopPercent = window.pageYOffset / parallax.offsetHeight * 100;
    setParallaxStyle(scrollTopPercent);
}

const observer = new IntersectionObserver(callback, {
    threshold: thresholdSets
});

observer.observe(document.querySelector('.content'));

function setParallaxStyle(scrollTopPercent) {
    document.querySelector('.header__images_sun').style.cssText = `transform : translate(-50%, ${scrollTopPercent / 1}%);`;
    document.querySelector('.header__label').style.cssText = `transform : translate(${scrollTopPercent * 3.5}%, 0%);`;
}