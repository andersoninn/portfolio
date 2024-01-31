'use client';

import Image from 'next/image';
import Logo from '@/assets/image/header/headerLogo.svg';

import React from 'react';
import {
   Navbar,
   NavbarBrand,
   NavbarMenuToggle,
   NavbarMenuItem,
   NavbarMenu,
   NavbarContent,
   NavbarItem,
   Link,
} from '@nextui-org/react';

export default function App() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   const menuItems = ['home', 'about', 'projects'];

   return (
      <Navbar
         isBordered
         isMenuOpen={isMenuOpen}
         onMenuOpenChange={setIsMenuOpen}
         className="!fixed border-none w-full"
      >
         <NavbarContent className="sm:hidden pr-3 " justify="center">
            <NavbarBrand>
               <div className="">
                  <Image src={Logo} width={120} alt="" />
               </div>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle
               className=""
               aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            />
         </NavbarContent>

         <NavbarContent className="hidden sm:flex gap-4 justify-between">
            <NavbarBrand>
               <div>
                  <Image src={Logo} width={120} alt="" />
               </div>
            </NavbarBrand>
            <NavbarItem>
               <Link
                  href="#home"
                  className="flex justify-center items-center
                  text-brand-blue100 font-bold bg-transparent py-2 w-32 rounded-lg
                  hover:bg-white hover:drop-shadow-brandShadow hover:text-brand-blue100 "
               >
                  Home
               </Link>
            </NavbarItem>
            <NavbarItem isActive>
               <Link
                  href="#about"
                  aria-current="page"
                  className="
                  flex justify-center items-center
                  text-brand-blue100 font-bold bg-transparent py-2 w-32 rounded-lg
                  hover:bg-white hover:drop-shadow-brandShadow hover:text-brand-blue100 "
               >
                  About
               </Link>
            </NavbarItem>
            <NavbarItem>
               <Link
                  href="#projects"
                  className="flex justify-center items-center
                  text-brand-blue100 font-bold bg-transparent py-2 w-32 rounded-lg
                  hover:bg-white hover:drop-shadow-brandShadow hover:text-brand-blue100"
               >
                  Projects
               </Link>
            </NavbarItem>
         </NavbarContent>

         <NavbarMenu className=" max-h-[915px]">
            {menuItems.map((item, index) => (
               <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                     className="w-full mt-4 justify-end text-xl
                     text-brand-blue100 font-bold bg-transparent py-2 px-2 mx-2 rounded-lg hover:bg-white
                      hover:drop-shadow-brandShadow hover:text-brand-blue100 capitalize"
                     color={
                        index === 2
                           ? 'warning'
                           : index === menuItems.length - 1
                           ? 'danger'
                           : 'foreground'
                     }
                     href={'#' + item}
                     size="lg"
                     onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                     {item}
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   );
}
