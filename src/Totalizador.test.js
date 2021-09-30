import calcularTotal from "./Totalizador.js"

describe("Totalizador ", () => {
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 2, "")).toEqual(4);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "CA")).toEqual(6.495);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "UT")).toEqual(6.399);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "NV")).toEqual(6.48);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "TX")).toEqual(6.375);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "AL")).toEqual(6.24);
  });
  it("deberia calcular para un descuento para 1000 o mas", () => {
    expect(calcularTotal(500, 2.2, "AL")).toEqual(1109.68);
  });
  it("deberia calcular para un descuento para 3000 o mas", () => {
    expect(calcularTotal(1000, 3, "AL")).toEqual(2964);
  });
  it("deberia calcular para un descuento para 7000 o mas", () => {
    expect(calcularTotal(2000, 4, "AL")).toEqual(7737.6);
  });
  it("deberia calcular para un descuento para 10000 o mas", () => {
    expect(calcularTotal(2000, 6, "AL")).toEqual(11232);
  });
  it("deberia calcular para un descuento para 30000 o mas", () => {
    expect(calcularTotal(15000, 3, "AL")).toEqual(39780);
  });
});


