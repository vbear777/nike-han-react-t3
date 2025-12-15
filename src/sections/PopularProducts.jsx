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
                    maximum comfort. <span className="text-blood">Disclaimer</span> : <span className="text-golden underline">This website is a personal portfolio project and is not affiliated with or endorsed 
                    by Nike. you can go to their official website to the real transaction ask my anything on my email: 
                    hanifwalian@gmail.com
                    </span>
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