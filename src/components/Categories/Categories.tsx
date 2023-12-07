import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Categories.module.css";
import { getCategories } from "../../features/categoriesSlice";
import Category from "./Category";
import { Link } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={styles.categoriesContainer}>
      <Link to={`/programs`} className={styles.category}>
        <h3 className={styles.categoryName}>Все курсы</h3>
      </Link>
      {categories.map((category) => {
        return (
          <Category
            categoryName={category.categoryName}
            key={category._id}
            categoryId={category._id}
          />
        );
      })}
    </div>
  );
};

export default Categories;
