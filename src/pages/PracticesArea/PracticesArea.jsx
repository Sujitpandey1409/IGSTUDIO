import React from 'react';
import styles from './PracticesArea.module.css'
import CardTitle from '../../Components.js/CardTitle/CardTitle';
import PhotoGallery from '../../Components.js/photoGallery/PhotoGallery';

const PracticesArea = () => {
    return ( 
        <div id="Practice-Areas" className={styles.PracticesArea}>
           <CardTitle content={'Area of Practices'} />
            <PhotoGallery />
        </div>
     );
}
 
export default PracticesArea;