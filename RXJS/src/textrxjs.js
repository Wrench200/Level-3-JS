import { Subject } from "rxjs";


const eventEmitter = new Subject();
eventEmitter.subscribe(console.log);
eventEmitter.next('hello world')