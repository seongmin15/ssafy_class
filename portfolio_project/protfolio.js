const EnglishBtn = document.querySelector(".English-button");
const KoreanBtn = document.querySelector(".Korean-button");
const Name = document.querySelector(".name");
const Intro = document.querySelectorAll(".intro > h2");
const Appeal = document.querySelector(".appeal");
const Loc = document.querySelector(".location");
const Language = document.querySelector(".langauge");

EnglishBtn.addEventListener("click", function () {
  Name.textContent = "Kim Seongmin";
  Intro[0].innerHTML = "<h2>I am Seongmin Kim.<br />A developer from SSAFY Embedded class.</h2>";
  Intro[1].innerHTML = "<h2>I use Html, CSS, and Javascript<br />To do front-end development.</h2>";
  Intro[2].innerHTML = "<h2>My specialty is embedded software development.</h2>";
  Appeal.textContent = "If you would like to work together, you are welcome to contact us at any time.";
  Loc.innerHTML = "<span class=\"location\">Bugae-dong, Bupyeong-gu, Incheon</span>";
  Language.textContent = "Language";
})

KoreanBtn.addEventListener("click", function () {
  Name.textContent = "김성민";
  Intro[0].innerHTML = "<h2>저는 SSAFY 임베디드반 출신 개발자<br />김성민 입니다.</h2>";
  Intro[1].innerHTML = "<h2>저는 Html, CSS, Javascript를 사용하여<br />프론트엔드 개발을 할 수 있습니다.</h2>";
  Intro[2].innerHTML = "<h2>저는 임베디드 소프트웨어 개발이 특기입니다.</h2>";
  Appeal.textContent = "함께 일하시고 싶으시다면 언제든 연락주셔도 좋습니다.";
  Loc.innerHTML = "<span class=\"location\">인천광역시 부평구 부개동</span>";
  Language.textContent = "언어";
})