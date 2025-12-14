import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import { bigNike1 } from "../assets/images";
import { shoes, statistics } from "../constants/index";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
    const [bigShoeImg, setBigShoeImg] = useState(bigNike1);

    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl font-montserrat text-red">Our Latest Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-red inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="font-montserrat text-gray-400 pl-2 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Not just shoes. A mindset. 
                    Where comfort meets ambition.
                </p>
                <Button label="Shop now" icon={ArrowRight} />
                <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat) => (
                        <div key={stat.label}>
                            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                            <p className="leading-7 font-montserrat text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-burgundy bg-hero bg-cover bg-center">
                <img 
                    src={bigShoeImg} 
                    alt="shoe collection" 
                    width={610}
                    height={500}
                    className="object-contain relative z-10"    
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe) => (
                        <div key={shoe.bigNike}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero;