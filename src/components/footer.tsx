import { Public } from "@mui/icons-material";

export default function Footer() {
  const footerLinks = [
    "HOME",
    "MODELS",
    "ABOUT US",
    "NEWS",
    "FAQ'S",
    "CONTACT US",
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/omodajaecoopk/", src: "/icons/facebook.png", label: "Facebook" },
    { href: "https://www.instagram.com/omoda_jaecoo_pk/", src: "/icons/instagram.png", label: "Instagram" },
    { href: "https://x.com/omodajaecoopk?s=21", src: "/icons/twitter.png", label: "Twitter" },
    { href: "https://www.youtube.com/channel/UCmwy9KhNbuiSVQ9OWwDXtZA", src: "/icons/youtube.png", label: "YouTube" },
    { href: "https://www.tiktok.com/@omoda_jaecoo_pk", src: "/icons/tiktok.png", label: "TikTok" },
    { href: "https://www.linkedin.com/company/omoda-jaecoo-pk/", src: "/icons/linkedin.png", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-black w-full h-132 py-8 ">
      <div className="container mx-auto relative top-20 flex flex-col lg:flex-col items-center gap-6">
        
        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-x-2   md:gap-x-6 gap-y-2 text-amber-50 text-sm leading-relaxed ">
          {footerLinks.map((link, index) => (
            <li key={index} className="flex items-center flex-wrap gap-2 md:gap-8 cursor-pointer hover:text-[#735F61]">
              <span>{link}</span>
              {index !== footerLinks.length - 1 && (
                <span className=" flex md:space-x-1 h-4 w-px bg-[#735F61]"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-22 md:mt-22 md:space-x-2">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-1 hover:opacity-80 transition ease-in-out "
            >
              <img src={social.src} alt={social.label}   className=" w-6 h-8 md:w-10 md:h-8 object-contain" />
              {/* Label below icon */}
             
            </a>
          ))}
        </div>
          <div className="container relative flex flex-row flex-wrap justify-center mt-26 ">
          <div className="w-full max-w-200 h-px bg-[#545658] mx-auto my-4"></div>
            <ul className="flex flex-wrap justify-center gap-x-2 bg-black z-2 p-4  text-sm  absolute -top-2  md:gap-x-6 text-amber-50  leading-relaxed ">
                <li>LEGAL NOTICES</li>
                  <li>TERMS AND CONDITION</li>
                    <li>PRIVACY  POLICY</li>
                      <li>COOKIES</li>

            </ul>
          </div>
      </div>
    </footer>
  );
}