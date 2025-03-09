import React from "react";
import { Container } from "./ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/40">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">You Snooze You Win</h2>
            <p className="text-muted-foreground mt-2">
              Take control of your screen time and digital well-being.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} You Snooze You Win. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
} 