import React from "react";
import styles from "./PhotoGallery.module.css";
// import { ReactComponent as gallery1 } from "../../assets/Rectangle 3652.svg";
// import { ReactComponent as gallery2 } from "../../assets/Rectangle 3651.svg";
// import { ReactComponent as gallery3 } from "../../assets/Rectangle 3653.svg";
// import { ReactComponent as gallery4 } from "../../assets/Rectangle 3654.svg";
// import { ReactComponent as gallery5 } from "../../assets/Rectangle 3656.svg";
// import { ReactComponent as gallery6 } from "../../assets/Rectangle 3655.svg";

const PhotoGallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        <div className={styles.gallery1}></div>
        <div className={styles.gallery2}></div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.gallery3}></div>
        <div className={styles.gallery4}></div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.gallery5}></div>
        <div className={styles.gallery6}></div>
      </div>
    </div>
  );
};

export default PhotoGallery;
