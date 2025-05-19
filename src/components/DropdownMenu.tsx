"use client"

import { ChangeEvent, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DropdownMenu() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onSelectLanguages = (e: ChangeEvent<HTMLSelectElement>) => {
    const valueLang = e.target.value;

    // Kiểm tra xem ngôn ngữ hiện tại có khác với ngôn ngữ chọn không
    if (pathname !== `/${valueLang}`) {
      console.log(`Changing language to: ${valueLang}`);

      startTransition(() => {
        router.replace(`/${valueLang}`);
      });
    }
  };

  return (
    <>
      <label>
        <span className="text">Choose languages:</span>
        <select onChange={onSelectLanguages}>
          <option value="none">Select:</option>
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
          <option value="japan">Japanese</option>
        </select>
      </label>
    </>
  )
};