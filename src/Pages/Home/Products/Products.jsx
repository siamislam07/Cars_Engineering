import { useEffect, useState } from "react";
import ProductCards from "./ProductCards";

const Products = () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=> setProduct(data))
    },[])

    return (
        <div>
            <div className="text-center space-y-5">
                <h2 className="text-xl text-[#FF3811]">Popular Products</h2>
                <h2 className="text-3xl font-bold">Browse Our Products</h2>
                <p className="text-xl">The majority have suffered alteration in some form, by injected humour, or Randomised <br /> words which do not look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    product.map(product=><ProductCards
                    key={product.id}
                    product={product}
                    ></ProductCards>)
                }
            </div>
        </div>
    );
};

export default Products;