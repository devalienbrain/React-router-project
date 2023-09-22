import { useEffect, useState } from "react";
import EachCategoryJob from "./EachCategoryJob/EachCategoryJob";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../../../../public/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2>Featured Jobs List: {categories.length}</h2>
      <div className="flex gap-4">
        {categories.map((category) => (
          <EachCategoryJob
            key={category.id}
            category={category}
          ></EachCategoryJob>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
