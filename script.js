

    //make politician objects
	var createPoli = function(name, poliColor) {//factory function 
		var poli = {};                  //this is object literals ex.
    
    	poli.name = name;
    	poli.elecResults = null;
    	poli.poliColor = poliColor;
    
    	//method to tally votes
    	poli.countVotes  = function(){
     		this.totalVotes = 0;
    		for (var i = 0; i < this.elecResults.length; i++) {
    			this.totalVotes = this.totalVotes + this.elecResults[i];
    		}
    	}; 

    return poli;//value to be returned - what new output want when function is run
	}; //factoryfunc close

	//candidates
	var carol = createPoli("Carol", [132,17,11]);
	var samual = createPoli("Samual", [245,141,136]);

//arrays for candidate election results
carol.elecResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
samual.elecResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

//states counted wrong,  replace before tally
	carol.elecResults[9] = 1;
	samual.elecResults[9] =  28; 

	carol.elecResults[4] = 17; 
	samual.elecResults[4] = 38; 

	carol.elecResults[43] = 27; 
	samual.elecResults[43] = 27; 




//function to determine winner by state
var setStateResults = function(state) {
	theStates[state].winner = null;

	if (carol.elecResults[state] < samual.elecResults[state]) {
		theStates[state].winner = samual;
	} else if (carol.elecResults[state] > samual.elecResults[state]) {
		theStates[state].winner = carol;
	} 
   
  //set color of state to winner color
  var stateWinner = theStates[state].winner;
    if (stateWinner !== null) {
    	theStates[state].rgbColor = stateWinner.poliColor;
    } else {
    	theStates[state].rgbColor = [11, 32, 57];
    }

 var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var stateAbbr = header.children[0].children[1];
  var candidate1 = body.children[0].children[0]; 
  var results1 = body.children[0].children[1];
  var candidate2 = body.children[1].children[0]; 
  var results2 = body.children[1].children[1];
  var listStateWinner = body.children[2].children[1]; 
     
 	stateName.innerText = theStates[state].nameFull;
  	stateAbbr.innerText = theStates[state].nameAbbrev; 
 	candidate1.innerText = carol.name;
  	results1.innerText = carol.elecResults[state];
  	candidate2.innerText = samual.name;
   	results2.innerText = samual.elecResults[state];
	
	if (theStates[state].winner === null){
		listStateWinner.innerText = "DRAW";
	} else {
		listStateWinner.innerText = theStates[state].winner.name;
	}

};


carol.countVotes();
samual.countVotes();

console.log("Carol's Total = " + carol.totalVotes);
console.log("Samual's Total = " + samual.totalVotes);



var winner = "???";

	if (carol.totalVotes < samual.totalVotes) {
			winner = samual.name;
	} else if (carol.totalVotes > samual.totalVotes) {
			winner = carol.name;
	} else {
	    	winner = "It's a tie!"
	}


//console.log("AND THE WINNER IS ..." + winner + "!!!");

//populate tables on map
var countryTable;
  var countryTable = document.getElementById('countryResults');
	var row = countryTable.children[0].children[0];
	row.children[0].innerText = carol.name;
	row.children[1].innerText = carol.totalVotes;
	row.children[2].innerText = samual.name;
	row.children[3].innerText = samual.totalVotes;
	row.children[5].innerText = winner;

