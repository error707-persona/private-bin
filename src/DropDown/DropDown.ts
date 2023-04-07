import {Component, EventListener, StatefulElementalComponent,} from "@sohailalam2/elemental-web";

import {DropDownState} from "./DropDownState";
import template from "./template.html?raw";
import base from "@/base.css?inline";

@Component({template, styles: [base]})
export class DropDown extends StatefulElementalComponent<DropDownState> {
    private isDropDownVisible = false;
    private isCaretActive = false;

    private spanPrefix = '';

    private selectOptions: string[] = [];

    protected render(): void {
        const { prefix, selected, options } = this.$state.value;

        const span = this.$root.querySelector('span') as HTMLSpanElement;
        const ul = this.$('ul') as HTMLUListElement;

        if(Array.isArray(options)) {
            this.selectOptions = options;
        }

        if(prefix && prefix !== 'Unknown') {
            this.spanPrefix = prefix;
        }

        span.textContent = `${this.spanPrefix}${selected}`;
        options?.forEach((option) => {
            const li = document.createElement("li");

            li.classList.add('item');
            li.innerHTML = option;
            ul.appendChild(li);
        });
    }

    @EventListener("click", {attachTo: ".dropdown"})
    handleExpiryDropDown(event: Event): void {
        this.isDropDownVisible = !this.isDropDownVisible;
        this.isCaretActive = !this.isCaretActive;
        const classList = this.$(".dropdown-menu")?.classList;
        const iconClassList = this.$(".icon")?.classList;

        classList?.add("visible");

        // hover:rotate-180 hover:ease-in transition duration-150 ease-out
        if (this.isCaretActive){
            iconClassList?.add("rotate-180");
            iconClassList?.add("ease-in");
            iconClassList?.add("transition");
            iconClassList?.add("duration-150");
            iconClassList?.add("ease-out");
        } else {
          iconClassList?.remove("rotate-180");
           
        }
        
        
        if (!this.isDropDownVisible) {
            classList?.remove("visible");
            const selected = (event.target as HTMLLIElement).innerText;

            if(this.selectOptions.includes(selected)) {
                this.updateState(DropDownState.from({ selected }));
                this.raiseEvent('dropdown-selected', true, { id: this.id, selected });
            }
        }
    }
}
