import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectCardProps {
    title: string;
    description: string;
    images: string[];
    link?: string;
    reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    link,
    images,
    reverse = false
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

    // Préchargement des images
    useEffect(() => {
        const preloadImages = async () => {
            const loadPromises = images.map((src) => {
                return new Promise<boolean>((resolve) => {
                    const img = new Image();
                    img.onload = () => resolve(true);
                    img.onerror = () => resolve(false);
                    img.src = src;
                });
            });

            const results = await Promise.all(loadPromises);
            setImagesLoaded(results);
        };

        preloadImages();
    }, [images]);

    const nextImage = () => {
        setSlideDirection('right');
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setSlideDirection('left');
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setSlideDirection(index > currentImageIndex ? 'right' : 'left');
        setCurrentImageIndex(index);
    };

    return (
        <motion.div
            className={`projects my-32 flex ${reverse ? 'flex-row-reverse' : 'flex-row'} justify-between gap-10`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Contenu texte */}
            <div className='w-1/3 h-full flex flex-col justify-between'>
                <div>
                    <motion.h3
                        className='text-3xl'
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {title}
                    </motion.h3>
                    <motion.p
                        className='text-gray-400 text font-light mt-4 mb-6'
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {description}
                    </motion.p>
                    {link && <a
                        className='border border-black px-2 py-1 rounded-lg inline-flex items-center gap-1 hover:border-gray-400 hover:bg-neutral-100 transition-colors duration-300 text-sm font-medium'
                        href={link}
                    >
                        <span>Voir le projet</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15,3 21,3 21,9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>}
                </div>
            </div>

            {/* Carrousel d'images */}
            <div className='w-2/3 h-full relative group'>
                <div className='w-full h-[460px] bg-muted rounded-xl overflow-hidden relative shadow-sm border border-neutral-200'>
                    {/* Indicateur de chargement */}
                    {(!imagesLoaded[currentImageIndex] || imagesLoaded.length === 0) && (
                        <div className='absolute inset-0 flex items-center justify-center bg-gray-200'>
                            <div className='w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin'></div>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageIndex}
                            src={images[currentImageIndex]}
                            alt={`${title} - Image ${currentImageIndex + 1}`}
                            className='w-full h-full object-cover'
                            initial={{
                                x: slideDirection === 'right' ? 50 : -50,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: imagesLoaded[currentImageIndex] !== false ? 1 : 0
                            }}
                            exit={{
                                x: slideDirection === 'right' ? -50 : 50,
                                opacity: 0
                            }}
                            transition={{
                                x: { duration: 0.35, ease: [0.4, 0.0, 0.2, 1] },
                                opacity: { duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }
                            }}
                        />
                    </AnimatePresence>

                </div>

                {/* Boutons de navigation - en dessous de l'image */}
                {images.length > 1 && (
                    <div className='flex justify-center items-center gap-8 mt-4'>
                        <motion.button
                            onClick={prevImage}
                            className='cursor-pointer group flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 border border-neutral-300'
                            whileHover={{ scale: 1.05, x: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark transition-colors duration-300">
                                <polyline points="15,18 9,12 15,6"></polyline>
                            </svg>
                        </motion.button>

                        <div className='flex space-x-2'>
                            {images.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                        ? 'bg-black shadow-lg'
                                        : 'bg-black/30 hover:bg-black/60'
                                        }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                />
                            ))}
                        </div>

                        <motion.button
                            onClick={nextImage}
                            className='cursor-pointer group flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 border border-neutral-300'
                            whileHover={{ scale: 1.05, x: 2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dark transition-colors duration-300">
                                <polyline points="9,18 15,12 9,6"></polyline>
                            </svg>
                        </motion.button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
