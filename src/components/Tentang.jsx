import React from "react";
import { motion } from "framer-motion";

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
        <div id="tentang" className="container mx-auto px-4 py-8">
            <motion.h2
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                className="text-teal-600 text-4xl font-bold mb-4 flex items-center justify-center font-Recursive"
            >
                Tentang Rumah Tahfidz
            </motion.h2>
            <section className="grid">

                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    className="mb-4 mx-28 text-lg"
                >
                    Rumah Tahfidz adalah sebuah lembaga pendidikan yang berfokus pada pengajaran 
                    dan pembinaan hafalan Al-Qur'an serta pembelajaran tahsin (penulisan) dan tahfidz 
                    aqidah ahlaq (keyakinan dan akhlak) kepada para santri. Rumah Tahfidz ini memiliki 
                    beberapa program unggulan, termasuk program murajaah hafalan, tahsin, dan tahfidz 
                    aqidah ahlaq dengan pendekatan praktis dalam pembelajarannya, serta fleksibilitas waktu belajar.      </motion.p>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    className="mb-4"
                >
                    Program-program unggulan Rumah Tahfidz:
                </motion.p>
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    className="list-disc pl-8 mb-4"
                >
                    <li>Murajaah Hafalan</li>
                    <li>Tahsin</li>
                    <li>Tahfidz Aqidah Ahlaq</li>
                </motion.ul>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    className="mb-4"
                >
                    Keunggulan Rumah Tahfidz:
                </motion.p>
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    className="list-disc pl-8 mb-4"
                >
                    <li>Metode Praktis dalam Pembelajaran</li>
                    <li>Waktu Belajar yang Fleksibel</li>
                </motion.ul>
            </section>
        </div>
    );
};

export default Tentang;
