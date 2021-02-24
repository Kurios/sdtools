export class Divisions {
    tags = [ 
        {name:"uber",desc:"Generally overpowered. Banned more then 50% of the time."},
        {name:"superheavy",desc:"Has tanks with 150mm or more armour"},
        {name:"banned",desc:"This division has been banned"},
        {name:"french",desc:"This division is subject to French Bias"}
]
    divisions = [
        //allied
        {name:"2-ya Gvard. Tankovy Korpus", rating: 3, faction: "allied", type: "Armored", img: "assets/div/2gtc.png", tags: []},
        {name:"29-ya Tankovy Korpus", rating: 3.03, faction: "allied", type: "Armored", img: "assets/div/29tc.png", tags: ["superheavy"]},
        {name:"3-ya Gvard. Mechanizi. Korpus", rating: 4.25, faction: "allied", type: "Mechanized", img: "assets/div/3gmc.png", tags: ["uber"]},
        {name:"3-ya Gvard. Tankovy Korpus", rating: 4.61, faction: "allied", type: "Armored", img: "assets/div/3gtc.png", tags: ["uber","superheavy"]},
        {name:"Podv. Gruppa Tyurina", rating: 2.25, faction: "allied", type: "Armored", img: "assets/div/Tyurina.png", tags: []},
        {name:"Podv. Gruppa Bezuglogo", rating: 0, faction: "allied", type: "Mechanized", img: "assets/div/Bezuglogo.png", tags: []},
        {name:"9-ya Gvard. Kavalerii", rating: 2.87, faction: "allied", type: "Mechanized", img: "assets/div/9cav.png", tags: []},
        {name:"26-ya Gvard. Strelkovy", rating: 2.37, faction: "allied", type: "Infantry", img: "assets/div/26g.png", tags: []},
        {name:"44-ya Gvard. Strelkovy", rating: 2.62, faction: "allied", type: "Infantry", img: "assets/div/44g.png", tags: []},
        {name:"84-ya Gvard. Strelkovy", rating: 2.59, faction: "allied", type: "Mechanized", img: "assets/div/84g.png", tags: ["superheavy"]},
        {name:"184-ya Strelkovy", rating: 2.34, faction: "allied", type: "Infantry", img: "assets/div/184.png", tags: []},
        {name:"3rd Armored", rating: 4.4, faction: "allied", type: "Armored", img: "assets/div/3armored.png", tags: ["superheavy","uber"]},
        {name:"2e Blindee", rating: 3.64, faction: "allied", type: "Armored",img: "assets/div/2eblindee.png", tags: ["french"]},
        {name:"3rd Canadian Infantry", rating: 3.89, faction: "allied", type: "Mechanized", img: "assets/div/3can.png", tags: []},
        {name:"15th Infantry", rating: 3.46, faction: "allied", type: "Infantry", img: "assets/div/15inf.png", tags: ["superheavy"]},
        {name:"1 Piechoty", rating: 2.63, faction: "allied", type: "Mechanized", img: "assets/div/piechoty.png", tags: []},
        {name:"126-y L. Gornostrelkovy Korpus", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/126light.png", tags: []},
        {name:"Podv. Gruppa Vyborg", rating: 2.5, faction: "allied", type: "Armoured", img: "assets/div/vyborg.png", tags: ["superheavy"]},
        {name:"358-ya Strelkova Div", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/358ya.png", tags: []},
        {name:"3-ya VDV", rating: 2.1, faction: "allied", type: "Infantry", img: "assets/div/3yaVDV.png", tags: []},
        {name:"7-y Mechanizi. Korpus", rating: 0, faction: "allied", type: "Mechanized", img: "assets/div/7mc.png", tags: []},
        {name:"Morskaya Gruppa Bakhtina", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/bakhtina.png", tags: []},
        {name:"2nd Infantry", rating: 3.05, faction: "allied", type: "Mechanized", img: "assets/div/2inf.png", tags: []},
        {name:"6th Airborne", rating: 3.84, faction: "allied", type: "Infantry", img: "assets/div/6airborne.png", tags: ["uber"]},
        {name:"1. Pancerna", rating: 2.95, faction: "allied", type: "Armored", img: "assets/div/pancerna.png", tags: []},
        {name:"97-ya Gvard. Strelkovy", rating: 3.59, faction: "allied", type: "Mechanized", img: "assets/div/97g.png", tags: ["superheavy"]},
        {name:"10-y Gv. Tank. Korpus", rating: 3.32, faction: "allied", type: "Armored", img: "assets/div/10gtc.png", tags: []},
        {name:"2nd New-Zealand", rating: 0, faction: "allied", type: "Infantry", img: "assets/div/2nz.png", tags: []},
        //axis
        {name:"3. Fallschirmjäger", rating: 2.88, faction: "axis", type: "Infantry", img: "assets/div/3fs.png", tags: []},
        {name:"17. SS-Panzergrenadier", rating: 3.35, faction: "axis", type: "Mechanized", img: "assets/div/17ss.png", tags: []},
        {name:"1. Skijäger", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/skijager.png", tags: []},
        {name:"5. Panzer", rating: 3.13, faction: "axis", type: "Armored", img: "assets/div/5panzer.png", tags: []},
        {name:"20. Panzer", rating: 0, faction: "axis", type: "Armored", img: "assets/div/20panzer.png", tags: ["superheavy"]},
        {name:"25. Panzergrenadier", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/25pg.png", tags: []},
        {name:"Gruppe Harteneck", rating: 2.09, faction: "axis", type: "Mechanized", img: "assets/div/harteneck.png", tags: []},
        {name:"78. Sturm", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/78sturm.png", tags: []},
        {name:"28. Jäger", rating: 2.84, faction: "axis", type: "Infantry", img: "assets/div/28jager.png", tags: []},
        {name:"14. Infanterie", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/14inf.png", tags:[]},
        {name:"Korück 559", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/koruck559.png", tags: []},
        {name:"1. Lovas", rating: 0, faction: "axis", type: "Mechanized", img: "assets/div/1lovas.png", tags: []},
        {name:"12. Tartalék", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/12tart.png", tags: []},
        {name:"Panzer-Lehr", rating: 3.53, faction: "axis", type: "Armored", img: "assets/div/panzerlehr.png", tags: []},
        {name:"21. Panzer", rating: 4.3, faction: "axis", type: "Armored", img: "assets/div/21panzer.png", tags: ["superheavy","uber"]},
        {name:"116. Panzer", rating: 3.17, faction: "axis", type: "Armored", img: "assets/div/116panzer.png", tags: []},
        {name:"352. Infanterie", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/352inf.png", tags: []},
        {name:"5. SS-Panzer\"Wiking\"", rating: 2.66, faction: "axis", type: "Armored", img: "assets/div/wiking.png", tags: []},
        {name:"Fallschirm-Panzer \"Hermann Göring\"", rating: 3.26, faction: "axis", type: "Armored", img: "assets/div/fallschirmpanzer.png", tags: []},
        {name:"Panssaridivisioona", rating: 2.82, faction: "axis", type: "Armored", img: "assets/div/Panssaridivisioona.png", tags: []},
        {name:"Ryhmä Raappana", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/ryhma.png", tags: []},
        {name:"122. Infanterie", rating: 2.07, faction: "axis", type: "Infantry", img: "assets/div/122inf.png", tags: []},
        {name:"1 Blindata", rating: 3.76, faction: "axis", type: "Armored", img: "assets/div/blindata.png", tags: []},
        {name:"4 Munte", rating: 0, faction: "axis", type: "Infantry", img: "assets/div/munte.png", tags: []},
        {name:"5 Cavalerie Motorizata", rating: 2.87, faction: "axis", type: "Mechanized", img: "assets/div/5cav.png", tags: []},
        {name:"16. Panzer", rating: 3.88, faction: "axis", type: "tank", img: "assets/div/16panzer.png", tags: ["uber","superheavy"]},
        {name:"20. Panzergrenadier", rating: 2.25, faction: "axis", type: "Mechanized", img: "assets/div/20pg.png", tags: []},
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