function Musaei(q)
{
    var k = 0;
    while(k!=q)
    {
        var temp = M(k);
        if(temp == q)
        {
            return k;
        }
        else{
            k++;
        }
    }
    var endTime = performance.now()
}


 function M(q){
    if(q==0 || q==1)
    {
        return 1;
    }
    else if(q==2)
    {
        return 2;
    }
    else if(q%2 == 0)
    {
        var t = q/2;
        if(t>1)
        {
            return (M(t) + M(t+1) + t);
        }
    }
    else if(q%2 != 0)
    {
        var t = (q-1)/2;
        if(t>=1)
        {

            return (M(t-1) + M(t) + 1);
        }
    }
}

var startTime = performance.now()
console.log(Musaei(15));
var endTime = performance.now()
console.log(`Eexecution time ${endTime - startTime} milliseconds`)