import {
  Exception,
  ValueObject,
  ValueObjectDeserializationMapper,
} from "@sohailalam2/abu";
import {
  ElementalComponentState,
  StateIsNotConsistentException,
} from "@sohailalam2/elemental-web";


export interface DropDownStateData {
  option: String;
  items: Array<String>;
}

export class State extends ElementalComponentState<DropDownStateData> {
  static defaultState<Type, K extends ValueObject<Type>>(): K {
    return State.from({
      option: String,
      items: Array,
    }) as K;
  }

  static deserializationMapper(): ValueObjectDeserializationMapper | undefined {
    return {
      option: String,
      items: Array,
    };
  }
}
