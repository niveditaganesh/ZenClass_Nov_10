var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var totalScores1;
var maxPlayer1;
var totalScores2;
var maxPlayer2;
document.getElementById('hit-1').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var cricket;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cricket = new Cricket();
                document.getElementById('hit-1').disabled = true;
                return [4 /*yield*/, cricket.startGame('table-team-1')];
            case 1:
                _a.sent();
                totalScores1 = cricket.getTotalScores();
                maxPlayer1 = cricket.getMaxScore();
                document.getElementById('hit-2').disabled = false;
                return [2 /*return*/];
        }
    });
}); });
document.getElementById('hit-2').addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var cricket, team;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cricket = new Cricket();
                document.getElementById('hit-1').disabled = true;
                document.getElementById('hit-2').disabled = true;
                return [4 /*yield*/, cricket.startGame('table-team-2')];
            case 1:
                _a.sent();
                totalScores2 = cricket.getTotalScores();
                maxPlayer2 = cricket.getMaxScore();
                document.getElementById('btn-result').disabled = false;
                team = cricket.getTeamWinner(totalScores1, totalScores2);
                if (team == 'TEAM-A') {
                    cricket.getManOfMatch(maxPlayer1);
                }
                else {
                    cricket.getManOfMatch(maxPlayer2);
                }
                return [2 /*return*/];
        }
    });
}); });
function func() {
    return __awaiter(this, void 0, void 0, function () {
        var cricket;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    cricket = new Cricket();
                    document.getElementById('hit-1').disabled = true;
                    return [4 /*yield*/, cricket.startGame('table-team-1')];
                case 1:
                    _a.sent();
                    totalScores1 = cricket.getTotalScores();
                    maxPlayer1 = cricket.getMaxScore();
                    document.getElementById('hit-2').disabled = false;
                    return [2 /*return*/];
            }
        });
    });
}
var Cricket = /** @class */ (function () {
    function Cricket() {
        this.scoreBoardList = [];
        this.playersTotals = [];
        this.teamId = '';
    }
    Cricket.prototype.setTeamId = function (id) {
        this.teamId = id;
    };
    Cricket.prototype.startGame = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var time, player, balls;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setTeamId(id);
                        time = 60;
                        player = 1;
                        balls = 1;
                        document.getElementById('status').innerHTML = "Inning Started";
                        return [4 /*yield*/, new Promise(function (resolve) {
                                var interval = setInterval(function () {
                                    document.getElementById('timer').innerHTML = "" + --time;
                                    var score = Math.floor(Math.random() * 7);
                                    if (score && player <= 10 && balls++ <= 6) {
                                        _this.scoreBoardList.push(score);
                                    }
                                    else {
                                        player++;
                                        balls = 1;
                                        _this.scoreBoardList.push(score);
                                    }
                                    if (time == 0) {
                                        resolve('0');
                                        document.getElementById('status').innerHTML = "Inning Ended";
                                        clearInterval(interval);
                                    }
                                    ;
                                }, 1000);
                            })];
                    case 1:
                        _a.sent();
                        // setTimeout(() => {
                        this.generateScoreBoard();
                        return [2 /*return*/];
                }
            });
        });
    };
    Cricket.prototype.generateScoreBoard = function () {
        var table = document.getElementById(this.teamId);
        var index = 0;
        for (var i = 1; i <= 10; i++) {
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            td1.innerHTML = "Player" + i;
            tr.appendChild(td1);
            var total = 0;
            var check = 0;
            for (var j = 1; j <= 6; j++) {
                if (this.scoreBoardList[index] > 0) {
                    total += this.scoreBoardList[index];
                    var td = document.createElement('td');
                    td.innerHTML = "" + this.scoreBoardList[index];
                    tr.appendChild(td);
                    index++;
                }
                else {
                    check = j;
                    break;
                }
            }
            if (((6 - check) || (6 - check == 0)) && (check != 0)) {
                for (var k = 0; k <= 6 - check; k++) {
                    var td = document.createElement('td');
                    tr.appendChild(td);
                }
                index++;
            }
            var td2 = document.createElement('td');
            td2.innerHTML = "" + total;
            this.playersTotals.push(total);
            tr.appendChild(td2);
            table.appendChild(tr);
        }
        var totalScore = this.getTotalScores();
        if (this.teamId.includes('1')) {
            document.getElementById('score-1').innerHTML = "" + totalScore;
        }
        else {
            document.getElementById('score-2').innerHTML = "" + totalScore;
        }
    };
    Cricket.prototype.getMaxScore = function () {
        var maxScore = Math.max.apply(Math, this.playersTotals);
        var player = this.playersTotals.indexOf(maxScore);
        return {
            maxScore: maxScore,
            player: player
        };
    };
    Cricket.prototype.getTotalScores = function () {
        var sumScores = this.playersTotals.reduce(function (a, b) {
            return a + b;
        }, 0);
        return sumScores;
    };
    Cricket.prototype.getTeamWinner = function (team1, team2) {
        var team = Math.max(team1, team2) == team1 ? 'TEAM-A' : 'TEAM-B';
        document.getElementById('result-team').innerHTML = "" + team;
        return team;
    };
    Cricket.prototype.getManOfMatch = function (player) {
        document.getElementById('motm').innerHTML = "\n            PLAYER-" + (player['player'] + 1) + "<br><br>SCORE: " + player['maxScore'] + "  \n        ";
    };
    return Cricket;
}());
