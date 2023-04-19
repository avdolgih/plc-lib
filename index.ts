import Var from "./alg/Var";
import CWT_BK_04040202 from "./device/CWT_BK_04040202";

const moduleA2 = new CWT_BK_04040202(1);


const fire: Var = moduleA2.subDI1();        //Пожар
const ventDiff: Var = moduleA2.subDI2();    //Перепад вентилятора
const ventStart: Var = moduleA2.subDI2();    //Запуск вентилятора


class Vent2 {

    public start: boolean = false;
    public diff: boolean = false;
    public launchDelay: number = 5000;

    private delayElapsed: boolean = false;

    public outStart: boolean = false;
    public alarm: boolean = false;

    public update() {
        this.alarm = this.start && !this.diff && this.delayElapsed;
        this.outStart = this.start && !this.alarm;
    }
}


const vent = new Vent2();

while(true) {
    updateIO();
    vent.start = 
    vent.diff = IO.ventDiff;
    vent.update();
    ventStart = vent.outStart;
}


function updateIO() {

}



fire.subscribe(fireChanged);



function fireChanged() {

}

class Vent {

    public start(v: Var) {

    }

    public diff(v: Var) {

    }

    public launchDelay(v: Var) {

    }

    public update() {

    }
}






// import Device from "./Modbus/Device";
// import Register, { Access, Type } from "./Modbus/Register";
// import Server, { Rate } from "./Modbus/Server";

// const registers: Register[] = [
//     new Register(40051, Access.Read, Type.UINT16), //AI0
//     new Register(40052, Access.Read, Type.UINT16), //AI1
//     new Register(40053, Access.Read, Type.UINT16), //AI2
//     new Register(40054, Access.Read, Type.UINT16), //AI3
//     new Register(40055, Access.Read, Type.UINT16), //AI4
//     new Register(40056, Access.Read, Type.UINT16), //AI5
//     new Register(40057, Access.Read, Type.UINT16), //AI6
//     new Register(40058, Access.Read, Type.UINT16), //AI7
//     new Register(40059, Access.Read, Type.UINT16), //AI8
//     new Register(40060, Access.Read, Type.UINT16), //AI9
//     new Register(40057, Access.Read, Type.UINT16), //AI10
//     new Register(40058, Access.Read, Type.UINT16), //AI11
//     new Register(40059, Access.Read, Type.UINT16), //AI12
//     new Register(40061, Access.Read, Type.UINT16), //AI13
//     new Register(40062, Access.Read, Type.UINT16), //AI14
//     new Register(40063, Access.Read, Type.UINT16), //AI15
// ];

// const devices : Device[] = [
//     new Device(registers)
// ];


// const server = new Server(devices, 'USB3', Rate.r115200);
// server.start();


let isPooling = true;
let index = 0;

function start() {
    isPooling = true;

    while (true) {
        setTimeout(() => {
            console.log(++index);
        }, 0);
    }
}

setTimeout(() => {
    stop();
}, 5000);

function stop() {
    isPooling = false;
}