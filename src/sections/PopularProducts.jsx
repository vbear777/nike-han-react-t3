import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
    return (
        <section
            id="products"
            className="max-container max-sm:mt-12"
        >
            {/* Title Popular Products */}
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-red">Popular</span> Products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-gray-400">
                    Nike presents a collection of favorite footwear featuring iconic design, innovative technology, and 
                    maximum comfort. Built to support your best performance—from everyday activities to intense workouts. 
                    Discover the most popular selections that combine style, durability, and confidence in every step.
                </p>
            </div>

            {/* Container Popular Products */}
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 ">
                {products.map((product) => (
                    <PopularProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    )
}

export default PopularProducts;