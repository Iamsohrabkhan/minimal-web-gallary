import Image from "next/image";
const Footer = () => {
  return (
    <footer className=" text-primary-blue bg-secondary-blue">
      <div className="space-y-3  px-3 py-6 lg:py-12  container mx-auto max-w-6xl
    lg:flex lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 space-y-2">
            <h2 className="text-2xl lg:text-5xl">Perfection in Every Pixel</h2>
            <p className="logo font-bold mt-6">
            <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={120}
            className="object-cover object-center"
          />
            </p>
            <p className="text-base">@ 2024 All Rights Reserved.</p>
          </div>
          <div className="space-y-2">
            
            <div className="bg-white rounded-2xl p-6 space-y-2">
              <h2 className="text-3xl">Customer Care</h2>
              <p className="logo font-bold text-sm ">
                Have question get in touch or check out our help center.
              </p>
              <p className="text-sm">
              Want to discuss your needs directly? Email us at <a className="underline" href="mailto:7ohrabkhan@gmail.com">
                Minimal Web Gallary
              </a>
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 space-y-2">
            
              <p className="logo font-bold ">
               Terms of use
              </p>
              <p className="text-base">
              Privacy Policy
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 space-y-2 flex items-center flex-col">
            <h2 className="text-3xl">Social</h2>
            <ul className="gap-3 flex justify-between  lg:flex-col">
              <li>
                <a href="https://web.facebook.com/people/Minimal-Web-Gallery/61556760404759/" target="_blank" >
                    <Image className="rounded-lg object-cover object-center" width={30} height={30} alt="facebook" src={"/icons/facebook.png"} />
                </a>
              </li>
              <li>
                <a href="www.facebook.com" target="_blank" >
                    <Image className="rounded-lg object-cover object-center" width={30} height={30} alt="instagram " src={"/icons/instagram.png"} />
                </a>
              </li>
              <li>
                <a href="www.facebook.com" target="_blank" >
                    <Image className="rounded-lg object-cover object-center" width={30} height={30} alt="youtube" src={"/icons/youtube.png"} />
                </a>
              </li>
            </ul>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
