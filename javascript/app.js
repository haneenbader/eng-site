
alert("This page show Engineering Majors");
var userName = prompt("what is your name ?");
alert("welcome " + userName );

var major = prompt (" what is your major " ,"Eelectrical,Civil,Architectur,Mechnaical" );

document.write('<h2>welcome '+userName+' you are in '+major+' major</h2>' )

if(major === "Eelectrical"){
document.write('<h3>Eelectrical engineering</h3>')
document.write('<p> Electrical and computer engineering is an exceptionally broad professional field. The undergraduate program is structured to provide an optimal balance between fundamental theory and hands-on laboratory practice. Consequently, modern laboratories with up-to-date equipment are maintained to support course work in digital and microprocessor systems, VLSI design, digital systems processing, quantum and optical electronics, electronic circuit design, feedback control, solid-state electronics, and electric power systems</p>')
document.write(' <img src="https://collegelearners.com/wp-content/uploads/2020/09/electrical-electronics-engineering-top-ms-specializations-jobs-salaries.jpg">')
alert('welcome  in Eelectrical major')

}else if (major === "Civil"){
    document.write('<h3>Civil engineering</h3>')
    document.write('<p> Civil engineers are innovators, creators, and entrepreneurs. They design and build buildings, bridges, dams, roller coasters, and even sound stages for rock bands. They devise complex systems like transportation and water-supply networks, or information systems for design and management of engineering projects. They also design water treatment and wastewater treatment systems and hazardous waste remediation projects that protect the environment.</p>')
    document.write('<img src="https://www.sdsmt.edu/uploadedImages/Content/Academics/Degrees/_Images/DegCEEbanner.jpg">')
    alert('welcome  in Civil major')

}else if (major === "Architectur"){
    document.write('<h3>Architectur engineering</h3>')
    document.write('<p> Architectural engineers specialize in designing the engineering systems within buildings. Architectural Engineering is in many ways similar to civil and mechanical engineering, but it is specifically geared toward the building industry. There are only a handful of Architectural Engineering programs dotted throughout the United States, and some of them require five years of fairly rigorous and diverse study. For the lucky few who graduate from these programs, though, employment opportunities are exceptional and career opportunities are bright.</p>')
    document.write('<img src="https://www.onlineschoolscenter.com/wp-content/uploads/2019/01/shutterstock_451541479.jpg"/>' )
    alert('welcome in Architectur major ')

}else if (major === "Mechnaical"){
    document.write('<h3>Mechnaica engineering</h3>')
    document.write('<p> The Sibley School of Mechanical and Aerospace Engineering offers an accredited undergraduate program in mechanical engineering. This program is designed to provide a broad background in the fundamentals of this discipline as well as to offer an introduction to the many professional and technical areas with which mechanical engineers are concerned. The program is appropriate for a wide range of career objectives, including supervised engineering practice, advanced professional engineering education, and other professorial education such as business, law, or medicine. Two main areas of concentration are: mechanical systems and materials processing and engineering of fluids, energy and heat transfer systems</p>')
    document.write('<img src="https://collegelearners.com/wp-content/uploads/2021/03/inline-mecheng.jpg"/>' )
    alert('welcome in mecanical major ')

}else{
    alert('welcome at all of major ')
}




