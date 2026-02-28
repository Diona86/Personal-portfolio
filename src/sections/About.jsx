import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights=[
    {
        icon:Code2,
        title:"高质量代码",
        description:"稳定的代码质量，易于维护和扩展，经得起时间的考验。"
    },
    {
        icon:Rocket,
        title:"快速性能",
        description:"优化速度，提供闪电般的用户体验"
    },
    {
        icon:Users,
        title:"合作",
        description:"与团队成员和社区合作，推动创新和持续改进"
    },
    {
        icon:Lightbulb,
        title:"创新",
        description:"不断探索新技术和方法，推动前端开发的边界"
    }
]
export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/**Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in"><span className="text-secondary-foreground text-sm font-medium tracking-wider">关于我</span></div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        构筑未来，<span className="font-serif italic font-normal text-white">
                            {""}
                            从组件开始</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                            作为一名前端开发者，我致力于构建高质量、性能优越且用户友好的Web应用程序。我的工作不仅仅是编写代码，更是创造无缝的数字体验，连接用户与技术。我热衷于学习新技术和方法，不断推动前端开发的边界，以实现创新和卓越。
                        </p>
                        <p>
                            我的专业技能包括React、Vue、Angular等现代前端框架，以及HTML、CSS和JavaScript等核心技术。我注重代码质量和性能优化，致力于提供快速、响应式的用户体验。通过与团队成员和社区的合作，我不断推动创新和持续改进，以构建更好的Web应用程序。
                        </p>
                        <p>
                            在我的职业生涯中，我参与了多个项目，从小型网站到大型企业级应用程序，积累了丰富的经验。我相信，前端开发不仅仅是技术，更是艺术，通过创造性的解决方案和精心设计的用户界面，为用户带来愉悦的体验。
                        </p>
                    </div>
                    <div className="glass rounded-2xl py-2 px-2 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "构筑未来，从组件开始"不仅是我的座右铭，也是我对前端开发的承诺。我相信，通过不断学习和创新，我们可以共同构建一个更美好的数字未来，为用户带来更好的体验。
                        </p>
                    </div>
                </div>
                {/**Right Column -Hilights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {highlights.map((item,index)=>(
                        <div key={index} className=" glass p-6
                         rounded-2xl glow-border animate-fade-in"
                         style={{animationDelay:`${(index+1)*100}ms`}}>
                            <div className="flex gap-3"><span className="w-12 h-12 rounded-xl bg-foreground/10 items-center justify-center flex hover:bg-primary/20"><item.icon size={28} className="w-6 h-6 text-primary"/></span> <span className="flex items-center justify-center text-lg font-semibold">{item.title}</span></div>
                            <p className="text-muted-foreground mt-3">{item.description}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    </section>
}