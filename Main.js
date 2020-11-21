window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.padding = "10px 20px";
        document.getElementById("navbar").style.top = "0";
        document.getElementById("logo").style.fontSize = "25px";
    } else {
        document.getElementById("navbar").style.top = "50px";
        document.getElementById("navbar").style.padding = "25px 20px";
        document.getElementById("logo").style.fontSize = "35px";
    }
}
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 2);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
const obj1 = document.getElementById("value1");
const obj = document.getElementById("value");
const obj2 = document.getElementById("value2");
animateValue(obj1, 0, 250, 3000);
animateValue(obj, 0, 450, 4000);
animateValue(obj2, 0, 95, 4000);