window.addEventListener("load", function(){

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){


            
            console.log(json.length);
            let container = document.getElementById("container");
            for(let i = 0; i<json.length; i++){

                //get json data
                let first = json[i].firstName;
                console.log(first);








                container.innerHTML += "<div class='astronaut'>" +
                    "<div class='bio'>" +
                        "<h3>" + json[i].firstName +" " +json[i].lastName+ "</h3>" +
                        "<ul>" +
                            "<li>Hours in space: ${json.hoursInSpace}</li>" +
                            "<li>Active: ${json.active}</li>" +
                            "<li>Skills: </li>" +
                        "</ul>" +
                    "</div>" + 
                "</div>"
               
            }
        })
    })

});