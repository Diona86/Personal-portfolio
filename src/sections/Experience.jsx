
const experience = [
  {
    period: "2022.09 - 2024.06",
    role: "计算机科学与技术本科生",
    company: "南京工业大学",
    description:
      "系统学习计算机基础课程，掌握数据结构、计算机网络及前端开发相关知识，完成多个课程设计与小型项目开发。",
    technologies: ["C++", "Java", "HTML", "CSS", "JavaScript"],
    current: false,
  },
  {
    period: "2025.07 - 2025.09",
    role: "前端开发实习生",
    company: "南京红薯网络技术有限公司",
    description:
      "参与基于 Cocos 开发的华为 / 鸿蒙小游戏项目，负责广告 SDK 的接入与调试，协助排查并修复项目中的功能性问题，优化部分交互逻辑与稳定性。",
    technologies: ["Cocos", "JavaScript", "Git", "广告SDK"],
    current: false,
  },
  {
    period: "2025.10 - 至今",
    role: "个人项目与技术提升",
    company: "完成学业、自主学习与实践",
    description:
      "持续进行 Web 前端与工程化相关技术学习，独立完成多个个人项目，提升组件化开发能力与项目结构设计能力。",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    current: true,
  },
];

export const Experience = () => {
     const reversedExperience = [...experience].reverse(); // 反转数组，使最新的经历在前面
    return <section id="experience" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96
        bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        />
        <div className="container mx-auto px-6 md:px-16 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
            <span
                className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
            >
            成长历程
            </span>

            <h2
                className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
            >
            在实践中不断
            <span className="font-serif italic font-normal text-white">
            {" "}
            成长与突破
            </span>
            </h2>

            <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
            >
            记录我从专业学习到项目实践的成长过程，
            在不断探索与挑战中提升技术能力，
            为未来的职业发展打下坚实基础。
            </p>
            </div>
            {/* Experience Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/30 to-transparent shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                {/**Itmes */}
                <div className="space-y-12">
                    {reversedExperience.map((item, idx) => (
                        <div key={idx} className="relative grid md:grid-cols-2  gap-8 animate-fade-in "style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {item.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>
                            {/* Content */}
                            <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-16 " : "md:col-start-2 md:pl-16"}`}>
                                <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-400">
                                    <span className="text-sm text-primary">{item.period}</span>
                                    <h3 className="text-xl font-semibold mt-2">{item.role}</h3>
                                    <p className="italic text-muted-foreground">{item.company}</p>
                                    <p className="text-sm text-muted-foreground mt-4">{item.description}</p>
                                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "justify-end" : "justify-start"}`}>
                                        {item.technologies.map((tech, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-surface text-xs text-muted-foreground">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div> 
                        </div>    
                    ))}
                </div>   
            </div>
        </div>
    </section>
}