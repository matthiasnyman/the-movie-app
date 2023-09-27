"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import qs from "query-string";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const search = searchParams.get("search");

  const [inputValue, setInputValue] = useState(search || "");

  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);

      let currentQuery = {};

      if (searchParams) {
        currentQuery = qs.parse(searchParams.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        search: value,
      };

      if (value === "") {
        delete updatedQuery.search;
      }

      const url = qs.stringifyUrl(
        {
          url: pathname,
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    },
    [pathname, router, searchParams]
  );
  return (
    <div className=" md:w-96 w-full  h-8 relative flex items-center rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
      <MagnifyingGlassIcon className="h-6 w-6 p-1 text-gray-500" />
      <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search something.."
        onChange={(e) => handleInputChange(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};

export default Search;
