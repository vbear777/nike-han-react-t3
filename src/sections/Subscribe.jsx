import Button from "../components/Button";
import { Bell } from "lucide-react";

const Subscribe = () => {
  return (
    <section
      className="max-container flex flex-col items-center gap-8 text-center"
      id="contact-us"
    >

      <h3 className="text-4xl font-palanquin font-bold leading-tight">
        Sign Up from <span className="text-red">Updates</span> & Newsletter
      </h3>

      <div className="relative w-full max-w-4xl">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="w-full py-4 pl-6 pr-36 rounded-full border border-gray-300 focus:outline-none"
        />

        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <Button label="Sign Up" icon={Bell} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;

