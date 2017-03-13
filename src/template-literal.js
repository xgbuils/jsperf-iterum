module.exports = function (str, obj) {
    return str.replace(/\$\{(.+?)\}/g, (m, key) => (obj || {})[key] || m)
}
