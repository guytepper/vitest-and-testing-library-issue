export default function Component() {
  return <span data-testid="comp">Component Two</span>;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const { render, screen } = await import("@testing-library/react");

  it("renders", async () => {
    render(<Component />);
    console.log(
      "Two: textContent = " +
        document.querySelector('[data-testid="comp"]').textContent
    );
    const comp = await screen.findByTestId("comp");
    expect(comp).toHaveTextContent("Two");
  });
}
