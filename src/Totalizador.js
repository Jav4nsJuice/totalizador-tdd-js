export default function calcularTotal(cantidad, precio, estado) {
    let subTotal = cantidad * precio;
    let impuesto = impuestoEstado(estado);
    subTotal = subTotal + subTotal * impuesto;
    let descuento = descuentoPorSubTotal(subTotal);
    subTotal = subTotal - subTotal * descuento;
    return subTotal;
}
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
  