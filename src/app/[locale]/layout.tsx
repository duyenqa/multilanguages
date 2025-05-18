import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Link from 'next/link';
import DropdownMenu from '@/components/DropdownMenu';
import "./globals.css";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <div className="container">
          <div className="wrapper">
            <div className="navbar">
              <div className="main-menu">
                <Link href="/">Home</Link>
                <DropdownMenu />
              </div>
            </div>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
            <footer>
              <p>
                &copy; Copyright by Ngô Thị Kim Duyên 2025 - {new Date().getFullYear()}
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}