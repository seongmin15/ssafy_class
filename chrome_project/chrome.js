const toggleButton = document.querySelector(".toggle-button");
const bodyBackground = document.querySelector("body");
const headerNav = document.querySelector(".header-nav-list-wrapper");
const bookmarkWrapper = document.querySelector("bookmark-wrapper");
const searchInput = document.querySelector("#search-input");
const imgIconWrappers = document.querySelectorAll(".img-icon-wrapper");
const bookmarkTexts = document.querySelectorAll(".bookmark-text");

toggleButton.addEventListener("click", function () {
  if (toggleButton.classList.contains("toggle-button-darkmode")) {
    toggleButton.textContent = "다크 모드";
  }
  else {
    toggleButton.textContent = "일반 모드";
  }

  toggleButton.classList.toggle("toggle-button-darkmode");
  bodyBackground.classList.toggle("body-background-darkmode");
  headerNav.classList.toggle("text-darkmode");

  for (let i = 0; i < imgIconWrappers.length; i++)
  {
    imgIconWrappers[i].classList.toggle("img-icon-wrapper-darkmode");
  }

  for (let i = 0; i < bookmarkTexts.length; i++)
  {
    bookmarkTexts[i].classList.toggle("text-darkmode");
  }
})

searchInput.addEventListener("keyup", function (evt) {
  if (evt.code === "Enter") {
    if (!evt.target.value) {
      alert("검색어를 입력해주세요");
      return;
    }
    else {
      // 이동하기
       const search = "https://www.google.com/search?q=";
      location.href = search + evt.target.value;
      // 새창으로 열기
      // window.open(search + evt.target.value);
      // <a href="" target="_blank"></a>

    }
  }
})