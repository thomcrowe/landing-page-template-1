"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Work() {
  const [activeIndex, setActiveIndex] = useState(0)

  const projects = [
    {
      title: "St. Athanasius",
      subtitle: "On the Incarnation",
      image: "/works/athanasius.webp?height=600&width=800",
      year: "Current",
      link: "https://www.amazon.com/Incarnation-Saint-Athanasius-Popular-Patristics/dp/B0BNJT899C/ref=sr_1_1?crid=21QVZ9P3XEG01&dib=eyJ2IjoiMSJ9.-gxRROYHOvIcgUQR7hCbllIkJT8rg2VN2KXeuagwBoZ9ZUxqhEZMFp09p4sQReS7v9p9vmAPt5uSaYqExFqy4ft6yklmRC0uDbDAEZ3Uw3OrqC4qRJm5-rw0sXdqMmB9phch7LMAZx8cRcgW_SxwdRTStLLnn0BT_Lp5A5aWlB_2dj84DyQKrNom0SB4D7E_vNt-qIyShscBegxnMVj0Aa9-LSXu9-LhroVps6rh4XQ.75Qw0wznBQrVOWvIzPnJZg2yCNXorKfcjQEg01jDzKU&dib_tag=se&keywords=on+the+incarnation+athanasius&qid=1764606066&s=books&sprefix=on+the+incarnation%2Cstripbooks%2C172&sr=1-1",
    },
    {
      title: "St. Augustine",
      subtitle: "The Enchideron",
      image: "/works/augustine.webp?height=600&width=800",
      year: "2025",
      link: "https://www.amazon.com/Enchiridion-Faith-Hope-Love/dp/0895267039/ref=sr_1_1?crid=VU949GYHXD6P&dib=eyJ2IjoiMSJ9.8nUacRQ6sPQ7bE6F9fixyt5B1bzkdKUwtuR4N11Nq-pff7xY7c99l8BK3rjdWRyabQQaq3VWiQ-lX-1jS3F1l08NQ0yitKXNXLuF9-leps4-KC01ILIBPVGszVm4ill6Hc_tBF3lJnePbVEcHhi1LeRt1y65sd2v4RAiyIBxzqgfU8eWoSSScIkwdQY09fJ9zEPn8n5DcoXZelvojkguEWzb_BRUvJqRVvVeBo01bBk.1vMMLasqB_kwpxe89gVvR__E2Rel9ElkzokutPDDIjc&dib_tag=se&keywords=enchiridion+augustine&qid=1764606143&s=books&sprefix=enchiridion+augstine%2Cstripbooks%2C246&sr=1-1",
    },
    {
      title: "St. Cyril of Jerusalem",
      subtitle: "Catechetical Lectures",
      image: "/works/cyril.webp?height=600&width=800",
      year: "2024",
      link: "https://www.amazon.com/Lectures-Christian-Sacraments-Procatechesis-Mystagogical/dp/0881415642/ref=sr_1_2?crid=2Q5JLXV8S3R4B&dib=eyJ2IjoiMSJ9.dm26fHQKzMUxCtRx0iggCgYn5H2N8v08Lf1T4dQMygxsFlOLWxIbRolJCwarHLdQJUNludtn_MRJEw-bpHl7JHmySzvcs_T0BaDwMIDJa_EmankIXLpx4m33zQgOMqW1deKVgCwUW3Sm5539eKxFVZmS0-By8rKbCYEim6epaW-Kgbs0M1BrV0bsBWpiW_Abj8UCh0XsbSE_scZaGlUOpw2JCk4-WK3EcqW0t6v3RyM.iM9THkz91v0KnZLRx9uWz22ltsQ7wZXaSgoKyaiGi2w&dib_tag=se&keywords=st+cyril+of+jerusalem+catechetical&qid=1764606205&sprefix=st+cyril+of+jerusaelm%2Caps%2C161&sr=8-2",
    },
    {
      title: "Saint Maximos the Confessor",
      subtitle: "On the Cosmic Mystery",
      image: "/works/maximos.webp?height=600&width=800",
      year: "2023",
      link: "https://www.amazon.com/Cosmic-Mystery-Jesus-Christ-Patristics/dp/B0CFSG7VG3/ref=sr_1_1?crid=22W3RO4F2F71S&dib=eyJ2IjoiMSJ9.cgPbVk4Him3_r77zvbCj0S6eMVC5WiwfiO0TFiGX-RhHEkj4vpwcXBB1GjLpPBKnplN1VWE7cd1d55buTHE7mOFjcZ9xS_Lr9YWD9PzUK8pm9Kx0vR2F9KyinSyDGaKuroqfbdqjKreGuJ1Yu3JUMDmHjL6fDydfPNiXTAH1SaRK31hwSzjsKlOxpkEBGfUDdl9qyw_41csjx_KSquvoxdWFdGFkVrQUWDar-W3pnKg.WCMjRtE557eKQC_SN2bJSNI8CHhNx0FT-_OSL_cQmpw&dib_tag=se&keywords=st.+maximus+confessor&qid=1764606231&sprefix=st.+maximos+confessor+%2Caps%2C164&sr=8-1",
    },
  ]

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">Seleted Works</div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
              Our Latest
              <br />
              <span className="text-white/70">Reads</span>
            </h2>
            <button className="border-2 border-white/20 px-6 py-3 text-sm uppercase tracking-widest text-white/80 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-white/20 mb-4 group-hover:border-white/50 transition-all duration-300">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                
                {/* Year badge with improved visibility */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-white/90 border border-white/20">
                  {project.year}
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-white/80 hover:text-white mb-1 inline-block transition-colors"
                  >
                    Get the Book →
                  </a>
                </div>
              </div>
              
              {/* Project title with enhanced styling */}
              <h3 className="text-2xl font-bold tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">{project.subtitle}</p>
              
              {/* Animated underline on hover */}
              <div className="h-px w-0 bg-white group-hover:w-20 transition-all duration-300 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 border border-white/5"></div>
    </section>
  )
}
