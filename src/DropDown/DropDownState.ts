import { ValueObject } from "@sohailalam2/abu";
import { ElementalComponentState } from "@sohailalam2/elemental-web";

export interface DropDownStateData {
  prefix?: string;
  selected: string;
  options?: string[];
}

export class DropDownState extends ElementalComponentState<DropDownStateData> {
  static defaultState<Type, K extends ValueObject<Type>>(): K {
    return DropDownState.from({
      prefix: 'Unknown',
      selected: 'Unknown',
      options: [ 'Unknown' ],
    }) as K;
  }
}
