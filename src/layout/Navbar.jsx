import { Button } from "../compents/Button"
import { Menu,X } from "lucide-react"
import{ useEffect, useState } from "react"
const navLinks=[
    {href:"#about",label:"关于"},
    {href:"#projects",label:"项目"},
    {href:"#experience",label:"经历"},
    {href:"#testimonial",label:"评语"},
    
]

export const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.scrollY>50);
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        }
    },[])
    return(
        <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled?"glass-strong":"bg-transparent py-3"} z-50`}>
            <nav className="container mx-auto flex px-6 items-center justify-between"> 
                <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary transition-colors duration-300">
                    PM<span className="text-primary">.</span><span className="font-serif font-medium">相入杉</span>
                </a>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1"> 
                        {navLinks.map((link,index)=>{
                            return <a className="px-4 py-2 text-sm text-muted-foreground rounded-full hover:bg-surface transition-colors duration-300" 
                            key={index} href={link.href}>{link.label} </a>
                        })}
                    </div>
                </div>
                <div className="hidden md:block">
                    <a href="#contact">
                        <Button size="sm">联系</Button>
                    </a>
                </div> 
                <button className="md:hidden p-2 text-foreground" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen? <X size={24}/>:<Menu size={24}/>}
                </button>
            </nav>
            {isMenuOpen && <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col  gap-4 ">
                    {navLinks.map((link,index)=>(
                       <a href={link.href}
                        className="text-lg text-muted-foreground hover:text-foreground py-2"
                         key={index}
                         onClick={()=>setIsMenuOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" onClick={()=>setIsMenuOpen(false)}>
                        <Button>联系</Button>
                    </a>
                </div>
            </div>}
        </header>
    )
    
}