
// import ProductCard from "./ProductCard"; //1 dot for one folder out
import ProductCard from "../ProductCard/ProductCard"; //2 dot for two folder out
const products = [
  {
    title: "Apple",
    price: "100000",
  },
  {
    title: "Samsung",
    price: "30000",
  },
  {
    title: "Moto",
    price: "115000",
  },
];

export default function Products() {
  return (
    <div>
       {products.map((product) => {
        return <ProductCard product={product} />;
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
