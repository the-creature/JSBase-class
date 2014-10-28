(function(){
	/*
	*Trash class in Lab.
	*/
	function Trash(name){
		this.name = name;
	}

	//inheirt Equipment class
	Lab.util.extend(Equipment,Trash);

	//add a new method to Trash class.
	Trash.prototype.crush = function(){
		console.log("execute the Trash destory method with name is :"+this.name);
	}

	//new a instance of Trash class.
	var trash=new Trash("Trash");

	//execute the action method which inheirt from Equipment class.
	trash.action("trash action");

	//execute crush method of Trash class.
	trash.crush();

})();