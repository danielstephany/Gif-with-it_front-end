/**
  * @desc adds a new class to the existing class string if the prop matches a value in the options array
  * @param string existingClasses - the string of classes that will be added onto and returned 
  * @param string classBase - the first part of the name of the new class
  * @param string prop - the name of the new property for which the class is being added
  * @param array optionArray - the array of options that will be iterated over to find a match for prop
  * @return string - string of classes 
*/

export default function applyClassName(existingClasses, classBase = '', prop, optionArray) {
    if (typeof existingClasses === 'string' && (typeof prop === 'string' ||  typeof prop === 'number') && Array.isArray(optionArray)) {
        let newClasses = existingClasses,
            className = classBase,
            lowerCaseProp = prop;

        if (typeof lowerCaseProp === 'number'){
            lowerCaseProp = String(lowerCaseProp);
        } else {
            lowerCaseProp = lowerCaseProp.toLowerCase();
        }

        optionArray.forEach(item => {
            if (lowerCaseProp === item) className += item;
        });

        if (className === classBase) {
            return existingClasses;
        } else if (newClasses) {
            return newClasses + ' ' + className;
        }

        return className;
    } else {
        return existingClasses;
    }
};