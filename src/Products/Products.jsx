import {useState} from "react";//step 1  //its nameed export,multiple other things returning from react 

import ProductCard from "../ProductCard";
const products = [
  {
    id:1,
    title: "Apple",
    price: "100000",
  },
  {
    id:2,
    title: "Samsung",
    price: "30000",
  },
  {
    id:3,
    title: "Moto",
    price: "115000",
  }
];

function GetProductsApi(callback)
{
  console.log("api called");
  setTimeout(() => {
    callback(products); //we cant use return function in settimeout 
  }, 1000); //mock delay of api which is 1000 mili second.
}

//Api call to get the data 
export default function Products() {

  // let gp=[];//state var
    //useState(default Value) returns [stateVar, setterFn] thatswhy we are using let [gp,setGp]=useState([]);
    let [gp,setGp]=useState([]); //step 2 useState(default Value),default value was empty array (let gp=[];)
 //Note :- it returns return [stateVar, setterFn] (let [gp,setGp]),here gp was stateVar and we made setterFn=setGp

console.log("api call started");

 GetProductsApi(
     function(resp)
     {
      setGp(resp) //step 3,it works like setGp(gp=resp and rerender() the function Products())
     //gp=resp;
     console.log("api call ended");
     }
  );

  return (
    <div>
       {gp.map((product) => {
        return <ProductCard product={product} key={product.id} />; 
      })}
    </div>
  );
}



//frontend -> api -> backend
// backend collects data and sends response to the frontend

// state variable in react
// I am a special kind of varibale
// whose value once set would cause a rerender of the component
// it would persist the value of the var on every rerender

// Mounting --> first time process go through like :- index.js => app.js => products.js => productCard.js
// rendering
// index.js => app.js => products.js => productCard.js

// hooks in react

// hooks in react are nothing but a helper function
// repetitive stuff in react you could delegate that to a function
// functions job would be do the repetitive stuff
// known as hooks in react

// useState - system defined hook
// it is always named like this
// useName
// useState(default Value)

// return [stateVar, setterFn]
// setteFn() { setting and rerendering}


// Custom hooks
// system defined hooks

// hooks need to be at the top of the component
// hooks can't be inside if conditions or for loops
// hook can't be used in order to render a UI

// understand how the child is getting rerendered
// we will understand how to make this better
// loader in our code

// useEffect hook
// useEffect(fn, []);
// I will call this callback function
// everytime dependent on this dependency array
// when there is no dependency array
// where there is an empty dependency array
// when there is some value in this array
// what can be passed in this dependency array
// you can pass a state variable and you can pass a props from the parent which is a state variable

// AJAX
// fetch - ajax call with promises in order to get the data
// axios

// the concept which we would want to learn the barebone structure of fetch
// is AJAX

// Asyn js and xml
// client => ajax => server => api => returns data => client => renders


