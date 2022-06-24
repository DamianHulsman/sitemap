function fgetLandTabel()
{
    $.getJSON( "https://restcountries.com/v3.1/all"), function(landen, i){
        
        console.log("AJAX-data via jQuery", landen);
}
        
        $("#divA").empty;
        landen.forEach(function (land, i)
        {
            $("#divA").append(land.name.common + "<br>");
            let tr = $("<tr>");
        })
}