var pokemonsTypeMap = new Map();

$(function() {
    console.log('IS ALIVE!!!!11');
    getPokemonType();
    catchpokemons();
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
            var columnType = $("<td>").text(pokemonsTypeMap.get(i+1));
            columnImg.append(img);
            linha.append(id);
            linha.append(columnName);
            linha.append(columnImg);
            linha.append(columnType);         
            $("tbody").append(linha);
            i++;
        });
    });
}

function getPokemonType() {
    cont = 1;
    while (cont <= 150) {
        $.get(`https://pokeapi.co/api/v2/pokemon/${cont}/`, function(data) {
            var id = data.id;
            var type = data.types[0]["type"]["name"];
            pokemonsTypeMap.set(id, type);
        });
        cont++;
    };
};
