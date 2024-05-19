let colorIndex = 0
const ReInitIndexColor = () =>  colorIndex = 0;
const NextIndexColor = (key : number) =>  colorIndex = colorIndex +1;
const ChangeTheStateToTheNextColor = (colorsPackage :any)  =>  {
  let index = colorIndex; 
  let color  =  colorsPackage.colors[index] ;
  if(!color){
    ReInitIndexColor()
    index = colorIndex;
    color  =  colorsPackage.colors[index] ;
  }
  NextIndexColor(index+1);
  return color;
}
export const  HandleColorPackageRender = (colorsPackage : any) => {
  return ChangeTheStateToTheNextColor(colorsPackage);
}