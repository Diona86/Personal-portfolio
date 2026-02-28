import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
const testimonials = [
  {
    quote: "入杉 在项目中非常负责，技术能力扎实，对团队的帮助很大。他的代码质量和推进进度都让我们很放心。",
    author: "陈晓",
    role: "技术总监，某科技公司",
    avatar: "/avatar/cx.jpg",  
  },
  {
    quote: "和入杉 合作后，项目推进明显顺畅了很多。他提前交付了高质量代码，给团队树立了很好的标杆。",
    author: "张伟",
    role: "产品经理，数字科技公司",
    avatar: "/avatar/zw.jpg",
  },
  {
    quote: "入杉 对 React 和 TypeScript 的掌握很到位，帮助我们快速重构了前端架构，后续维护成本降低了不少。",
    author: "李娜",
    role: "前端负责人，创业公司",
    avatar: "/avatar/ln.jpg",
  },
  {
    quote: "入杉 技术强，沟通也很顺畅，是个很靠谱的队友。和他一起工作，大家的效率和氛围都提升了。",
    author: "王磊",
    role: "创始人，创新工作室",
    avatar: "/avatar/wl.jpg",
  },
];
export const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    const handleNext = () => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
    return <section id="testimonial" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[550px] rounded-full blur-3xl bg-primary/5 -translate-x-1/2 -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16 mx-auto text-center">
            <span
                className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
            >
            前辈曾言
            </span>

            <h2
                className="text-3xl md:text-4xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
            >
            从零到一，他用行动证明了
            <span className="font-serif italic font-normal text-white">
            {" "}
            年轻的力量
            </span>
            </h2>
           <div className="flex justify-end"> <span className="text-muted-foreground">————以下人物和评价为虚构</span></div>
            </div>
            
            {/* Testimonials Carousel */}
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/**主要的评语 */}
                    <div className="glass relative p-6 md:p-10 rounded-3xl glow-border animate-fade-in animation-delay-200">
                        <div className="absolute flex items-center justify-center -top-6 left-6 w-12 h-12 rounded-full bg-primary/80">
                            <Quote className="w-6 h-6 text-primary-foreground"/>
                        </div>
                        <blockquote className="text-xl md:-2xl font-medium leading-relaxed md-6 pt-4">{testimonials[current].quote}</blockquote>
                        <div className="flex items-center gap-6">
                            <img src={testimonials[current].avatar} alt={testimonials[current].author} className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 "/>
                            <div className="flex items-center gap-4">
                                <div className="font-semibold">{testimonials[current].author}</div>
                                <div className="text-sm text-muted-foreground">{testimonials[current].role}</div>
                            </div>
                        </div>
                    </div>
                    {/**左右切换按钮 */}
                    <div className="flex items-center justify-center gap-6 mt-8">
                        <button onClick={handlePrev} className="p-2 rounded-full  hover:bg-primary/30 transition-colors">
                            <ChevronLeft/>
                        </button>
                        <div className="flex items-center gap-1">
                            {testimonials.map((_,idx)=>(
                                <button key={idx} className={`w-2 h-2 rounded-full ${idx === current ? "bg-primary w-4" : "bg-primary/50"}`}
                                onClick={()=>{setCurrent(idx)}}/>
                            ))}
                        </div>
                        <button onClick={handleNext} className="p-2 rounded-full  hover:bg-primary/30 transition-colors">
                            <ChevronRight/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
}