import {Component, ElementalComponent, ElementalComponentId, EventListener,  ObservedState,
} from '@sohailalam2/elemental-web';

import template from './template.html?raw';
import styles from './styles.scss?inline';
import base from '../base.css?inline';
import {DropDown} from '../DropDown';
import {DropDownState, DropDownStateData} from '../DropDown/DropDownState';

@Component({template, styles: [base, styles]})
export class NavBar extends ElementalComponent {
    private selectedExpiryOption = '1 day';
    private selectedFileOption = 'None';
    private selectedFormatOption = 'Plain Text';

    protected render(): void {
        const expiry = new DropDown({
            id: ElementalComponentId.from('expiry'),
            state: DropDownState.from<DropDownStateData, DropDownState>({
                prefix: 'Expiry: ',
                selected: this.selectedExpiryOption,
                options: ['5 minutes', '10 minutes', '30 minutes', '1 hour', '12 hour', '1 day', '3 days', '1 week', '2 weeks', '1 month'],
            }),
        });

        const file = new DropDown({
            id: ElementalComponentId.from('format'),
            state: DropDownState.from<DropDownStateData, DropDownState>({
                prefix: 'File: ',
                selected: this.selectedFileOption,
                options: ['None', '<input type="file" />', 'Remove']
            })
        });

        const format = new DropDown({
            id: ElementalComponentId.from('format'),
            state: DropDownState.from<DropDownStateData, DropDownState>({
                prefix: 'Format: ',
                selected: this.selectedFormatOption,
                options: ['Plain Text', 'Source Code', 'Markdown']
            })
        });

        this.$('.expiry')?.appendChild(expiry);
        this.$('.file')?.appendChild(file);
        this.$('.format')?.appendChild(format);
    }

    @EventListener('dropdown-selected', {isCustomEvent: true})
    handleDropDownSelected(event: CustomEvent) {
        const {id, selected} = JSON.parse(event.detail);

        switch (id) {
            case 'expiry':
                this.selectedExpiryOption = selected;
                break;
            case 'format':
                this.selectedFormatOption = selected;
                break;
        }

        console.log(this.selectedExpiryOption);
        console.log(this.selectedFormatOption);
    }
}
