import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();

trybeClube.adicionarQuadra(quadraFutebol);

const dataReserva = new Date('2022-12-28');
const reservarQuadra = trybeClube.buscarQuadra<QuadraFutebol>(0).reservar(dataReserva);
console.log(reservarQuadra);

// const reservarQuadra2 = quadraFutebol.reservar(dataReserva);
// console.log(reservarQuadra2);

const quadraTenis = new QuadraTenis();
trybeClube.adicionarQuadra(quadraTenis);
const reservarQuadra3 = trybeClube.buscarQuadra<QuadraTenis>(1).reservar(dataReserva);
console.log(reservarQuadra3);