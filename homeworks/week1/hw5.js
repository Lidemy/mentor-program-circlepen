export const add = (a, b) => {
    var buffer = 0;
    var ans = [];
    for (var i = a.length-1;i > -1; i--){
        var bit = parseInt(a[i],10) + parseInt(b[i],10) + buffer;
        if (bit > 10){
            buffer = 1;
            bit = bit % 10;
        }
        else{
            buffer = 0;
            
        }
    
        ans.push(bit.toString());
        console.log(ans);

}
    if (buffer === 1) ans.push('1');
    ans = ans.reverse();
    console.log(ans);
    return ans.join('');
    
}