let url = "dados.xml";
var id = 0;

$.ajax(url)
    .done(function(xml){
        $(xml).find("kombatente").each(function(){
            $("#cards").append('<div class="card"><a href="individual.html?id='+$(this).find("id").text()+'"><p class="procurado">Kombatente</p> <img class="foto" src="'+ $(this).find("id").text() +'.jpg"><p class="vivo">Vivo</p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("nome_real").text() +'<\p> <p class="rec">Nível de Poder:'+ $(this).find("nivel_de_poder").text()+' </p><p> Status:'+ $(this).find("status").text()+'</a> </p><\div>');
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });

var url_string = window.location.href;
var url1 = new URL(url_string);
var id = parseInt(url1.searchParams.get("id"));

$.ajax(url)
    .done(function(xml){
        $(xml).find("kombatente").each(function(){
            var pos = parseInt($(this).find("id").text());
            if(id === pos){
                $("#individual").append('<div class="card"><p class="procurado">Kombatente</p> <img class="foto" src=".jpg'+ $(this).find("id").text() +'.jpg"><p class="vivo">Vivo</p> <p class="nome">'+ $(this).find("nome").text() +'</p> <p>'+ $(this).find("nome_real").text() +'<\p> <p class="rec">Nível de Poder:'+ $(this).find("nivel_de_poder").text()+' </p><p> Status:'+ $(this).find("status").text()+' </p><\div>');
            }
        });
    })
    .fail(function(){
        alert("Ocorreu um erro na leitura do arquivo XML.");
    });
