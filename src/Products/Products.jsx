
// import ProductCard from "./ProductCard"; //1 dot for one folder out
// import ProductCard from "../ProductCard/ProductCard"; //2 dot for two folder out
import ProductCard from "../ProductCard"; //2 dot for two folder out

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
  },
];

export default function Products() {
  return (
    <div>
       {products.map((product) => {
        // return <ProductCard product={product} key={product.title} />; //or
        return <ProductCard product={product} key={product.id} />; 

        //you can also pass the id as key
         //,product.id from your json if exists in //your json.its good practice to use key in loop.
         //its interview question why the key is important to used.
         //its used in map and loop function ,key is a keyword here,used in order to diffrentiate between the diffrent component,so that i can use that key,its just a unique id.
      })}



      {/* <ProductCard name="1" price="20" />
      <ProductCard name="2" price="30" />
      <ProductCard name="3" price="40" />
      <ProductCard name="4" price="50" />  */}
      {/* we are passing parameteres like this | */}
    </div>
  );
}

//what map functions does,its like for loop
//map(fn(item,index))

// Array.prototype.double = function () {
//   return this.map((item) => item * 2);
// };

// var a = [1, 2, 3];
// a.double(); //[2,4,6]
// console.log(a.double());

//Note:- Here we are using Array.prototype becoz we are manipulating array,
//we use Object.Prototype when we edit object.



//****Import */
//how import works:- it checks first in a folder with given name like if we have given:-import ProductCard from "./ProductCard"
// 1) first check ProductCard.js ,
//2) if this's not reachable then it will check ProductCard/index.js file.

