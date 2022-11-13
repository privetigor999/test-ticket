import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/react-hooks";
import { setDateFrom } from "../../store/features/dataSlice";
import styles from "./styles.module.scss";

export const DateTo: React.FC = () => {
  const dispatch = useAppDispatch();

  const { dateFrom } = useAppSelector((state) => state.data);
  const { todayDate } = useAppSelector((state) => state.date);

  const changeDateFromHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setDateFrom(e.target.value));
  };

  return (
    <form className={styles.inputBlock}>
      <p>Туда</p>
      <input
        type="date"
        value={dateFrom}
        min={todayDate}
        onChange={changeDateFromHandler}
        className={styles.input}
        placeholder="Город прилёта"
      />
    </form>
  );
};
