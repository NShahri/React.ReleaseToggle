export default function flatten (...args) {
    var features = {};

    args.forEach((arg) => {
        if (!arg){
            return;
        }
        var argType = typeof arg;

        if (argType === 'string') {
            features[arg] = true;
        }
        else if(argType === 'number'){
            features[arg] = true;
        } 
        else if (Array.isArray(arg)) {
            Object.assign(features, flatten(...arg));
        } 
        else if (argType === 'object') {
            for(let key in arg) {
                if (arg.hasOwnProperty(key)) {
                    features[key] = arg[key];
                }
            }
        }
    });

    return features;
}