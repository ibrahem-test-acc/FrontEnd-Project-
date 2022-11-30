window.onscroll = function () {
  let navSections = document.querySelectorAll(".section");
  let scrollPosition = document.documentElement.scrollTop;
  let removeAllActiveClasses = function () {
    document.querySelectorAll("#theNav a").forEach((e) => {
      e.classList.remove("active");
    });
  };
  navSections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
        section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      let currentId = section.attributes.id.value;

      let addActiveClass = function sel(id) {
        let selector = `#theNav a[href="#${id}"]`;
        document.querySelector(selector).classList.add("active");
      };

      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
  let upBtn = document.getElementById("upBtn");
  let nav = document.getElementById("nav");
  if (window.scrollY < 276) {
    nav.style.position = "unset";
    nav.style.zIndex = "100";
    nav.style.backgroundColor = "#f5faff";
  } else if (window.scrollY >= 276) {
    upBtn.style.display = "block";
    upBtn.style.cursor = "pointer";
    nav.style.backgroundColor = "white";
    nav.style.zIndex = "100";
    nav.style.position = "fixed";
  } else {
    upBtn.style.display = "none";
    nav.style.position = "unset";
    nav.style.backgroundColor = "#f5faff";
  }
};

upBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let nums = document.querySelectorAll(".nums .num");
nums.forEach((num) => counter(num));

function counter(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    document.querySelectorAll(".nums .num")[0].style.color = "red";
    document.querySelectorAll(".nums .num")[0].style.textShadow =
      "0 0 8px #EB3628";
    document.querySelectorAll(".nums .num")[1].style.color = "red";
    document.querySelectorAll(".nums .num")[1].style.textShadow =
      "0 0 8px #EB3628";
    document.querySelectorAll(".nums .num")[2].style.color = "#48e748";
    document.querySelectorAll(".nums .num")[2].style.textShadow =
      "0 0 8px #48e748";
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
      document.querySelectorAll(".nums .num")[0].style.color =
        "rgb(56 74 107 / 93%)";
      document.querySelectorAll(".nums .num")[0].style.textShadow = " 0 0";
      document.querySelectorAll(".nums .num")[1].style.color =
        "rgb(56 74 107 / 93%)";
      document.querySelectorAll(".nums .num")[1].style.textShadow = " 0 0";
      document.querySelectorAll(".nums .num")[2].style.color =
        "rgb(56 74 107 / 93%)";
      document.querySelectorAll(".nums .num")[2].style.textShadow = " 0 0";
    }
  }, 1);
}

let question = document.querySelectorAll(".question");

let ans = document.querySelectorAll(".answer");

let answers = document.querySelectorAll(".answers");
allP = document.querySelectorAll(".answers p");
allI = document.querySelectorAll(".answers i");
allD = document.querySelectorAll(".answers div");

answers.forEach(function (ele) {
  ele.onclick = function (e) {
    let x = this.getElementsByTagName("i")[0];
    let y = this.getElementsByTagName("p")[0];
    let z = this.getElementsByTagName("div")[0];
    if (
      e.target.className == "question" ||
      e.target.className == "fa-solid fa-minus" ||
      e.target.className == "fa-solid fa-plus" ||
      e.target.className == "answers"
    ) {
      if (x.className == "fa-solid fa-minus") {
        this.getElementsByClassName("fa-solid fa-minus")[0].className =
          "fa-solid fa-plus";
        allP.forEach((element) => {
          element.style.display = "none";
        });
        allI.forEach((element) => {
          element.className = "fa-solid fa-plus";
        });
        allD.forEach((element) => {
          element.style.color = "rgb(56 74 107)";
          element.style.backgroundColor = "rgb(243 248 255)";
        });
        x.className = "fa-solid fa-plus";
        y.style.display = "none";
        z.style.color = "rgb(56 74 107)";
        z.style.backgroundColor = "rgb(243 248 255)";
      } else if (x.className == "fa-solid fa-plus") {
        allP.forEach((element) => {
          element.style.display = "none";
        });
        allI.forEach((element) => {
          element.className = "fa-solid fa-plus";
        });
        allD.forEach((element) => {
          element.style.color = "rgb(56 74 107)";
          element.style.backgroundColor = "rgb(243 248 255)";
        });
        this.getElementsByClassName("fa-solid fa-plus")[0].className =
          "fa-solid fa-minus";
        y.style.display = "block";
        z.style.color = "rgb(23 109 232)";
        z.style.backgroundColor = "white";
      }
    }
  };
});

let v = document.querySelectorAll(".q-Button");
let n = document.querySelectorAll(".nn");
let n11 = document.getElementById("n11");

v.forEach(function (container) {
  container.onclick = function () {
    v.forEach(function (container) {
      container.classList.remove("collored");
    });
    if (container.id == "n0") {
      n.forEach(function (nn) {
        nn.classList.remove("non");
      });
      n00.classList.add("non");
      this.classList.add("collored");
    } else if (container.id == "n1") {
      n.forEach(function (nn) {
        nn.classList.remove("non");
      });
      n11.classList.add("non");
      this.classList.add("collored");
    } else if (container.id == "n2") {
      n.forEach(function (nn) {
        nn.classList.remove("non");
      });
      n22.classList.add("non");
      this.classList.add("collored");
    } else if (container.id == "n3") {
      n.forEach(function (nn) {
        nn.classList.remove("non");
      });
      n33.classList.add("non");
      this.classList.add("collored");
    } else if (container.id == "n4") {
      n.forEach(function (nn) {
        nn.classList.remove("non");
      });
      n44.classList.add("non");
      this.classList.add("collored");
    } else if (container.id == "n5") {
      n.forEach(function (nn) {
        nn.classList.remove("non");
      });
      n55.classList.add("non");
      this.classList.add("collored");
    }
  };
});

let menu = document.getElementById("hidden-menu");
let menuIcon = document.getElementsByClassName("toggle-menu")[0];
let theNav = document.getElementById("nav");
let xM = document.getElementById("close-h-m");
xM.onclick = function () {
  menu.style.display = "none";
  menuIcon.style.display = "block";
};
menuIcon.onclick = function () {
  menu.style.display = "block";
  theNav.style.padding = "0";
  this.style.display = "none";
};
