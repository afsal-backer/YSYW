import React from "react";
import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background p-8 rounded-xl shadow-sm border border-border/50 flex flex-col items-center text-center max-w-md mx-auto"
          >
            <Mail className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-muted-foreground mb-4">
              Send us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:contact@yousnoozewin.com"
              className="text-primary font-medium hover:underline"
            >
              afsalbacker@icloud.com
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 