

const ProductCards = ({product}) => {

        const {title, image, price} = product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 flex-grow">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center ">
                <h2 className="card-title flex-grow">{title}</h2>
                
                <p className="text-xl text-orange-500 flex-grow-0">Price: ${price}</p>
                    
                
            </div>
        </div>
    );
};

export default ProductCards;