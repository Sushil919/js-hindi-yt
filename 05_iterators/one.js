for (let i = 1; i<=10 ; i++){
    console.log(" ");
    console.log(`Outer loop value : ${i} \n The table of ${i} is`);
    for (let j = 1; j<=10; j++){
        console.log(" ");
        console.log(`${i} * ${j} = ${i*j}`);
    }
}