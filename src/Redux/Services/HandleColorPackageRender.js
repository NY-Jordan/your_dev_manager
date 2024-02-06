let colorIndex = 0
const ReInitIndexColor = () =>  colorIndex = 0;
const NextIndexColor = (key) =>  colorIndex = colorIndex +1;
const ChangeTheStateToTheNextColor = (colorsPackage)  =>  {
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
export const  HandleColorPackageRender = (colorsPackage) => {
  return ChangeTheStateToTheNextColor(colorsPackage);
}