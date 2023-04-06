import { Paragraph } from "./Paragraph";
import { Magician } from "./magic";
import { DropDownStateData } from "./DropDown/State";
import { State } from "./DropDown/State";
// import { MagicianName, MagicianSuperPower, MagicianStateData, State } from "./magic";
import { NavBar } from "./NavBar";
import { PasteBin } from "./PasteBin";
import "../output.css";
import { DropDown } from "./DropDown";

// document.body.appendChild(new Paragraph());
document.body.appendChild(new NavBar());
document.body.appendChild(new PasteBin());
document.body.appendChild(
  new DropDown({
    state: State.from<DropDownStateData, State>({
      option: "Expiry",
      items: [
        "5 minutes",
        "10 minutes",
        "30 minutes",
        "1 hour",
        "12 hour",
        "1 day",
        "3 days",
        "1 week",
        "2 weeks",
        "1 month",
      ],
    }),
  })
);
document.body.appendChild(
  new DropDown({
    state: State.from<DropDownStateData, State>({
      option: "Attach a file",
      items: ["Roll back", "Remove attachment"],
    }),
  })
);
document.body.appendChild(
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
