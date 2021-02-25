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
        {name:"arty",desc:"This division is a firm believer in arty"}
]
    divisions = [
        //allied
        {name:"2-ya Gvard. Tankovy Korpus", rating: 3, faction: "allied", type: "Armored", img: "assets/div/2gtc.png", tags: ["waa","air","offmap"]},
        {name:"29-ya Tankovy Korpus", rating: 3.03, faction: "allied", type: "Armored", img: "assets/div/29tc.png", tags: ["waa","superheavy"]},
        {name:"3-ya Gvard. Mechanizi. Korpus", rating: 4.25, faction: "allied", type: "Mechanized", img: "assets/div/3gmc.png", tags: ["uber","offmap","waa","inf"]},
        {name:"3-ya Gvard. Tankovy Korpus", rating: 4.61, faction: "allied", type: "Armored", img: "assets/div/3gtc.png", tags: ["uber","superheavy","air"]},
        {name:"Podv. Gruppa Tyurina", rating: 2.25, faction: "allied", type: "Armored", img: "assets/div/Tyurina.png", tags: ["waa","air"]},
        {name:"Podv. Gruppa Bezuglogo", rating: 0, faction: "allied", type: "Mechanized", img: "assets/div/Bezuglogo.png", tags: ["offmap","cluster"]},
        {name:"9-ya Gvard. Kavalerii", rating: 2.87, faction: "allied", type: "Mechanized", img: "assets/div/9cav.png", tags: ["ccx","air"]},
        {name:"26-ya Gvard. Strelkovy", rating: 2.37, faction: "allied", type: "Infantry", img: "assets/div/26g.png", tags: ["ccx","waa","air","offmap","cluster"]},
        {name:"44-ya Gvard. Strelkovy", rating: 2.62, faction: "allied", type: "Infantry", img: "assets/div/44g.png", tags: ["offmap","air"]},
        {name:"84-ya Gvard. Strelkovy", rating: 2.59, faction: "allied", type: "Mechanized", img: "assets/div/84g.png", tags: ["superheavy","offmap","air"]},
        {name:"184-ya Strelkovy", rating: 2.34, faction: "allied", type: "Infantry", img: "assets/div/184.png", tags: ["air","offmap"]},
        {name:"3rd Armored", rating: 4.4, faction: "allied", type: "Armored", img: "assets/div/3armored.png", tags: ["superheavy","uber","inf","scoutcars","offmap"]},
        {name:"2e Blindee", rating: 3.64, faction: "allied", type: "Armored",img: "assets/div/2eblindee.png", tags: ["french"]},
        {name:"3rd Canadian Infantry", rating: 3.89, faction: "allied", type: "Mechanized", img: "assets/div/3can.png", tags: ["scoutcars","inf","air","waa"]},
        {name:"15th Infantry", rating: 3.46, faction: "allied", type: "Infantry", img: "assets/div/15inf.png", tags: ["superheavy","scoutcars","offmap","air"]},
        {name:"Armia Krajowa", rating: 0, faction: "allied", type:"Infantry", img: "assets/div/ak.png", tags:["underdog","inf"]},
        {name:"1 Piechoty", rating: 2.63, faction: "allied", type: "Mechanized", img: "assets/div/piechoty.png", tags: ["air","ccx","inf","cluster"]},
        {name:"126-y L. Gornostrelkovy Korpus", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/126light.png", tags: ["air","waa","wtank",
    "fixedAT","offmap"]},
        {name:"Podv. Gruppa Vyborg", rating: 2.5, faction: "allied", type: "Armoured", img: "assets/div/vyborg.png", tags: ["superheavy","waa","offmap","air"]},
        {name:"358-ya Strelkova Div", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/358ya.png", tags: ["ccx","waa","air","cluster"]},
        {name:"3-ya VDV", rating: 2.1, faction: "allied", type: "Infantry", img: "assets/div/3yaVDV.png", tags: ["ccx","waa","air"]},
        {name:"7-y Mechanizi. Korpus", rating: 0, faction: "allied", type: "Mechanized", img: "assets/div/7mc.png", tags: ["air","waa"]},
        {name:"Morskaya Gruppa Bakhtina", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/bakhtina.png", tags: ["offmap","air","cluster","waa","ccx","inf","wtank",]},
        {name:"2nd Infantry", rating: 3.05, faction: "allied", type: "Mechanized", img: "assets/div/2inf.png", tags: ["scoutcars","inf","offmap","air"]},
        {name:"6th Airborne", rating: 3.84, faction: "allied", type: "Infantry", img: "assets/div/6airborne.png", tags: ["scoutcars","offmap","air","uber"]},
        {name:"1. Pancerna", rating: 2.95, faction: "allied", type: "Armored", img: "assets/div/pancerna.png", tags: ["offmap"]},
        {name:"97-ya Gvard. Strelkovy", rating: 3.59, faction: "allied", type: "Mechanized", img: "assets/div/97g.png", tags: ["superheavy","air","offmap"]},
        {name:"10-y Gv. Tank. Korpus", rating: 3.32, faction: "allied", type: "Armored", img: "assets/div/10gtc.png", tags: ["waa","air"]},
        {name:"2nd New-Zealand", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/2nz.png", tags: ["scoutcars"]},
        //axis
        {name:"3. Fallschirmjäger", rating: 2.88, faction: "axis", type: "Infantry", img: "assets/div/3fs.png", tags: []},
        {name:"17. SS-Panzergrenadier", rating: 3.35, faction: "axis", type: "Mechanized", img: "assets/div/17ss.png", tags: ["waa"]},
        {name:"1. Skijäger", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/skijager.png", tags: ["waa","offmap","air"]},
        {name:"5. Panzer", rating: 3.13, faction: "axis", type: "Armored", img: "assets/div/5panzer.png", tags: ["scoutcars","offmap"]},
        {name:"20. Panzer", rating: 0, faction: "axis", type: "Armored", img: "assets/div/20panzer.png", tags: ["superheavy","air","offmap","cluster"]},
        {name:"25. Panzergrenadier", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/25pg.png", tags: ["scoutcars","waa"]},
        {name:"Gruppe Harteneck", rating: 2.09, faction: "axis", type: "Mechanized", img: "assets/div/harteneck.png", tags: ["waa","ccx","inf","offmap","air"]},
        {name:"78. Sturm", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/78sturm.png", tags: ["wtank","offmap"]},
        {name:"28. Jäger", rating: 2.84, faction: "axis", type: "Infantry", img: "assets/div/28jager.png", tags: ["waa","air","wtank","offmap"]},
        {name:"14. Infanterie", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/14inf.png", tags:["inf","waa","offmap","cluster","air"]},
        {name:"Korück 559", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/koruck559.png", tags: ["scoutcars","inf","air"]},
        {name:"1. Lovas", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/1lovas.png", tags: ["air","wtank","offmap","cluster"]},
        {name:"12. Tartalék", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/12tart.png", tags: ["air","wwtank","offmap"]},
        {name:"Panzer-Lehr", rating: 3.53, faction: "axis", type: "Armored", img: "assets/div/panzerlehr.png", tags: ["scoutcars"]},
        {name:"21. Panzer", rating: 4.3, faction: "axis", type: "Armored", img: "assets/div/21panzer.png", tags: ["superheavy","uber","scoutcars","offmap"]},
        {name:"116. Panzer", rating: 3.17, faction: "axis", type: "Armored", img: "assets/div/116panzer.png", tags: ["scoutcars","offmap","air","waa"]},
        {name:"352. Infanterie", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/352inf.png", tags: ["wwtank","scoutcars","offmap","air"]},
        {name:"5. SS-Panzer\"Wiking\"", rating: 2.66, faction: "axis", type: "Armored", img: "assets/div/wiking.png", tags: []},
        {name:"Fallschirm-Panzer \"Hermann Göring\"", rating: 3.26, faction: "axis", type: "Armored", img: "assets/div/fallschirmpanzer.png", tags: ["scoutcars","offmap","clusterbomb",]},
        {name:"Panssaridivisioona", rating: 2.82, faction: "axis", type: "Armored", img: "assets/div/Panssaridivisioona.png", tags: ["inf","offmap","cluster","air"]},
        {name:"Ryhmä Raappana", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/ryhma.png", tags: ["inf","wwtank","offmap","air","arty"]},
        {name:"122. Infanterie", rating: 2.07, faction: "axis", type: "Infantry", img: "assets/div/122inf.png", tags: ["waa","air","inf","wtank"]},
        {name:"1 Blindata", rating: 3.76, faction: "axis", type: "Armored", img: "assets/div/blindata.png", tags: ["scoutcars","offmap","cluster","air"]},
        {name:"4 Munte", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/munte.png", tags: ["waa","wtank","air"]},
        {name:"5 Cavalerie Motorizata", rating: 2.87, faction: "axis", type: "Mechanized", img: "assets/div/5cav.png", tags: ["scoutcars","wtank","cluster","air"]},
        {name:"16. Panzer", rating: 3.88, faction: "axis", type: "tank", img: "assets/div/16panzer.png", tags: ["uber","superheavy","fixedAT","air"]},
        {name:"20. Panzergrenadier", rating: 2.25, faction: "axis", type: "Mechanized", img: "assets/div/20pg.png", tags: ["fixedAT"]},
        {name:"1. Fallschirmjäger", rating: 2.17, faction: "axis", type: "Infantry", img: "assets/div/1fs.png", tags: []},
    ]
}

export interface Division {
    name:string;
    rating:number;
    faction:string;
    type:string;
    img:string;
    tags:string[];
}