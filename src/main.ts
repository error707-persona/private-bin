import { Paragraph } from "./Paragraph";
import { Magician } from "./magic";
import { MagicianName, MagicianSuperPower, MagicianStateData, State } from "./magic";
import {NavBar} from "./NavBar"
import {PasteBin} from "./PasteBin"
import "../output.css"


// document.body.appendChild(new Paragraph());
document.body.appendChild(new NavBar());
document.body.appendChild(new PasteBin());

// const magician = new Magician({
//   state: State.from<MagicianStateData, State>({
//     name: MagicianName.from('Dr. Strange'),
//     superpower: MagicianSuperPower.from('The Mystic Art'),
//   }),
// });

// document.body.appendChild(magician);