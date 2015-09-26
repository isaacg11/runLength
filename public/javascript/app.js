
function runLength(str){
	var output ='';
	while(str.length > 0){
		var current = new RegExp(str[0] + '+');
		var length = str.match(current).toString().split('').length;
		ouput += length.toString() + str.match(current)[0][0];
		str = str.replace(str.match(current)[0], '');
	}
	return output;
}
console.log(runLength('aaabbc'));