let product = {
  refrigerator: [
    {
      name: "FAB28",
      model: "FAB28RCR5",
      color: "cream",
      price: 3350000,
    },
    {
      name: "FAB10",
      model: "FAB28RCR5",
      color: "red",
      price: 2100000,
    },
    {
      name: "FAB10",
      model: "FAB28RCR5",
      color: "black",
      price: 2100000,
    },
    {
      name: "FAB10",
      model: "FAB28RCR5",
      color: "cream",
      price: 2100000,
    },
    {
      name: "FAB28",
      model: "FAB28RCR5",
      color: "black",
      price: 3350000,
    },
    {
      name: "FAB28",
      model: "FAB28RCR5",
      color: "yellow",
      price: 3350000,
    },
    {
      name: "FAB28",
      model: "FAB28RCR5",
      color: "unionJack",
      price: 3350000,
    },
    {
      name: "FAB28",
      model: "FAB28RCR5",
      color: "pastelGreen",
      price: 3350000,
    },
    {
      name: "FAB5",
      model: "FAB28RCR5",
      color: "red",
      price: 3350000,
    },
    {
      name: "FAB5",
      model: "FAB28RCR5",
      color: "black",
      price: 3350000,
    },
    {
      name: "FAB5",
      model: "FAB28RCR5",
      color: "cream",
      price: 3350000,
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
console.log(product);

const comparisonBtn = document.querySelector(".compare_area");
const bottomBox = document.querySelector(".compare_item_area");
const comparisonSubBtn = document.querySelector(".icon_compare");

function comparison() {
  if (comparisonBtn) {
    // 비교하기를 클릭했을 때 토글버튼
    bottomBox.classList.toggle("active");
    //클래스에 이름을 추가하고 삭제하는 방법의 toggle로 작업
  }
}
comparisonBtn.addEventListener("click", comparison);
