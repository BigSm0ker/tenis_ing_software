import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });

  //Jugador 1 anota 1 vez jugador 2 en 0=> "15 - Love"
  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("15 - Love"); //Vericar    ->ASSERT
  });
  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });
  it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - Love");
  });

  it("jugador 1 anota 4 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for Player 1");
  });
  it("jugador 2 anota anota jugar 1 en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 15");
  });
  it("jugador dos anota dos veces jugador uno en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 30");
  });
  it("jugador dos anota tres veces jugador uno en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Love - 40");
  });
  it("jugador dos anota cuatro veces jugador uno en cero", () => {
    let tennis = new Tennis();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Game for Player 2");
  });

  // Pruebas de Deuce y Advantage
  it("jugador 1 anota 3 veces y jugador 2 anota 3 veces", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Deuce");
  });
  });

  it("si el juego esta en Deuce jugador 1 anota", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Advantage for Player 1");
  });
   it("estado en Advantage del jugador 1 anota una vez mas", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("Game for Player 1");
  });
  it("si el juego esta en Deuce jugador 2 anota", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Advantage for Player 2");
  });
  it("estado en Advantage del jugador 2 anota una vez mas", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    tennis.player2Scores();
    expect(tennis.score()).toEqual("Game for Player 2");
  });
  it("desde Advantage del Jugador 1, Jugador 2 anota y vuelven a Deuce", () => {
    let tennis = new Tennis();
    tennis.player1Scores(); // 15-0
    tennis.player1Scores(); // 30-0
    tennis.player1Scores(); // 40-0
    tennis.player2Scores(); // 40-15
    tennis.player2Scores(); // 40-30
    tennis.player2Scores(); // Deuce
    tennis.player1Scores(); // Advantage for Player 1
    tennis.player2Scores(); // Vuelve a Deuce
    expect(tennis.score()).toEqual("Deuce");
});
  

  

  

 






