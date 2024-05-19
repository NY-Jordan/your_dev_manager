export const  ColorsActions = {
    CHANGE_COLORS_PACKAGE : "CHANGE_COLORS_PACKAGE" ,
}

export const ChangeColorPackage = (colors : Array<string>) => ({
    type : ColorsActions.CHANGE_COLORS_PACKAGE,
    payload : {colors : colors}
});


