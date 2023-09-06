"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import styles from "./styles.module.scss";

import img1 from "./assets/01.jpg";
import img2 from "./assets/02.jpg";
import img3 from "./assets/03.jpg";
import img4 from "./assets/04.jpg";
import img5 from "./assets/05.jpg";

const cardList = [
  {
    img: img1,
    title: "Card 1",
  },
  {
    img: img2,
    title: "Card 2",
  },
  {
    img: img3,
    title: "Card 3",
  },
  {
    img: img4,
    title: "Card 4",
  },
  {
    img: img5,
    title: "Card 5",
  },
];

export default function ExpandingCards() {
  const [selectedIndex, setSelectedIndex] = useState(3);

  function onChangeSelectIndex(index) {
    setSelectedIndex(index);
  }
  return (
    <div className={styles.page}>
      <h3>Expanding Cards</h3>

      <div className={styles.contentDiv}>
        {cardList?.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => onChangeSelectIndex(index)}
              className={clsx(
                styles.card,
                index === selectedIndex && styles.activeCard
              )}
            >
              <Image
                alt="Mountains"
                src={item?.img}
                placeholder="blur"
                quality={100}
                sizes="40vw"
                className={styles.img}
              />

              {index === selectedIndex && (
                <div className={styles.title}>{item?.title}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
