import React from "react";
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { Lock, Clock, Moon, Bell } from "lucide-react";

const features = [
  {
    icon: <Lock className="h-10 w-10" />,
    title: "App Locking",
    description:
      "Lock distracting apps during specific times to help you stay focused and productive.",
  },
  {
    icon: <Clock className="h-10 w-10" />,
    title: "Screen Time Limits",
    description:
      "Set daily limits for app usage and receive notifications when you're approaching your limit.",
  },
  {
    icon: <Moon className="h-10 w-10" />,
    title: "Bedtime Mode",
    description:
      "Automatically lock distracting apps during your bedtime hours to improve sleep quality.",
  },
  {
    icon: <Bell className="h-10 w-10" />,
    title: "Smart Reminders",
    description:
      "Get gentle reminders to take breaks and reduce screen time throughout the day.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            Key Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            You Snooze You Win helps you build healthier digital habits with these powerful features.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-xl shadow-sm border border-border/50"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
} 