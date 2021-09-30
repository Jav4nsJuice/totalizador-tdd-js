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

function impuestoEstado(estado) {
  let impuestos = { CA: 0.0825, UT: 0.0665, NV: 0.08, TX: 0.0625, AL: 0.04,"": 0 };
  return impuestos[estado];
}

function descuentoPorSubTotal(subTotal){
  if (subTotal >= 1000 && subTotal < 3000) return 0.03;
  else if(subTotal >= 3000 && subTotal < 7000) return 0.05;
  else if(subTotal >= 7000 && subTotal < 10000) return 0.07;
  else if(subTotal >= 10000 && subTotal < 30000) return 0.1;
  else if(subTotal >= 30000) return 0.15;
  return 0;
}

function calcularTotal(cantidad, precio, estado) {
  let subTotal = cantidad * precio;
  let impuesto = impuestoEstado(estado);
  subTotal = subTotal + subTotal * impuesto;
  let descuento = descuentoPorSubTotal(subTotal);
  subTotal = subTotal - subTotal * descuento;
  return subTotal;
}
