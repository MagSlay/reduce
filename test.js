function extractValue(arr, key){
    return arr.reduce(function(acc, name){
        acc.push(name[key]);
        return acc;
    }, []);
};

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc, cVal){
        let lowerCased = cVal.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        };
        return acc;
    }, {});
};

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, idx){
        acc[idx][key] = value;
        return acc;
    }, arr);
};

function partition(arr, cb){
    return arr.reduce(function(acc,next){
        if(cb(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
};