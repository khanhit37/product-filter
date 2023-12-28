var mockData = fetch("https://fakestoreapi.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    var prodcuts = document.querySelector(".products");
    prodcuts.innerHTML = "";
    data.forEach((item) => {
      var product = document.createElement("div");
      product.classList.add("product");
      product.innerHTML = `
    <img src=${item.image}>
    <div class="info">
    <div class="name">${item.title}</div>
    <div class="price">${item.price}</div>
    <div class="category">${item.category}</div>
    </div>`;
      prodcuts.appendChild(product);
    });
  });

var search = document.querySelector(".search input");
search.addEventListener("input", function (e) {
  let textSearch = e.target.value.trim().toLowerCase();
  let listProduct = document.querySelectorAll(".product");
  listProduct.forEach((item) => {
    if (item.innerText.toLowerCase().includes(textSearch)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
