interface GPS{
    long:number;
    lat:number;
    getCoordinates():void;
}

interface MediaPlayer{
    start():void;
    stop():void;
    pause():void;
}

class Smartphone implements GPS, MediaPlayer{
   public long:number = 234;
   public lat:number = 123; 
   public getCoordinates(): void {
        console.log("The coordinates are: \nlatitude: "+ this.lat+ " Longitude: "+ this.long);
   }

   public start(): void {
        console.log("\nThe video has been started.");
   }

   public stop(): void {
        console.log("The video has been stopped.");
    }

    public pause(): void {
        console.log("The video has been paused.");
    }
}

var phone:Smartphone = new Smartphone();
phone.getCoordinates();
phone.start();
phone.stop();
phone.pause();