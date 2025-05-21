"use client"
import { useTranslations } from "next-intl";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const Navbar = ({ locale }: { locale: string }) => {
    const t = useTranslations("NavbarLinks");

    return (
        <div className="navbar">
            <div className="linkMenu">
                <Link href={`/${locale}/`}>{t('home')}</Link>
                <Link href={`/${locale}/about`}>{t('about')}</Link>
                <Link href={`/${locale}/contact`}>{t('contact')}</Link>
            </div>
            <DropdownMenu />
        </div>
    );
}
export default Navbar;