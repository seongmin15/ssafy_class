// const movie_1 = {
//   name: document.querySelector(
//     "li:nth-child(1) > .box-contents > a > strong"
//   ),
//   percent: document.querySelector(
//     "li:nth-child(1) > .box-contents > div > strong > span"
//   ),
//   open: document.querySelector(
//     "li:nth-child(1) > .box-contents > span.txt-info > strong"
//   ),
//   img: document.querySelector(
//     "li:nth-child(1) > .box-image > a > span > img"
//   ),
// };

// const movie_2 = {
//   name: document.querySelector(
//     "li:nth-child(2) > .box-contents > a > strong"
//   ),
//   percent: document.querySelector(
//     "li:nth-child(2) > .box-contents > div > strong > span"
//   ),
//   open: document.querySelector(
//     "li:nth-child(2) > .box-contents > span.txt-info > strong"
//   ),
//   img: document.querySelector(
//     "li:nth-child(2) > .box-image > a > span > img"
//   ),
// };

// const movie_3 = {
//   name: document.querySelector(
//     "li:nth-child(3) > .box-contents > a > strong"
//   ),
//   percent: document.querySelector(
//     "li:nth-child(3) > .box-contents > div > strong > span"
//   ),
//   open: document.querySelector(
//     "li:nth-child(3) > .box-contents > span.txt-info > strong"
//   ),
//   img: document.querySelector(
//     "li:nth-child(3) > .box-image > a > span > img"
//   ),
// };

const movies = {
  name: document.querySelectorAll(
    ".box-contents > a > strong"
  ),
  percent: document.querySelectorAll(
    ".box-contents > div > strong > span"
  ),
  open: document.querySelectorAll(
    ".box-contents > .txt-info > strong"
  ),
  img: document.querySelectorAll(
    ".box-image > a > span > img"
  ),
};

console.log(movies.name[0].textContent);
console.log(movies.percent[0].textContent);
console.log(movies.open[0].textContent); //trim -> 앞뒤 공백 제거
console.log(movies.img[0].src);

movies.name[1].textContent = "삼겹살과 그대라면";
movies.percent[1].textContent = "5%";
movies.open[1].childNodes[0].textContent = "1985.07.07 ";
    
const tmp_name = movies.name[0].textContent;
const tmp_img = movies.img[0].src;

movies.name[0].textContent = movies.name[2].textContent;
movies.img[0].src = "./jony.jpg";

movies.name[2].textContent = tmp_name;
movies.img[2].src = tmp_img;

// const boxContents = document.querySelectorAll(".box-contents");
// console.log(boxContents);