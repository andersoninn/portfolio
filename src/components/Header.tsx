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
      <Navbar className="py-4 container m-auto bg-green-100">
        <NavbarBrand>
          <div className="">
            <Image src={logo} alt="" />
          </div>
          {/* <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex " justify="center">
          <NavbarItem>
            <Link
              href="#"
              className="text-brand-blue100 text-xl font-bold bg-white py-2 px-11 rounded-lg 
                     hover:drop-shadow-brandShadow hover:text-brand-blue100"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              href="#"
              aria-current="page"
              className="text-brand-blue100 text-xl font-bold bg-white py-2 px-11 rounded-lg 
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
              className="text-brand-blue100 text-xl font-bold bg-white py-2 px-11 rounded-lg 
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
                  <Image src={menu} width={25} alt="" />
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
