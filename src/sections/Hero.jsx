import { ArrowRight, ChevronDown, Download, GithubIcon } from "lucide-react";
import { Button } from "../compents/Button";
import { AnimatedBorderButton } from "../compents/AnimatedBorderButton";
import { WeixinMiniAppIcon } from "../compents/WeChat";

const skills = [
  "React",
  "JavaScript",
  "CSS",
  "HTML",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Webpack",
  "Vite",
];
export const Hero = () => {
  const handleDownload = () => {
    console.log("下载简历");
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "相入杉.pdf";
    link.click();
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/*Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
            key={i}
          />
        ))}
      </div>
      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*Left Colum - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-primary glass text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                前端工程师 · React
              </span>
            </div>
            {/*Headline */}
            <div className="space-y-6 ">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-center md:text-left animate-fade-in animation-delay-100">
                精准 <span className="text-primary glow-text">打造</span>
                <br className="sm:hidden" /> {/* 手机上强制换行，小屏更紧凑 */}
                <span className="font-serif italic font-normal ">数字体验</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                我是一个热衷于创造引人入胜的数字体验
                的前端工程师，专注于使用React构建高
                性能、响应式的Web应用程序。通过精心
                设计和优化，我致力于将创意转化为流畅、
                用户友好的界面，为用户带来卓越的数字体验。
              </p>
            </div>
            {/*Call to Action */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  联系我
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton onClick={handleDownload}>
                下载简历
                <Download />
              </AnimatedBorderButton>
            </div>
            {/*Social Links */}
            <div className="flex gap-10  items-center animate-fade-in animation-delay-400 z-20">
              <span className="text-sm text-muted-foreground">关注:</span>

              <a
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                href={"https://github.com/Diona86"}
                target="_blank"
              >
                {<GithubIcon className="w-5 h-5" />}
              </a>
              <div className="relative group p-2 rounded-full glass hover:bg-primary/10 hover:text-primary hover:cursor-pointer transition-all duration-300">
                <a className="">{<WeixinMiniAppIcon className="w-5 h-5" />}</a>

                {/* 二维码容器 - 默认隐藏，hover 时显示 */}
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                        hidden group-hover:block
                        z-50 pointer-events-none
                        "
                >
                  <div
                    className="
                            p-3 bg-white rounded-xl shadow-2xl border border-gray-200
                            w-48 h-48 flex items-center justify-center
                            "
                  >
                    <img
                      src="/wechatQR.png" // 替换成你自己的二维码图片路径
                      alt="微信二维码 - 扫码加我"
                      className="w-48 h-48 object-contain"
                    />
                  </div>

                  {/* 小三角提示（可选，美观加分） */}
                  <div
                    className="
                            absolute top-full left-1/2 -translate-x-1/2 -mt-1
                            w-0 h-0 border-l-8 border-l-transparent
                            border-r-8 border-r-transparent
                            border-t-8 border-t-white
                            "
                  />
                </div>
              </div>
            </div>
          </div>
          {/*Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* 图片 */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
                        rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pluse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/hero.png"
                  alt="相入杉"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/*浮动标签*/}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">可立即上岗</span>
                  </div>
                </div>
                {/**属性标签 */}
                <div className="absolute -top-4 -left-4 glass  rounded-xl px-4 py-3 animate-float ">
                  <div className=" text-muted-foreground">26届</div>
                  <div className="text-primary text-xl font-bold">毕业生</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**技能 */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground m-6 text-center">
            掌握技能
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-color">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
        animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
