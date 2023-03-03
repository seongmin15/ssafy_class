const puppeteer = require("puppeteer");

const main = async() => {
  //브라우저 만들기
  const browser = await puppeteer.launch({
    headless:false
  });

  //브라우저에 페이지 만들기
  const page = await browser.newPage();

  //페이지에서 주소로 이동하기
  await page.goto("https://comic.naver.com/webtoon?tab=mon");

  //대기하는법
  await page.waitForSelector("#content .item img");

  //크롤링 데이터 가져오기
  // node.js는 브라우저가 아닌 환경이기 때문에 document 사용 불가능
  // evaluate 안에서는 document 사용이 가능하다
  const data = await page.evaluate(() => {
    const webToonList = document.querySelectorAll("#content .item img");

    const result = Array.from(webToonList).map(li => li.getAttribute('alt'));
    return result;
  })
  console.log(data);
  console.log('test');

  //스크린샷
  // await page.screenshot({path: "screenshot.jpg", fullPage:true});

  //pdf
  // await page.pdf({path: "test.pdf", format:'A4'});

  //브라우저 종료하기
  // await browser.close();
}

main();