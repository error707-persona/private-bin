import {
  Component,
  ElementalComponent,
  EventListener,
  StatefulElementalComponent,
  
} from "@sohailalam2/elemental-web";
import { State } from "./State";
import template from "./template.html?raw";
import base from "../base.css";

@Component({ template, styles: [base] })
export class DropDown extends StatefulElementalComponent<State> {
  private isExpiryVisible = false;
  private isAttachVisible = false;
  private selectedExpiry = "";

  protected render(): void {
    const { option, items } = this.$state.value;

    // this.nameElement.textContent = option;
    this.nameElement.textContent = option;
   
    items.forEach(function(element) {
      var node = document.createElement("li");
      var textnode = document.createTextNode(element);
      node.appendChild(textnode);
      console.log(node)
      // document.getElementById("myList").appendChild(node);
      document.querySelector(".myList")?.appendChild(node);
      
   });
    
  }

  private get nameElement(): HTMLParagraphElement {
    return this.$root.querySelector('span') as HTMLParagraphElement;
  }
  private get ListElement(): HTMLDListElement {
    return this.$root.querySelector('ul') as HTMLDListElement;
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
        btn.innerHTML = `Expires: ${this.selectedExpiry}`;
      }
    } else {
      classList?.add("visible");
    }
  }
//   @EventListener("click", { attachTo: ".expiry" })
//   handleExpiryDropDown(event: Event): void {
//     this.isExpiryVisible = !this.isExpiryVisible;
//     const classList = this.$(".dropdown-menu")?.classList;

//     if (!this.isExpiryVisible) {
//       classList?.remove("visible");
//       this.selectedExpiry = (event.target as HTMLLIElement).innerText;
//       const btn = this.$<HTMLButtonElement>(".btn-expiry");

//       if (btn) {
//         btn.innerHTML = `Expires: ${this.selectedExpiry}`;
//       }
//     } else {
//       classList?.add("visible");
//     }
//   }
}
