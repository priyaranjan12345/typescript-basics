abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {

    }

    abstract display(): void

    getNumber() {}
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number
    ) {
        super(cameraMode, filter)
    }

    display(): void {
        console.log();
        super.filter
    }
}



export {}