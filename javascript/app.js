alert("This page show Engineering Majors");
var userName = prompt("what is your name ?");
alert("welcome " + userName );

var major = prompt (" what is your major " ," Eelectrical , Civil , Architectur , Mechnaical " );


if(major === " Eelectrical "){
document.write('<img src="https://collegelearners.com/wp-content/uploads/2020/09/electrical-electronics-engineering-top-ms-specializations-jobs-salaries.jpg" />' )
alert('welcom  in Eelectrical major')

}else if (major === " Civil "){
    document.write('< img src="https://www.sdsmt.edu/uploadedImages/Content/Academics/Degrees/_Images/DegCEEbanner.jpg.jpg" >'
    alert('welcom  in Civil major')

}else if (major === " Architectur "){
    document.write('<img src="https://www.onlineschoolscenter.com/wp-content/uploads/2019/01/shutterstock_451541479.jpg" />' )
    alert('welcom in Architectur major ')

}else if (major === " Mechnaical "){
    document.write('<img src="https://collegelearners.com/wp-content/uploads/2021/03/inline-mecheng.jpg" />' )
    alert('welcom in mecanical major ')

}else{
    alert('welcom at all of major ')
}
document.write('<h2>' +'welcome' + userName +'you are a'  + major + '</h2>')


