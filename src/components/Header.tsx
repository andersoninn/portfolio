'use client';

import Image from 'next/image';
import Menu from '../assets/image/header/headerMenu.svg';
import Logo from '../assets/image/header/headerLogo.svg';
import { NextUIProvider } from '@nextui-org/react';

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
   Button,
} from '@nextui-org/react';

export default function App() {
   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

   const menuItems = [
      'Profile',
      'Dashboard',
      'Activity',
      'Analytics',
      'System',
      'Deployments',
      'My Settings',
      'Team Settings',
      'Help & Feedback',
      'Log Out',
   ];

   return (
      <Navbar
         isBordered
         isMenuOpen={isMenuOpen}
         onMenuOpenChange={setIsMenuOpen}
         className='!fixed'
      >
         <NavbarContent className="sm:hidden pr-3 border-none" justify="center">
            <NavbarBrand>
               <div className="">
                  <Image src={Logo} width={120} alt="" />
               </div>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="sm:hidden" justify="end">
            <NavbarMenuToggle className=''
               aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            />
         </NavbarContent>

         <NavbarContent className="hidden sm:flex gap-4 justify-between ">
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
                  className="flex justify-center items-center
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
                  hover:bg-white hover:drop-shadow-brandShadow hover:text-brand-blue100 "
               >
                  Projects
               </Link>
            </NavbarItem>
         </NavbarContent>

         <NavbarMenu>
            {menuItems.map((item, index) => (
               <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                     className="w-full"
                     color={
                        index === 2
                           ? 'warning'
                           : index === menuItems.length - 1
                           ? 'danger'
                           : 'foreground'
                     }
                     href="#"
                     size="lg"
                  >
                     {item}
                  </Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   );
}

// import {
//    Navbar,
//    NavbarBrand,
//    NavbarContent,
//    NavbarItem,
//    Link,
//    Button,
//    Dropdown,
//    DropdownTrigger,
//    DropdownItem,
//    DropdownMenu,
// } from '@nextui-org/react';
//

// // import { AcmeLogo } from './AcmeLogo.jsx';

// export default function Header() {
//    return (
//       <NextUIProvider>
//          <section className="!sticky !top-0 ">
//             <Navbar className="container m-auto transition-all ease-in-out ">
//                <NavbarBrand>
//                   <div className="">
//                      <Image src={Logo} width={120} alt="" />
//                   </div>
//                   {/* <AcmeLogo />
//             <p className="font-bold text-inherit">ACME</p> */}
//                </NavbarBrand>

//                <NavbarContent className="hidden sm:flex  " justify="center">
//
//
//
//                </NavbarContent>

//                <NavbarContent justify="end" className="sm:hidden">
//                   <NavbarItem>
//                      <Dropdown>
//                         <DropdownTrigger>
//                            <Button
//                               as={Link}
//                               href="#"
//                               variant="flat"
//                               className="bg-white"
//                            >
//                               <Image src={Menu} width={20} height={20} alt="" />
//                            </Button>
//                         </DropdownTrigger>
//                         <DropdownMenu aria-label="Static Actions">
//                            <DropdownItem
//                               key="new"
//                               className="text-brand-blue100 active:bg-red-200"
//                            >
//                               Home
//                            </DropdownItem>
//                            <DropdownItem key="copy">About</DropdownItem>
//                            <DropdownItem key="edit">Projects</DropdownItem>
//                         </DropdownMenu>
//                      </Dropdown>
//                   </NavbarItem>
//                </NavbarContent>
//             </Navbar>
//          </section>
//       </NextUIProvider>
//    );
// }
