(function(){

	/*
	*Bench class in Lab.
	*/
	function Bench(name){
		this.name = name;
	}

	//inheirt Equipment class
	Lab.util.extend(Equipment,Bench);

	//add a new method to Bench class.
	Bench.prototype.place = function(){
		console.log("execute the Bench place method with name is :"+this.name);
	}

	//new a instance of Bench class.
	var bench=new Bench("Bench");

	//execute the action method which inheirt from Equipment class.
	bench.action("trash action");

	//execute place method of Bench class.
	bench.place();

})();
