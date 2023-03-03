const puppeteer = require("puppeteer");

const main = async() => {
  //브라우저 만들기
  const browser = await puppeteer.launch({
    headless:false
  });

  //브라우저에 페이지 만들기
  const page = await browser.newPage();

  //페이지에서 주소로 이동하기
  await page.goto("https://news.daum.net/digital#1");

  //대기하는법
  // await page.waitForSelector(".list_newsmajor li");

  //크롤링 데이터 가져오기
  // node.js는 브라우저가 아닌 환경이기 때문에 document 사용 불가능
  // evaluate 안에서는 document 사용이 가능하다
  const data = await page.evaluate(() => {
    const newsList = document.querySelectorAll(".list_newsmajor>li .link_txt");

    const result = Array.from(newsList).map(li => li.textContent);
    return result;
  })
  console.log(data);

  //브라우저 종료하기
  // await browser.close();
}

main();