class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        return input.substring(0,3);
    }

    getSuffix(input){
        return input.substring(3,7);
    }

    getMiddleCharacter(input){
        let middle = Math.floor(input.length / 2);
        return input[middle];
    }

    getFirstWord(input){
        let first = input.split(" ");
        return first[0];
    }
    
    getSecondWord(spaceDelimnatedInput){
        let second = spaceDelimnatedInput.split(" ");
        return second[1];
    }
    
    reverse(input){
        return input.split("").reverse().join("");
    }
}

module.exports = StrangerStrings;