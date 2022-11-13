import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/react-hooks";
import { setCityFrom } from "../../store/features/dataSlice";
import styles from "./styles.module.scss";

export const Departure: React.FC = () => {
  const dispatch = useAppDispatch();

  const { cityFrom } = useAppSelector((state) => state.data);

  const changeCityFromHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    dispatch(setCityFrom(e.target.value));
  };

  return (
    <form className={styles.inputBlock}>
      <p>Откуда</p>
      <input
        type="text"
        className={styles.input}
        placeholder="Город вылета"
        value={cityFrom}
        onChange={changeCityFromHandler}
      />
    </form>
  );
};
