"use client"

import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DropdownMenu() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [newLang, setNewLang] = useState<string>('');
  const pathname = usePathname();

  const onSelectLanguages = (e: ChangeEvent<HTMLSelectElement>) => {
    const valueLang = e.target.value;
    setNewLang(valueLang); 
    
    if (pathname !== `/${valueLang}`) {
      startTransition(() => {
        router.replace(`/${valueLang}`);
      });
    }
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      setNewLang(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', newLang);
  }, [newLang]);

  return (
    <>
      <label>
        <span className="text">Choose languages:</span>
        <select onChange={onSelectLanguages}>
          <option value="none">Select: {newLang}</option>
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
          <option value="japan">Japanese</option>
        </select>
      </label>
    </>
  )
};