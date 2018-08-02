/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
var Obstaculo = function (sprite, x, y, ancho, alto, potencia) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.potencia = potencia;

  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas
Obstaculo.prototype.chocar = function (Jugador) {

    var cantVidasPierde;

    if (this.potencia > 0) {
      //la primera vez que choca quita vidas

      //calcular la cantidad de vidas que pierde segun la potencia del obstaculo
      if (this.potencia == 1) {
        //cuando potencia es 1 tambien se pierde 1 vidas
        cantVidasPierde = 1;
      }
      else {
        //segun la potencia , son las vidas que se pierden : potencia / 2
        cantVidasPierde = parseInt(this.potencia / 2);
      }

      Jugador.perderVidas(cantVidasPierde);
      this.potencia = 0;
      }

  }
}
