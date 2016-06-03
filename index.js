var Ractive = require('ractive');
var rcu = require('rcu');

rcu.init(Ractive);

module.exports = function(source) {
    this.cacheable();

    var component = rcu.parse(source);

    var script;
    script = [];

    if (component.script) {
        script.push(component.script);
    }

    if (component.template) {
        script.push('module.exports.template = ' + JSON.stringify(component.template));
    }

    if (component.css) {
        script.push('module.exports.css = ' + component.css);
    }

    return script.join(';\n\n');
};