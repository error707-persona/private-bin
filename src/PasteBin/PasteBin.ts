import { Component, ElementalComponent } from '@sohailalam2/elemental-web';

import template from './template.html?raw';
import styles from './styles.scss?inline';
import base from "../base.css?inline";
@Component({ template, styles: [base] })
export class PasteBin extends ElementalComponent {
  protected render(): void {
    // do nothing as all we want is to render the template
  }
}

// ----------------------
// somewhere else in code
// ----------------------

