import { Typography, Button, IconButton } from "@material-tailwind/react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Link from 'next/link';

export const runtime = "edge";

const CURRENT_YEAR = new Date().getFullYear();
const INTERNAL_LINKS = [{ name: "Home", path: "/"},
              {name: "Speakers", path: "/speakers"},
              {name: "Sponsorship", path: "/sponsors"},
              {name: "Itinerary", path: "/agenda"},
              {name: "Our Team", path: "/team"}];


const SOCIAL_LINKS = [
  {icon: "fa-brands fa-instagram", url: "https://www.instagram.com/fyic2025/"},
  {icon: "fa-brands fa-linkedin", url: "https://linkedin.com/" },
  {icon: "fa-brands fa-facebook", url: "https://facebook.com/" }

];


export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        {/* <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Join now and get 30% OFF!
          </Typography>
          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Don&apos;t miss out on this exclusive offer that will end soon.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button color="white" size="md">
              buy ticket
            </Button>
          </div>
        </div> */}
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as={Link}
            href="/"
            variant="h6"
            className="text-gray-900"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            {...({} as any)}
          >
            FYIC 2025
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {INTERNAL_LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as={Link}
                  href={link.path}
                  variant="small"
                  color="white"
                  className="font-Montserrat !text-gray-700 hover:!text-gray-900 transition-colors"
                  {...({} as any)}
                >
                  {link.name}
                </Typography>
              </li>
            ))}
          </ul>

          {/* <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-linkedin text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
          </div> */}

        <div className="flex w-fit justify-center gap-2">
            {SOCIAL_LINKS.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                rel="noopener noreferrer"
                aria-label={`Open ${social.icon.split('-')[2]} in new tab`}

              >
                <IconButton size="sm" color="gray" variant="text" {...({} as any)}>
                  <i className={`${social.icon} text-lg`} />
                </IconButton>
              </a>
            ))}
          </div>
        </div>


        {/* <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          .
        </Typography> */}


        <Typography
          color="blue-gray"
          className="text-center mt-12 font-Montserrat !text-gray-700"
          {...({} as any)}
        >
          Copyright © {CURRENT_YEAR} FYIC: First Year Integration Conference
        </Typography>


      </div>
    </footer>
  );
}

export default Footer;
