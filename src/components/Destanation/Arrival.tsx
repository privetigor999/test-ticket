import React from "react";
import { setCityTo } from "../../store/features/dataSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/react-hooks";

import styles from "./styles.module.scss";

export const Arrival: React.FC = () => {
  const dispatch = useAppDispatch();

  const { cityTo } = useAppSelector((state) => state.data);

  const changeCityFromHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setCityTo(e.target.value));
  };

  return (
    <form className={styles.inputBlock}>
      <p>Куда</p>
      <input
        type="text"
        className={styles.input}
        value={cityTo}
        placeholder="Город прилёта"
        onChange={changeCityFromHandler}
      />
    </form>
  );
};
