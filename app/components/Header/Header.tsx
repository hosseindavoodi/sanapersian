"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import NavBar from "../Navbar/Navbar";
import { useDevice } from "@/app/hooks/useDevice";

export default function Header() {
  const device = useDevice();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <div>
      <Container
        WrapperClassName="bg-redPrimary text-white font-semibold h-[27px]"
        className=""
      >
        FA
      </Container>
      <Container
        WrapperClassName="min-h-[80px] py-2 shadow-md"
        className="flex justify-between"
      >
        <div className="mt-5 sm:flex sm:flex-col sm:bg-white  sm:gap-3">
          {device === "mobile" && (
            <>
              <Image
                className="mb-[30px]"
                src="/mobileMenu.svg"
                alt=""
                width={30}
                height={24}
                onClick={() => setOpenMobileMenu(!openMobileMenu)}
              />
              {openMobileMenu && <NavBar />}
            </>
          )}
          {device != "mobile" && <NavBar />}
        </div>
        <div>
          <Link href="/">
            <Image
              className="sm:w-[150px] sm:h-[41] sm:mt-2"
              src="/logo.svg"
              alt="Sanapersian logo"
              width={208}
              height={60}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}
