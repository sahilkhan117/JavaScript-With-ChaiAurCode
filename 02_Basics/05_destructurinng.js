const course = {
    coursename : "JS in HINDI",
    prize : "999",
    CourseInstructor : "Hitesh"
}

// DE-STRUCTURING ⛓️‍💥💥
// course.CourseInstructor => "Hitesh"
const {CourseInstructor: ins} = course // ◽ value saved in a variable
console.log(ins);
