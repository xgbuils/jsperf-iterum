const fs = require('./fs')
const templateLiteral = require('./template-literal')

function buildData(templateName, options) {
    const file = templateName.replace('.tpl', '')
    console.log(`./src/templates/${templateName}`)
    return fs.readFile(`./src/templates/${templateName}`, 'utf8')
        .then(data => templateLiteral(data, options))
        .then(data => ({data, file}))
}

module.exports = buildData
