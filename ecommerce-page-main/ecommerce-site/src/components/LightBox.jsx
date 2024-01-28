// import React, { useState } from "react";
// import styles from "../modules/Lightbox.module.css";
// import { data } from "../data";
// import Close from '../images/icon-close.svg'
// import Right from '../images/icon-next.svg' 
// import Left from '../images/icon-previous.svg' 

// import img1Big from "../images/img1b.jpg";
// import img1Small from "../images/img1s.jpg";

// import img2Big from "../images/img2b.jpg";
// import img2Small from "../images/img2s.jpg";

// import img3Big from "../images/img3b.jpg";
// import img3Small from "../images/img3s.jpg";

// import img4Big from "../images/img4b.jpg";
// import img4Small from "../images/img4s.jpg";

// function Lightbox({ setShowLightbox }) {
//   const [selectedImg, setSelectedImg] = useState(img1Big); 
//   const [selectedSmallImg, setSelectedSmallImg] = useState(img1Small); 
//   const [products] = useState(data);
//   const [slideIndex, setSlideIndex] = useState(1);
  
//   const handleSmallImgClick = (newImg, newSmallImg) => {
//     setSelectedImg(newImg); 
//     setSelectedSmallImg(newSmallImg); 
//   };

//   const nextSlide = () => {
//     if (slideIndex !== products.length) {
//       setSlideIndex(slideIndex + 1);
//     } else {
//       setSlideIndex(1);
//     }
//   };

//   const previousSlide = () => {
//     if (slideIndex !== 1) {
//       setSlideIndex(slideIndex - 1);
//     } else {
//       setSlideIndex(products.length);
//     }
//   };

//   return (
//     <>
//       <div className={styles.lightbox}>
//         <button className={styles.closebtn} onClick={() => setShowLightbox(false)}>
//           <img src={Close} alt="Close" />
//         </button>
//         <div className={styles.container}>
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className={slideIndex === index + 1 ? "relative" : "hidden"}
//             >
//               <img
//                 src={product.mainImage}
//                 alt=""
//                 onClick={() => setShowLightbox(true)}
//               />
//               <ul>
//                 <li>
//                   <button
//                     className={styles.arrow1}
//                     onClick={previousSlide}
//                   >
//                     <img src={Left} alt="Previous" />
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     className={styles.arrow2}
//                     onClick={nextSlide}
//                   >
//                     <img src={Right} alt="Next" />
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ))}
//           {/* <div className={styles.smallImgContainer}>
//           <img
//             src={img1Small}
//             className={`${styles.smallImg} ${
//               selectedSmallImg === img1Small && styles.selected
//             }`}
//             alt="Small image 1"
//             onClick={() => handleSmallImgClick(img1Big, img1Small)}
//           />
        
//           <img
//             src={img2Small}
//             className={`${styles.smallImg} ${
//               selectedSmallImg === img2Small && styles.selected
//             }`}
//             alt="Small image 2"
//             onClick={() => handleSmallImgClick(img2Big, img2Small)}
//           />
//           <img
//             src={img3Small}
//             className={`${styles.smallImg} ${
//               selectedSmallImg === img3Small && styles.selected
//             }`}
//             alt="Small image 3"
//             onClick={() => handleSmallImgClick(img3Big, img3Small)}
//           />
//           <img
//             src={img4Small}
//             className={`${styles.smallImg} ${
//               selectedSmallImg === img4Small && styles.selected
//             }`}
//             alt="Small image 4"
//             onClick={() => handleSmallImgClick(img4Big, img4Small)}
//           />
//         </div> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Lightbox;