const cartContainer = document.querySelector("#cart");
const likeContainer = document.querySelector("#likes");

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  cartContainer.innerHTML = "";

  console.log(cart);

  if (cart.length === 0) {
    cartContainer.innerHTML = `
            <h1 class='flex justify-center items-center h-[200px] text-4xl font-bold'>Ваша корзина пуста</h1>
        `;
  }
  cart.forEach((item, index) => {
    const cartRow = document.createElement("div");
    cartRow.innerHTML = `
        <div class='border-2 border-[#ccc] flex justify-between items-center  p-3'>
            <div class='flex gap-[30px] items-center'>
                <img src=${item.url} class='w-[100px]' />
                <p class='text-xl font-bold'>${item.title}</p>
            </div>
            <button id='remove' data-index='${index}' class='text-3xl font-bold'>x</button>
        </div>
    `;
    cartContainer.appendChild(cartRow);
  });

  const removeBtn = document.querySelectorAll("#remove");

  removeBtn.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      const confirmDelete = confirm("Вы точно хотите удалить товар");
      if (confirmDelete) {
        removeItem(index);
      }
    })
  );
}

function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function loadLikes() {
  const likes = JSON.parse(localStorage.getItem("likes"));
  likeContainer.innerHTML = "";

  console.log(likes);

  if (likes.length === 0) {
    likeContainer.innerHTML = `
            <h1 class='flex justify-center items-center h-[200px] text-4xl font-bold'>Ваши избранные товары пусты</h1>
        `;
  }
  likes.forEach((item, index) => {
    const likeRow = document.createElement("div");
    likeRow.innerHTML = `
        <div class='border-2 border-[#ccc] flex justify-between items-center  p-3'>
            <div class='flex gap-[30px] items-center'>
                <img src=${item.url} class='w-[100px]' />
                <p class='text-xl font-bold'>${item.title}</p>
            </div>
            <button id='remove-like' data-index='${index}' class='text-3xl font-bold'>
            <img class='w-[40px] ' src="../../img/удалить.jpg"
            </button>
        </div>
    `;
    likeContainer.appendChild(likeRow);
  });

  const removeLikeBtn = document.querySelectorAll("#remove-like");

  removeLikeBtn.forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const index = event.target.getAttribute("data-index");
      const confirmDelete = confirm("Вы точно хотите удалить товар из избранного?");
      if (confirmDelete) {
        removeFromLikes(index);
      }
    })
  );
}

function removeFromLikes(index) {
  const likes = JSON.parse(localStorage.getItem("likes")) || [];
  likes.splice(index, 1);
  localStorage.setItem("likes", JSON.stringify(likes));
  loadLikes();
}

loadCart();
loadLikes();
