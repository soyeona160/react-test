// Light.test.js
import { fireEvent, render, screen } from "@testing-library/react";
import Light from "./Light";

describe("컴포넌트 테스트", () => {
  it("renders Light Component", () => {
    render(<Light name="전원" />);
    const nameElement = screen.getByText(/전원 off/i); // 가상으로 시뮬레이션된 화면에서 특정값 조회
    expect(nameElement).toBeInTheDocument(); // 실제 HTML 문서에 해당값이 존재하는지 검사
  });
  it("off button disabled", () => {
    render(<Light name="전원" />);
    const offButtonElement = screen.getByRole("button", { name: "OFF" });
    expect(offButtonElement).toBeDisabled();
  });
  it("on button enable", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: "ON" });
    expect(onButtonElement).not.toBeDisabled();
  });
  it("change from off to on", () => {
    render(<Light name="전원" />);
    const onButtonElement = screen.getByRole("button", { name: "ON" });
    fireEvent.click(onButtonElement);
    expect(onButtonElement).toBeDisabled();
  });
});