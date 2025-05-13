// คุณสามารถเพิ่มลูกเล่น JavaScript ได้ที่นี่ เช่น เอฟเฟกต์พิเศษเมื่อเลื่อนหน้าจอ หรือการแสดงข้อความเพิ่มเติมเมื่อคลิก

console.log("สุขสันต์วันเกิดเพื่อนรัก!");
// เพิ่มฟังก์ชันเพื่อแสดง container เมื่อคลิกรูปเค้ก
document.addEventListener("DOMContentLoaded", () => {
    const cakecontainer = document.getElementById("cakecontainer"); // สมมติว่ารูปเค้กมี id เป็น cakeImage
    const container = document.getElementById("container"); // สมมติว่า container มี id เป็น container

    if (cakecontainer && container) {
        container.style.display = "none"; // ซ่อน container ไว้ก่อน

        cakecontainer.addEventListener("click", () => {
            container.style.display = container.style.display === "none" ? "block" : "none";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".icon-close");
    const container = document.getElementById("container");

    if (closeButton && container) {
        closeButton.addEventListener("click", () => {
            container.style.display = "none";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const cakecontainer = document.getElementById("cakecontainer");
    const container = document.getElementById("container");

    if (cakecontainer && container) {
        cakecontainer.addEventListener("click", () => {
            cakecontainer.style.display = "none";
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".icon-close");
    const cakecontainer = document.getElementById("cakecontainer");
    const container = document.getElementById("container");

    if (closeButton && cakecontainer && container) {
        closeButton.addEventListener("click", () => {
            container.style.display = "none";
            cakecontainer.style.display = "block"; // Show the cakecontainer again
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const cakecontainer = document.getElementById("cakecontainer");
    const btnHap = document.getElementById("btnHap");
    const container = document.getElementById("container");

    if (cakecontainer && btnHap && container) {
        cakecontainer.addEventListener("click", () => {
            btnHap.style.display = "none";
            
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.querySelector(".icon-close");
    const cakecontainer = document.getElementById("cakecontainer");
    const btnHap = document.getElementById("btnHap");
    const container = document.getElementById("container");
    

    if (closeButton && cakecontainer && btnHap && container) {
        closeButton.addEventListener("click", () => {
            container.style.display = "none";
            cakecontainer.style.display = "block";
            btnHap.style.display = "block"; // Show the btnHapp again
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const cakecontainer = document.getElementById("cakecontainer");
    const box1 = document.getElementById("box1");
    const container = document.getElementById("container");

    if (cakecontainer && box1 && container) {
        cakecontainer.addEventListener("click", () => {
            box1.style.display = "none";
        });
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const btnHap = document.getElementById("btnHap");
    const box1 = document.getElementById("box1");
    const cakecontainer = document.getElementById("cakecontainer");
    const container = document.getElementById("container");
  
    if (btnHap && box1 && cakecontainer && container) {
      box1.style.display = "none";
  
      btnHap.addEventListener("click", () => {
        box1.style.display = "block";
        cakecontainer.style.display = "none";
        btnHap.style.display = "none";
        container.style.display = "none";
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const closeButton2 = document.querySelector(".icon-close2");
    const box1 = document.getElementById("box1");
    const cakecontainer = document.getElementById("cakecontainer");
    const btnHap = document.getElementById("btnHap");
    const container = document.getElementById("container");
  
    if (closeButton2 && box1 && cakecontainer && btnHap && container) {
      closeButton2.addEventListener("click", () => {
        box1.style.display = "none";
        cakecontainer.style.display = "block";
        btnHap.style.display = "block";
        container.style.display = "none";
      });
    }
  });

//   const carousel = document.querySelector('.carousel');
// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// let counter = 0;
// const slideSize = slides[0].clientWidth;

// // Function to move the carousel
// function moveCarousel() {
//     carousel.style.transform = 'translateX(' + (-slideSize * counter) + 'px)';
// }

// // Event listeners for the buttons
// prevBtn.addEventListener('click', () => {
//     if (counter <= 0) return;
//     counter--;
//     moveCarousel();
// });

// nextBtn.addEventListener('click', () => {
//     if (counter >= slides.length - 1) return;
//     counter++;
//     moveCarousel();
// });

// // Optional: Add touch event listeners for swipe functionality
// let touchStartX = 0;
// let touchEndX = 0;

// carousel.addEventListener('touchstart', (e) => {
//     touchStartX = e.touches[0].clientX;
// });

// carousel.addEventListener('touchend', (e) => {
//     touchEndX = e.changedTouches[0].clientX;
//     handleSwipe();
// });

// function handleSwipe() {
//     const swipeDistance = touchStartX - touchEndX;
//     const sensitivity = 50; // Adjust for swipe sensitivity

//     if (swipeDistance > sensitivity) {
//         // Swipe left
//         if (counter <= 0) return;
//         counter--;
//         moveCarousel();
//     } else if (swipeDistance < -sensitivity) {
//         // Swipe right
//         if (counter >= slides.length - 1) return;
//         counter++;
//         moveCarousel();
//     }
// }

// carousel.addEventListener('touchmove', (e) => {
//     e.preventDefault();
// });

// // Function to automatically close box1 after the animation/transition ends
// function closeBox1Automatically() {
//     const box1 = document.getElementById("box1");
//     if (box1) {
//         box1.addEventListener("transitionend", () => {
//             box1.style.display = "none";
//             const cakecontainer = document.getElementById("cakecontainer");
//             const btnHap = document.getElementById("btnHap");
        
//             if (cakecontainer) {
//                 cakecontainer.style.display = "block";
//             }
        
//             if (btnHap) {
//                 btnHap.style.display = "block";
//             }
//         }, {
//             once: true
//         }); // Use { once: true } to ensure the event listener only runs once
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const btnHap = document.getElementById("btnHap");
//     const box1 = document.getElementById("box1");
  
//     if (btnHap && box1) {
//       btnHap.addEventListener("click", () => {
//         box1.style.display = "block";
//         closeBox1Automatically();
//       });
//     }
//   });
// function closeBox1Automatically() {
//     const box1 = document.getElementById("box1");
//     if (box1) {
//         // Use transitionend event to detect when the animation finishes
//         box1.addEventListener("animationend", () => {
//             box1.style.display = "none";
//             const cakecontainer = document.getElementById("cakecontainer");
//             const btnHap = document.getElementById("btnHap");

//             if (cakecontainer) {
//                 cakecontainer.style.display = "block";
//             }

//             if (btnHap) {
//                 btnHap.style.display = "block";
//             }
//         }, {
//             once: true
//         }); // Use { once: true } to ensure the event listener only runs once
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const btnHap = document.getElementById("btnHap");
//     const box1 = document.getElementById("box1");

//     if (btnHap && box1) {
//         // Directly trigger the animation and closeBox1Automatically when the page loads
//         box1.style.display = "block";
//         closeBox1Automatically();
//     }
// });
// function closeBox1Automatically() {
//     const box1 = document.getElementById("box1");
//     if (box1) {
//         // Add a CSS class to trigger the animation
//         box1.classList.add("closing-animation");

//         // Use animationend event to detect when the animation finishes
//         box1.addEventListener("animationend", () => {
//             box1.style.display = "none";
//             box1.classList.remove("closing-animation"); // Remove the class after animation

//             const cakecontainer = document.getElementById("cakecontainer");
//             const btnHap = document.getElementById("btnHap");

//             if (cakecontainer) {
//                 cakecontainer.style.display = "block";
//             }

//             if (btnHap) {
//                 btnHap.style.display = "block";
//             }
//         }, {
//             once: true
//         }); // Use { once: true } to ensure the event listener only runs once
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const btnHap = document.getElementById("btnHap");
//     const box1 = document.getElementById("box1");

//     if (btnHap && box1) {
//         btnHap.addEventListener("click", () => {
//             // Directly trigger the animation and closeBox1Automatically when the button is clicked
//             box1.style.display = "block";
//             closeBox1Automatically();
//         });
//     }
// });