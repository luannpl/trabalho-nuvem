const express = require("express");
const app = express();


app.get("/", function(req,res){
    res.send("Bem vindoooo");
})

app.get("/login", function(req,res){
    res.send("<h1>Faça seu login!</h1>");
})

app.get("/login/suporte", function(req,res){
    res.send("<h1>Está precisando de ajuda?</h1> <button>Sim</button> <button>Não</button>");
})


app.listen(4000, function(erro){
    if(erro){
        console.log("Erro ao iniciar.");
    }else{
        console.log("Servidor Iniciado")
    }
})