import Context from './context';

const defaultContext = new Context();

export default class ContextManager {
    static setFeatures(features){
        this.currentContext = new Context(features);
    }

    static checkFeatures(features){
        return (this.currentContext || defaultContext).checkFeatures(features);
    }
}