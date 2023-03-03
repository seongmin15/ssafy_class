const btn = document.querySelector("button");

async function getTest() {
  const result = await axios.get("http://localhost:8080/api/menus/");
  console.log(result.data);
}

btn.addEventListener("click", async () => {
  const menu_name = document.querySelector("#menu_name").value;
  const menu_description = document.querySelector("#menu_description").value;
  const menu_img_link = document.querySelector("#menu_img_link").value;
  // body에 데이터를 같이 보낸다
  const result = await axios.post("http://localhost:8080/api/menus/", {
    menu_name: menu_name,
    menu_description,
    menu_img_link,
  });
});
