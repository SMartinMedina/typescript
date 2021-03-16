
//Forma tradicional de crear una funcion
function func1(paramNum:number, paramString:string){
  console.log("Numero: " + paramNum + " . String: " + paramString);
}

// Funciones flecha (sin retorno)
const func2 = (paramNum:number, paramString:string) => console.log("Numero: " + paramNum + " . String: " + paramString)
const func3 = (paramTupla:[string, number, boolean]) => console.log("String: " + paramTupla[0] + " . Number: " + paramTupla[1] + " . Boolean: " + paramTupla[2])

//Funciones flecha (con retorno)
const func4 = (paramNum1:number, paramNum2:number):number => {return paramNum1+paramNum2}

//Funcion con parametro opcional (sin default)
const func5 = (paramNum1:number, paramString:string, paramOpcional?:boolean) =>
  {
    if(!paramOpcional){
      console.log("Con param opcional/Sin default. Num: " + paramNum1 + ". String: "+ paramString)
    }else{
      console.log("Con param opcional. Num: " + paramNum1 + ". String: "+ paramString + ". Opcional: " +paramOpcional)
    }
  }

  //Funcion con parametro opcional (con default)
  const func6 = (paramNum1:number, paramString:string, paramOpcional:boolean = true) => {console.log("Con param opcional. Num: " + paramNum1 + ". String: "+ paramString + ". Opcional(conDefault): " +paramOpcional)}

  //Funcion con parametro REST
  const func7 = (paramNum:number, ...lista:string[]) => {console.log("Number: "+ paramNum+". Lista: "+ lista)}

func1(1,"aaa")
func2(2,"bbbb")
func3(["s",1,true])
func1(func4(1,2),"zzz")
func5(1,"aaa")
func6(1,"aaa",false)
func6(1,"aaa")
func7(10,"Aaa","Bbbb","Cccc","Dddd")
