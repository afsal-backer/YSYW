import { Container } from "./ui/container";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="py-6 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold tracking-tight text-primary">
              You Snooze You Win
            </h1>
          </motion.div>
        </div>
      </Container>
    </header>
  );
} 