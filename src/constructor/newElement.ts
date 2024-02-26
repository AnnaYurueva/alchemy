import {IElement} from "../interfaces/element";

export function newElement(id: string = '', name: string = '', icon: string = ''): IElement {
    return {
        id: id,
        name: name,
        icon: icon,
    }
}
