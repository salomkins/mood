(function() {

init();

function setActive(button){
    button.classList.add("active");
}

function removeActive(clickedButton) {
    var btnGroup = clickedButton.closest(".work-nav");
    var groupBtns = btnGroup.querySelectorAll(".work-btn");
    groupBtns = [].slice.call(groupBtns);
    groupBtns.forEach(function(button) {
        button.classList.remove("active");
    })
}



function init(){
  var categories = [
      "Identitāte",
      "Web dizains",
      "Aplikāciju dizains",
      "Fotogrāfija"
  ];


  var itemsWork = [{
          workid: 0,
          title: "Proin gravida nibh vel velit",
          slug: "work1",
          image: "media/work1.jpg",
      },

      {
          workid: 2,
          title: "Proin gravida nibh vel velit",
          slug: "work2",
          image: "media/work2.jpg",
      },

      {
          workid: 1,
          title: "Proin gravida nibh vel velit",
          slug: "work3",
          image: "media/work3.jpg",
      },

      {
          workid: 3,
          title: "Proin gravida nibh vel velit",
          slug: "work4",
          image: "media/work4.jpg",
      },

      {
          workid: 1,
          title: "Proin gravida nibh vel velit",
          slug: "work5",
          image: "media/work5.jpg",
      },

      {
          workid: 2,
          title: "Proin gravida nibh vel velit",
          slug: "work6",
          image: "media/work6.jpg",
      },

      {
          workid: 0,
          title: "Proin gravida nibh vel velit",
          slug: "work7",
          image: "media/work7.jpg",
      },

      {
          workid: 0,
          title: "Proin gravida nibh vel velit",
          slug: "work8",
          image: "media/work8.jpg",
      },

      {
          workid: 3,
          title: "Proin gravida nibh vel velit",
          slug: "work9",
          image: "media/work9.jpg",
      },

      {
          workid: 2,
          title: "Proin gravida nibh vel velit",
          slug: "work10",
          image: "media/work10.jpg",
      },

      {
          workid: 0,
          title: "Proin gravida nibh vel velit",
          slug: "work11",
          image: "media/work11.jpg",
      },

      {
          workid: 1,
          title: "Proin gravida nibh vel velit",
          slug: "work12",
          image: "media/work12.jpg",
      },

      {
          workid: 3,
          title: "Proin gravida nibh vel velit",
          slug: "work13",
          image: "media/work13.jpg",
      },

      {
          workid: 1,
          title: "Proin gravida nibh vel velit",
          slug: "work14",
          image: "media/work14.jpg",
      },

      {
          workid: 2,
          title: "Proin gravida nibh vel velit",
          slug: "work15",
          image: "media/work15.jpg",
      },

      {
          workid: 3,
          title: "Proin gravida nibh vel velit",
          slug: "work16",
          image: "media/work16.jpg",
      },

      {
          workid: 0,
          title: "Proin gravida nibh vel velit",
          slug: "work17",
          image: "media/work8.jpg",
      },

      {
          workid: 2,
          title: "Proin gravida nibh vel velit",
          slug: "work18",
          image: "media/work7.jpg",
      },

      {
          workid: 0,
          title: "Proin gravida nibh vel velit",
          slug: "work19",
          image: "media/work6.jpg",
      },

      {
          workid: 1,
          title: "Proin gravida nibh vel velit",
          slug: "work20",
          image: "media/work5.jpg",
      },

      {
          workid: 3,
          title: "Proin gravida nibh vel velit",
          slug: "work21",
          image: "media/work4.jpg",
      },

      {
          workid: 1,
          title: "Proin gravida nibh vel velit",
          slug: "work22",
          image: "media/work3.jpg",
      },

      {
          workid: 2,
          title: "Proin gravida nibh vel velit",
          slug: "work23",
          image: "media/work2.jpg",
      },

      {
          workid: 3,
          title: "Proin gravida nibh vel velit",
          slug: "work24",
          image: "media/work1.jpg",
      },

      {
          workid: 0,
          title: "Proin gravida nibh vel velit",
          slug: "work25",
          image: "media/work3.jpg",
      },

      {
          workid: 2,
          title: "Proin gravida nibh vel velit",
          slug: "work26",
          image: "media/work16.jpg",
      },

      {
          workid: 0,
          title: "Proin gravida nibh vel velit",
          slug: "work27",
          image: "media/work14.jpg",
      },

      {
          workid: 1,
          title: "Proin gravida nibh vel velit",
          slug: "work28",
          image: "media/work12.jpg",
      },

      {
          workid: 3,
          title: "Proin gravida nibh vel velit",
          slug: "work29",
          image: "media/work10.jpg",
      },

      {
          workid: 1,
          title: "Proin gravida nibh vel velit",
          slug: "work30",
          image: "media/work8.jpg",
      },

      {
          workid: 2,
          title: "Proin gravida nibh vel velit",
          slug: "work31",
          image: "media/work6.jpg",
      },

      {
          workid: 3,
          title: "Proin gravida nibh vel velit",
          slug: "work32",
          image: "media/work4.jpg",
      }
  ];

  function workSliderNav() {
      var workNavAll = '<button class="work-btn active" href=" ">viss</button>';
      for (var z = 0; z < categories.length; z++) {
          workNavAll += '<button class="work-btn" data-workid="' + z + '">' + categories[z] + '</button>';
      }
      var workNav = document.querySelector("#workNav");
      workNav.innerHTML = workNavAll;
  }

  function buildWorkItems(items) {

      var galleryWork = [];

      for (var i = 0; i < items.length; i += 8) {
          var pageItems = items.slice(i, i + 8);
          var pageItemsLinks = [];
          for (var k = 0; k < pageItems.length; k++) {
              var a = k + i;
              var href = "work-" + items[a].workid + "/" + items[a].slug;
              pageItemsLinks.push('<a href="' + href + '" class="our-work-block">\
        <div class="our-work-image">\
        <img src="' + items[a].image +
                  '">\
            <div class="work-overlay">\
        <div class="work-comments">\
                <i class="fa fa-bullseye fa-5x" aria-hidden="true"></i>\
                <div class="work-heading">' +
                  items[a].title + '</div>\
                ' + categories[items[a].workid] + '\
        </div>\
    </div>\
    </div>\
    </a>')
          }
          pageItemsLinks = pageItemsLinks.join("");
          galleryWork.push('<div class="slider-item t-work-item">' + pageItemsLinks + '</div>');
      }
      document.querySelector(".slider-items.t-work").innerHTML = galleryWork.join("");

      var sl = new slider();

      sl.pageSlider('#work-slider', 'horizontal');
  }

  buildWorkItems(itemsWork);
  workSliderNav();

  function galleryItems() {
      var sliderItem = document.querySelector("slider-item").find(".t-work-item");
      for (var i = 0; i < itemsWork.length; i++) {
          document.appendChild(sliderItem);
          var href = "work-" + itemsWork[i].workid + "/" + itemsWork[i].slug;
          SliderItem.push(document.write(
              '<a href="' + href + '" class="our-work-block">\
  <div class="our-work-image">\
  <img src="' + itemsWork[i].image +
              '">\
  <div class="work-overlay">\
      <div class="work-comments">\
              <i class="fa fa-bullseye fa-5x" aria-hidden="true"></i>\
              <div class="work-heading">' +
              itemsWork[i].title + '</div>\
              ' + categories[itemsWork[i].workid] + '\
      </div>\
  </div>\
  </div>\
  </a>'));
      }
  }

  function workFilter(e) {
      if (e.currentTarget.classList.contains('work-btn')) {
          var catId = e.currentTarget.getAttribute('data-workid');
          var filteredItems = [];
          if (catId !== null) {
              filteredItems = itemsWork.filter(function(item) {
                  return item.workid === parseInt(catId);
              });
          } else {
              filteredItems = itemsWork;
          }
          buildWorkItems(filteredItems);
      }
  }

  function clickButton(e) {
      e.preventDefault;
      var clickedButton = e.currentTarget;
      removeActive(clickedButton);
      setActive(clickedButton);
      workFilter(e)
  }

  var buttons = document.querySelectorAll(".work-btn");

  buttons = [].slice.call(buttons);

  buttons.forEach(function(button) {
      button.addEventListener("click", clickButton)
      // button.addEventListener("click", workFilter)
  })

}
})()
