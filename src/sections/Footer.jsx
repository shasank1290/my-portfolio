const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p className="cursor-pointer">Terms & Conditions</p>
        <p>|</p>
        <p className="cursor-pointer">Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <img src="/assets/github.svg" onClick={() => window.open("https://github.com/shasank1290")} alt="github" className="w-1/2 h-1/2 cursor-pointer" />
        </div>
        <div className="social-icon">
          <img src="/assets/twitter.svg" onClick={() => window.open("https://x.com/Shasank2911")} alt="twitter" className="w-1/2 h-1/2 cursor-pointer" />
        </div>
        <div className="social-icon">
          <img src="/assets/instagram.svg" onClick={() => window.open("https://www.instagram.com/bcause.shasank/")}alt="instagram" className="w-1/2 h-1/2 cursor-pointer" />
        </div>
      </div>

      <p onClick={() => window.open("https://copyright.gov.in/", "_blank")}className="text-white-500 cursor-pointer">© 2024 Shasank kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
