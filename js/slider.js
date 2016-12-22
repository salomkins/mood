function slider() {
    this.pageSlider = function(selector, direction = 'vertical') {
        // get data
        var slider = $(selector);
        slider.classList.add('slider-direction-' + direction)
        if (!slider) {
            return false;
        }

        var slides = slider.querySelectorAll('.slider-item');
        slides = [].slice.call(slides); // to create array from slides list

        //generate pages
        var paginator = slider.querySelector('.slider');
        // var paginatorDirection = slider.querySelector('.vertical');
        paginator.innerHTML = "";
        var pages = [];
        // console.log(paginatorDirection);
        for (var i in slides) {
            var page = document.createElement('button');
            page.setAttribute('type', 'button');
            page.classList.add('slider-button');
            // page.appendChild(document.createTextNode('*'))
            paginator.appendChild(page);
            pages.push(page);
        }

        // create slide functions
        var activePage = 0;

        var setActivePage = function(index) {
            if (index >= 0 && index < pages.length) {
                activePage = index;
                for (var i in pages) {
                    pages[i].classList.remove('active');
                }
                pages[activePage].classList.add('active')
            }
        }

        var slideTo = function(index) {
            if (index >= 0 && index < slides.length) {
                setActivePage(index);
                slides.forEach(function(slide) {
                    var slideValue = -100 * activePage;
                    if (direction == 'vertical') {
                        slide.style.transform = 'translateY(' + slideValue + '%)';
                    } else {
                        slide.style.transform = 'translateX(' + slideValue + '%)';
                    }
                })
            }
        }

        var slideToNext = function() {
            if (activePage === slides.length - 1) {
                slideTo(0);
            } else {
                slideTo(activePage + 1)
            }
        }

        var slideToPrev = function() {
            if (activePage === 0) {
                slideTo(slides.length - 1);
            } else {
                slideTo(activePage - 1)
            }
        }

        // add events to paginator
        for (var i in pages) {
            pages[i].onclick = function(i, e) {
                e && e.preventDefault();
                slideTo(parseInt(i))
            }.bind(null, i)
        }
        slideTo(0);

    }
}

(function() {
    var sl = new slider();

    sl.pageSlider('#main-slider');
    sl.pageSlider('#team-slider', 'horizontal');
})();
