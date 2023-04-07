import { Paragraph } from "./Paragraph";
import { Magician } from "./magic";
import { DropDownStateData } from "./DropDown/State";
import { State } from "./DropDown/State";
// import { MagicianName, MagicianSuperPower, MagicianStateData, State } from "./magic";
import { NavBar } from "./NavBar";
import { PasteBin } from "./PasteBin";
import "../output.css";
import { DropDown } from "./DropDown";
import { Hero } from "./Hero/Hero";

// document.body.appendChild(new Paragraph());
document.body.appendChild(new NavBar());
document.body.appendChild(new PasteBin());


document.body.appendChild(
  new DropDown({
    state: State.from<DropDownStateData, State>({
      option: "Attach a file",
      items: ["Roll back", "Remove attachment"],
    }),
  })
);

document.getElementById('firstlink')?.appendChild(
  new DropDown({
    state: State.from<DropDownStateData, State>({
      option: "Format: Plain Text",
      items: ["Plain text", "Source Code", "Mark Down"],
    }),
  })
);

// const magician = new Magician({
//   state: State.from<MagicianStateData, State>({
//     name: MagicianName.from('Dr. Strange'),
//     superpower: MagicianSuperPower.from('The Mystic Art'),
//   }),
// });

// document.body.appendChild(magician);
