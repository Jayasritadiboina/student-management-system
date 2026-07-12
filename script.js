function addStudent()

{

    let namefromhtml = document.getElementById('name').value;

    let marksfromhtml  = document.getElementById('marks').value;

    marksfromhtml = Number(marksfromhtml); // number

    students.push({

        id: students.length + 1,

        name: namefromhtml,

        marks: marksfromhtml

    })

    displayStudents();

}

function getAvgMarks(){

    let sum = 0;

    for(let i=0;i<students.length;i++)

    {

        console.log('each mark'+students[i].marks);

        sum = sum + students[i].marks;

        console.log('sum at each level'+sum);

    }

    let avg = sum / students.length;

    document.getElementById("avg").innerText = "Average marks are : "+ avg;

    console.log(avg);

}
function getTopScorer(){

    let topScorer = students[0];

    for (let i=1;i<students.length;i++)

    {

        if(students[i].marks > topScorer.marks)

        {

           topScorer = students[i]; 

        }

    }

    document.getElementById('topScroer').innerText = topScorer.name + " scored" + topScorer.marks;

}

