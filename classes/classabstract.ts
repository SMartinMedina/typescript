abstract class abs{
  abstract caminar():void
  abstract correr():void

  saluda(saludo:string):string{
    return saludo
  }
}
class hijaDeAbs extends abs{
  caminar(){                        //Obligada a implementar el metodo abstracto declarado en la clase abstracta padre
    console.log("caminar")
  }
  correr(){                       //Obligada a implementar el metodo abstracto declarado en la clase abstracta padre
    console.log("correr")
  }
}
