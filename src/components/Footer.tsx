import Image from "next/image";
import Github from "../../public/github.png";
import Linkedin from "../../public/linkedin.png";
import Email from "@/assets/envelope.svg";
import Portfolio from "@/assets/folder.svg";

const LINKS = [
  {
    name: "Github",
    href: "https://github.com/mlee2197/motion-script",
    icon: Github,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/matthewlee1297/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:mlee2197@gmail.com",
    icon: Email,
  },
  {
    name: "Portfolio",
    href: "https://mattleethatsme.dev/",
    icon: Portfolio,
  },
];

const Footer = () => {
  return (
    <footer className="mb-4 container-padding-x container-padding-y md:fixed md:bottom-0 md:left-0 md:mt-20 md:px-4">
      <h3 className="text-xl opacity-85 md:hidden">Connect with me</h3>
      <div className="flex items-center justify-around gap-6 mt-3 md:flex-col">
        {LINKS.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <Image src={icon} alt={name} width={32} height={32} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
