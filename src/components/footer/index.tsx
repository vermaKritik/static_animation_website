import { FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="flex flex-col items-center justify-center max-w-[85%] max-md:max-w-[90%] shadow-xl mx-auto my-8 py-10 rounded-2xl px-12 bg-royalblue dark:bg-white">
      <div className="flex flex-col items-center justify-center gap-y-4 text-sm w-full">
        <div className="text-xl font-righteous uppercase text-white dark:text-candyOrange">
          Subscribe For Offers
        </div>
        <div className="flex flex-row max-md:flex-col max-md:w-[95%] max-md:gap-y-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="flex-grow max-md:flex-auto font-righteous bg-white dark:bg-black text-black dark:text-white flex h-10 rounded-l-md max-md:rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none"
          />
          <button className="font-righteous uppercase h-10 px-4 py-2 bg-black dark:bg-candyOrange text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-r-md max-md:rounded-md text-sm font-medium">
            Subscribe
          </button>
        </div>
      </div>
      <div className="text-sm text-white dark:text-black flex flex-row max-md:flex-col max-md:items-center max-md:gap-y-10 justify-evenly w-full my-8">
        <div className="flex-1">
          <div className="font-semibold max-md:text-center">About Us</div>
          <div className="text-xs flex flex-col max-md:items-center gap-y-2 mt-3">
            <div className="max-md:text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </div>
            <div className="max-md:text-center">
              2346 Lakeshore Rd W, Oakville, ON L6L 1H5, Canada
            </div>
            <div>Email: contact@example.com</div>
          </div>
        </div>
        <div className="flex-1 pl-24 max-md:pl-0">
          <div className="font-semibold">Quick Links</div>
          <div className="text-xs mt-3 flex flex-col max-md:text-center gap-y-1">
            <div>Blog</div>
            <div>Portfolio</div>
            <div>Services</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="flex-1">
          <div className="font-semibold max-md:text-center">Follow Us</div>
          <div className="flex flex-row gap-2 mt-3">
            <FaBehance size={20} />
            <FaXTwitter size={20} />
            <FaLinkedin size={20} />
            <FaDribbble size={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full text-xs text-white dark:text-black">
        <div>All rights reserved.</div>
        <div className="flex flex-row gap-x-4">
          <div>Privacy</div>
          <div>Terms</div>
        </div>
      </div>
    </div>
  );
}
