/*
Problem statement:-
Create a function to determine the topper of the class, using the object
representing marks obtained by different students.


Requirements:-
Create your function with the name findClassTopper, which takes an object as it's
parameter.The topper determined should be based on the average of marks obtained by
the students.Return the topper as a string representing the name of the student
with the highest average.


Input
studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
  };

findClassTopper(studentMarks)


Output
Jane 
*/





const studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
    };
	

function findClassTopper(studentMarks){
    let topperMarks=0;
    let topper;
    for(let student in studentMarks)//loop over each student
      {
        let sum=0;
        for(let marks of studentMarks[student]) //loop over each marks of any student
          {
            sum+=marks;
          }
          //arr[student]=sum;
          if(sum>topperMarks)
          {
            topperMarks=sum;
            topper=student;
          }   
      }
    return topper;   
}

console.log(findClassTopper(studentMarks));