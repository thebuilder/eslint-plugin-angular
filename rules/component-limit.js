/**
 * limit the number of angular components per file
 *
 * The number of AngularJS components in one file should be limited.
 * The default limit is one.
 *
 * @styleguideReference {johnpapa} `y001` Define 1 component per file
 * @version 0.11.0
 */
'use strict';

var angularRule = require('./utils/angular-rule');


module.exports = angularRule(function(context) {
    var limit = context.options[0] || 1;
    var count = 0;
    var msg = 'There may be at most {{limit}} AngularJS {{component}} per file, but found {{number}}';

    function checkLimit(callee) {
        count++;
        if (count > limit) {
            context.report(callee, msg, {
                limit: limit,
                component: limit === 1 ? 'component' : 'components',
                number: count
            });
        }
    }

    return {
        'angular:animation': checkLimit,
        'angular:config': checkLimit,
        'angular:controller': checkLimit,
        'angular:directive': checkLimit,
        'angular:factory': checkLimit,
        'angular:filter': checkLimit,
        'angular:provider': checkLimit,
        'angular:run': checkLimit,
        'angular:service': checkLimit
    };
});

module.exports.schema = [{
    type: 'integer'
}];
