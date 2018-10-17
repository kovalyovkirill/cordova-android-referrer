var exec = require('cordova/exec');

function getReferrer(success, error) {
    exec(function(ref) {
    	if(ref) {
    		success(ref);
    	} else {
    		setTimeout(function() {
    			getReferrer(success, error)
    		}, 500);
    	}
    }, error, 'referrer');
};

exports.getReferrer = getReferrer;