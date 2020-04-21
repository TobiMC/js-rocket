var doCoolStuff = function(){
	var currentClassName = document.getElementById('cool').className;
	document.getElementById('cool').className = 'cool red';

	if (currentClassName == 'cool'){
		document.getElementById('cool').className = 'cool red';
	} else{
		document.getElementById('cool').className = 'cool';
	}
}
var car = {
	make: "Lexus",
	type: "ES300",
	color: "Navy",
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4',
	],
	turnOn: function(){
		this.isTurnedOn = true;
	},
	fly: function(){
		alert('fly');
	},
	switchCar: function(isOn){
		console.log('turn car '+isOn);
		if (isOn == true){
			this.isTurnedOn = true;
		} else{
			this.isTurnedOn = false;
		}
		
	} 
};

console.log('Hello!');