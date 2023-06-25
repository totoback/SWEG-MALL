let product = {
  refrigerator: [
    {
      size : 10,
      color : 'white'
    },
    {
      size: 50,
      color : 'red'
    }
  ],
  toast : [
    {
      size : 10,
      color : 'white'
    },
    {
      size: 50,
      color : 'red'
    }
  ],
  heater : [
    {
      size : 10,
      color : 'white'
    },
    {
      size: 50,
      color : 'red'
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

