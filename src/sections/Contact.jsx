import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "../compents/Button"
import { useState } from "react"
import  emailjs from "@emailjs/browser"
const contactInfo = [
  {
    icon: Mail,
    label: "邮箱",
    value: "18361846803@163.com",
    href: "mailto:18361846803@163.com",
  },
  {
    icon: Phone,
    label: "电话",
    value: "183 6184 6803",
    href: "tel:18361846803",
  },
  {
    icon: MapPin,
    label: "所在地",
    value: "江苏 · 南京",
    href: null,
  },
];
export const Contact = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
    const [isLoading,setIsLoading]=useState(false);
    const [submitStatus,setSubmitStatus]=useState({
        type:"",
        msg:""
    })
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log("submiting")
        setIsLoading(true)
        setSubmitStatus({
            type:null,
            msg:""
        })
        try{
            const serviceId=import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId=import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey=import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            if(!serviceId||!templateId||!publicKey){
                throw new Error("EmailJs configuration is missing")
            }
            await emailjs.send(serviceId,templateId,{
                name:formData.name,
                email:formData.email,
                message:formData.message
            },publicKey)
            setSubmitStatus({
                type:"success",
                msg:"发送成功，我将尽快回复"
            })
            setFormData({name:"",email:"",message:""})
        }catch(err){
            console.error("EmailJs error:",err);
            setSubmitStatus({
                type:"error",
                msg:"发送失败，请稍后再试"
            })
        }finally {
            setIsLoading(false)
        }
    }
    return <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full blur-3xl bg-primary/5 -translate-x-1/2 -translate-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            {/**header */}
            <div className="max-w-3xl mb-16 mx-auto text-center">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    联系我
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    期待与您合作
                </h2>
            </div>
            {/**form */}
            <div  className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"> 
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-200">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        >姓名</label>
                        <input type="text" id="name"
                        required
                        placeholder="您的姓名"
                        value={formData.name}
                        onChange={(e)=>{
                            setFormData({...formData,name:e.target.value})
                        }} 
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none trasition-all"/>
                    </div>
                    <div>
                        <label htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        >邮箱</label>
                        <input type="email" id="email"
                        required
                        placeholder="您的@email.com"
                        value={formData.email}
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                email:e.target.value
                            })
                        }}
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none trasition-all"/>
                    </div>
                    <div>
                        <label htmlFor="message"
                        className="block text-sm font-medium mb-2"
                        >留言</label>
                        <textarea id="message"
                        required
                        rows={5}
                        placeholder="您的留言"
                        value={formData.message}
                        onChange={(e)=>{
                            setFormData({
                                ...formData,
                                message:e.target.value
                            })
                        }}  
                        className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary outline-none transition-all resize-none"/>

                    </div>
                    <Button className="w-full" size="lg" type="submit" disabled={isLoading}>
                        {isLoading?<>发送...</>:
                        <>发送信息
                        <Send/>
                        </>}
                    </Button>
                    {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
                    )}
                </form>
                </div>
                 {/* right column: contact info + availability */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            {/* Contact Info */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                联系信息
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">求职中</span>
              </div>
              <p className="text-muted-foreground text-sm">
                作为 2026 届本科毕业生，
                我希望加入优秀的团队参与真实项目开发。
                无论是校招岗位、实习机会，
                还是前端与跨平台方向的项目合作，
                都期待与你进一步交流。
              </p>
            </div>    
            </div>
            
        </div>        
        </div>
        
    </section>
}