'use strict'
 var gProjs=[];

 function createProj(id,name,title,desc,url,publishedAt,lables){
     return {id,name,title,desc,url:`https://ethan-georlette.github.io/${url}/`,publishedAt,lables}
 }
 function createProjs(){
    var projs=[];
    var game = ''
    var date={month:'July',year:'2021'}
    projs.push(createProj('minesweeper','Minesweeper','Try to beat the game',game,'minesweeper',date,['Game','MineSweeper']))
    projs.push(createProj('touchNums','Touch Nums','Try to beat the game',game,'touch-nums',date,['Game','touch-nums']))
    gProjs=projs;
 }
 function getProjs(){
     return gProjs;
 }