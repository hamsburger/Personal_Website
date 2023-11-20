import AppRoutes from "../../Components/allRoutes";

class DictLevelChecker {
    constructor (title, checkNumLevels=2){
        this.template = AppRoutes;
        this.title = title;
        this.checkNumLevels = checkNumLevels
        // this.maxLevels = this.getMaxLevels(this.template, 1)
        // console.log("Max Levels: ", this.maxLevels)
    }
  
    generate_iterator(length){
        return Array(length).fill().map((_, i) => i)
    }
  
    getMaxLevels( dictObject, currLevel ){
        // Reached end
        if (!dictObject){
            return currLevel - 1
        }
        return Object.keys(dictObject).reduce((p, c) => { 
          return Math.max(p, this.getMaxLevels(dictObject[c], currLevel + 1))
        }, 0)
    }
    
    userCheckDict(dictObject) {
        return this.checkDict(dictObject, this.template);
    }       
  
    checkDict(dictObject, templateDict, dictPath = "", level = 1,
              matchTemplateDict = false){
        /**
         * Goal is to make sure all dictObject keys can be found in templateDict
         */
        // console.log("Dict:",dictObject)
        // console.log("Template:",templateDict)
        if (!dictObject) return true // match
        
        // no need to check props and externalURLs
        let dictKeys = Object.keys(dictObject).filter(key => !key.match(/props|urlsExternal/g))
        if (dictKeys.length === 0) return true  // match
        if (!templateDict || Object.keys(templateDict).length === 0) throw Error(`${dictPath} on level ${level} does not match with any key in` +
        `template\n\tTitle:${this.title}`) // not ma

        let templateKeys = Object.keys(templateDict)

        
        
        dictKeys.sort()
        templateKeys.sort()
        // if (dictKeys.length > templateKeys.length){ 
        //     throw Error(`dictKeys on level ${level} is longer than templateKeys!\n` +
        //         `Extra keys:\n\t${dictKeys.slice(templateKeys.length)}\n` +
        //         `Path:\n\t${dictPath}`
        //     )
        // }
        let NotInTemplateKeys = null
        if (!matchTemplateDict) {
            NotInTemplateKeys = dictKeys.filter(elem => !new Set(templateKeys).has(elem))
        } else {
            NotInTemplateKeys = templateKeys.filter(elem => !new Set(dictKeys).has(elem))
        }
        if (NotInTemplateKeys.length > 0) throw Error("These dict keys are NOT found in Template keys:\n" +
            `Extra Keys:\n\t${NotInTemplateKeys}\n` +
            `Path:\n\t${dictPath}\n` + 
            `Title:\n\t${this.title}`);
  
        if (level === this.checkNumLevels) return true;
        return dictKeys.every((key, i) => (
            this.checkDict(dictObject[key], templateDict[key], [dictPath, key].join("."), level + 1)    
        ))
  
    }
}
  
export default DictLevelChecker;