"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { jobs } from "@/constants/index";
import { SectionWrapper } from '../wrapper/index'

const Work = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(300); // Dynamic card width
  const carouselRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Adjust card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      const width = window.innerWidth < 640 ? 250 : 300; // Responsive card width
      setCardWidth(width);
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const toggleExpand = (index: number) => {
    if (index === currentIndex) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
    setExpandedIndex(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
    setExpandedIndex(null);
  };

  const cardVariants = {
    active: {
      x: 0,
      scale: 1.1,
      zIndex: 10,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    inactive: (offset: number) => {
      const absOffset = Math.abs(offset);
      // Cards disappear (opacity: 0) when they are more than 1.5 offsets away (adjustable)
      const opacity = absOffset > 1.5 ? 0 : 1;
      return {
        x: offset * cardWidth * 1.1, // Add spacing between cards
        scale: 0.9,
        zIndex: absOffset <= 1 ? 5 : 0, // Dynamic zIndex
        opacity,
        transition: { type: "spring", stiffness: 100, damping: 20 },
      };
    },
  };

  return (
    <div className="mx-auto px-8 pt-12">
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        My development journey
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        WORK
      </h2>
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background p-2 rounded-full shadow-md transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background p-2 rounded-full shadow-md transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute left-0 right-0 top-1/2 h-1 bg-white z-0"></div>

        <div ref={carouselRef} className="relative overflow-hidden h-[545px]">
          <div className="flex h-full items-center justify-center">
            {jobs.map((item, index) => (
              <motion.div
                key={index}
                className="absolute"
                style={{ width: cardWidth }}
                variants={cardVariants}
                initial="inactive"
                animate={index === currentIndex ? "active" : "inactive"}
                custom={index - currentIndex} // Pass offset for positioning
              >
                <motion.div
                  className="absolute left-1/2 top-[-1rem] w-6 h-6 rounded-full transform -translate-x-1/2 z-10 bg-[#ed0762]"
                  animate={{ scale: index === currentIndex ? 1.2 : 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />

                <motion.div
                  layout
                  className="w-full"
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div
                        ref={index === 0 ? headerRef : null}
                        className={`p-6 flex flex-col items-center text-center ${
                          index === currentIndex
                            ? "cursor-pointer"
                            : "cursor-default"
                        }`}
                        onClick={() => toggleExpand(index)}
                      >
                        <Badge
                          variant="outline"
                          className="text-sm py-1 px-3 bg-primary/5 border-primary/20 mb-2"
                        >
                          <Calendar className="w-4 h-4 mr-1" />
                          {item.duration}
                        </Badge>
                        <h3 className="text-xl font-bold text-primary">
                          {item.role}
                        </h3>
                        <h3 className="text-md font-bold text-primary">
                          {item.company}
                        </h3>
                        <span className="text-sm text-primary">
                          {item.description}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedIndex === index ? 180 : 0,
                            opacity: index === currentIndex ? 1 : 0.5,
                          }}
                          transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground mt-2" />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {expandedIndex === index && index === currentIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-border/50">
                              <div className="mb-4">
                                <h4 className="text-sm font-semibold flex items-center justify-center mb-2">
                                  Skills
                                </h4>
                                <ul className="grid grid-cols-1 gap-2">
                                  {item.skills.map((skill, i) => (
                                    <motion.li
                                      key={i}
                                      className="flex items-start"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20,
                                        delay: i * 0.1,
                                      }}
                                    >
                                      <CheckCircle
                                        className="w-4 h-4 mr-2 text-green-500 mt-0.5 shrink-0"
                                      />
                                      <span className="text-sm">{skill}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Work, "work")