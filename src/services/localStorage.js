function setItem(name, value) {
    window.localStorage.setItem(name, value)
}

function getItem(name) {
    return window.localStorage.getItem(name)
}

function removeItem(name) {
    return window.localStorage.removeItem(name)
}

export default {
    setItem,
    getItem,
    removeItem
}