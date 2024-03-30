'use client'

import { Button } from "@/ui/designsystem/Button";
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useTransition } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useLocale } from "use-intl";

const Switcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <Button size="medium" icon={{ icon: IoChevronDown }}>
      <select
        defaultValue={localActive}
        disabled={isPending}
        name="language"
        className="w-full bg-transparent appearance-none border-none focus:outline-none cursor-pointer"
        onChange={onSelectChange}
      >
        <option value="en" className=" text-secondary ">
          Us English
        </option>
        <option value="fr" className=" text-secondary ">
          Fr French
        </option>
      </select>
    </Button>
  );
};

export default Switcher;
