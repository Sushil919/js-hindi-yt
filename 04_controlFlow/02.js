const month = 3
switch(month){
    case 1 :
        console.log("Jan");
        break;

    case 2 :
        console.log("Feb");
        break;

    case 3 :
        console.log("March");
        // break;               //break nhi hai to : condt ke baad ke saare cases execute ho jate hain
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