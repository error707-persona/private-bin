import {
  Component,
  ElementalComponent,
  EventListener,
} from "@sohailalam2/elemental-web";

import template from "./template.html?raw";
import styles from "./styles.scss?inline";
import base from "../base.css?inline";

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
  private selectedExpiry = '';

  protected render(): void {
    // do nothing as all we want is to render the template
  }

  @EventListener("click", { attachTo: ".expiry" })
  handleExpiryDropDown(event: Event): void {
    this.isExpiryVisible = !this.isExpiryVisible;
    const classList = this.$(".dropdown-menu")?.classList;

    if(!this.isExpiryVisible) {
      classList?.remove("visible");
      this.selectedExpiry = (event.target as HTMLLIElement).innerText
      const btn = this.$<HTMLButtonElement>('.btn-expiry');

      if(btn) {
        btn.innerHTML = `Expiry: ${this.selectedExpiry} ${caretSvg}`
      }
    } else {
      classList?.add("visible");
    }
  }
  //
  // @EventListener("click", { attachTo: ".item" })
  // handleCloseDropDown1(event: Event): void {
  //   const classList = this.$(".dropdown-menu")?.classList;
  //
  //   if(this.isExpiryVisible) {
  //     classList?.remove("visible");
  //
  //     console.log(event.target.originalTarget);
  //   } else {
  //     classList?.add("visible");
  //   }
  // }
  // @EventListener("click", { attachTo: ".item2" })
  // handleCloseDropDown(event: Event): void {
  //   this.$(".dropdown-menu")?.classList.remove("visible");
  //   console.log(this.$(".dropdown-menu")?.classList)
  //
  // }
  // @EventListener("click", { attachTo: ".item12" })
  // handleCloseDropDown2(event: Event): void {
  //   // this.$(".dropdown-menu1")?.classList.remove("visible");

  //   console.log(this.$(".item12")?.classList, "hellow");
  // }

  // @EventListener("click", { attachTo: ".file" })
  // handleFileDropDown(event: Event): void {
  //   this.$(".dropdown-menu2")?.classList.add("visible");
  //   console.log(this.$(".dropdown-menu2")?.classList)

  // }
  // @EventListener("click", { attachTo: ".item2" })
  // handleCloseFileDropDown(event: Event): void {
  //   this.$(".dropdown-menu2")?.classList.remove("visible");

  // }

  // @EventListener("click", { attachTo: ".expiry" })
  // handleDropDown(event: Event): void {
  //   this.$(".dropdown-menu1")?.classList.add("visible");

  //   console.log(this.$(".dropdown-menu")?.classList);
  // }
  // @EventListener("click", { attachTo: ".item1" })
  // handleCloseDropDown(event: Event): void {
  //   this.$(".dropdown-menu1")?.classList.remove("visible");

  //   console.log(this.$(".dropdown-menu")?.classList);
  // }


}

// ----------------------
// somewhere else in code
// ----------------------
