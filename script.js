const apiUrl = "https://dog.ceo/api/breeds/image/random";

document.querySelector(".btn").addEventListener("click", function () {

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("dogImage").src = data.message;
    })
    .catch((error) => console.error("Error fetching data:", error));
});