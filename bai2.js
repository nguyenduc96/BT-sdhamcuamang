function inPut(){
    let input = document.getElementById('input').value;
    let result = [];
    for(let i = 0; i< input.length; i++) {
        result.push(input[i]);
        if(i !== input.length - 1) {
            if(parseInt(input[i]) % 2 === 0 && parseInt(input[i+1]) %2 ===0)
            {
                result.push('-')
            }
        }
    }
    document.getElementById('ouptput').innerHTML=result.join('');
}