class Vehicle {
    constructor (make, model, year){
        this.Make = make;
        this.Model = model;
        this.Year = year;
    }
    honk(){
        return "beep"
    }
    toString(){
        return `The vehicle is a ${this.Make} ${this.Model} from ${this.Year}`
    }
}

class Car extends Vehicle{
    constructor (make, model, year){
        super(make,model,year);
    }
    numWheels(){
        return 4;
    }
}

class Motorcycle extends Vehicle {
    constructor (make, model, year){
        super(make,model,year);
    }
    numWheels(){
        return 2;
    }
    revEngine(){
        return "VROOM!!!"
    }
}



class Garage {
    constructor (capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle){
        if( !(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!"
        }

        if(this.vehicles.length >= this.capacity){
            return "Sorry, we're full."
        }
        this.vehicles.push(newVehicle);
        return "vehicle added!"
    }

}