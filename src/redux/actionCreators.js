export function addWord(title, detail) {
    return { type: 'ADD_WORK', title, detail };
}

export function toggleAdd() {
    return { type: 'TOGGLE_ADD' };
}

export function toggleDone(id) {
    return { type: 'TOGGLE_DONE', id };
}

export function toggleShow(id) {
    return { type: 'TOGGLE_SHOW', id };
}

export function showToDo() {
    return { type: 'FILTER_TODO' };
}

export function showDone() {
    return { type: 'FILTER_DONE' };
}

export function showAll() {
    return { type: 'FILTER_ALL' };
}
