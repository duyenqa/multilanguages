"use client"

import { ChangeEvent, useTransition } from "react";
import { useRouter } from "next/navigation";

export default function DropdownMenu() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onSelectLanguages = (e: ChangeEvent<HTMLSelectElement>) => {
    const valueLang = e.target.value;

    startTransition(() => {
      router.replace(`/${valueLang}`);
    })
  }

  return (
    <>
      <label>
        <span className="text">Choose languages:</span>
        <select onChange={onSelectLanguages}>
          <option value="en">English</option>
          <option value="vi">Việt Nam</option>
        </select>
      </label>
    </>
  )
};