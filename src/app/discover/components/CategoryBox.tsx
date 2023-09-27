"use client";

import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface CategoryBoxProps {
  name: string;
  id: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ name, id, selected }) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: id,
    };

    delete updatedQuery.subcategory;
    if (params?.get("category") === id) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [params, id, pathname, router]);

  return (
    <div
      onClick={handleClick}
      className={`
        flex 
        items-center 
        justify-center 
        hover:text-neutral-900
        cursor-pointer
        p-2
        border-2
        border-white
        rounded-full
        ${selected ? "bg-white" : "bg-transparent"}
        `}
    >
      <div
        className={`font-small text-sm text-white ${
          selected ? "text-neutral-900" : "text-neutral-800"
        }`}
      >
        {name}
      </div>
    </div>
  );
};

export default CategoryBox;
