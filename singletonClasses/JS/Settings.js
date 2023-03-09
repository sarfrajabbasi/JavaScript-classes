/*
In this video tutorial I'll be showing you a technique to create a Singleton Class in JavaScript with ES6 classes.

Singleton classes are used when you only want a single instance of a class to be created - this is useful for things like "settings" or "environmental variable" accessors.
*/

class Settings{
    constructor(){
        if(Settings.instance instanceof Settings){
            return Settings.instance
        }
        this.settingObject = {
            "background" : "#ff0000",
            "version" : Math.floor(Math.random()*4000)

        }
        Object.freeze(this.settingObject)
        Object.freeze(this);
        Settings.instance =this
    }
    get(key){
        return this.settingObject[key]
    }

}