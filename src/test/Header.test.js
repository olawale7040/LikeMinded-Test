import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Header from "src/components/Header";

describe("Header component test", () => {
  test("should render right layout", async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />)
      </BrowserRouter>
    );
    expect(getByTestId("app-header")).toBeInTheDocument();
    expect(getByTestId("header-brand-name")).toHaveTextContent("Like Minded");
  });
});
