/*
    Require this file
    call the function
    and pass in the the arguments

*/

function createID(userID, courseName){
    let name = courseName.split("");
    let nameSize = name.length;
    let midChar;

    if(nameSize % 2 == 0){
        midChar = name[nameSize / 2];
    }else{
        midChar = name[Math.floor(nameSize / 2)];
    }
    
    let ID = userID + Math.floor((Math.random() * 10)) + name[0] + midChar + name[nameSize - 1];

    return ID + Math.floor((Math.random() * 10));
}

export default createID;