import { offer } from "../assets/images";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import { BookSearch } from "lucide-react";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 ">
            <div className="flex-1">
                <img 
                    src={offer} 
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>

            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-red">Special</span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text ">
                    Upgrade your performance with Nike’s latest collection. Enjoy exclusive deals on premium footwear and 
                    apparel designed for comfort, style, and durability. Limited time only — don’t miss out.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Push your limits with Nike. Get exclusive discounts on selected shoes and apparel crafted with innovative 
                    technology for maximum performance. Shop now and elevate your game before the offer ends.
                </p>
                <div className="mt-11 flex flex-wrap gap-4 ">
                    <Button 
                        label="Shop now" 
                        icon={ArrowRight} 
                    />
                    <Button 
                        label="learn more" 
                        backgroundColor="bg-white" 
                        borderColor="border-blood" 
                        textColor="text-black font-bold"
                        icon={BookSearch}
                    />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer;