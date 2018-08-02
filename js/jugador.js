/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

  mover: function(posX,posY,direccion) {

    this.x = this.x + posX;
    this.y = this.y + posY;

    switch (direccion){
      case 'izq':    {
            this.sprite = 'imagenes/auto_rojo_izquierda.png';
            this.ancho = 30;
            this.alto = 15;
            break;}
      case 'arriba': {
            this.sprite = 'imagenes/auto_rojo_arriba.png';
            this.ancho = 15;
            this.alto = 30;
            break;}
      case 'der':    {
            this.sprite = 'imagenes/auto_rojo_derecha.png';
            this.ancho = 30;
            this.alto = 15;
            break;}
      case 'abajo':  {
            this.sprite = 'imagenes/auto_rojo_abajo.png';
            this.ancho = 15;
            this.alto = 30;
            break;}
        }
  },

  perderVidas: function (cantVidas) {
    if (this.vidas >= 0) {
      this.vidas -= cantVidas;
      }
  }

}
