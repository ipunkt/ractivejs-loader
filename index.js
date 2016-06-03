var Ractive = require('Ractive');
var rcu = require('rcu');

rcu.init(Ractive);

module.exports = function(source) {
    this.cachable();

    var component = rcu.parse(source);

    var script;
    script = [];

    if (component.script) {
        script.push(component.script);
    }

    if (component.template) {
        script.push('module.exports.template = ' + JSON.stringify(component.script));
    }

    if (component.css) {
        script.push('module.exports.template = ' + component.css);
    }

    return script.join(';\n\n');
};