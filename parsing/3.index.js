// const arr = [1, 2, 3, 4];

// arr.forEach((value) => {
//   console.log(value);
// })

// for (let i = 0; i < arr.length; i++)
// {
//   console.log(arr[i]);
// }

// const arr = [4, 3, 5, 1, 6, 5];
// let cnt = 0;

// arr.forEach(value => {
//   if (value % 2 == 1) cnt++;
// })
// console.log(cnt);

// const arr = [-5, 3, 4, 2, -7, -2, 7];
// const pplus = [];
// const mminus = [];

// arr.forEach(li => {
//   if (li < 0) mminus.push(li);
//   else pplus.push(li);
// })

// pplus.forEach(val => {
//   console.log(val);
// })

// mminus.forEach(val => {
//   console.log(val);
// })

// const arr = [1, 2, 3, 4, 5];

// // some 하나의 조건만 만족해도 true 반환
// const sres1 = arr.some(element => element < 0);
// const sres2 = arr.some(element => element > 4);

// // every 모든 조건을 만족해야 true 반환
// const eres1 = arr.every(element => element > 0);
// const eres2 = arr.every(element => element < 4);

// const arr = [1, 2, 3, 4, 5];
// const inventory = [
//   { name: "A", quantity:1 },
//   { name: "B", quantity:2 },
//   { name: "C", quantity:3 },
// ]

// // find -> 해당하는 배열의 값을 가져온다
// const res1 = arr.find(element => element > 4);
// console.log(res1);

// const res2 = inventory.find(element => element.name === "B");
// console.log(res2);

// // findIndex > 해당하는 index를 가져온다
// const res3 = inventory.findIndex(element => element.name === "B");
// console.log(res3);

// const chicken = [
//   { name: "머리", quantity: 1 },
//   { name: "날개", quantity: 2 },
//   { name: "닭다리", quantity: 2 },
//   { name: "닭가슴살", quantity: 1 },
//   { name: "닭발", quantity: 2 },
// ];

// const res1 = chicken.find(element => element.name === "닭다리");
// const res2 = chicken.findIndex(element => element.name === "닭다리");
// console.log(res1);
// console.log(res2);

// const arr = [1, 2, 3, 4, 5, 6];

// const res = arr.map(data => {return data + 1});
// console.log(res);

// const arr1 = [1, 2, 3, 4, 5];

// const res1 = arr1.map(data => {return data * data});
// console.log(res1);

// const arr2 = ["a", "bcd", "ef", "g"];

// const res2 = arr2.map(data => {return data.length});
// console.log(res2);

// const arr = [3, 5, 4, 2];

// const filtered = arr.filter(data => data > 3);
// console.log(filtered);

// const bucketList = [
//   { id: 1, text: "여행 가기", done: false },
//   { id: 2, text: "치킨 먹기", done: true },
//   { id: 3, text: "코딩 하기", done: true },
//   { id: 4, text: "요리 하기", done: false },
// ];
// const filtered = bucketList.filter(data => !data.done);
// console.log(filtered);

// const students = [
//   {
//     name: "김도훈",
//     age: 26,
//     address: "경남 창원시",
//   },
//   {
//     name: "김기홍",
//     age: 27,
//     address: "광주광역시",
//   },
//   {
//     name: "김택우",
//     age: 30,
//     address: "인천광역시",
//   },
// ];

// // // arr를 순회하고 싶을 때 사용
// // students.forEach(student => {
// //   console.log(student);
// // })


// // // map은 새로운 배열을 만들고 싶을 때 사용, 배열의 원형을 손상시키지 않는다
// // const res = students.map(student => {
// //   return student.name;
// // })
// // console.log(res);

// // filter는 새로운 배열을 만들 때 사용, 조건에 맞는 것만 배열로 만듬
// const under30people = students.filter(student => student.age < 30);
// const under30peoplenames = under30people.map(person => person.name);
// console.log(under30people);
// console.log(under30peoplenames);

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filtered_arr1 = arr1.filter(val => val % 2 === 0);
// const res_arr = filtered_arr1.map(val => val * 10);
// console.log(res_arr);

// const orderList = [
//   {
//     menu: "치킨",
//     price: 17000,
//     event: false,
//     count: 50,
//   },
//   {
//     menu: "돈까스",
//     price: 8500,
//     event: true,
//     count: 99,
//   },
//   {
//     menu: "마라탕",
//     price: 8800,
//     event: false,
//     count: 100,
//   },
//   {
//     menu: "쫄면",
//     price: 6500,
//     event: false,
//     count: 0,
//   },
//   {
//     menu: "짜장면",
//     price: 5500,
//     event: true,
//     count: 30,
//   },
// ];

// const new_List = orderList.filter(order => order.count > 0);
// new_List.forEach(order => {
//   if (order.event) order.salePrice = order.price * 9 / 10;
// })
// console.log(orderList);
// console.log(new_List);

// const newOrderList = orderList
//   .filter((order) => order.count !== 0)
//   .map((order) => {
//     // structuredClone() -> 깊은 복사
//     const newOrder = structuredClone(order);
//     if (order.event) {
//       newOrder.saledPrice = (newOrder.price * 9) / 10;
//       return newOrder;
//     }
//     newOrder.saledPrice = newOrder.price;
//     return newOrder;
//   });
// console.log(orderList); // 원래 배열은 손상되지 않는다.
// console.log(newOrderList); // 새로운 메뉴 리스트

// const dataFromServer = [
//   {
//     name: "jony",
//     age: 30,
//   },
//   {
//     name: "sylvie",
//     age: 30,
//   },
//   {
//     name: "nana",
//     age: 1,
//   },
// ];

// const dataFromServer = [];

// if (dataFromServer === []) {
//   console.log("있다");
// }
// else {
//   console.log("없다");
// }

// const sampleObject = {};

// if (sampleObject === {}) {
//   console.log("데이터 없음");
// }
// else {
//   console.log("데이터 있음");
// }

// const abc = {
//   name: "치킨",
//   type: "후라이드"
// }

// abc['name'];
// abc.name;

// const square = {
//   width: 200,
//   height: 200,
// };

// const colorSpace = {
//   ...square,
//   colo: "res"
// }

// console.log(colorSpace);

const bucketLists = [
  { id: 3, text: "여행가기", done: false },
  { id: 2, text: "치킨 먹기", done: true },
  { id: 1, text: "코딩 하기", done: false },
];

// const ids = bucketLists.map((el) => {
//   return el.id;
// });
// const texts = bucketLists.map((el) => {
//   return el.text;
// });
// const dones = bucketLists.map((el) => {
//   return el.done;
// });

// const getValues = (indecator) =>
//   bucketLists.map(bucketList => bucketList[indecator]);

// console.log(getValues("id"));
// console.log(getValues("text"));
// console.log(getValues("done"));

// const removeList = (id) =>
//   bucketLists.filter(bucketList => bucketList.id !== id);

// console.log(removeList(2));

// const toggle = (id) => {
//   const tmp_bucketLists = structuredClone(bucketLists);
//   const ret = tmp_bucketLists.filter(el => el.id === id);
//   if (ret[0].done) ret[0].done = false;
//   else ret[0].done = true;
//   return tmp_bucketLists;
// }

// console.log(toggle(2));

// const datas = [1, 2, 3, 4, 5];
// const accResult = datas.reduce((acc, cur) => {
//   console.log(acc, cur);
//   return acc + cur;
// });
// console.log(accResult);

const studentInfo = [
  {
    name: "jony",
    age: 30
  },
  {
    name: "sylvie",
    age: 30
  },
  {
    name: "nana",
    age: 1
  },
];

const new_studentNames = studentInfo.map(student => student.name);
console.log(new_studentNames);

// const new_studentNames2 = [];
// studentInfo.reduce((acc, cur) => {
//   new_studentNames2.push(cur.name);
// }, 1);

// const new_studentNames2 = studentInfo.reduce((acc, cur) => {
//   acc.push(cur.name);
//   return acc;
// }, []);
// console.log(new_studentNames2);

const ageover30Names = studentInfo.reduce((acc, cur) => {
  if (cur.age === 30) acc.push(cur.name);
  return acc;
}, []);