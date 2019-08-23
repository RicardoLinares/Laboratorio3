function Repetidor(numerico:number, cadena?:string) : void
{
    if(cadena)
    {
      for(let i:number = 0; i<numerico; i++)
      {
        console.log(cadena);
      }
    }
    else
    {
      console.log((numerico*-1));
    }
}
