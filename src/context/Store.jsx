import { useState, useEffect } from "react";
import { postPrint } from "../bluePrint/contextPrint";

import { useQuery } from "@apollo/client";
import { allCoursesQuery,getUserById,allPopularCoursesQuery } from "../graphql/Queries";
import jwt_decode from "jwt-decode";

const Store = () => {
  
  /* Define All States */
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [allCoursesData, setAllCoursesData] = useState([]);
  const [allPopularCoursesData, setAllPopularCoursesData] = useState([]);
  const [allCoursesLoading, setAllCoursesLoading] = useState(true);
  const [allPopularCoursesLoading, setAllPopularCoursesLoading] = useState(true);
  const [posts, setPosts] = useState(postPrint);
  const [myCourses, setMyCourses] = useState([]);
  const [assignments, setAssignments] = useState({});
  const [theme, setTheme] = useState(false)

  let decoded = {id:null};
  const token = localStorage.getItem("accessToken");
  if(token){
    decoded = jwt_decode(token, "anandpandit");
  }

  const { loading, error, data } = useQuery(getUserById,{
    variables: {
      getUserByIdId:decoded.id
    } 
  });
       
  /* Define GraphQL Hooks */
  const getAllCourses = useQuery(allCoursesQuery);
  const getAllPopularCourses = useQuery(allPopularCoursesQuery);
  
  /* Get All Courses Data */
  useEffect(() => {
    if (getAllCourses?.data?.courses) {
      setAllCoursesData(getAllCourses?.data?.courses);
      setAllCoursesLoading(false);
    }
    if (data && data.getUserById) {
      setUser(data.getUserById);
      setUserLoading(false);
    }
    if (getAllPopularCourses?.data?.popularCourses) {
      let popularCourses = getAllPopularCourses.data.popularCourses;
      if(popularCourses.length >6) {
        popularCourses = popularCourses.slice(0,6);
      }
      console.log("popularCourses",popularCourses);
      setAllPopularCoursesData(popularCourses);
      setAllPopularCoursesLoading(false);
    }
    else {
      setAllPopularCoursesLoading(false);
    }
    if (error) {
      setUserLoading(false);
    }
    if (getAllCourses?.error?.message) {
      console.log(getAllCourses.error.message);
      setAllCoursesLoading(false);
    }
  }, [getAllCourses?.data]);

 
  //returning for global access
  return {
    user,
    setUser,

    userLoading,
    setUserLoading,

    allPopularCoursesData,
    allPopularCoursesLoading,
    setAllPopularCoursesLoading,

    allCoursesData,
    allCoursesLoading,

    posts,
    setPosts,

    myCourses,
    setMyCourses,

    assignments,
    setAssignments,
    
    theme, setTheme,
  };
};

export default Store;
