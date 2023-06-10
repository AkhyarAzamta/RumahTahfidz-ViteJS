import React from "react";
import { motion } from "framer-motion";
import image1 from "../assets/foto/image1.jpeg";
import image2 from "../assets/foto/image2.jpeg"; 
import image3 from "../assets/foto/image3.jpeg";
import image4 from "../assets/foto/image4.jpeg";
import image5 from "../assets/foto/image5.jpeg";


const Tentang = () => {
    const fadeInVariants = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            }
        },
    };

    return (
        <section className="container items-center justify-center sm:mx-auto px-4 pt-6">
            <motion.h2
                id="tentang"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className="text-teal-600 text-4xl font-bold mb-4 flex items-center justify-center font-Recursive"
            >
                Tentang Rumah Tahfidz
            </motion.h2>
            <div className="grid">

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    className="sm:mb-4 sm:mx-4 sm:text-lg"
                >
                    Rumah Tahfidz adalah sebuah lembaga pendidikan yang berfokus pada pengajaran 
                    dan pembinaan hafalan Al-Qur'an serta pembelajaran tahsin (penulisan) dan tahfidz 
                    aqidah ahlaq (keyakinan dan akhlak) kepada para santri. Rumah Tahfidz ini memiliki 
                    beberapa program unggulan, termasuk program murajaah hafalan, tahsin, dan tahfidz 
                    aqidah ahlaq dengan pendekatan praktis dalam pembelajarannya, serta fleksibilitas waktu belajar.      
                    </motion.p>

                
            </div>
        </section>
    );
};

export default Tentang;
