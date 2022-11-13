import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/react-hooks";
import { setDateBack } from "../../store/features/dataSlice";
import styles from "./styles.module.scss";

export const DateBack: React.FC = () => {
  const dispatch = useAppDispatch();

  const { dateBack, dateFrom } = useAppSelector((state) => state.data);
  const { todayDate } = useAppSelector((state) => state.date);

  const changeDateBackHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setDateBack(e.target.value));
  };

  return (
    <form className={styles.inputBlock}>
      <p>Обратно</p>
      <input
        type="date"
        min={dateFrom ? dateFrom : todayDate}
        value={dateBack}
        onChange={changeDateBackHandler}
        className={styles.input}
      />
    </form>
  );
};
