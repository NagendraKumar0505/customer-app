export interface ILogger{
     log(str:string):void;
}

export class BaseLogger implements ILogger{
    /**
     * log
     */
    public log(str:string) {
       
    }
}

export class DbLogger extends BaseLogger{
    /**
     * log
     */
    public override log(str:string) {
        console.log('using dbLogger'+str);
    }
}

export class ConsoleLogger extends BaseLogger{
    /**
     * log
     */
    public override log(str:string) {
        console.log('using ConsoleLogger'+str);
    }
}

