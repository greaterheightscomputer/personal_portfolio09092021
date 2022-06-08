// console.log("hello");

// Portfolio Item Filter
const filterContainer = document.querySelector(".portfolio-filter");
filterBtns = filterContainer.children;
// console.log(filterBtns);
totalFilterBtn = filterBtns.length;
// console.log(totalFilterBtn);
portfolioItems = document.querySelectorAll(".portfolio-item");
// console.log(portfolioItems);
totalPortfolioItem = portfolioItems.length;
// console.log(totalPortfolioItem);

// for (let i = 0; i < totalFilterBtn; i++) {
//   //   console.log(filterBtns[i]);
//   filterBtns[i].addEventListener("click", function () {
//     // console.log(this.innerHTML); OR
//     // console.log(filterBtns[i].innerHTML);
//     // this.classList.add("active"); OR filterBtns[i].classList.add("active");
//   });
// }

for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    // console.log(filterValue); //click on each of the button on Portfolio page All, Web Design, Photography and Wordpress then view it on the browser console.
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

//Portfolio Lightbox
const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter"),
  lightboxClose = lightbox.querySelector(".lightbox-close");
let itemIndex = 0;
// console.log(lightboxImg);

for (let i = 0; i < totalPortfolioItem; i++) {
  // console.log(portfolioItems[i]);
  portfolioItems[i].addEventListener("click", function () {
    // console.log(i); //when click on the portfolio item its return the index
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  // console.log(imgSrc); //click on each portfolio item to view the image path
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML =
    portfolioItems[itemIndex].querySelector("h4").innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItem;
}

//open lightbox
function toggleLightbox() {
  lightbox.classList.toggle("open"); //popup the lightbox by dynamically add open class selector to lightbox root class selector
}

//next button
function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  // console.log(itemIndex);
  changeItem();
}

//previous button
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  //console.log(itemIndex);
  changeItem();
}

//close lightbox
lightbox.addEventListener("click", function (event) {
  // console.log(event.target);
  // console.log(event.target === lightboxClose);
  if (event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

//Aside Navbar
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
// console.log(nav);
// console.log(navList);
// console.log(totalNavList);
// console.log(allSection);
// console.log(totalSection);

// for (let i = 0; i < totalNavList; i++) {
//   // console.log(navList[i]);
//   const a = navList[i].querySelector("a");
//   // console.log(a);
//   a.addEventListener("click", function () {
//     // console.log(this); OR console.log(a);
//   });
// }

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    //
    //remove back-section class selector on aside bar link
    removeBackSectionClass();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        // console.log("navList[j].querySelector("a"));

        //add back-section class selector on aside bar link
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    // console.log(this);

    showSection(this); //calling of showSection() function and pass-in <a href="#home" class="active"><i class="fa fa-user">"Home"</i></a> as an argument, wheneven you click on any of the aside bar anchor tags its will be pass-in as an argument to showSection(this) function

    //once the width of screen is less than 1200 trigger this asideSectionTogglerBtn function inorder to make it more responsive to different screen size
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSectionClass(num) {
  allSection[num].classList.add("back-section"); //its will add "back-section" class selector to DOM but its will not display it on the DOM and work perfectly
  // this.classList.add("back-section"); //its will add "back-section" class sele to DOM and it will display it on the DOM but not work perfectly.
  // console.log(allSection[j]);
}

//function showSection-> its will be use to dynamically add active class selector to other .aside bar anchor tags beside Home
// function showSection(element) {
//   // console.log(element);
//   // console.log(element.getAttribute("href"));
//   // console.log(element.getAttribute("href").split("#"));
//   // const href = element.getAttribute("href").split("#"); //split() method return an array of string like this ['', 'about']
//   // // console.log(href);
//   // const target = href[1]; //pass index 1 to href becos its an array of string ['', 'about']
//   // console.log(target);
//   const target = element.getAttribute("href").split("#")[1];
//   // console.log(target);
//   document.querySelector("#" + target).classList.add("active");
// }
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  console.log(element.getAttribute("href").split("#")[1]);
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active"); //its will add active class selector onto contact
      // console.log(navList[i]);
    }
  }
}

//hire me button
document.querySelector(".hire-me").addEventListener("click", function () {
  // console.log(this);
  const sectionIndex = this.getAttribute("data-section-index"); //get data-section-index attribute on anchor tags in about section
  // console.log(sectionIndex);
  showSection(this); //pass contact href as an argument onto showSection() function then set it active when click on Hire Me button
  updateNav(this);

  //removeBackSectionClass() and addBackSectionClass(sectionIndex) functions will send About Me section to back once click on Hire Me button
  removeBackSectionClass();
  addBackSectionClass(sectionIndex); //reuse addBackSectionClass function by pass-in the position where About Me section is on the html
});

//toggling of aside nav button
const aside = document.querySelector(".aside"),
  navTogglerBtn = document.querySelector(".nav-toggler");
// console.log(aside);
// console.log(navTogglerBtn);
// navTogglerBtn.addEventListener("click", () => {
//   asideSectionTogglerBtn();
// });
//OR Alternative way of calling asideSectionTogglerBtn()
navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function asideSectionTogglerBtn() {
  // console.log(aside);
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
    // console.log(allSection[i]);
  }
}

// preloader
window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});
