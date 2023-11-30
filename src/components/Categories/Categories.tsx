import styles from "./Categories.module.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getCategories } from "../../features/categoriesSlice";
import Category from "./Category";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => {
        return (
          <Category
            categoryName={category.Name}
            key={category._id}
            categoryId={category._id}
          />
        );
      })}
    </div>
  );
};

export default Categories;
