import {
  Component,
  ElementalComponent,
  EventListener,
  ObservedState,
} from "@sohailalam2/elemental-web";

import template from "./template.html?raw";
import styles from "./styles.scss?inline";
import base from "../base.css?inline";
import { DropDown } from "../DropDown";
import { State } from "../DropDown/State";
import { DropDownStateData } from "../DropDown/State";

const caretSvg = `<svg
            class="hover:rotate-180 hover:ease-in transition duration-150 ease-out"
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-down"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 9l6 6l6 -6"></path>
          </svg>
`;

@Component({ template, styles: [base, styles] })
export class NavBar extends ElementalComponent {
  private isExpiryVisible = false;
  private isAttachVisible = false;
  private selectedExpiry = "";
  @ObservedState
  private password = "";

  protected render(): void {
      const password = this.$('.input')
      
    // do nothing as all we want is to render the template
    //     document.getElementById('firstlink')?.appendChild(
    //   new DropDown({
    //     state: State.from<DropDownStateData, State>({
    //       option: "Expiry",
    //       items: [
    //         "5 minutes",
    //         "10 minutes",
    //         "30 minutes",
    //         "1 hour",
    //         "12 hour",
    //         "1 day",
    //         "3 days",
    //         "1 week",
    //         "2 weeks",
    //         "1 month",
    //       ],
    //     }),
    //   })
    // );
  }

  @EventListener("click", { attachTo: ".expiry" })
  handleExpiryDropDown(event: Event): void {
    this.isExpiryVisible = !this.isExpiryVisible;
    const classList = this.$(".dropdown-menu")?.classList;

    if (!this.isExpiryVisible) {
      classList?.remove("visible");
      this.selectedExpiry = (event.target as HTMLLIElement).innerText;
      const btn = this.$<HTMLButtonElement>(".btn-expiry");

      if (btn) {
        btn.innerHTML = `Expires: ${this.selectedExpiry} ${caretSvg}`;
      }
    } else {
      classList?.add("visible");
    }
  }

  @EventListener("change", { attachTo: ".input" })
  handleInput(event: Event): void {
    
    this.text = (event.target as HTMLInputElement).value;
    console.log(this.text)
   
  }

  @EventListener("click", { attachTo: ".attach" })
  handleAttachDropDown(event: Event): void {
    this.isAttachVisible = !this.isAttachVisible;
    const classList = this.$(".dropdown-menu")?.classList;

    console.log(this.$(".dropdown-menu")?.innerHTML, "attach class");
  }
}

// ----------------------
// somewhere else in code
// ----------------------
