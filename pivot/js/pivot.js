$(function () {
    var lookupNomes = ["William", "Lucas", "Luan", "Vitinhoq", "Eduardo", "Gabriel"];
    var lookupFuncao = ["BackEnd","FrontEnd", "BancoDados", "Teste","FullStack"];
        var rawData = [
        { nome: 0, funcao: 1},
        { nome: 1, funcao: 3},
        { nome: 2, funcao: 0},
        { nome: 3, funcao: 4},
        { nome: 4, funcao: 0},
        { nome: 5, funcao: 0}
        ];
    var inputFunction = function (callback) {
        rawData.forEach(function (element, index) {
            callback({
                Nome: lookupNomes[element.nome],
                Funcao: lookupFuncao[element.funcao]
            });
        });
    };

    $("#output").pivotUI(inputFunction, {
        rows: ["Nome"],
        cols: ["Funcao"]
    });
});

