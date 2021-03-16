//Forma tradicional de crear una funcion
function func1(paramNum, paramString) {
    console.log("Numero: " + paramNum + " . String: " + paramString);
}
// Funciones flecha (sin retorno)
var func2 = function (paramNum, paramString) { return console.log("Numero: " + paramNum + " . String: " + paramString); };
var func3 = function (paramTupla) { return console.log("String: " + paramTupla[0] + " . Number: " + paramTupla[1] + " . Boolean: " + paramTupla[2]); };
//Funciones flecha (con retorno)
var func4 = function (paramNum1, paramNum2) { return paramNum1 + paramNum2; };
//Funcion con parametro opcional (sin default)
var func5 = function (paramNum1, paramString, paramOpcional) {
    if (!paramOpcional) {
        console.log("Con param opcional/Sin default. Num: " + paramNum1 + ". String: " + paramString);
    }
    else {
        console.log("Con param opcional. Num: " + paramNum1 + ". String: " + paramString + ". Opcional: " + paramOpcional);
    }
};
//Funcion con parametro opcional (con default)
var func6 = function (paramNum1, paramString, paramOpcional) {
    if (paramOpcional === void 0) { paramOpcional = true; }
    console.log("Con param opcional. Num: " + paramNum1 + ". String: " + paramString + ". Opcional(conDefault): " + paramOpcional);
};
//Funcion con parametro REST
var func7 = function (paramNum) {
    var lista = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lista[_i - 1] = arguments[_i];
    }
    console.log("Number: " + paramNum + ". Lista: " + lista);
};
func1(1, "aaa");
func2(2, "bbbb");
func3(["s", 1, true]);
func1(func4(1, 2), "zzz");
func5(1, "aaa");
func6(1, "aaa", false);
func6(1, "aaa");
func7(10, "Aaa", "Bbbb", "Cccc", "Dddd");
