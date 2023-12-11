import React, { useEffect } from "react";
import consultSlice, { getConsult } from "../../features/consultSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Consul.module.css"




export const Consul = () => {
  const consults = useSelector((state) => state.consults.consults);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getConsult());
  }, [dispatch]);
  
  return (
    <div className={styles.tableContain}>
        
      {consults.map((item) => {
        return (
  <div>
    <div>
        
        
        
        
    </div>
  <div className={styles.tableInfo}>
    <div><p>Имя</p>{item.consultName}</div>
        <div><p>Номер</p>{item.consultNumber}</div>
        <div><p>Почта</p>{item.consultMail}</div>
        <div><p>Организация</p>{item.consultOrganization}</div>
        
        </div>


        </div>

        )
      })}
    </div>
  );
};

export default Consul;
