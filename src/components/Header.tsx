'use client';
import React from 'react';
import Image from 'next/image';
import menu from '../assets/image/menu.svg';
import logo from '../assets/image/logo.svg';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu,
} from '@nextui-org/react';
import { NextUIProvider } from '@nextui-org/react';

// import { AcmeLogo } from './AcmeLogo.jsx';

export default function Header() {
  return (
    <NextUIProvider>
      <Navbar className=" container m-auto bg-opacity-80">
        <NavbarBrand>
          <div className="">
            <Image src={logo} width={120} alt="" />
          </div>
          {/* <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex " justify="center">
          <NavbarItem>
            <Link
              href="#"
              className="flex justify-center items-center
                   text-brand-blue100 font-bold bg-white py-2 w-32 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-brand-blue100"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              href="#"
              aria-current="page"
              className="flex justify-center items-center
                   text-brand-blue100 font-bold bg-white py-2 w-32 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-brand-blue100"
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="#"
              className="flex justify-center items-center
                   text-brand-blue100 font-bold bg-white py-2 w-32 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-brand-blue100"
            >
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="sm:hidden">
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button as={Link} href="#" variant="flat" className="bg-white">
                  <Image src={menu} width={20} height={20} alt="" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="new"
                  className="text-brand-blue100 active:bg-red-200"
                >
                  Home
                </DropdownItem>
                <DropdownItem key="copy">About</DropdownItem>
                <DropdownItem key="edit">Projects</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </NextUIProvider>
  );
}
