import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {


    const [categoriyes, setCategoriyes] = useState([]);
    useEffect( () => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategoriyes(data.data.news_category))
    } ,[])



    // {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    // }

    return (
        <div>
            <h2 className="font-semibold">All Category({categoriyes.length})</h2>
            <div className="flex flex-col gap-2 mt-3 ">
                {
                    categoriyes.map(category => <NavLink 
                        to={`/category/${category.category_id}`}
                        className="btn justify-start bg-base-100"
                        key={category.category_id}>{category.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;