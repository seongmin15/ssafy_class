const puppeteer = require("puppeteer");

const main = async() => {
  //브라우저 만들기
  const browser = await puppeteer.launch({
    headless:false
  });

  //브라우저에 페이지 만들기
  const page = await browser.newPage();

  //페이지에서 주소로 이동하기
  await page.goto("https://www.google.co.kr");

  //크롤링 데이터 가져오기
  // node.js는 브라우저가 아닌 환경이기 때문에 document 사용 불가능
  // evaluate 안에서는 document 사용이 가능하다
  await page.evaluate(() => {
    document.querySelector(".gLFyf").value="치킨";
    document.querySelector(".gNO89b").click();
  })

  //대기하는법
  await page.waitForSelector(".yXg2De");

  //스크린샷
  await page.screenshot({path: "chicken.jpg", fullPage:true});

  //pdf
  // await page.pdf({path: "test.pdf", format:'A4'});

  //브라우저 종료하기
  // await browser.close();
}

main();