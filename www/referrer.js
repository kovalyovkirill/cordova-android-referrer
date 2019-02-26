var exec = require('cordova/exec');
var MAX_CHECK_COUNT = 5;

function getReferrer(success, error, count) {

	if(!success) {
		return new Promise(function(resolve, reject) {
			count = 0;
			getReferrer(resolve, reject, count);
		});
	}

    exec(function(ref) {
    	if(ref) {
    		success(ref);
    	} else {
			if (count <= MAX_CHECK_COUNT) {
				if (!isFinite(count)) {
					count = 0;
				}
				count++;
				getReferrer(success, error, count);
			} else {
				error('max count reached');
			}
    	}
    }, error, 'referrer');
}

exports.getReferrer = getReferrer;
exports.get = getReferrer;
