import axios from "axios";

export async function oneCourse(courseId, func) {
  const { data } = await axios.get(`/api/course/oneCourse/${courseId}`);
  func(data)

}

export async function allInstructorCourses(id, func) {
  const { data } = await axios.get(`/api/course/allInstructorCourses/${id}`);
  func(data)
}

export async function getAllCoursesOfUser(id, func) {
  try{
    const { data } = await axios.get(`/api/order/getAllCoursesOfUser/${id}`);
    func(data)

  }catch(err){
    func(data)
  }
}

export async function allFrontendCourses(func) {
  const { data } = await axios.get("/api/course/allFrontendCourses");
  func(data)
}

export async function allDatabaseCourses(func) {
  const { data } = await axios.get("/api/course/allDatabaseCourses");
  func(data)
}

export async function allBackendCourses(func) {
  const { data } = await axios.get("/api/course/allBackendCourses");
  func(data)
}

export async function allDesigningCourses(func) {
  const { data } = await axios.get("/api/course/allDesigningCourses");
  func(data)
}

export async function allFullstackCourses(func) {
  const { data } = await axios.get("/api/course/allFullstackCourses");
  func(data)
}

export async function allOtherCourses(func) {
  const { data } = await axios.get("/api/course/allOtherCourses");
  func(data)
}

export async function allCourses(func) {
  const { data } = await axios.get("/api/course/allCourses");
  func(data)
}

export async function checkIfUserIsEnrolledInCourse(courseId, id, func) {
  const { data } = await axios.get("/api/order/checkIfUserIsEnrolledInCourse",{ courseId, id });
  func(data)
}

export async function createCourse(instructorId, name, tagline, type, description, assignmentQuestion, image, func){
  const { data } = await axios.post(
    "/api/course/createCourse",
    {instructorId,name,tagline,type,description,assignmentQuestion,image});
    func(data)
}

export async function createQuiz(id,question, correct, incorrect, func) {
  const { data } = await axios.post(`/api/course/createQuiz/${id}`, {question, correct, incorrect});
  func(data)
}

export async function getQuizByCourse(courseId,func) {
  const { data } = await axios.get(`/api/course/getQuizByCourse/${courseId}`);
  func(data)
}
