import {CHANGE_CHECKED, INPUT_VALUE, NEWLIST} from './actionTypes'

export function changeChecked(i) {
    return {
        type: CHANGE_CHECKED,
        value: i
    }
}

export function getInputValue(e) {
    return {
        type: INPUT_VALUE,
        value: e
    }
}

export function newList() {
    return {
        type: NEWLIST,
    }
}