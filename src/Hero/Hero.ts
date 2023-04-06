import {
  Component,
  ElementalComponent,
  ObservedState,
} from "@sohailalam2/elemental-web";

@Component
class Hero extends ElementalComponent {
  @ObservedState
  private superpower = "unknown";

  protected render() {
    this.$root.innerHTML = `
        <p>I am ${this.name} and I have ${this.superpower}</p>
    `;
  }

  protected connectedCallback() {
    super.connectedCallback();

    // simulating an update after 2 seconds
    setTimeout(() => {
      // ✅ Correct way, will auto update the DOM
      this.setAttribute("superpower", "XRay Vision");

      // ❌ Wrong way... this will not update the DOM
      this.superpower = "Super Hearing";
    }, 2000);
  }

  // rest of the code ommitted for brevity...
}

// @Component
// class Hero extends ElementalComponent {
//   static get observedAttributes() {
//     return ['superpower'];
//   }

//   private superpower = 'unknown';

//   // rest of the code ommitted for brevity...
// }
