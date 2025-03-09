import { Container } from "./ui/container";
import { motion } from "framer-motion";
import { Shield, Lock, Eye } from "lucide-react";

export function Privacy() {
  return (
    <section className="py-20">
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
              Privacy & Data Handling
            </h2>
            <p className="text-xl text-muted-foreground">
              We take your privacy seriously. Here's how we handle your data.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex gap-4"
            >
              <div className="text-primary shrink-0">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
                <p className="text-muted-foreground">
                  We respect user data; usage stats are stored locally on your device or securely in our protected servers. No data is shared externally with third parties.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-4"
            >
              <div className="text-primary shrink-0">
                <Lock className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Screen Time Entitlements</h3>
                <p className="text-muted-foreground">
                  You Snooze You Win uses Screen Time entitlements solely for the purpose of helping you manage your digital well-being. We only access the data necessary to provide our core functionality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="text-primary shrink-0">
                <Eye className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency about how your data is used. You can request access to your data or its deletion at any time by contacting us.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
} 