import {
  Component,
  ElementalComponent,
  ObservedState,
  EventListener
} from "@sohailalam2/elemental-web";

import template from "./template.html?raw";

@Component({ template })
export class Hero extends ElementalComponent {
  @ObservedState
  private text = "";
    
  protected render(): void {
    const password = this.$('.input');
    console.log(password)
  }

  @EventListener("change", { attachTo: ".input" })
  handleInput(event: Event): void {
    
    this.text = (event.target as HTMLInputElement).value;
    console.log(this.text)
   
  }

}
