import { SearchBarProps } from "@src/types/SearchBarProps";
import { useEffect, useState } from "react";

const SearchBar = ({ data, setFilteredItems }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debounceSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (e.target.value === searchQuery) {
        const filtered = data.filter((item) =>
          item.first_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(filtered);
      }
    }, 800);
  };

  useEffect(() => {
    debounceSearch({
      target: { value: searchQuery },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [data, searchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar w-full mb-4 md:mb-0">
      <label htmlFor="default-search">Search</label>
      <input
        type="search"
        placeholder="Search by name..."
        id="default-search"
        value={searchQuery}
        onChange={(e) => handleSearch(e)}
        className="block w-full p-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  "
        required
      />
    </div>
  );
};

export default SearchBar;
