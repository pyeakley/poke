document.getElementById("pokeSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    let value = document.getElementById("pokeInput").value;
    if (value === "")
        return;
    console.log(value);

    const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118"

    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {

        let results = "";
        let nameArray = [];
        for(let i = 0; i <json.results.length; i++){
            nameArray.push(json.results[i].name);
        }
        nameArray[486] = "giratina";
        value = value.toLowerCase();
        let currPoke = nameArray.indexOf(value) + 1;
        //console.log(nameArray);
        const url2 = "https://pokeapi.co/api/v2/pokemon/" + currPoke

        fetch(url2)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                let heightFt = Math.floor(json.height * 3.937 / 12);
                let heightIn = Math.round((json.height * 3.937 % 12) * 10) / 10;
                let weight = Math.round((json.weight / 4.536) * 10) / 10
                let noFt = false;
                if(heightFt === 0){
                    noFt = true;
                }
                heightFt = heightFt.toString();
                heightIn = heightIn.toString();
                weight = weight.toString();
                results += "<h2 id='head'>" + json.name[0].toUpperCase() + json.name.slice(1) + "</h2>";
                results += "<img src=" + json.sprites.front_default + "></img>";
                results += "<div id='textbox'>";
                results += "<p id='type'>Type: " + json.types[0].type.name[0].toUpperCase() + json.types[0].type.name.slice(1) + "</p>";
                console.log(json.types[0].type.name[0].toUpperCase() + json.types[0].type.name.slice(1))

                if(noFt === false){
                    results += "<p>Height: " + heightFt + "' " + heightIn + "\"</p>";
                } else{
                    results += "<p>Height: " + heightIn + "\"</p>";
                }

                results += "<p>Weight: " + weight + " pound(s)\<p>";
                results += "</div>"
                let styling = "#pokeResults{";
                if(json.types[0].type.name === "normal"){
                    styling += "background-color: #A8A77A;";
                } else if(json.types[0].type.name === "fire"){
                    styling += "background-color: #EE8130;";
                } else if(json.types[0].type.name === "water"){
                    styling += "background-color: #6390F0;";
                } else if(json.types[0].type.name === "electric"){
                    styling += "background-color: #F7D02C;";
                } else if(json.types[0].type.name === "grass"){
                    styling += "background-color: #7AC74C;";
                } else if(json.types[0].type.name === "ice"){
                    styling += "background-color: #96D9D6;";
                } else if(json.types[0].type.name === "fighting"){
                    styling += "background-color: #C22E28;";
                } else if(json.types[0].type.name === "poison"){
                    styling += "background-color: #A33EA1;";
                } else if(json.types[0].type.name === "ground"){
                    styling += "background-color: #E2BF65;";
                } else if(json.types[0].type.name === "flying"){
                    styling += "background-color: #A98FF3;";
                } else if(json.types[0].type.name === "psychic"){
                    styling += "background-color: #F95587;";
                } else if(json.types[0].type.name === "bug"){
                    styling += "background-color: #A6B91A;";
                } else if(json.types[0].type.name === "rock"){
                    styling += "background-color: #B6A136;";
                } else if(json.types[0].type.name === "ghost"){
                    styling += "background-color: #735797;";
                } else if(json.types[0].type.name === "dragon"){
                    styling += "background-color: #6F35FC;";
                } else if(json.types[0].type.name === "dark"){
                    styling += "background-color: #705746;";
                } else if(json.types[0].type.name === "steel"){
                    styling += "background-color: #B7B7CE;";
                } else if(json.types[0].type.name === "fairy"){
                    styling += "background-color: #D685AD;";
                } else{
                    styling += "background-color: mediumblue;";
                }
                styling += "border: 3px solid dimgrey;";

                if(json.types[0].type.name === "electric" || json.types[0].type.name === "steel" ||
                    json.types[0].type.name === "ice" || json.types[0].type.name === "grass" ||
                    json.types[0].type.name === "ground"){
                    styling += "color: dimgrey;";
                }

                styling += "}";

                document.getElementById("color").innerHTML = styling;
            document.getElementById("pokeResults").innerHTML = results;
        });

    });
});