import {useState}from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs , setBlogs]=useState([
        {title:" My new website",body:"imite ton ideal",author:"hamidie",id:1},
    {title:" Wellcome to my blog",body:"imite ton ideal",author:"achta",id:2},
    {title:" Wellcome to my page",body:"imite ton ideal",author:"yosko",id:3},])
    return ( 
    <div className="home">
        <BlogList blogs={blogs} />
    </div>
     );
}
 
export default Home;