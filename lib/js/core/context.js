export default class Context{
    static version: '1.0.0';

    constructor(features){
        this.features = features || {};
    }
    
    checkFeatures(features){
        return this._isAllFeaturesEnabled(this._enabledFeatures(features)) && this._isAllFeaturesDisabled(this._disabledFeatures(features));
    }

    _enabledFeatures(features){
        let result = {};
        for(let key in features){
            if(features[key]){
                result[key] = true;
            }
        }

        return result;
    }

    _disabledFeatures(features){
        let result = {};
        for(let key in features){
            if(!features[key]){
                result[key] = false;
            }
        }

        return result;
    }

    _isAllFeaturesEnabled(checks){
        if(!checks){
            return true;
        }

        return Object.keys(checks).find((c) => !this.features[c]) === undefined;
    }

    _isAllFeaturesDisabled(checks){
        if(!checks){
            return true;
        }

        return Object.keys(checks).find((c) => this.features[c]) === undefined;
    }
}