module.exports.greet = (name) => {
    //test 2
    let message = "Hello, ";
    if (name === null) {
        return "Hello, my friend.";
    }
    if (typeof (name) === "object") {
        //test 6
        const idxShoutedName = name.findIndex(name => name === name.toUpperCase());
        if(idxShoutedName !== -1){
            let pup = [...name];
        pup.splice(idxShoutedName,1);
    message+= pup.join(' and ')
message += `. AND HELLO ${name[idxShoutedName]}!`;
return message;       
}
//test 8

const idxWithDoubleQuotes = name.findIndex(name => name.includes('"'));
if (idxWithDoubleQuotes !== -1) {
    const pup = name.reduce((names, name , idx) => {
        if(idx === idxWithDoubleQuotes){
            const escapedName = name.substr(1, name.length - 2);
            return [...names, escapedName];
        }
        return [...names,name];
    }, []);
    return message + pup.join(' and ') + '.'
}
//test 7
const idxThereComma = name.findIndex(name => name.includes(','));
if(idxThereComma !== -1){
    let pup =[...name];
    pup.splice(idxThereComma, 1,...pup[idxThereComma].split(', '));
    name = pup;
}

        if (name.length === 2) {
            return `Hello, ${name[0]} and ${name[1]}`;
        } else {
            let message = "Hello,"
            for (let i = 0; i < name.length - 1; i++) {
                message += ` ${name[i]},`
            }
            message += ` and ${name[name.length - 1]}.`;
            return message;
        }
    }
    //test 3
    if (name.toUpperCase() === name) {

        return `HELLO ${name}!`;
    }
    // test 1
    return `Hello, ${name}`;
}