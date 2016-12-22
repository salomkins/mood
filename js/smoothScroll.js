(function() {
var navigations = $$('.main-nav a, .logo-info a');

for (var index in navigations) {
    var item = navigations[index];
    item.onclick = function(event) {
        event.preventDefault();
        var scrollElementID = this.getAttribute('href');
        var scrollElement = $(scrollElementID);
        if (scrollElement) {
            var distanceFromTop = scrollElement.offsetTop;
            var scrollDistanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;
            var distance = distanceFromTop - scrollDistanceFromTop;
            var navbarHeight = $('#top').offsetHeight;
            var step = 20;
            scroll(distance, step);
        }
    }
}

function scroll(distance, step = 0) {
    window.setTimeout(function() {
        if (distance >= 0) {
            if (distance < step) {
                window.scrollBy(0, distance);
            } else {
                window.scrollBy(0, step);
                distance = distance - step;
                scroll(distance, step)
            }
        } else {
            if (distance > step) {
                window.scrollBy(0, distance);
            } else {
                window.scrollBy(0, -step);
                distance = distance + step;
                scroll(distance, step)
            }
        }
    }, 10)
}
})()
