import { Texts } from "@/lib/Texts";
import Link from "next/link";
import { BiLogoGithub, BiLogoGmail, BiLogoWhatsapp, BiSolidDownload } from "react-icons/bi";
import { TfiLinkedin } from "react-icons/tfi";

export default function Contancts() {
    const texts = Texts.en.footer;
    return (

        <article className="flex gap-4">
            {texts.contacts.map((e, i) => (
                <Link
                    key={i}
                    className="w-12 h-12 rounded-full border border-white flex justify-center items-center text-white hover:border-[#222124] hover:bg-white hover:text-[#222124] shadow-md cursor-pointer"
                    href={e.href}
                    aria-label={e.alt}
                    target="_blank"
                >
                    {e.alt === 'linkedin' && <TfiLinkedin className="w-5 h-5" />}
                    {e.alt === 'github' && <BiLogoGithub className="w-6 h-6" />}
                    {e.alt === 'curriculum' && (
                        <BiSolidDownload className="w-6 h-6" />
                    )}
                    {e.alt === 'gmail' && <BiLogoGmail className="w-5 h-5" />}
                    {e.alt === 'whatsapp' && <BiLogoWhatsapp className="w-6 h-6" />}
                </Link>
            ))}
        </article>
    )
}