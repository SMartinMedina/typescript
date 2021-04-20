class Generic<T>{
  nombre:string
  edad:T
  mostrar<T>(dato:T):T{
    return dato
  }
}
const obj = new Generic()
