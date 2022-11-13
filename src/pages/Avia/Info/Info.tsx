import React, { useState } from "react";

import styles from "./styles.module.scss";
import airlineSvg from "./../../../assets/airline.svg";
import { IFlight } from "../../../types/flights";
import { IData } from "../../../types/data";
import { useAppSelector } from "../../../hooks/react-hooks";
import { Link } from "react-router-dom";

import cabinBagSvg from "../../../assets/cabinBaggage.svg";
import cargoBagSvg from "../../../assets/cargoBaggage.svg";

export const Info: React.FC = () => {
  const times: IFlight[] = [
    {
      id: 1,
      deparTime: "09:20",
      arrTime: "11:05",
    },
    {
      id: 2,
      deparTime: "10:20",
      arrTime: "12:05",
    },
    {
      id: 3,
      deparTime: "11:20",
      arrTime: "13:05",
    },
  ];

  const [activeId, setActiveId] = useState<number>(1);

  let { cityFrom, cityTo, dateFrom, dateBack } = useAppSelector(
    (state) => state.data
  );

  const reverseDate = (str: IData["cityFrom"] | IData["cityTo"]): string => {
    return str
      .split("-")
      .reverse()
      .join(".");
  };

  const changeTime = (id: IFlight["id"]): void => {
    setActiveId(id);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.directionBlock}>
          <div className={styles.direction}>
            <div className={styles.aviacompanyBlock}>
              <img src={airlineSvg} alt="airline" />
              <p>S7 Airlines</p>
              <div className={styles.categoryTicket}>Невозвратный</div>
            </div>
            <div className={styles.infoTicket}>
              <div className={styles.directionInfo}>
                <div className={styles.departureInfo}>
                  <div>{times[activeId - 1].deparTime}</div>
                  <p>{cityFrom}</p>
                  <p>{reverseDate(dateFrom)}</p>
                </div>
                <div className={styles.route}>
                  <div className={styles.airports}>
                    <p>SVO</p>
                    <p>ROV</p>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.destTime}>В пути 1 ч 55 мин</div>
                </div>
                <div className={styles.departureInfo}>
                  <div>{times[activeId - 1].arrTime}</div>
                  <p>{cityTo}</p>
                  <p>{reverseDate(dateFrom)}</p>
                </div>
                <div className={styles.baggageInfo}>
                  <img src={cabinBagSvg} alt="cabin" />
                  <img src={cargoBagSvg} alt="cargo" />
                </div>
              </div>
              {!dateBack && (
                <div className={styles.timeBlock}>
                  {times.map((time) => (
                    <div
                      key={time.id}
                      className={
                        time.id !== activeId
                          ? styles.time
                          : `${styles.time} ${styles.activeTime}`
                      }
                      onClick={() => changeTime(time.id)}
                    >
                      {time.deparTime} - <span>{time.arrTime}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {dateBack && (
            <div className={styles.direction}>
              <div className={styles.aviacompanyBlock}>
                <img src={airlineSvg} alt="airline" />
                <p>S7 Airlines</p>
                <div className={styles.categoryTicket}>Невозвратный</div>
              </div>
              <div className={`${styles.infoTicket} ${styles.backTicket}`}>
                <div className={styles.directionInfo}>
                  <div className={styles.departureInfo}>
                    <div>{times[activeId - 1].deparTime}</div>
                    <p>{cityTo}</p>
                    <p>{reverseDate(dateBack)}</p>
                  </div>
                  <div className={styles.route}>
                    <div className={styles.airports}>
                      <p>ROV</p>
                      <p>SVO</p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.destTime}>В пути 1 ч 55 мин</div>
                  </div>
                  <div className={styles.departureInfo}>
                    <div>{times[activeId - 1].arrTime}</div>
                    <p>{cityFrom}</p>
                    <p>{reverseDate(dateBack)}</p>
                  </div>
                  <div className={styles.baggageInfo}>
                    <img src={cabinBagSvg} alt="cabin" />
                    <img src={cargoBagSvg} alt="cargo" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.priceBlock}>
          <b>{dateBack ? "9 300" : "4 150"} ₽</b>
        </div>
      </div>
      <Link to="/avia">
        <button className={styles.backBtn}>Назад</button>
      </Link>
    </>
  );
};
