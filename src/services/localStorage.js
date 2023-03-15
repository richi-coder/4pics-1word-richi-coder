function setItem(name, value) {
    window.localStorage.setItem(name, value)
}

function getItem(name) {
    return window.localStorage.getItem(name)
}

export default {
    setItem,
    getItem
}