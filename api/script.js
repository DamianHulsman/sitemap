var url="https://15euros.nl/api/bier_basic.php"; 
$.getJSON(url, function(biertjes, status){
  //console.log("Data:", data);
  //console.log("Status:", status);
  getTable(biertjes);
});

function getTable(beers) {
	//console.log(b);
	var beerTable = $("<table>").addClass("tbl_sm");
  var tr = $("<tr>")  // maak header row met td's aan
    	.append( $("<th>").html("naam"   ) )
    	.append( $("<th>").html("brouwer") )
    	.append( $("<th>").html("gisting") )
      .append( $("<th>").html("%"      ) )
      .append( $("<th>").html("prijs"  ) );
 	beerTable.append(tr);
  
  $(beers).each(function( key, beer ) {
    //console.log( beer );
    var p = beer.perc*100; 
    tr = $("<tr>")
    	.append( $("<td>").html(beer.naam   ) )
    	.append( $("<td>").html(beer.brouwer) )
    	.append( $("<td>").html(beer.gisting) )
      .append( $("<td>").html(p.toFixed(2)+"%") )
      .append( $("<td>").html("&euro;"+beer.inkoop_prijs) );
    beerTable.append(tr);
  });
  
  $("#divBeer").append(beerTable);
}

