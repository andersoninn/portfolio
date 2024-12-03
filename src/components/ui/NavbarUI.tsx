import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo.jsx';

import { IoMenuSharp } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import { BsTransparency } from 'react-icons/bs';

export default function NavbarUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ['HOME', 'ABOUT', 'LOGO', 'PROJECTS', 'CURRICULUM'];

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
      className=" bg-white shadow-lg"
    >
      <NavbarContent>
        <span className="flex justify-between w-full">
          <NavbarBrand className="text-gray-800 max-w-20 md:hidden">
            <AcmeLogo />
            <p className="font-bold text-inherit">LOGO</p>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden mr-2"
            icon={
              isMenuOpen ? (
                <IoCloseSharp className="w-12 h-12 text-gray-800" />
              ) : (
                <IoMenuSharp className="w-12 h-12 text-gray-800" />
              )
            }
          />
        </span>
      </NavbarContent>

      <NavbarContent
        className="hidden w-full justify-between gap-4 md:w-full md:flex md:justify-around"
        justify="center"
      >
        <span className="w-full flex justify-around items-center text-gray-800">
          {menuItems.map((item) => (
            <NavbarItem key={item} className="font-medium">
              {item === 'LOGO' ? (
                <NavbarBrand>
                  <AcmeLogo />
                  <p className="font-bold text-inherit">LOGO</p>
                </NavbarBrand>
              ) : (
                <Link className="text-gray-800" href="#">
                  {item}
                </Link>
              )}
            </NavbarItem>
          ))}
        </span>
      </NavbarContent>
      <NavbarMenu className="pt-6 gap-4 items-end bg-white">
        <>
          {menuItems.map((item) => (
            <NavbarItem key={item} className={`${item == 'LOGO' && 'hidden'} `}>
              <Link className="font-normal text-gray-900" href="#">
                {item}
              </Link>
            </NavbarItem>
          ))}
        </>
      </NavbarMenu>
    </Navbar>
  );
}
