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
import { Texts } from '@/lib/Texts2';
import { TfiLinkedin } from 'react-icons/tfi';
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoWhatsapp,
  BiSolidDownload,
} from 'react-icons/bi';
import DateFormat from '../DataFormat';

export default function NavbarUI() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ['HOME', 'ABOUT', 'PROJECTS', 'CURRICULUM'];
  const texts = Texts.en.footer;

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={true}
      className="bg-white shadow-xl !bg-transparent"
    >
      <section className="container relative">
        <NavbarContent className={`w-full flex justify-between items-center}`}>
          {/* Logo no lado esquerdo */}
          <NavbarBrand className="text-gray-800">
            <p className="font-bold text-inherit">LOGO</p>
          </NavbarBrand>

          {/* Menu toggle no lado direito (aparece apenas em dispositivos móveis) */}
          <motion.div
            initial={{ backgroundColor: '#2d3748' }} // Cor inicial (gray-800)
            whileHover={{
              backgroundColor: ['#dfdf65', '#20575d'], // Transição de amarelo para verde
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            animate={{
              backgroundColor: '#2d3748', // Retorna para gray-800 após o hover
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            className="w-12 h-12 rounded-full text-white flex items-center justify-center"
          >
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              // onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          className="mx-auto max-w-[980px] max-h-[550px] pt-6 bg-[#2C373D] items-center rounded-b-2xl justify-center"
        >
          {menuItems.map((item) => (
            <NavbarItem key={item} className="px-4 py-2 font-inter">
              <Link
                className="text-white hover:text-[#21585E] text-4xl font-extrabold"
                href="#"
              >
                {item}
              </Link>
            </NavbarItem>
          ))}
          <section className="flex flex-col items-center gap-4 mb-12 ">
            <p className="text-gray-400">Contacts - info</p>
            <article className="flex gap-4">
              {texts.contacts.map((e, i) => (
                <>
                  <Link
                    key={i}
                    className="w-12 h-12 rounded-full border border-white flex justify-center items-center text-white hover:border-[#21585E] hover:bg-white hover:text-[#21585E] shadow-md cursor-pointer"
                    href={e.href}
                    target="_blank"
                  >
                    {e.alt === 'linkedin' && (
                      <TfiLinkedin className="w-5 h-5" />
                    )}
                    {e.alt === 'github' && <BiLogoGithub className="w-6 h-6" />}
                    {e.alt === 'curriculum' && (
                      <BiSolidDownload className="w-6 h-6" />
                    )}
                    {e.alt === 'gmail' && <BiLogoGmail className="w-5 h-5" />}
                    {e.alt === 'whatsapp' && (
                      <BiLogoWhatsapp className="w-6 h-6" />
                    )}

                    {/* <Image src={e.image} height={40} width={40} alt={e.alt} /> */}
                  </Link>
                  {/* <Link
                    key={i}
                    className="cursor-pointer rounded-xl hover:-mt-2 shadow-md shadow-black/30"
                    href={e.href}
                    target="_blank"
                  >
                    <Image src={e.image} height={40} width={40} alt={e.alt} />
                  </Link> */}
                </>
              ))}
            </article>
          </section>
          <Divider className="bg-white h-0.5" />
          <section className="flex justify-between w-full items-center relative ">
            {/* <motion.div
            initial={{ backgroundColor: '#ffffff' }} // Cor inicial (gray-800)
            whileHover={{
              backgroundColor: ['#dfdf65', '#20575d'], // Transição de amarelo para verde
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            animate={{
              backgroundColor: '#ffffff', // Retorna para gray-800 após o hover
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            className='absolute bottom-0 w-32 h-32 rounded-full -translate-x-1/2 translate-y-1/2' /> */}
            <DateFormat />
          </section>
        </NavbarMenu>
      </section>
    </Navbar>
  );
}
