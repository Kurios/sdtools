export class Divisions {
    tags = [ 
        {name:"uber",desc:"Generally overpowered. Banned more then 50% of the time."},
        {name:"superheavy",desc:"Has tanks with 150mm or more armour"},
        {name:"banned",desc:"This division has been banned"},
        {name:"french",desc:"This division is subject to French Bias"},
        {name:"scoutcars",desc:"This division has access to hordes of scout cars"},
        {name:"waa",desc:"This division has weak AA"},
        {name:"air",desc:"This division has a decent air deck"},
        {name:"cluster",desc:"This division has access to AT Clusterbombs"},
        {name:"inf",desc:"This divisions infantry are good."},
        {name:"offmap",desc:"This division has access to decent offmap arty"},
        {name:"ccx",desc:"This is well suited for Close quarters and cityfighting"},
        {name:"underdog",desc:"This division is the ulimate underdog, capable of taking down titans."},
        {name:"wtank",desc:"This division has a massive tank deficiency."},
        {name:"wtank",desc:"This division has a massive anti-tank deficiency."},
        {name:"wwtank",desc:"This division wonders what a tank is."},
        {name:"fixedAT",desc:"There is a lack of fixed AT guns in this division."},
        {name:"arty",desc:"This division is a firm believer in arty"},
        {name:"1000kg",desc:"Air units can lift over 1000kg of bombs"}
]
    divisions = [
        //allied
        {name:"2-ya Gvard. Tankovy Korpus", rating: 3, faction: "allied", type: "Armored", img: "assets/div/2gtc.png", tags: ["waa","air","offmap"], id:1},
        {name:"29-ya Tankovy Korpus", rating: 3.03, faction: "allied", type: "Armored", img: "assets/div/29tc.png", tags: ["waa","superheavy","500kg"], id:2},
        {name:"3-ya Gvard. Mechanizi. Korpus", rating: 4.25, faction: "allied", type: "Mechanized", img: "assets/div/3gmc.png", tags: ["uber","offmap","waa","inf"], id:3},
        {name:"3-ya Gvard. Tankovy Korpus", rating: 4.61, faction: "allied", type: "Armored", img: "assets/div/3gtc.png", tags: ["uber","superheavy","air"], id:4},
        {name:"Podv. Gruppa Tyurina", rating: 2.25, faction: "allied", type: "Armored", img: "assets/div/Tyurina.png", tags: ["waa","air"], id:5},
        {name:"Podv. Gruppa Bezuglogo", rating: 0, faction: "allied", type: "Mechanized", img: "assets/div/Bezuglogo.png", tags: ["offmap","cluster"], id:6},
        {name:"9-ya Gvard. Kavalerii", rating: 2.87, faction: "allied", type: "Mechanized", img: "assets/div/9cav.png", tags: ["ccx","air"], id:7},
        {name:"26-ya Gvard. Strelkovy", rating: 2.37, faction: "allied", type: "Infantry", img: "assets/div/26g.png", tags: ["ccx","waa","air","offmap","cluster"], id:8},
        {name:"44-ya Gvard. Strelkovy", rating: 2.62, faction: "allied", type: "Infantry", img: "assets/div/44g.png", tags: ["offmap","air"], id:9},
        {name:"84-ya Gvard. Strelkovy", rating: 2.59, faction: "allied", type: "Mechanized", img: "assets/div/84g.png", tags: ["superheavy","offmap","air"], id:10},
        {name:"184-ya Strelkovy", rating: 2.34, faction: "allied", type: "Infantry", img: "assets/div/184.png", tags: ["air","offmap"], id:11},
        {name:"3rd Armored", rating: 4.4, faction: "allied", type: "Armored", img: "assets/div/3armored.png", tags: ["superheavy","uber","inf","scoutcars","offmap","500kg"], id:12},
        {name:"2e Blindee", rating: 3.64, faction: "allied", type: "Armored",img: "assets/div/2eblindee.png", tags: ["french"], id:13},
        {name:"3rd Canadian Infantry", rating: 3.89, faction: "allied", type: "Mechanized", img: "assets/div/3can.png", tags: ["scoutcars","inf","air","waa"], id:14},
        {name:"15th Infantry", rating: 3.46, faction: "allied", type: "Infantry", img: "assets/div/15inf.png", tags: ["superheavy","scoutcars","offmap","air"], id:15},
        {name:"Armia Krajowa", rating: 0, faction: "allied", type:"Infantry", img: "assets/div/ak.png", tags:["underdog","inf"], id:16},
        {name:"1 Piechoty", rating: 2.63, faction: "allied", type: "Mechanized", img: "assets/div/piechoty.png", tags: ["air","ccx","inf","cluster"], id:17},
        {name:"126-y L. Gornostrelkovy Korpus", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/126light.png", tags: ["air","waa","wtank",
    "fixedAT","offmap","500kg"], id:18},
        {name:"Podv. Gruppa Vyborg", rating: 2.5, faction: "allied", type: "Armoured", img: "assets/div/vyborg.png", tags: ["superheavy","waa","offmap","air"], id:19},
        {name:"358-ya Strelkova Div", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/358ya.png", tags: ["ccx","waa","air","cluster"], id:20},
        {name:"3-ya VDV", rating: 2.1, faction: "allied", type: "Infantry", img: "assets/div/3yaVDV.png", tags: ["ccx","waa","air"], id:21},
        {name:"7-y Mechanizi. Korpus", rating: 0, faction: "allied", type: "Mechanized", img: "assets/div/7mc.png", tags: ["air","waa"], id:22},
        {name:"Morskaya Gruppa Bakhtina", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/bakhtina.png", tags: ["offmap","air","cluster","waa","ccx","inf","wtank",], id:23},
        {name:"2nd Infantry", rating: 3.05, faction: "allied", type: "Mechanized", img: "assets/div/2inf.png", tags: ["scoutcars","inf","offmap","air"], id:24},
        {name:"6th Airborne", rating: 3.84, faction: "allied", type: "Infantry", img: "assets/div/6airborne.png", tags: ["scoutcars","offmap","air","uber"], id:25},
        {name:"1. Pancerna", rating: 2.95, faction: "allied", type: "Armored", img: "assets/div/pancerna.png", tags: ["offmap"], id:26},
        {name:"97-ya Gvard. Strelkovy", rating: 3.59, faction: "allied", type: "Mechanized", img: "assets/div/97g.png", tags: ["superheavy","air","offmap"], id:27},
        {name:"10-y Gv. Tank. Korpus", rating: 3.32, faction: "allied", type: "Armored", img: "assets/div/10gtc.png", tags: ["waa","air"], id:28},
        {name:"2nd New-Zealand", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/2nz.png", tags: ["scoutcars"], id:29},
        //axis
        {name:"3. Fallschirmjäger", rating: 2.88, faction: "axis", type: "Infantry", img: "assets/div/3fs.png", tags: ["inf","air"], id:30},
        {name:"17. SS-Panzergrenadier", rating: 3.35, faction: "axis", type: "Mechanized", img: "assets/div/17ss.png", tags: ["waa"], id:31},
        {name:"1. Skijäger", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/skijager.png", tags: ["waa","offmap","air"], id:32},
        {name:"5. Panzer", rating: 3.13, faction: "axis", type: "Armored", img: "assets/div/5panzer.png", tags: ["scoutcars","offmap"], id:33},
        {name:"20. Panzer", rating: 0, faction: "axis", type: "Armored", img: "assets/div/20panzer.png", tags: ["superheavy","air","offmap","cluster"], id:34},
        {name:"25. Panzergrenadier", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/25pg.png", tags: ["scoutcars","waa"], id:35},
        {name:"Gruppe Harteneck", rating: 2.09, faction: "axis", type: "Mechanized", img: "assets/div/harteneck.png", tags: ["waa","ccx","inf","offmap","air"], id:36},
        {name:"78. Sturm", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/78sturm.png", tags: ["wtank","offmap"], id:37},
        {name:"28. Jäger", rating: 2.84, faction: "axis", type: "Infantry", img: "assets/div/28jager.png", tags: ["waa","air","wtank","offmap"], id:38},
        {name:"14. Infanterie", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/14inf.png", tags:["inf","waa","offmap","cluster","air"], id:39},
        {name:"Korück 559", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/koruck559.png", tags: ["scoutcars","inf","air"], id:40},
        {name:"1. Lovas", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/1lovas.png", tags: ["air","wtank","offmap","cluster"], id:41},
        {name:"12. Tartalék", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/12tart.png", tags: ["air","wwtank","offmap"], id:42},
        {name:"Panzer-Lehr", rating: 3.53, faction: "axis", type: "Armored", img: "assets/div/panzerlehr.png", tags: ["scoutcars"], id:43},
        {name:"21. Panzer", rating: 4.3, faction: "axis", type: "Armored", img: "assets/div/21panzer.png", tags: ["superheavy","uber","scoutcars","offmap"], id:44},
        {name:"116. Panzer", rating: 3.17, faction: "axis", type: "Armored", img: "assets/div/116panzer.png", tags: ["scoutcars","offmap","air","waa"], id:45},
        {name:"352. Infanterie", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/352inf.png", tags: ["wwtank","scoutcars","offmap","air"], id:46},
        {name:"5. SS-Panzer\"Wiking\"", rating: 2.66, faction: "axis", type: "Armored", img: "assets/div/wiking.png", tags: [], id:47},
        {name:"Fallschirm-Panzer \"Hermann Göring\"", rating: 3.26, faction: "axis", type: "Armored", img: "assets/div/fallschirmpanzer.png", tags: ["scoutcars","offmap","clusterbomb",], id:48},
        {name:"Panssaridivisioona", rating: 2.82, faction: "axis", type: "Armored", img: "assets/div/Panssaridivisioona.png", tags: ["500kg","inf","offmap","cluster","air"], id:49},
        {name:"Ryhmä Raappana", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/ryhma.png", tags: ["inf","wwtank","offmap","air","arty"], id:50},
        {name:"122. Infanterie", rating: 2.07, faction: "axis", type: "Infantry", img: "assets/div/122inf.png", tags: ["waa","air","inf","wtank"], id:51},
        {name:"1 Blindata", rating: 3.76, faction: "axis", type: "Armored", img: "assets/div/blindata.png", tags: ["scoutcars","offmap","cluster","air"], id:52},
        {name:"4 Munte", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/munte.png", tags: ["waa","wtank","air"], id:53},
        {name:"5 Cavalerie Motorizata", rating: 2.87, faction: "axis", type: "Mechanized", img: "assets/div/5cav.png", tags: ["scoutcars","wtank","cluster","air"], id:54},
        {name:"16. Panzer", rating: 3.88, faction: "axis", type: "tank", img: "assets/div/16panzer.png", tags: ["uber","superheavy","fixedAT","air"], id:55},
        {name:"20. Panzergrenadier", rating: 2.25, faction: "axis", type: "Mechanized", img: "assets/div/20pg.png", tags: ["fixedAT"], id:56},
        {name:"1. Fallschirmjäger", rating: 2.17, faction: "axis", type: "Infantry", img: "assets/div/1fs.png", tags: [], id:57},
    ]
}

export interface Division {
    name:string;
    id: number;
    rating:number;
    faction:string;
    type:string;
    img:string;
    tags:string[];
}