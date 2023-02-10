const setRenderBackground = async () => {
  // blob -> 이미지, 사운드 비디오 등 멀티미디어 데이터를 다룰 때 사용
  const result = await axios.get("https://picsum.photos/1280/720", {
    responseType: "blob",
  });
  //URL.createObject -> 임시 URL을 만든다(페이지 내에서만 유효)
  const imageURL = URL.createObjectURL(result.data);
  document.querySelector("body").style.backgroundImage = `url(${imageURL})`;
};

const setTime = () => {
  const timer = document.querySelector(".timer");

  setInterval(() => {
    const date = new Date();
    timer.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }, 1000);
};

const getMemo = () => {
  const memo = document.querySelector('.memo');
  memo.textContent = localStorage.getItem('todo');
};

const setMemo = () => {
  const memoInput = document.querySelector('.memo-input');
  const memo = document.querySelector('.memo');
  memoInput.addEventListener("keyup", function (e) {
    if (e.code === 'Enter' && e.target.value) {
      memo.textContent = e.target.value;

      localStorage.setItem('todo', e.target.value);
      getMemo();
    }
  })
};

const deleteMemo = () => {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("memo")) {
    localStorage.removeItem("todo");
    e.target.textContent = "";
    }});
};

async function allRender() {
  setRenderBackground();

  setInterval(() => {
    setRenderBackground();
  }, 5000);

  setMemo();
  getMemo();
  deleteMemo();
  setTime();
}

allRender();
