import Image from "next/image";
import Container from "../Container";
import NavBar from "../Navbar/Navbar";

export default function Header() {
  return (
    <div>
      <Container
        WrapperClassName="bg-redPrimary text-white font-semibold h-[27px]"
        className=""
      >
        FA
      </Container>
      <Container
        WrapperClassName="h-[80px] py-2 shadow-md"
        className="flex justify-between"
      >
        <NavBar />

        <Image
          className="sm:w-[150px] sm:h-[41] sm:mt-2"
          src="/logo.svg"
          alt="Sanapersian logo"
          width={208}
          height={60}
        />
      </Container>
    </div>
  );
}
