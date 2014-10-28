/*
*Lab util.
*/
(function(){
	//Added an util object to Lab.
	Lab.util = {};

	//define a extend method for inheritance.
	Lab.util.extend = function(superClass,constructor,methods,statics){
			// Set up the prototype object of the subclass
			constructor.prototype = inherit(superClass.prototype);
			constructor.prototype.constructor = constructor;
			// Copy the methods and statics as we would for a regular class
			if (methods) extend(constructor.prototype, methods);
			if (statics) extend(constructor, statics);
			// Return the class
			return constructor;
	}

	// a method of the superclass constructor
	Function.prototype.extend = function(constructor, methods, statics) {
		return Lab.util.extend(this, constructor, methods, statics);
	};

	//inherit() returns a newly created object that inherits properties from the
	// prototype object p. It uses the ECMAScript 5 function Object.create() if
	// it is defined, and otherwise falls back to an older technique.
	function inherit(p) {
		// p must be a non-null object
		if (p == null) throw TypeError(); 
		// If Object.create() is defined...
		if (Object.create) {
			// then just use it.
			return Object.create(p); 
		}
		// Otherwise do some more type checking
		var t = typeof p; 
		if (t !== "object" && t !== "function"){
		 throw TypeError();
		}
		// Define a dummy constructor function.
		function f() {}; 
		// Set its prototype property to p.
		f.prototype = p; 
		// Use f() to create an "heir" of p.
		return new f(); 
	}
})();