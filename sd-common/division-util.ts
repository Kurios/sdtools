
/**
For each value, there's a header (bit counter, typically 5 bits), and a body (actual value, size(s) encoded in header):
Deck code fragment example, 33 units:
|bool   |bool   | division     | card count |income |units encoding         ||header  |unit       |transport  ||header  |unit       |transport  |...
|00001|1|00001|0|01000|10000110|00110|100001|00001|0|00010|00010|00010|01011||01|00|01|00111111100|00101011010||01|00|00|00010001101|01110011001|...
|1    |1|1    |0|8    |<   8  >|6    |<  6 >|1    |1|2    |2    |2    |11   || <  2+2+2+11+11                >||
|1 bit|T|1 bit|F|8 bit|division|6 bit|cards |1 bit|$|count|phase|xp   |unit || unit card                      ||
for comparison, 1 unit deck:
|bool   |bool   | division     |crd cnt|income |units encoding         ||headr|unit       |transport  || padding
|00001|1|00001|0|01000|10000110|00001|1|00001|0|00001|00001|00001|01011||1|0|1|01100011100|00000000000||00000000
|1    |1|1    |0|8    |<   8  >|1    |1|1    |1|1    |1    |1    |11   ||< 1+1+1+11+11               >||
  
*/

export class DivisionUtil {

    translateDivision (divisionCode: string):DivisionInfo{
        let decoded = Buffer.from(divisionCode,"base64");//.toString("binary")
        {
            var bool1:boolean = (decoded[0] && 0x0f) != 0;
            var bool2:boolean = (decoded[1] && 0xf0) != 0; 
            var division: number;
            var cardCount: number;
            var income: number;
            var cards = [];
            for(let i = 0; i < cardCount; i++){
                //parse cards
                var header : number;
                var card : UnitCard;
                cards.push(card);
            }
        }

        return new DivisionInfo();
    }

}

export class DivisionInfo {

}

export class UnitCard {
    count:number;
    phase:number;
    xp:number;
    unitId:number;
}