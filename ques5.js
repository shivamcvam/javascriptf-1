let typeofpacket="overnight";
switch(typeofpacket){
    case "standerd":
       console.log("Your package will be delivered in next 3-5 Days");
       break;
    case "experss":
        console.log("Your package will be delivered in next 1-2 Days");
        break;
    case "overnight":
        console.log("Your package will be delivered in tomorow");
        break;
    default:
        console.log("inviled packet type");
}