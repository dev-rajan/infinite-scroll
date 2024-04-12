import SortModal from "@src/components/SortModal";

import { fireEvent, render } from "@testing-library/react";

// Mock data
const mockData = [
  { id: 1, name: "Rajan" },
  { id: 2, name: "Sadu" },
  { id: 3, name: "Raj" },
];

describe("SortModal component", () => {
  it('should sort items in ascending order when "Ascending" option is selected', () => {
    const setFilteredItemsMock = jest.fn();
    const { getByLabelText } = render(
      <SortModal
        data={mockData}
        filteredItems={mockData}
        setFilteredItems={setFilteredItemsMock}
      />
    );

    const selectElement = getByLabelText("Sort By");
    fireEvent.change(selectElement, { target: { value: "asc" } });

    expect(setFilteredItemsMock).toHaveBeenCalledWith([
      { id: 1, name: "Rajan" },
      { id: 2, name: "Sadu" },
      { id: 3, name: "Raj" },
    ]);
  });

  it('should sort items in descending order when "Descending" option is selected', () => {
    const setFilteredItemsMock = jest.fn();
    const { getByLabelText } = render(
      <SortModal
        data={mockData}
        filteredItems={mockData}
        setFilteredItems={setFilteredItemsMock}
      />
    );

    const selectElement = getByLabelText("Sort By");
    fireEvent.change(selectElement, { target: { value: "desc" } });

    expect(setFilteredItemsMock).toHaveBeenCalledWith([
      { id: 1, name: "Rajan" },
      { id: 2, name: "Sadu" },
      { id: 3, name: "Raj" },
    ]);
  });

  it('should reset sorting when "None" option is selected', () => {
    const setFilteredItemsMock = jest.fn();
    const { getByLabelText } = render(
      <SortModal
        data={mockData}
        filteredItems={mockData}
        setFilteredItems={setFilteredItemsMock}
      />
    );

    const selectElement = getByLabelText("Sort By");
    fireEvent.change(selectElement, { target: { value: "" } });

    expect(setFilteredItemsMock).toHaveBeenCalledWith([
      { id: 1, name: "Rajan" },
      { id: 2, name: "Sadu" },
      { id: 3, name: "Raj" },
    ]);
  });
});
