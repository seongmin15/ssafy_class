const btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/info");
    if (response.data) {
      console.log(response.data);
    }
  } catch(error) {
    console.log(error);
  }
});