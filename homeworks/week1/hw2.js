export const capitalize = (str) => {
  var Regx = /^[A-Za-z]*$/;
    if(Regx.test(str)){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    else return str
}