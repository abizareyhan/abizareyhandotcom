"use client";

import { useSearch } from "@/lib/SearchContext";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useSearch();

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="relative block">
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
                className="rounded-md bg-white/10 px-3 py-2 pl-10 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-white"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-5 w-5 text-white/50" />
            </div>
        </div>
    );
};

export default SearchBar;
