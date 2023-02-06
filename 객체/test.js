// const studentInfo = {
//   name: "김성민",
//   age: 28,
//   address: "광주 광산구",
//   family: ["나"],
//   skill: {
//     client: ["vue.js", "vanila", "react"],
//     server: ["django", "php", "node.js"],
//     db: ["sqlite", "mongo", "mysql", "postgresql"],
//   },
//   sayHi: () => console.log("hi!!"),
// }

/////protoype
// StudentInfo = {
//   name: String,
//   age: Number,
//   address: String,
//   family: Array,
//   skill: Object,
//   sayHi: Function,
// };

// const student1 = new StudentInfo();

// class StudentInfo {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.address = "";
//   }
//   sayMyName() {
//     console.log(`my name is ${this.name}`);
//   }
//   setAddress(address) {
//     this.address = address;
//   }
//   getAddress() {
//     return this.address;
//   }
//   useMethod() {
//     this.sayMyName();
//   }
// }

// const student1 = new StudentInfo("jony", 30);

// const student1 = {
//   name: "",
//   age: -1,
//   address: "",
//   // -> address, 이렇게 축약 가능
//   constructor: function (name, age) {
//     this.name = name;
//     this.age = age;
//   },
//   sayMyName: function () {
//     console.log(`my name is ${this.name}`);
//   },
//   // sayMyName() {
//   //   console.log(`my name is ${this.name}`);
//   // }, 이렇게 축약 가능
//   setAddress: (adress) => this.address = adress,
//   getAddress: () => this.address,
//   useMethod: function () {
//     this.sayMyName();
//   },
// }

// student1.constructor("jony", 30);
// student1.sayMyName();
// student1.setAddress("경기 군포시 산본동");
// console.log(student1.getAddress());
// student1.useMethod();

class Lawyer {
  constructor(name, age, intro) {
    this.name = name;
    this.age = age;
    this.intro = intro;
  }

  SayMyName() {
    console.log(`이름: ${this.name}`);
  }

  SayMyAge() {
    console.log(`나이: ${this.age}`);
  }

  SayMyIntro() {
    console.log(`자기소개: ${this.intro}`);
  }

  introduce() {
    this.SayMyName();
    this.SayMyAge();
    this.SayMyIntro();
  }
}

const l1 = new Lawyer("우영우", 27, "기러기 토마토 스위스 역삼역");
l1.introduce();
