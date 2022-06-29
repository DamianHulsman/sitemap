var url="https://api.hypixel.net/resources/skyblock/items"; 
$.getJSON(url, function(gameitems){
  getList(gameitems), getTable(gameitems);
});

function getList(items) {
	console.log(items);
  
	let html = "<ul>";
  for(let i=0; i < items.length; i++) {
  	html += "<li>" + items[i].name + ", " + items[i].tier + "</li>";
  }
  html += "</ul>";
  
  //$('#items').append("Item: " + html + "<br>");
}
function getTable(gItems) 
{
    //console.log("Gameitems = ", gItems.items)
  var itemTable = $("<table>").addClass("tbl_sm");
  var tr = $("<tr>")  // maak header row met td's aan
      .append( $("<th>").html("Name"   ) )
      .append( $("<th>").html("Rarity") )
      .append( $("<th>").html("NPC sell price") )
      .append( $("<th>").html("Category") )
      .append( $("<th>").html("Health") )
      .append( $("<th>").html("Def.") )
      .append( $("<th>").html("Crit damage") )
      .append( $("<th>").html("Crit chance") )
      .append( $("<th>").html("Strength") )
      .append( $("<th>").html("Intel.") )
      .append( $("<th>").html("Ferocity") )
      .append( $("<th>").html("SSC") )
      .append( $("<th>").html("Magic find") )
      .append( $("<th>").html("Mining speed") )
      .append( $("<th>").html("Mining fortune") )
      .append( $("<th>").html("Farming fortune") )
      .append( $("<th>").html("Foraging fortune") )
      .append( $("<th>").html("True def.") )
      .append( $("<th>").html("Pet luck") )
      .append( $("<th>").html("Pristine") )
      .append( $("<th>").html("Speed") )
      .append( $("<th>").html("Damage") );

    itemTable.append(tr);
  
  $(gItems.items).each(function(index, gameItem) {
    //console.log("gameItem = ", gameItem)

    tr = $("<tr>")
          tr.append( $("<td>").html(gameItem.name) )
          tr.append( $("<td>").html(gameItem.tier) )
          tr.append( $("<td>").html(gameItem.npc_sell_price) )
          tr.append( $("<td>").html(gameItem.category) )
    if(gameItem.stats)
      { 
          
        if(gameItem.stats.health){  
          tr.append( $("<td>").html(gameItem.stats.health) )
        }
        else if(gameItem.stats.defence){  
          tr.append( $("<td>").html(gameItem.stats.defence) )
        }
        else if(gameItem.stats.critical_damage){  
          tr.append( $("<td>").html(gameItem.stats.critical_damage) )
        }
        else if(gameItem.stats.critical_chance){  
          tr.append( $("<td>").html(gameItem.stats.critical_chance) )
        }
        else if(gameItem.stats.strength){  
          tr.append( $("<td>").html(gameItem.stats.strength) )
        }
        else if(gameItem.stats.intelligence){
          tr.append( $("<td>").html(gameItem.stats.intelligence) )
        }
        else if(gameItem.stats.ferocity){
          tr.append( $("<td>").html(gameItem.stats.ferocity) )
        }
        else if(gameItem.stats.pristine){
          tr.append( $("<td>").html(gameItem.stats.pristine) )
        }
        else if(gameItem.stats.walk_speed){
          tr.append( $("<td>").html(gameItem.stats.walking_speed) )
        }
	else if(gameItem.stats.walk_speed){
          tr.append( $("<td>").html(gameItem.stats.damage) )
        }
      }

    itemTable.append(tr);
  });
  $("#items").append(itemTable);
}
