let studentDetails = [
    {
        studentname: "Manojkumar",
        studentage: 23,
        studentemail: "maddymano434@gmail.com",
        studentplace: "Namakkal",
        pinnumber: 637203
    },
    {
        studentname: "Annamalai ",
        studentage: 28,
        studentemail: "s.annamalai234@gmail.com ",
        studentplace: "Salem",
        pinnumber: 638504
    },
    {
        studentname: "Razak S",
        studentage: 31,
        studentemail: "razzaksr0789@gmail.com",
        studentplace: "Trichy",
        pinnumber: 637404
    }
];



export let Create = (obj) => {
    studentDetails.push(obj);
}


export const Listall = () => {
    return studentDetails;
}

export const Read = (myindex) => {
    return studentDetails[myindex];
}


export const Remove1 = (index) => {
    studentDetails = studentDetails.filter(
        (data, pos) => {
            return pos !== index;
        }
    )
    return studentDetails;
}