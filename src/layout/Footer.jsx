import {  Heart, GithubIcon } from "lucide-react";
import { WeixinMiniAppIcon } from "../compents/WeChat";

const footerLinks = [
  { href: "#about", label: "关于" },
  { href: "#projects", label: "项目" },
  { href: "#experience", label: "经历" },
  { href: "#contact", label: "联系" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              PM<span className="text-primary">.</span>
              <span className="font-serif font-medium">相入杉</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} 相入杉.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-10  items-center animate-fade-in animation-delay-400 z-20">
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
                className="absolute bottom-full left-1/2 -translate-x-3/4 mb-3
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
                    src="/wechatQR.png"
                    alt="微信二维码 - 扫码加我"
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
