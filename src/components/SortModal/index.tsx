import { SortModalProps } from "@src/types/SortModalProps";
import { useEffect, useState } from "react";

const SortModal = ({
  data,
  filteredItems,
  setFilteredItems,
}: SortModalProps) => {
  const [sortOption, setSortOption] = useState<string>("");

  const sortItems = (option: string) => {
    switch (option) {
      case "asc":
        setFilteredItems([...filteredItems].sort((a, b) => a.id - b.id));
        break;
      case "desc":
        setFilteredItems([...filteredItems].sort((a, b) => b.id - a.id));
        break;
      default:
        // No sorting
        setFilteredItems([...data]);
        break;
    }
  };

  useEffect(() => {
    sortItems(sortOption);
  }, [sortOption]);

  return (
    <div className="select-field w-full">
      <label htmlFor="sortModal">Sort By</label>
      <select
        id="sortModal"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
      >
        <option value="">None</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortModal;
