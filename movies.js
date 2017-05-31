var request = new XMLHttpRequest();
var output = "";
var data_json;    
    
    request.open('GET','https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

    request.onreadystatechange = function(){
        
        if((request.status == 200) && (request.readyState == 4)){
            data_json = JSON.parse(request.response);

            for(var data in data_json){
            for(var i = 0; i < data_json[data].length; i++){
                if(data_json[data][i][10] == "Golden Gate Bridge"){
                    
                    output += "<h2>" + data_json[data][i][8] + "</h2>" ;
                    output += "<h4>" + data_json[data][i][9] + "</h4>" ;
                    output += "<h4>" + data_json[data][i][13] + "</h4>" + "<br>";  
                    }
                document.getElementById("result").innerHTML = output;
             }
        }
    }   
}
request.send();