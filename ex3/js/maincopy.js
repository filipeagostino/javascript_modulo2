pokemonsTypeMap = [];

$(function() {
    console.log('IS ALIVE!!!!11');
    getPokemonType();
});


function catchpokemons() {
    $.get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0", function(data) {
        console.log(data["results"]);
        var i = 0;
        $(data["results"]).each(function(){
            console.log(data["results"][i]);
            var linha = $("<tr>");
            var id = $("<td>").text(`${i+1}`);
            var columnName = $("<td>").text(data["results"][i]["name"]);            
            var columnImg = $("<td>");
            var img = $("<img>").attr("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${i+1}.png`);
            var columnType = $("<td>").text(pokemonsTypeMap[i]);
            columnImg.append(img);
            linha.append(columnImg);
            linha.append(columnType);
            linha.append(columnName);
            linha.append(id);
            $("tbody").append(linha);
            i++;
        });
    });
}

function getPokemonType() {
    cont = 1;
    while (cont <= 150) {
        $.get(`https://pokeapi.co/api/v2/pokemon/${cont}/`, function(data) {
            var type = data.types[0]["type"]["name"];
            pokemonsTypeMap.push(type);   
            console.log(`Type: ${type}`);
        });
        console.log(`Id: ${cont}`);
        cont++;
    };
    console.log(pokemonsTypeMap);
};
