import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { NewsletterInline } from "../newsletter/newsletter-inline";

// Mock de la Server Action
const mockSubscribe = jest.fn();
jest.mock("@/actions/newsletter", () => ({
  subscribeToNewsletter: (formData: FormData) => mockSubscribe(formData),
}));

describe("NewsletterInline Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ✅ Test 1: Renderizado inicial
  it("renderiza el formulario con input y botón por defecto", () => {
    render(<NewsletterInline />);

    // Verificar que existe el input con placeholder por defecto
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();

    // Verificar que el botón tiene el texto por defecto
    expect(
      screen.getByRole("button", { name: /join academy/i })
    ).toBeInTheDocument();
  });

  // ✅ Test 2: Props personalizadas
  it("usa placeholder y buttonText personalizados", () => {
    render(
      <NewsletterInline
        placeholder="Tu correo electrónico"
        buttonText="Suscribirse"
      />
    );

    expect(
      screen.getByPlaceholderText("Tu correo electrónico")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Suscribirse" })
    ).toBeInTheDocument();
  });

  // ✅ Test 3: Escribir en el input
  it("permite escribir en el input de email", () => {
    render(<NewsletterInline />);

    const input = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(input).toHaveValue("test@example.com");
  });

  // ✅ Test 4: Submit exitoso
  it("muestra mensaje de éxito y limpia el input al suscribirse", async () => {
    // Configurar el mock para retornar éxito
    mockSubscribe.mockResolvedValue({
      success: true,
      message: "¡Gracias por suscribirte!",
    });

    render(<NewsletterInline />);

    // Llenar el formulario
    const input = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "nuevo@example.com" } });

    // Hacer submit
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Esperar y verificar el mensaje de éxito
    await waitFor(() => {
      expect(screen.getByText("¡Gracias por suscribirte!")).toBeInTheDocument();
    });

    // Verificar que el input se limpió
    expect(input).toHaveValue("");
  });

  // ✅ Test 5: Error de suscripción (email duplicado)
  it("muestra mensaje de error cuando el email ya existe", async () => {
    mockSubscribe.mockResolvedValue({
      success: false,
      message: "This email is already subscribed",
    });

    render(<NewsletterInline />);

    const input = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "existente@example.com" } });
    fireEvent.click(screen.getByRole("button"));

    await waitFor(() => {
      expect(
        screen.getByText("This email is already subscribed")
      ).toBeInTheDocument();
    });

    // El input NO se limpia en caso de error
    expect(input).toHaveValue("existente@example.com");
  });

  // ✅ Test 6: Estado de loading
  it('muestra "Joining..." mientras procesa', async () => {
    // Crear una promesa que controlamos manualmente
    let resolvePromise: (value: any) => void;
    const pendingPromise = new Promise((resolve) => {
      resolvePromise = resolve;
    });
    mockSubscribe.mockReturnValue(pendingPromise);

    render(<NewsletterInline />);

    const input = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(input, { target: { value: "test@test.com" } });
    fireEvent.click(screen.getByRole("button"));

    // Verificar estado de loading
    expect(
      screen.getByRole("button", { name: /joining/i })
    ).toBeInTheDocument();

    // Resolver la promesa
    resolvePromise!({ success: true, message: "Done!" });

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /join academy/i })
      ).toBeInTheDocument();
    });
  });

  // ✅ Test 7: El formulario requiere email válido (atributo required)
  it("tiene el atributo required en el input de email", () => {
    render(<NewsletterInline />);

    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeRequired();
    expect(input).toHaveAttribute("type", "email");
  });
});
