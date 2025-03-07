const gameObject = {
    home:{
        teamName : "Brooklyn Nets",
        colors: "black,White",
        players: [
            {
            "Alan Anderson":{
                Number: "0",
                Shoe: "16",
                Points: "22",
                Rebounds: "12",
                Assists: "12",
                Steals: "3",
                Blocks: "1",
                Slam_Dunks: "1",
            },
            "Reggie Evans":{
                Number: "30",
                Shoe: "14",
                Points: "12",
                Rebounds: "12",
                Assists: "12",
                Steals: "12",
                Blocks: "12",
                Slam_Dunks: "7",
            },
            "Brook Lopez":{
                Number: "11",
                Shoe: "17",
                Points: "17",
                Rebounds: "19",
                Assists: "10",
                Steals: "3",
                Blocks: "1",
                Slam_Dunks: "15",
            },
            "Mason Plumlee":{
                Number: "1",
                Shoe: "19",
                Points: "26",
                Rebounds: "12",
                Assists: "6",
                Steals: "3",
                Blocks: "8",
                Slam_Dunks: "5",
            },
            "Jason Terry":{
                Number: "31",
                Shoe: "15",
                Points: "19",
                Rebounds: "2",
                Assists: "2",
                Steals: "4",
                Blocks: "11",
                Slam_Dunks: "1",
            }
        },
    ],
    },
    away : {
        teamName: "Charlotte Hornets",
        colors: "purple , turquoise",
        players: [
            {
            "Jeff Adrien":{
                Number: "4",
                Shoe: "18",
                Points: "10",
                Rebounds: "1",
                Assists: "1",
                Steals: "2",
                Blocks: "7",
                Slam_Dunks: "2",
            },
            "Bismak Biyombo":{
                Number: "0",
                Shoe: "16",
                Points: "12",
                Rebounds: "4",
                Assists: "7",
                Steals: "7",
                Blocks: "15",
                Slam_Dunks: "10",
            },
            "DeSagna Diop":{
                Number: "2",
                Shoe: "14",
                Points: "24",
                Rebounds: "12",
                Assists: "12",
                Steals: "1",
                Blocks: "1",
                Slam_Dunks: "0",
            },
            "Ben Gordon":{
                Number: "8",
                Shoe: "15",
                Points: "33",
                Rebounds: "3",
                Assists: "2",
                Steals: "1",
                Blocks: "1",
                Slam_Dunks: "0",
            },
            "Brendan Harywood":{
                Number: "33",
                Shoe: "15",
                Points: "6",
                Rebounds: "12",
                Assists: "12",
                Steals: "22",
                Blocks: "5",
                Slam_Dunks: "12",
             },

            },
        ],

    },
};

function mostPointsScored() {
    let maxPoints = 0;
    let playerWithMostPoints = '';
    for (const team in gameObject) {
        for (const player of gameObject[team].players) {
            for (const name in player) {
                if (player[name].Points > maxPoints) {
                    maxPoints = player[name].Points;
                    playerWithMostPoints = name;
                }
            }
        }
    }
    return playerWithMostPoints;
}

function winningTeam() {
    let teamPoints = { home: 0, away: 0 };
    for (const team in gameObject) {
        for (const player of gameObject[team].players) {
            for (const name in player) {
                teamPoints[team] += player[name].Points;
            }
        }
    }
    return teamPoints.home > teamPoints.away ? gameObject.home.teamName : gameObject.away.teamName;
}

function playerWithLongestName() {
    let longestName = '';
    for (const team in gameObject) {
        for (const player of gameObject[team].players) {
            for (const name in player) {
                if (name.length > longestName.length) {
                    longestName = name;
                }
            }
        }
    }
    return longestName;
}
