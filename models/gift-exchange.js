const { BadRequestError } = require("../utils/errors");

class GiftExchange
{
    static pairs(names)
    {
        if((names.length % 2) == 1)
        {
            throw new BadRequestError("The number of names can't be odd.");
        }


        let tuplePair;
        let firstItem = "";
        let secondItem = "";
        let itemsUsed = [];
        let tuples = [];

        function getRandom(names, element, itemsUsed)
        {
            element = names[Math.floor(Math.random() * names.length)]
            while(itemsUsed.includes(element))
            {
                element = names[Math.floor(Math.random() * names.length)]
            }
            itemsUsed.push(element)
            return element;
        }

        while(true)
        {
            firstItem = getRandom(names, firstItem, itemsUsed)
            // itemsUsed.push(firstItem);
            secondItem = getRandom(names, firstItem, itemsUsed);
            // itemsUsed.push(secondItem);

            tuplePair = [firstItem, secondItem];
            tuples.push(tuplePair);
            if(tuples.length == names.length/2)
            {
                break;
            }
        }

        return tuples;
    }

    

    static traditional(names)
    {
        //VARIABLES USED
        let firstName;
        let secondName;
        let nextName;
        let string;
        let usedStringArray = [];
        let stringArray = [];

        //FUNCTIONS TO GET-RANDOM-NAME AND BUILD STRING TO PUSH
        function getRandom(names, element, usedStringArray)
        {
            element = names[Math.floor(Math.random() * names.length)];
            while(usedStringArray.includes(element))
            {
                element = names[Math.floor(Math.random() * names.length)];
            }
            usedStringArray.push(element)
            return element
        }
        function buildString(stringArray, firstName, secondName, string)
        {
            string = firstName + " is giving a gift to " + secondName; 
            stringArray.push(string) 
        }

        //ACTUAL TRADITIONAL PROGRAM
        firstName = getRandom(names, firstName, usedStringArray)
        secondName = getRandom(names, secondName, usedStringArray)
        buildString(stringArray, firstName, secondName, string);

        while(true)
        {
            nextName = secondName;
            secondName = getRandom(names, nextName, usedStringArray)
            buildString(stringArray, nextName, secondName, string)

             if(usedStringArray.length == names.length)
             {
                 break;
             }
        }
        buildString(stringArray, secondName, firstName, usedStringArray)

        return stringArray;
    }
}

module.exports = GiftExchange;