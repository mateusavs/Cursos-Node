module.exports = function(){
    var NodeObject = {
        descricao: "Exemplo de Módulo no Node.js",
        calcular : function(x, y){
            return x + y;
        }
    };
    return NodeObject;
}