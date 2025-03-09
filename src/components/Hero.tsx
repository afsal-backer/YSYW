import React from "react";
import { Container } from "./ui/container";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Take Control of Your Screen Time
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              You Snooze You Win is an iOS app to help users limit screen time by locking distracting apps.
              Improve your digital well-being and reclaim your time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <div className="relative mx-auto border-8 border-foreground rounded-[3rem] shadow-xl bg-foreground max-w-[350px]">
              <div className="relative bg-background rounded-[2.5rem] overflow-hidden h-[600px] w-[300px] flex items-center justify-center">
                <img 
                  src="/YSYW.png" 
                  alt="You Snooze You Win App" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 