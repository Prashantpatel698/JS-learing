// var a  = 10;
// var b =20;
// console.log(a+b);

// const { Promise } = require("mongoose")


// var a =+prompt("enter the integer a :")
// var b = +prompt("enter an interger b :");
// console.log(`The sum of a and b is : ${a+b}`);


//  creation of array 
//  var arr= [12, 283,42,4,24,5,22,665,22];
//  console.log(arr[6]);

// var arr = [12,2,5,66,76,8,9,86,56,4];
// console.log(arr)
//  arr[0]=13;
//  arr[2]=22;
//  console.log(arr);


// muteable method 
// Updation on array
// var arr =[12,2,5,66,76,8,9,86,56,4];
// console.log(arr);
// arr.push(12,222,332);// you can anty number of integer 
// console.log(arr)
// arr.unshift(2323,43,54,545)
// console.log(arr)


// Detation on array
// var arr= [12,2,5,66,76,8,9,86,56,4];
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.shift()
// console.log(arr)

// callbacks

// function addnum(callback)
// { 
//    console.log("start")
//     callback("processing!!!!!!!!");

// }
// function Show(result)
// {
//     console.log(result+"End")
// }
// addnum(Show)


// Promises

// const p1= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         var rollNO = [1,2,3,4,5,6]
//         resolve(rollNO);
//         // reject("Data in not processed !")
//     },2000)
// });


// let getBioData=(indexData)=>{
//     return new Promise((resolve,reject)=>{
//        setTimeout((indexData)=>{
//         const obj={
//             name:"prshant",
//             age:20
//         }
//         // resolve(`hi everyone i am ${obj.name} and roll no ${indexData} and ${obj.age} years old.`)
//         reject("error is occurred")
//        },2000,indexData);
//     })
// }

// p1.then((rollno)=>{
//     console.log(rollno)
//     getBioData(rollno[1]).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })
// }).catch((error)=>{
//     console.log(error)
// })





// Promise API
//  const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("value 1")
//     },11000)
//  })

//  const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     //   resolve("value 2")
//     reject( new Error("ndsd"))
//     },2000)
//  })
//   const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("value 3 ")
//     },3000)
//  })
//  p1.then((value)=>{
//     console.log(value)
//  })
//  p2.then((value)=>{
//     console.log(value)
//  })
//  p3.then((value)=>{
//     console.log(value)
//  })


// let promise_all= Promise.all([p1,p2,p3])
// let promise_all= Promise.allSettled([p1,p2,p3])
// let promise_all=Promise.race([p1,p2,p3]);
// let promise_all=Promise.any([p1,p2,p3]);
// let promise_all = Promise.resolve("hello sir i am prashant patel")
// let promise_all = Promise.reject("hello sir i am prashant patel")
// promise_all.then((value)=>{
//     console.log(value)
// })


// async and await - async make a funtion to return a promise and await make a funtion pause the execution for a promise and wait for resolve promise before it continues.

// async function harry(){
//     const delhi = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("27 deg")

//         },2000)
//     })

//     const bhopal = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("19 deg")

//         },5000)
//     })

//   console.log("delhi weather is fatching...")
//   let dehliw = await delhi;

//   console.log("delhi weather is fatched:"
//   +dehliw)

//   console.log("bhopal weather is fatching...")
//   let bhopalw = await bhopal;
//   console.log("bhopal weather is fatched:"+bhopalw)
//     return [dehliw,bhopalw]
// }

// let a = harry();
// console.log(a)
// a.then((value)=>{
//     console.log(value)
// })
// delhi.then((value)=>{
//     alert("dehli weather is "+value)
// })
// bhopal.then((value)=>{
//     alert("dehli weather is "+value)
// })



// setTimeout(()=>{
// try {
//     console.log(anuj)
// } catch (error) {
//     console.log(error)
// }
// },1000);

// setTimeout(()=>{
//     console.log("Data is fecthing..............")
// },3000);

// setTimeout(()=>{
//     console.log("Data is fecthed..............")
// },4000);



// throw custom error in js

// try {
//     let age =+prompt("enter your  age");
//     if(age<18){
//         throw new ReferenceError("Not a vaild age for voter")
//     }
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)

// }


//Hacker Man

// async function hacker(){
//     setTimeout(()=>{
//     console.log("Hacking program excuting");
//     color = "Green";
//     },2000);
//     setTimeout(()=>{
//       console.log("UserName is fetching.......");
//         },3000) ;
//         setTimeout(()=>{
//             console.log("Username is aakash");
//             },4000);
//              setTimeout(()=>{
//                 console.log("Attacking to phone number..........");
//                 },5000);
//                  setTimeout(()=>{
//                     console.log("Phone in is 7748947587");
//                     },6000)
// }
// hacker()



// Fetch API
//  const data=fetch('https://fakestoreapi.com/products')
//  data.then((value1)=>{
//   return value1.json()
//  })
//  .then((value2)=>{
//  value2.map((data,index)=>(
//   console.log(data.title )
//  ))
//  })

// const data =fetch("https://fakestoreapi.com/products")
// data.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
//     // return response.text()

// }).then((value)=>{
//     console.log(value)
// })


// fetch api with post 
// const createTodo= async(todo)=>{
// const options={
//     method:"POST",
//     headers:{
//         "Content-type":"application/json"
//     },body: JSON.stringify(todo),
// }
// const p = await fetch('https://jsonplaceholder.typicode.com/posts',options);
// let response=  await p.json();
// return response;
// }


// const mainFunc= async()=>{
//     let todo= {
//         title: 'tarunn  ',
//         body: 'patel',
//         userId: 1101,
//       }
//     let todor =  await createTodo(todo);
//     console.log(todor)
// }
// mainFunc()


// cookies in js
// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires="+d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//   }

//   function getCookie(cname) {
//     let name = cname + "=";
//     let ca = document.cookie.split(';');
//     for(let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return "";
//   }

//   function checkCookie() {
//     let user = getCookie("username");
//     if (user != "") {
//       alert("Welcome again " + user);
//     } else {
//       user = prompt("Please enter your name:", "");
//       if (user != "" && user != null) {
//         setCookie("username", user, 365);
//       }
//     }
//   }
//   checkCookie()
// var key =prompt("Enter key  sir :");
// var value =prompt("Enter your name sir :");

// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)

//localStroage

// var key = prompt("enter the key your want to set :");
// var value = prompt("enter the value ");

// localStorage.setItem(key,value);
// console.log(localStorage.getItem(key))

// if(key=="bhopal")
// {
//   localStorage.removeItem(key)
// }

// localStorage.clear()


//session Storage
// var key = prompt("enter the key your want to set :");
// var value = prompt("enter the value ");
// sessionStorage.setItem(key,value)
// console.log(sessionStorage.getItem(key))


// Window : Storage Event
// window.onstorage =()=>{
//   alert()
// }



// Class and Objects
// class RailwayFrom{
//   submit()
//   {
//     alert(this.name+": From is submitedd")
//   }
//   cancel()
//   {
//     alert(this.name+": From is canceled")
//   }
//   fill(name)
//   {
//     this.name= name;
//   }
// }

// let tarun = new RailwayFrom();
// tarun.fill("tarun");
// let ashu = new RailwayFrom()
// ashu.fill("ashu")

// tarun.submit()
// ashu.submit()
// tarun.cancel()


// contructors
// class RailwayFrom{
//   constructor(name,trainno)
//   {
//     this.name = name;
//     this.trainno = trainno;
//   }
//   submit()
//     {
//       alert(this.name+""+this.trainno+": From is submitedd")
//     }
//     cancel()
//     {
//       alert(this.name+" "+this.trainno+": From is canceled")
//     }
//   }


//   let tarun = new RailwayFrom("tarun koshti",20126);
//   tarun.submit()


//   let harshit = new RailwayFrom("harshit",2012226);
//   harshit.submit()


// Inheritance
class car {
 average(av)
 { this.average = av;

 }
  carspeed(speed) {
    this.speed = speed;

  }

}

class volvo extends car {
  engine(hp) {
    this.hp = hp;
  }
  show() {
    console.log(`this car have ${this.speed} KM/H and color is ${this.color} and it engine power ${this.hp} average is ${this.average} /km`);
  }


}

let k10 = new volvo();


k10.carspeed(200);
k10.engine(1500);
k10.average(12)
k10.show()
