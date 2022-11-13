import React from "react";
import { Link } from "react-router-dom";
import { Arrival } from "../../components/Destanation/Arrival";
import { DateTo } from "../../components/Destanation/DateTo";
import { Departure } from "../../components/Destanation/Depature";
import { DateBack } from "../../components/Destanation/DateBack";
import { useAppSelector } from "../../hooks/react-hooks";

import styles from "./styles.module.scss";

export const Avia: React.FC = () => {
  const { cityFrom, cityTo, dateFrom } = useAppSelector((state) => state.data);
  return (
    <div className={styles.container}>
      <div className={styles.optionsBlock}>
        <Departure />
        <Arrival />
        <DateTo />
        <DateBack />
      </div>
      <div className={styles.buttonBlock}>
        <Link to={"/avia/info"}>
          <button
            className={styles.searchBtn}
            disabled={!cityFrom || !cityTo || !dateFrom}
          >
            Найти билеты
          </button>
        </Link>
      </div>
    </div>
  );
};
