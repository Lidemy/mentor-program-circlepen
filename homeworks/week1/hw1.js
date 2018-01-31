export const stars = (n) => {
    var arr=[]
    for (var i = 0; i < n; i++){
        arr.push('*'.repeat(i+1))
    }
    
        return arr;
}