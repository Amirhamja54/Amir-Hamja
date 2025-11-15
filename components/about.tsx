"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8">
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 border border-border flex items-center justify-center">
                <img
                  src="/images/design-mode/hamja.png"
                  alt="Amir Hamja Chowdhury - SEO Consultant"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>

            <div className="flex items-center justify-center">
              <div className="w-full rounded-lg border border-border overflow-hidden shadow-lg bg-secondary"></div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Me
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Hi, I'm Amir Hamja Chowdhury. With 5+ years in the trenches of
                SEO, I've transformed websites from invisible to page-one
                authorities. My approach isn't about shortcuts or black-hat
                tactics—it's about understanding what search engines want and
                what your audience needs.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                I've helped 10+ businesses rank on Google's first page, driving
                consistent organic traffic and qualified leads. Whether you're a
                startup looking to establish authority or an established
                business ready to dominate search results, I deliver
                data-driven, measurable results.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "10+", label: "First-Page Wins" },
                { value: "400+", label: "Newsletter Subscribers" },
                { value: "3x", label: "Avg Traffic Increase" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-secondary rounded-lg p-6 border border-border"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-3xl font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
