// Fig. 10.10: RollDice.js
// Summarizing die rolling frequencies with an array instead of switch
var frequency = [ , 0, 0, 0, 0, 0, 0 ]; // frequency[0] uninitialized
var totalDice = 0;
var dieImages = new Array(6); // array to store img elements

// get die img elements
function start()
{
   var button = document.getElementById( "rollButton" );
  
  
   
   button.addEventListener( "click", rollDice, false );
   var length = dieImages.length; // get array's length once before loop

   for ( var i = 0; i < length; ++i )
   {
      dieImages[ i ] = document.getElementById( "die" + (i + 1) );
   } // end for
} // end function start


// roll the dice
function rollDice()
{	var x, xVal;
	xVal = window.prompt( "How Many Times you want to roll the dice" );
	x = parseInt( xVal ); 
   var face;  // face rolled
   var length = dieImages.length;
for(var z=0;z<x;z++)
{
   for ( var i = 0; i < length; ++i )
   {
      face = Math.floor( 1 + Math.random() * 6 );
      tallyRolls( face ); // increment a frequency counter
      setImage( i, face ); // display appropriate die image
      ++totalDice; // increment total 
   } // end for
}

   updateFrequencyTable();
} // end function rollDice

// increment appropriate frequency counter
function tallyRolls( face )
{
   ++frequency[ face ]; // increment appropriate counter                       
} // end function tallyRolls

// set image source for a die
function setImage( dieNumber, face )
{
   dieImages[ dieNumber ].setAttribute( "src", "die" + face + ".png" );
   dieImages[ dieNumber ].setAttribute( "alt", 
      "die with " + face + " spot(s)" );
} // end function setImage

// update frequency table in the page
function updateFrequencyTable()
{
   var results = "<table><caption>Die Rolling Frequencies</caption>" +
      "<thead><th>Value</th><th>Theory</th>" + 
      "<th>%Theory</th><th>Actual</th><th>%Actual</th><th>Diff</th><th>%Diff</th></thead><tbody>";
   var length = frequency.length;
   var sumPercent=0;
   var totalDiff=0;
    var totalpercentDiff=0;
	var diff=0;
   // create table rows for frequencies
   for ( var i = 1; i < length; ++i )
   {
	   var theory= 100/6;
	   sum= eval(frequency.join("+"));
	   diff= (sum/6)-frequency[i];
	   percentdiff= (diff/(sum/6))*100;
      results += "<tr><th>"+i+"</th><td>" + sum/6+ "</td><td>" + 
          theory.toFixed(2) +"</td><td>"+frequency[ i ]+"</td><td>"+formatPercent(frequency[ i ] / totalDice)+
		"</td><td>"+diff+ "</td><td>"+percentdiff.toFixed(2)+"</td</tr>";
		 
		
		sumPercent+=frequency[i]/totalDice*100;
		totalDiff=totalDiff+diff;
		totalpercentDiff=totalpercentDiff+percentdiff;
		
   } // end for
	
	
	
   results += "</tbody>"+
				"<tfooter><tr><th>Summary</th><td>"+sum+"</td><td>"+sumPercent.toFixed(2)+"</td><td>"+sum+"</td><td>"+sumPercent.toFixed(2)+"</td><td>"+totalDiff+"</td><td>"+totalpercentDiff.toFixed(2)+"</td></tr></tfooter>"+"</table>";
   document.getElementById( "frequencyTableDiv" ).innerHTML = results;
} // end function updateFrequencyTable

// format percentage
function formatPercent( value )
{
   value *= 100;
   return value.toFixed(2);
} // end function formatPercent
function Differ(inputValue)
{
	
	if(inputValue==0)
	{
		inputValue=inputValue+1;
	}
	else
	{
		inputValue=inputValue-inputValue;
	}
	
		
	return inputValue;
}

window.addEventListener( "load", start, false );

