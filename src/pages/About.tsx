import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-24 md:py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8">About</h1>
          <p className="mb-4">Content from the About page will go here.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
