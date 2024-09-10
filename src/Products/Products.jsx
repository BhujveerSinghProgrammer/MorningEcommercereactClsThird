
import ProductCard from "../ProductCard";
const products = [];

function GetApiCall()
{
  setTimeout(() => {
    return products;
  }, 1000);
}

//Api call to get the data 
export default function Products() {
  let gp=GetApiCall();

  return (
    <div>
       {gp.map((product) => {
        return <ProductCard product={product} key={product.id} />; 
      })}
    </div>
  );
}

