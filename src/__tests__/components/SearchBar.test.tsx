import SearchBar from "@src/components/SearchBar";

import { fireEvent, render, waitFor } from "@testing-library/react";

// Mock data
const mockData = [
  { id: 1, name: "Rajan" },
  { id: 2, name: "Sadu" },
  { id: 3, name: "Raj" },
];

describe("SearchBar component", () => {
  it("should filter items correctly when searching", async () => {
    const setFilteredItemsMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar data={mockData} setFilteredItems={setFilteredItemsMock} />
    );

    const input = getByPlaceholderText("Search by name...");
    fireEvent.change(input, { target: { value: "r" } });

    await waitFor(() => {
      expect(setFilteredItemsMock).toHaveBeenCalledWith([
        { id: 2, first_name: "Rajan" },
      ]);
    });
  });

  it("should update search query state correctly", () => {
    const { getByPlaceholderText } = render(
      <SearchBar data={mockData} setFilteredItems={() => {}} />
    );

    const input = getByPlaceholderText("Search by name...") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Rajan" } });

    expect(input.value).toBe("Rajan");
  });
});
