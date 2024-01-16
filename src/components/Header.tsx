'use client';
import React from 'react';
import Image from 'next/image';
import menu from '../../public/image/menu.svg';

import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   Link,
   Button,
   NavbarMenuToggle,
} from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';

import { FaBars } from 'react-icons/fa6';
// import { AcmeLogo } from './AcmeLogo.jsx';

export default function Header() {
   return (
      <NextUIProvider>
         <Navbar>
            <NavbarBrand>
               <div className="bg-red-200">
                  <p>OAK</p>
                  <p>Innovation</p>
               </div>
               {/* <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p> */}
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4 " justify="center">
               <NavbarItem>
                  <Link
                     href="#"
                     className="text-brand-blue100 text-xl font-bold bg-brand-background py-3 px-11 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-brand-blue100"
                  >
                     Home
                  </Link>
               </NavbarItem>
               <NavbarItem isActive>
                  <Link
                     href="#"
                     aria-current="page"
                     className="text-brand-blue100 text-xl font-bold bg-brand-background py-3 px-11 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-brand-blue100 active:bg-red-200 
                     !focus:bg-brand-blue100 !focus:text-brand-background"
                  >
                     About
                  </Link>
               </NavbarItem>
               <NavbarItem>
                  <Link
                     color="foreground"
                     href="#"
                     className="text-brand-blue100 text-xl font-bold bg-brand-background py-3 px-11 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-brand-blue100"
                  >
                     Projects
                  </Link>
               </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" className="sm:hidden">
               <NavbarItem>
                  <Button
                     as={Link}
                     href="#"
                     variant="flat"
                     className="bg-[#f5f5f5]"
                  >
                     <Image src={menu} width={25} alt="" />
                  </Button>
               </NavbarItem>
            </NavbarContent>
         </Navbar>
      </NextUIProvider>
   );
}
