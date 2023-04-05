import {
  Component,
  ElementalComponent,
  EventListener,
} from "@sohailalam2/elemental-web";

import template from "./template.html?raw";
import styles from "./styles.scss?inline";
import base from "../base.css?inline";
@Component({ template, styles: [base, styles] })
export class NavBar extends ElementalComponent {
  protected render(): void {
    // do nothing as all we want is to render the template
  }

  @EventListener("click", { attachTo: ".expiry" })
  handleDropDown(event: Event): void {
    this.$(".dropdown-menu")?.classList.add("visible");
    
  }
  @EventListener("click", { attachTo: ".item" })
  handleCloseDropDown1(event: Event): void {
    this.$(".dropdown-menu")?.classList.remove("visible");
    
  
  }
  @EventListener("click", { attachTo: ".item2" })
  handleCloseDropDown(event: Event): void {
    this.$(".dropdown-menu")?.classList.remove("visible");
    console.log(this.$(".dropdown-menu")?.classList)
  
  }
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
