let product = {
  refrigerator: [
    {
      id: 1,
      name: "FAB28",
      model: "FAB28RCR5",
      color: "크림",
      price: 3350000,
      img: "./assets/img/list/FAB28-크림.png",
    },
    {
      id: 2,
      name: "FAB10",
      model: "FAB28RCR5",
      color: "레드",
      price: 2100000,
      img: "./assets/img/list/FAB10-레드.png",
    },
    {
      id: 3,
      name: "FAB10",
      model: "FAB28RCR5",
      color: "블랙",
      price: 2100000,
      img: "./assets/img/list/FAB10-블랙.png",
    },
    {
      id: 4,
      name: "FAB10",
      model: "FAB28RCR5",
      color: "크림",
      price: 2100000,
      img: "./assets/img/list/FAB10-크림.png",
    },
    {
      id: 5,
      name: "FAB28",
      model: "FAB28RCR5",
      color: "블랙",
      price: 3350000,
      img: "./assets/img/list/FAB28-블랙.png",
    },
    {
      id: 6,
      name: "FAB28",
      model: "FAB28RCR5",
      color: "옐로우",
      price: 3350000,
      img: "./assets/img/list/FAB28-옐로우.png",
    },
    {
      id: 7,
      name: "FAB28",
      model: "FAB28RCR5",
      color: "유니언잭",
      price: 3350000,
      img: "./assets/img/list/FAB28-유니언잭.png",
    },
    {
      id: 8,
      name: "FAB28",
      model: "FAB28RCR5",
      color: "파스텔그린",
      price: 3350000,
      img: "./assets/img/list/FAB28-파스텔그린.png",
    },
    {
      id: 9,
      name: "FAB5",
      model: "FAB28RCR5",
      color: "레드",
      price: 3350000,
      img: "./assets/img/list/FAB5-레드.png",
    },
    {
      id: 10,
      name: "FAB5",
      model: "FAB28RCR5",
      color: "블랙",
      price: 3350000,
      img: "./assets/img/list/FAB5-블랙.png",
    },
    {
      id: 11,
      name: "FAB5",
      model: "FAB28RCR5",
      color: "크림",
      price: 3350000,
      img: "./assets/img/list/FAB5-크림.png",
    },
  ],
  toast: [
    {
      size: 10,
      color: "white",
    },
    {
      size: 50,
      color: "red",
    },
  ],
  heater: [
    {
      size: 10,
      color: "white",
    },
    {
      size: 50,
      color: "red",
    },
  ],
};
// console.log(product);

const comparisonBtn = document.querySelector(".compare_area");
const bottomBox = document.querySelector(".compare_item_area");
const productList = document.querySelector(".product_item_list");

function comparison() {
  if (comparisonBtn) {
    // 비교하기를 클릭했을 때 토글버튼
    bottomBox.classList.toggle("active");
    //클래스에 이름을 추가하고 삭제하는 방법의 toggle로 작업
  }
}
comparisonBtn.addEventListener("click", comparison);

function productView(products) {
  let productViewItem = products.map(function (product) {
    return `<div class="item product_item">
    <div class="image_area">
      
      <a href="#">
        <img src=${product.img} alt="" />
      </a>
      <div class="icon_compare">
        <div class="icon_text" style="width: 50px">비교하기</div>
      </div>
    </div>
    <div class="info_area">
      <a href="#">
        <div class="pro_name">${product.name} ${product.color}</div>

        <div class="model_name">${product.model}</div>
      </a>
      <div class="price_area">
        <div class="price_set">
          <div class="price_base">${product.price}</div>
          <div class="price_sale">2,680,000</div>
        </div>
      </div>
    </div>
  </div>`;
  });
  productViewItem = productViewItem.join("");
  productList.innerHTML = productViewItem;
}

productView(product.refrigerator);


//비교하기 버튼 기능
let comparisonBox = [];

const comparisonSubBtn = document.querySelectorAll(".icon_compare");
const comparisonItemBox = document.querySelector(".compare_item_area .item_box");

comparisonSubBtn.forEach(function (btn, index) {
  btn.addEventListener("click", function (e) {
    // comparisonBox.push(product[info])
    const selectedProduct = product.refrigerator[index]
    console.log(selectedProduct)

    const itemBoxHTML = `<div class="item_box">
                        <img src=${selectedProduct.img} alt="" />
                        <div class="item_info">
                          <div class="item_name">${selectedProduct.name}</div>
                          <div class="item_model">${selectedProduct.model}</div>
                          <div class="item_price">${selectedProduct.price}</div>
                        </div>
                      </div>`;

    //3개까지만 담기
    if (comparisonBox.length > 3) {
      comparisonBox.shift(); // 가장 처음에 추가한 상품 삭제
    }
  });
});
