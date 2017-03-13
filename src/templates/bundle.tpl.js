const factory = require('cdn-factory')
const version = '${version}'
const underscoreVersion = version.split('.').join('_')

factory('${globalName}' + '_' + underscoreVersion)
