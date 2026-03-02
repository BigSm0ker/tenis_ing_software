class Tennis {
    constructor() {
        this.player1Points = 0;
        this.player2Points = 0;
    }
    score(){
        let player1Score = "Love";
        let player2Score = "Love";
        if (this.player1Points == 1) player1Score = "15";
        if (this.player1Points == 2) player1Score = "30";
        if (this.player1Points == 3) player1Score = "40";
        if (this.player2Points == 1) player2Score = "15";
        if (this.player2Points == 2) player2Score = "30";
        if (this.player2Points == 3) player2Score = "40";
    
        const p1 = this.player1Points;
        const p2 = this.player2Points;
        if (p1 >= 3 && p2 >= 3) {
        if (p1 === p2) {
        return "Deuce";
        }

        const diff = p1 - p2;
        if (diff === 1) return "Advantage Player 1";
        if (diff === -1) return "Advantage Player 2";

        if (diff >= 2) return "Game for Player 1";
        if (diff <= -2) return "Game for Player 2";
    }
              
        return "Advantage player 1"

    }

    player1Scores(){
        this.player1Points++;
    }
}

export default Tennis;