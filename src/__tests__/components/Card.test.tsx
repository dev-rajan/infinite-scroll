import Card from "@src/components/Card";

import { render } from "@testing-library/react";

const mockProps = {
  avatar: "https://i.pravatar.cc/300",
  first_name: "Test",
  last_name: "User",
  email: "test.user@mail.com",
};

describe("Card component", () => {
  it("should render correctly with provided props", () => {
    const { getByAltText, getByText } = render(<Card {...mockProps} />);

    const avatarImage = getByAltText(mockProps.email);
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", mockProps.avatar);

    const fullNameText = getByText(
      `${mockProps.first_name} ${mockProps.last_name}`
    );
    expect(fullNameText).toBeInTheDocument();

    const emailText = getByText(mockProps.email);
    expect(emailText).toBeInTheDocument();
  });
});
