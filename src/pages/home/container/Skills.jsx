import React from "react";
import H2MainTitle from "../../../components/H2MainTitle";
import SkillProgress from "../../../components/ranger/SkillProgress";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const skills = [
    { skill: "HTML/CSS", percentage: 90 },
    { skill: "JavaScript", percentage: 80 },
    { skill: "Bootstrap", percentage: 60 },
    { skill: "TailwindCSS", percentage: 80 },
    { skill: "ReactJS", percentage: 80 },
    { skill: "NodeJS", percentage: 60 },
  ];
  return (
    <section className="max-w-7xl mx-auto my-5 lg:px-0 px-5" name='skills'>
      <div className="w-full text-center my-10">
        <H2MainTitle title={"Skills"} />
        <div className="text-center w-full">
          <p className="text-gray-500">
            As a frontend developer, I specialize in creating visually stunning
            and functional digital experiences. <br /> My expertise lies in UI
            design and UX research, ensuring that every digital solution I
            develop is both effective and memorable.
          </p>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-full grid grid-cols-2 gap-5"
      >
        {skills.map((skill, index) => (
          <SkillProgress
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
