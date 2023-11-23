export default function Component() {
  return <main data-testid="comp">Component One</main>;
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  const { render, screen } = await import("@testing-library/react");

  it("renders", async () => {
    render(<Component />);
    // console.log(
    //   "One: textContent = " +
    //     document.querySelector('[data-testid="comp"]').textContent
    // );
    const comp = await screen.findByTestId("comp");
    expect(comp).toHaveTextContent("One");
  });
}
