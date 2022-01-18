import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
import { EButtonTypes } from "./ButtonTypes";

describe("check Button", () => {
  it("if is rendered with proper label", () => {
    const { getByText } = render(
      <Button name={EButtonTypes.SAVE} label="save" />
    );
    expect(getByText(EButtonTypes.SAVE)).toBeTruthy();
  });
  it("if clicked triggers function", () => {
    const mock = jest.fn();
    const button = require("./Button");
    button.handleButtonClick = mock;

    const { getByText } = render(
      <Button name={EButtonTypes.SAVE} label="save" />
    );

    fireEvent.click(getByText(EButtonTypes.SAVE));

    expect(button.handleButtonClick).toHaveBeenCalled();
  });
});
