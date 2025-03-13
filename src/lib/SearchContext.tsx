import { createContext, useContext, useState } from "react";

// Define the type of the search context
interface SearchContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

// Create the context with an initial value (can be null, but let's use an empty string as default)
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Create the provider component
export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchQuery, setSearchQuery] = useState("");

    return <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>{children}</SearchContext.Provider>;
};

// Custom hook to access the context value
export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
};
