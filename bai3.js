function chanGe(){
    let char = document.getElementById('input').value;
    let result =[];
    let character='';
    for (let i = 0; i < char.length; i++) {
        character = char.charAt(i);
        if (!isNaN(character *1 )){
            result.push(char[i]);
            continue;
        }
        else {
            if (character == character.toUpperCase()){
                result.push(char[i].toLowerCase());
                continue;
            }
            if (character == character.toLowerCase()){
                result.push(char[i].toUpperCase());
            }
        }
    }
    document.getElementById('output').innerHTML= result.join('');
}