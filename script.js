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

async function hacker(){
    setTimeout(()=>{
    console.log("Hacking program excuting");
    color = "Green";
    },2000);
    setTimeout(()=>{
      console.log("UserName is fetching.......");
        },3000) ;
        setTimeout(()=>{
            console.log("Username is aakash");
            },4000);
             setTimeout(()=>{
                console.log("Attacking to phone number..........");
                },5000);
                 setTimeout(()=>{
                    console.log("Phone in is 7748947587");
                    },6000)
}
hacker()