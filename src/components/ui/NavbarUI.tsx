import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Divider,
} from '@nextui-org/react';
import { IoMenuSharp } from 'react-icons/io5';
import { IoCloseSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { Texts } from '@/lib/Texts';
import DateFormat from '../DataFormat';
import Contancts from '../Contacts';
import Image from 'next/image';



export default function NavbarUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const texts = Texts.en.navbar;

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
      className="bg-white shadow-xl !bg-transparent"
    >
      <section className="container m-auto relative">
        <NavbarContent className={`w-full flex justify-between items-center`}>
          <NavbarBrand className="text-gray-800">
            <Image src="/Logo.svg" width={54} height={54} alt='logo - minimalist oak tree in a circle' className="font-bold text-inherit" />
          </NavbarBrand>
          <motion.div
            initial={{ backgroundColor: '#222124' }}
            whileHover={{
              backgroundColor: ['#dfdf65', '#20575d'],
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            animate={{
              backgroundColor: '#222124',
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            className="w-12 h-12 rounded-full text-white flex items-center justify-center"
          >
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              icon={
                isMenuOpen ? (
                  <IoCloseSharp className="w-8 h-8" />
                ) : (
                  <IoMenuSharp className="w-8 h-8" />
                )
              }
            />
          </motion.div>
        </NavbarContent>

        {/* Menu de navegação */}
        <NavbarMenu
          aria-hidden={!isMenuOpen}
          className="mx-auto max-w-[980px] max-h-[550px] pt-6 bg-[#222124] items-center rounded-b-2xl justify-center"
        >
          {texts.menuItems.map((item, i) => (
            <NavbarItem key={i} className="px-4 py-2 font-inter" >
              {item.name === 'CURRICULO' ? <>  <a
                className="text-white hover:text-[#21585E] text-4xl font-extrabold"
                href={item.link}
                download="Curriculo-Anderson-Carvalho.pdf"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a></> : <><Link
                className="text-white hover:text-[#21585E] text-4xl font-extrabold"
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link></>}

            </NavbarItem>
          ))}
          <section className="flex flex-col items-center gap-4 mb-12 ">
            <p className="text-gray-400">{texts.subtitle}</p>
            <Contancts />
          </section>
          <Divider className="bg-white h-0.5" />
          <section className="flex justify-between w-full items-center relative ">
            <DateFormat />
          </section>
        </NavbarMenu>
      </section>
    </Navbar>
  );
}
