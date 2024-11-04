import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className="bg-[color:--header-bg] py-4 shadow-[0px_3px_21px_-6px_rgba(0,_0,_0,_0.5)] rounded-b-lg">
      <div className="pl-4 sm:mx-auto sm:max-w-[584px] md:pl-0  md:max-w-[612px] lg:max-w-[996px] xl:max-w-[1196px] ">
        <Link href="/">
          <Image
            src="https://www.mykindofcruise.com/_next/static/media/logo-full-text-white-overlay.b8a950a4.png"
            alt="logo"
            width={200}
            height={50}
            className="max-h-[36px] w-auto"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
