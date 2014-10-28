
/*
*The base class of Lab, all equipment of lab can inheirt from this class.
*/
function Equipment(name){
	this.name = name;
}

/*
*common method for all equipment of lab .
*/
Equipment.prototype.action = function(name){
	console.log('action name: ' + name);
};
