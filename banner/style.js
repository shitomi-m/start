'use-strict';

const mkLongShadow = ( n ) => {
    let xy = '';
    for( let i = 1; i <= n; i++ ){    
        
        if ( i === n ){
            xy = xy + '-' + i + 'px ' + i + 'px ' + '#444';      
        } else {
            xy = xy + '-' + i + 'px ' + i + 'px ' + '#444,';   
        } 
    }
    return xy;
}

let testLong = document.getElementById('bnr7-text');
testLong.style.textShadow = mkLongShadow(130);

