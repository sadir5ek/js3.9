// const photoList = document.querySelector("#photoList");

// async function fetchPhotos() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const data = await res.json();

//     data.slice(0, 21).forEach((photo) => {
//       const photoElement = document.createElement("div");
//       photoElement.innerHTML = `
//             <div class='w-[300px] shadow-2xl'>
//                 <img class='w-[300px]' src=${photo.url}>
//                 <p class='text-xl font-bold'>${photo.title}</p>
//                 <div class= 'flex justify-between'>
//                 <button id='add-to-cart' class='border py-[7px]  font-semibold hover:bg-[red] hover:text-white'>Добавить в корзину</button>
//           <button id='add-to-card' class='border py-[7px]  font-semibold hover:bg-[red] hover:text-white'>like</button>
//             </div>
//         `;
//       const btn = photoElement.querySelector("#add-to-cart");
//       btn.addEventListener("click", () => addToCart(photo));

//       photoList.appendChild(photoElement);
//     });
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// function addToCart(item) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   cart.push(item);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   setTimeout(() => {
//     alert("Товар успешно добавлен в корзину");
//   }, 1000);
// }




// fetchPhotos();
const photoList = document.querySelector("#photoList");

async function fetchPhotos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();

    data.slice(0, 21).forEach((photo) => {
      const photoElement = document.createElement("div");
      photoElement.innerHTML = `
            <div class='w-[300px] shadow-2xl'>
                <img class='w-[300px]' src=${photo.url}>
                <p class='text-xl font-bold'>${photo.title}</p>
                <div class= 'flex justify-between'>
                <button id='add-to-cart' class=' font-semibold hover:bg-[red] hover:text-white'>
                <img class= 'w-[40px] 'src="../../img/карзинка.jpg">
                </button>
                <button id='add-to-like' class='border py-[7px]  font-semibold hover:bg-[red] hover:text-white'>
                <img class='w-[40px]' src="../../img/icon_favourite.svg" 
                </button>
                </div>
            </div>
        `;
      const addToCartBtn = photoElement.querySelector("#add-to-cart");
      const addToLikeBtn = photoElement.querySelector("#add-to-like");

      addToCartBtn.addEventListener("click", () => addToCart(photo));
      addToLikeBtn.addEventListener("click", () => addToLike(photo));

      photoList.appendChild(photoElement);
    });
  } catch (error) {
    console.error(error.message);
  }
}

function addToCart(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  setTimeout(() => {
    alert("Товар успешно добавлен в корзину");
  }, 1000);
}

function addToLike(item) {
  let likes = JSON.parse(localStorage.getItem("likes")) || [];
  likes.push(item);
  localStorage.setItem("likes", JSON.stringify(likes));
  setTimeout(() => {
    alert("Товар добавлен в избранное");
  }, 1000);
}

fetchPhotos();
