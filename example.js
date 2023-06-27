let product = {
  refrigerator: [
    {
      size : 10,
      color : 'rhite'
    },
    {
      size: 50,
      color : 'red'
    }
  ],
  toast : [
    {
      size : 10,
      color : 'thite'
    },
    {
      size: 50,
      color : 'ted'
    }
  ],
  heater : [
    {
      size : 10,
      color : 'hhite'
    },
    {
      size: 50,
      color : 'hed'
    }
  ]
}

// 단순하게 생각해보면
// 버튼 누를때마다 buttonName 바꿔줌
let buttonName = 'refrigerator';

// 해당되는 것들을 나타내줌
console.log(product[buttonName]);
console.log(product[buttonName][0]);
console.log(product[buttonName][1]);
console.log(product[buttonName][0].size);
// 이렇게 반복문 해도 되는데 이거 말고
for(let i=0; i<product[buttonName].length; i++){
  console.log(product[buttonName][i]);
}

// 맵 함수가 더 좋음 
// 쓰기는 이해가 처음에 안가서 힘든데 연습해야하는건 map
let map = product[buttonName].map(item => console.log(item));
let map2 = product[buttonName].map((item, index) => console.log(index));
let map3 = product[buttonName].map((item, index) => {if(index ==1) console.log(item)});
let map4 = product[buttonName].map((item, index) => {console.log(item.size)}); // 이렇게 하면 size에만 접근가능

//위의 map4 예시 같은 경우로 이미지만 타다다닥 가져와서 붙여 dom요소의 img를 연결 시켜 준다던지

console.log("----------------------------------------------------------");

const comparisonBox = []; // 빈 배열 선언해놓고

const addComparion = (info) => {
  // 버튼 클릭하면 (버튼 클릭 add listener)
  // 클릭한 버튼은 각 냉장고 정보로 뿌려준 곳에 저장 될 것이니
  // dom 요소로 부모 혹은 자식 노드에 접근해서 product 배열에 담긴 정보를 빼올수 있는 인자 값으로 만들어주고
  // 그 인자 값을 토대로 product 정보에서 필요한 것들을 뽑아오기

  comparisonBox.push(product[info]); // 저장 할 때는 push 함수로 앞에서부터 차곡 차곡 쌓일 수 있게 (이건 해당 상품안에 상세 info를 가져오고 싶다면)
  // comparisonBox.push(product.map((item) =>{
  //   if(item == info) return item;
  // }))
  
  //여기 추가 한 후에 comparisonBox에 대한 로직이 추가 되어야 함
  if(comparisonBox.length > 3){ // 추가 한 후에 length의 길이가 3보다 크다면 
    comparisonBox.shift(); // 가장 처음에 추가한 상품 삭제
  }
}
// 삭제 버튼을 눌렀을 때 삭제
const deleteComparion = (info) => {
  comparisonBox.splice(comparisonBox.indexOf(info));
}

addComparion(buttonName); 
console.log(comparisonBox); // add 하고 나서는 잘 추가됨 

deleteComparion(buttonName);
console.log(comparisonBox); // remove 한 후 comparioson Box


addComparion(buttonName); // 냉장고 추가
addComparion("toast");  // 토스트 추가 
addComparion("heater"); // 히터 추가
addComparion("heater"); // 히터 추가 
console.log(comparisonBox); // 출력해보면 로직 잘 반영되어서 토스트, 히터, 히터 순으로 들어가 있음
