export default function setClasses(baseClass, addedClasses){
    if (baseClass && addedClasses){
        return addedClasses ? baseClass + " " + addedClasses : baseClass;
    }
    if (!baseClass){
        console.warn('setClasses expects: "baseClass" and "addedClasses"');
    }
    return baseClass;
};

