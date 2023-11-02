const month = "March"
switch(month){
    case "Jan" :
        console.log("Jan");
        break;

    case "Feb" :
        console.log("Feb");
        break;

    case "March" :
        console.log("March");
        break;               //break nhi hai to : condt ke baad ke saare cases execute ho jate hain
                                //except default case

    case 4 :
        console.log("Apr");
        break;

    case 5 :
        console.log("May");
        break;

    default :
        console.log("Default case run");
}