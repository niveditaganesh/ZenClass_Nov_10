let totalScores1: number;
let maxPlayer1: object;
let totalScores2;
let maxPlayer2;

( < HTMLElement > document.getElementById('hit-1')).addEventListener('click', async () => {
    let cricket = new Cricket();
    ( < HTMLButtonElement > document.getElementById('hit-1')).disabled = true;
    await cricket.startGame('table-team-1');
    totalScores1 = cricket.getTotalScores();
    maxPlayer1 = cricket.getMaxScore();
    ( < HTMLButtonElement > document.getElementById('hit-2')).disabled = false;
});

( < HTMLElement > document.getElementById('hit-2')).addEventListener('click', async () => {
    let cricket = new Cricket();
    ( < HTMLButtonElement > document.getElementById('hit-1')).disabled = true;
    ( < HTMLButtonElement > document.getElementById('hit-2')).disabled = true;
    await cricket.startGame('table-team-2');
    totalScores2 = cricket.getTotalScores();
    maxPlayer2 = cricket.getMaxScore();
    ( < HTMLButtonElement > document.getElementById('btn-result')).disabled = false;
    let team = cricket.getTeamWinner(totalScores1, totalScores2);
    if (team == 'TEAM-A') {
        cricket.getManOfMatch(maxPlayer1);
    } else {
        cricket.getManOfMatch(maxPlayer2);
    }

 })

async function func(){
    let cricket = new Cricket();
    ( < HTMLButtonElement > document.getElementById('hit-1')).disabled = true;
    await cricket.startGame('table-team-1');
    totalScores1 = cricket.getTotalScores();
    maxPlayer1 = cricket.getMaxScore();
    ( < HTMLButtonElement > document.getElementById('hit-2')).disabled = false;   
}
class Cricket {

    teamId: string
    scoreBoardList: Array < number > ;
    playersTotals: Array < number > ;
    constructor() {
        this.scoreBoardList = [];
        this.playersTotals = [];
        this.teamId = '';
    }

    setTeamId(id: string) {
        this.teamId = id;
    }

    async startGame(id: string) {
        this.setTeamId(id);
        let time = 60;
        let player = 1;
        let balls = 1;
        ( < HTMLElement > document.getElementById('status')).innerHTML = `Inning Started`;
        await new Promise(resolve => {
            const interval = setInterval(() => {
                ( < HTMLElement > document.getElementById('timer')).innerHTML = `${--time}`;
                let score = Math.floor(Math.random() * 7);
                if (score && player <= 10 && balls++ <= 6) {
                    this.scoreBoardList.push(score);
                } else {
                    player++;
                    balls = 1;
                    this.scoreBoardList.push(score);
                }
                if (time == 0) {
                    resolve('0');
                    ( < HTMLElement > document.getElementById('status')).innerHTML = `Inning Ended`;
                    clearInterval(interval);
                };
            }, 1000);
             });
            // setTimeout(() => {
               this.generateScoreBoard();
    //            console.log(this.scoreBoardList)
    //  }, 6000);
    }

    generateScoreBoard() {

        let table = ( < HTMLElement > document.getElementById(this.teamId));
        let index = 0;

        for (let i = 1; i <= 10; i++) {

            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            td1.innerHTML = `Player${i}`;
            tr.appendChild(td1);
            let total = 0;
            let check = 0;

            for (let j = 1; j <= 6; j++) {
                if (this.scoreBoardList[index] > 0) {
                    total += this.scoreBoardList[index];
                    let td = document.createElement('td');
                    td.innerHTML = `${this.scoreBoardList[index]}`;
                    tr.appendChild(td);
                    index++;
                } else {
                    check = j;
                    break;
                }
            }

            if (((6 - check) || (6 - check == 0)) && (check != 0)) {
                for (let k = 0; k <= 6 - check; k++) {
                    let td = document.createElement('td');
                    tr.appendChild(td);
                }
                index++;
            }

            let td2 = document.createElement('td');
            td2.innerHTML = `${total}`;
            this.playersTotals.push(total);
            tr.appendChild(td2);
            table.appendChild(tr);
        }

        let totalScore = this.getTotalScores();
        if (this.teamId=="1") {
            ( < HTMLElement > document.getElementById('score-1')).innerHTML = `${totalScore}`;
        } else {
            ( < HTMLElement > document.getElementById('score-2')).innerHTML = `${totalScore}`;
        }
     }

    getMaxScore() {
        let maxScore = Math.max(...this.playersTotals);
        let player = this.playersTotals.indexOf(maxScore);
        return {
            maxScore,
            player
        };
    }

    getTotalScores() {
        let sumScores = this.playersTotals.reduce(function (a, b) {
            return a + b;
        }, 0);
        return sumScores;
    }

    getTeamWinner(team1: number, team2: number) {
        let team = Math.max(team1, team2) == team1 ? 'TEAM-A' : 'TEAM-B';
        ( < HTMLElement > document.getElementById('result-team')).innerHTML = `${team}`;
        return team;
    }

    getManOfMatch(player: any) {

        ( < HTMLElement > document.getElementById('motm')).innerHTML = `
            PLAYER-${player['player']+1}<br><br>SCORE: ${player['maxScore']}  
        `;
    }

}