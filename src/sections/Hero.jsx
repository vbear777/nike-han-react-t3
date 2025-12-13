import { ArrowRight } from "lucide-react";
import Button from "../components/Button";

const Hero = () => {
    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p>Our Latest Collection</p>
                <h1>
                    <span>The New Arrival</span>
                    <br />
                    <span className="text-purple-dark">Nike</span> Shoes
                </h1>
                <p>
                    Not just shoes. A mindset. 
                    Where comfort meets ambition.
                </p>
                <Button label="Shop now" icon={ArrowRight} />
            </div>
            
        </section>
    )
}

export default Hero;