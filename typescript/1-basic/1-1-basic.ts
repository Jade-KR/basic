{
    // number
    const num:number = 1;

    // string
    const str:string = 'hello';

    // boolean
    const bool:boolean = false;

    // undefined
    let name:undefined; // 💩
    let age:number | undefined;
    age = undefined;
    age = 1;

    function find():number | undefined {
        return undefined;
    }

    // null
    let person:null; // 💩
    let person2:string | null;

    // unknown 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void 생략가능
    function print(): void {
        console.log('hello');
        return;
    }

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        while(true) {}
    }

    // object 
    let obj: object; //💩
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({ name: 'jade'} );
    acceptSomeObject({ animal: 'dog' });
}