var personnel = [
    {
    id: 5 ,
    name : " Luke Skywalker ",
    pilotingScore : 98 ,
    shootingScore : 56 ,
    isForceUser : true ,
    },
    {
    id: 82 ,
    name : " Sabine Wren ",
    pilotingScore : 73 ,
    shootingScore : 99 ,
    isForceUser : false ,
    },
    {
    id: 22 ,
    name : "Zeb Orellios ",
    pilotingScore : 20 ,
    shootingScore : 59 ,
    isForceUser : false ,
    },
    {
    id: 15 ,
    name : " Ezra Bridger ",
    pilotingScore : 43 ,
    shootingScore : 67 ,
    isForceUser : true ,
    },
    {
    id: 11 ,
    name : " Caleb Dume ",
    pilotingScore : 71 ,
    shootingScore : 85 ,
    isForceUser : true ,
    }
];

let filter =  personnel.filter(personnel => personnel.isForceUser == true);
let res = filter.map(filter => filter.pilotingScore).reduce((total, amount) => total + amount);
let res2 = filter.map(filter => filter.shootingScore).reduce((total, amount) => total + amount);

console.log("Total: ",(res + res2));