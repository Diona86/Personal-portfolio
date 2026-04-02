import { ArrowUpRight, GithubIcon } from "lucide-react"
import { AnimatedBorderButton } from "../compents/AnimatedBorderButton"
 const projects=[
    {   title:"多人在线Cavans",
        description:"这是一个基于 Next.js 和 Fabric.js 构建的协作式设计工具，项目支持实时协作、多用户光标、形状绘制、图层管理等核心功能。",
        image:"/pro1.png",
        tags:["React","TypeScript","Next.js","Liveblock","fabric","Tailwind CSS"],
        link:"/",
        github:"#"
    },
    {   title:"可拖拽任务看板",
        description:"一个基于 React + TypeScript 构建的看板应用，支持拖拽操作和实时任务管理。",
        image:"/pro2.png",
        tags:["React","TypeScript","ZuStand","Tailwind CSS","dnd-kit"],
        link:"#",
        github:"#"
    },
    {   title:"电子商务网站",
        description:"一个基于 React + TypeScript 构建的电子商务网站，包括产品展示、购物车等功能。",
        image:"/pro3.png",
        tags:["React","JavaScript","Router","Context"],
        link:"#",
        github:"#"
    },
    {   title:"项目四",
        description:"描述",
        image:"/image.png",
        tags:["React","JavaScript"],
        link:"#",
        github:"#"
    }
]
export const Projects = () => {
    return (
    <section id="projects" className="py-32 relative overflow-hidden">
         {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        {/**Section Content */}
        <div className="container mx-auto  px-6 md:px-10 lg:px-16 relative z-10">
            {/**Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            精选作品
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            影响深远的
            <span className="font-serif italic font-normal text-white">
            {" "}
            项目
            </span>
            </h2>
            <p className="text-muted-foreground animate-fade-in animation-delay-200">
            展示我近期的一些代表性作品，从复杂 Web 应用到解决实际问题的创新工具。
            </p>
            </div>
            {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    //href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    //href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
            {/**View Akk CTA */}
            <div className="mt-12 flex justify-center">
                <AnimatedBorderButton>
                    查看所有项目
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                </AnimatedBorderButton>
            </div>
            
        </div>
    </section>)
}