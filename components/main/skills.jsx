// components/main/skills.jsx
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  FRONTEND_SKILL,
  BACKEND_SKILL,
  MOBILE_SKILL,
  DESIGN_SKILL,
  OTHER_SKILL,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* Frontend Skills Section */}
      <div className="w-full max-w-7xl px-4">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6 text-center">
          Frontend Development
        </h2>
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
          {FRONTEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Backend Skills Section */}
      <div className="w-full max-w-7xl px-4 mt-12">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 text-center">
          Backend Development
        </h2>
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
          {BACKEND_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + FRONTEND_SKILL.length}
            />
          ))}
        </div>
      </div>

      {/* Mobile Development Section */}
      <div className="w-full max-w-7xl px-4 mt-12">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-6 text-center">
          Mobile Development
        </h2>
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
          {MOBILE_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + FRONTEND_SKILL.length + BACKEND_SKILL.length}
            />
          ))}
        </div>
      </div>

        {/* Other Tools Section */}
      {OTHER_SKILL.length > 0 && (
        <div className="w-full max-w-7xl px-4 mt-12">
          <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white mb-6 text-center">
            DevOps & Tools
          </h2>
          <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
            {OTHER_SKILL.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i + FRONTEND_SKILL.length + BACKEND_SKILL.length + MOBILE_SKILL.length + DESIGN_SKILL.length}
              />
            ))}
          </div>
        </div>
      )}

      {/* UI/Design Tools Section */}
      <div className="w-full max-w-7xl px-4 mt-12">
        <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-6 text-center">
          UI/Design Tools
        </h2>
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-5 items-center">
          {DESIGN_SKILL.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i + FRONTEND_SKILL.length + BACKEND_SKILL.length + MOBILE_SKILL.length}
            />
          ))}
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};