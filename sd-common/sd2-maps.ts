export interface Map {
    name:string,
    id:number,
    img:string,
    tags:string[]
    size:number[]
}

export class Maps {
    public tags = [
        {name:"open", "desc":"This is a very open map"},
        {name:"urban", "desc":"This is a very urban map"},
        {name:"forest", "desc":"This is a heavily forested map"},
        {name:"river", "desc":"This is distinctive for its bridge and river based combat"},
        {name:"riverVert", "desc":"A river cuts this map in half vertically, creating a lane."},
        {name:"mixed", desc:"This map has a little of everything"},
        {"name":"lakes", desc:"Scattered Lakes dominate parts of this map"},
        {"name":"hill", desc: "A central hill dominates this map"}
]
    public maplist:Map[] = [
        {name:"Bobr", id:1 , img:"assets/map/bobr.jpg", tags: ["river"], size:[1]},
        {name:"Brest, west", id: 2, img:"assets/map/brestW.jpg", tags: ["riverVert"], size:[1]},
        {name:"Haroshaje", id: 3, img:"assets/map/haroshaje.jpg", tags: ["river"], size:[1]},
        {name:"Krupa", id: 4, img:"assets/map/krupa.jpg", tags: ["hill"], size:[1]},
        {name:"Orsha, east", id: 5, img:"assets/map/orshaE.jpg", tags: ["hill","open"], size:[1]},
        {name:"Orsha, north", id: 6, img:"assets/map/orshaN.jpg", tags: ["mixed"], size:[1]},
        {name:"Shchedrin", id: 7, img:"assets/map/shchedrin.jpg", tags: ["riverVert","lakes"], size:[1]},
        {name:"Sianno", id: 8, img:"assets/map/sianno.jpg", tags: ["mixed","lakes"], size:[1]},
        {name:"Siedlce", id: 9, img:"assets/map/siedlce.jpg", tags: ["forest","lakes"], size:[1]},
        {name:"Slutsk", id: 10, img:"assets/map/slutsk.jpg", tags: ["hill","riverVert","urban"], size:[1]},
        {name:"Slutsk, east", id: 11, img:"assets/map/slutskE.jpg", tags: ["riverVert","open"], size:[1]},
        {name:"Slutsk, west", id: 12, img:"assets/map/slutskW.jpg", tags: ["open"], size:[1]},
        {name:"Tali Ihantala", id: 13, img:"assets/map/tali.jpg", tags: ["riverVert","lakes"], size:[1]},
        {name:"Tsel", id: 14, img:"assets/map/tsel.jpg", tags: ["forest"], size:[1]},
        {name:"Zbuczyn", id: 15, img:"assets/map/zbuczyn.jpg", tags: ["mixed"], size:[1]},
        ]
      
} 
