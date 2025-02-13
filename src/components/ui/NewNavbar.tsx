import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
} from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import { Texts } from '@/lib/Texts';
import DateFormat from '../DataFormat';
import Contancts from '../Contacts';

export default function NewNavbar() {
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
      <section className="container m-auto relative md:flex items-center justify-between">
        <NavbarContent className="w-full flex justify-between items-center">
          <NavbarBrand className="text-gray-800">
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
              <Image
                src="/Logo.png"
                width={54}
                height={54}
                alt="logo - Oak and code"
                className="font-bold text-inherit rounded-xl cursor-pointer"
              />
            </motion.div>
          </NavbarBrand>

          <motion.div
            initial={{ color: '#222124' }}
            whileHover={{
              color: ['#dfdf65', '#20575d'],
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            animate={{
              color: '#222124',
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            className="w-12 h-12 rounded-xl text-black flex items-center justify-center md:hidden "
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

        <NavbarContent
          className="hidden sm:flex items-center jc gap-6"
          justify="center"
        >
          {texts.menuItems.map((item, i) =>
            item.name === 'CURRICULUM' ? null : (
              <NavbarItem key={i} className="font-inter">
                {item.name === 'CONTACTS' ? (
                  <>
                    <motion.div
                      initial={{ backgroundColor: '#222124', color: '#ffffff' }}
                      whileHover={{
                        backgroundColor: ['#dfdf65', '#20575d'],
                        color: ['#dfdf65', '#ffffff'],
                        transition: { duration: 0.5, ease: 'easeInOut' },
                      }}
                      animate={{
                        backgroundColor: '#222124',
                        transition: { duration: 0.5, ease: 'easeInOut' },
                      }}
                      className=" py-2 px-6 rounded-full  font-semibold antialiased"
                    >
                      <Link
                        href={item.link}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="downloand curriculum"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ color: '#222124' }}
                      whileHover={{
                        color: ['#dfdf65', '#20575d'],
                        transition: { duration: 0.5, ease: 'easeInOut' },
                      }}
                      animate={{
                        transition: { duration: 0.5, ease: 'easeInOut' },
                      }}
                      className=" rounded-full font-semibold antialiased"
                    >
                      <Link
                        className="py-2 px-2 rounded-full font-semibold antialiased relative group transition "
                        href={item.link}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}

                        <span className="absolute bottom-0 left-1/2 w-0 h-[3px] rounded-xl bg-[#21585E] transition-all duration-300 group-hover:w-full group-hover:left-0" />
                      </Link>
                    </motion.div>
                  </>
                )}
              </NavbarItem>
            )
          )}
        </NavbarContent>

        <NavbarMenu
          aria-hidden={!isMenuOpen}
          className="mx-auto max-w-[980px] pt-6 bg-[#222124] items-center rounded-b-2xl  !scrollbar-hide shadow-xl"
        >
          {texts.menuItems.map((item, i) =>
            item.name === 'CONTACTS' ? null : (
              <NavbarItem key={i} className="px-4 py-2 font-inter">
                {item.name === 'CURRICULUM' ? (
                  <Link
                    className="text-white hover:text-[#21585E] text-4xl font-extrabold"
                    href={item.link}
                    download="cv-Anderson-Carvalho.pdf"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="download curriculum"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    className="text-white hover:text-[#21585E] text-4xl font-extrabold"
                    href={item.link}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </NavbarItem>
            )
          )}

          <article className="flex flex-col items-center gap-4 mb-12 ">
            <p className="text-gray-400">{texts.subtitle}</p>
            <Contancts />
          </article>
          <Divider className="bg-white h-0.5" />
          <article className="flex justify-between w-full items-center relative ">
            <DateFormat />
          </article>
        </NavbarMenu>
      </section>
    </Navbar>
  );
}
