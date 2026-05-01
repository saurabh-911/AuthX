import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Lock, Sparkles, Fingerprint, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router";

export default function FuturisticAuthHome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/80 text-foreground transition-colors overflow-hidden\">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center flex flex-col items-center justify-center min-h-screen\">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto\"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=\"text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 bg-clip-text text-transparent\"
          >
            Secure. Fast. Futuristic.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className=\"mt-6 text-lg md:text-xl text-muted-foreground\"
          >
            The next-generation authentication platform built for modern apps. Enterprise-grade security with a developer-friendly experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className=\"mt-10 flex flex-col sm:flex-row gap-4 justify-center\"
          >
            <Button 
              size=\"lg\" 
              onClick={() => navigate('/signup')}
              className=\"rounded-lg text-lg px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center gap-2\"
            >
              Get Started <ArrowRight className=\"w-5 h-5\" />
            </Button>
            <Button
              size=\"lg\"
              variant=\"outline\"
              className=\"rounded-lg text-lg px-8 border-border hover:bg-card\"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className=\"py-24 px-6 bg-card/30 backdrop-blur-sm\">
        <div className=\"max-w-7xl mx-auto\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=\"text-center mb-16\"
          >
            <h2 className=\"text-4xl md:text-5xl font-bold mb-4\">
              Powerful Features
            </h2>
            <p className=\"text-muted-foreground text-lg\">Everything you need for secure authentication</p>
          </motion.div>

          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6\">
            {[
              {
                title: \"Biometric Login\",
                desc: \"Fingerprint and facial recognition for next-level security.\",
                icon: <Fingerprint className=\"w-10 h-10\" />,
              },
              {
                title: \"Multi‑Layer Encryption\",
                desc: \"Industry‑grade encryption for complete data safety.\",
                icon: <Lock className=\"w-10 h-10\" />,
              },
              {
                title: \"Smart Access Control\",
                desc: \"AI‑powered system that adapts to threats in real‑time.\",
                icon: <Shield className=\"w-10 h-10\" />,
              },
              {
                title: \"Lightning‑Fast\",
                desc: \"Sub-millisecond response times for optimal UX.\",
                icon: <Sparkles className=\"w-10 h-10\" />,
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className=\"bg-card/80 backdrop-blur-xl border border-border/50 rounded-xl shadow-lg hover:shadow-xl hover:border-border transition-all\">
                  <CardCo\"py-32 px-6 text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-lg border-y border-border/40\">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=\"max-w-3xl mx-auto\"
        >
          <h2 className=\"text-4xl md:text-5xl font-bold mb-4\">
            Start Securing Your App Today
          </h2>
          <p className=\"text-muted-foreground text-lg mb-8\">
            Join thousands of developers building secure applications with AuthX. Get started in minutes.
          </p>

          <Button 
            size=\"lg\" 
            onClick={() => navigate('/signup')}
            className=\"rounded-lg text-lg px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center gap-2 mx-auto\"
          >
            Create Account Now <ArrowRight className=\"w-5 h-5\" />
          </Button>
        </motion.div
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <secWhy Choose Us Section */}
      <section className=\"py-24 px-6\">
        <div className=\"max-w-7xl mx-auto\">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=\"text-4xl md:text-5xl font-bold text-center mb-16\"
          >
            Why Choose AuthX?
          </motion.h2>

          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-10\">
            {[
              {
                title: \"AI‑Driven Security\",
                desc: \"Real‑time monitoring detects suspicious activities and prevents unauthorized access instantly.\",
              },
              {
                title: \"Lightning‑Fast Performance\",
                desc: \"Built for scale with instant response times for authentication flows across all regions.\",
              },
              {
                title: \"Developer‑Friendly API\",
                desc: \"Integrate in minutes with clean, powerful, and well‑structured APIs with SDKs.\",
              },
              {
                title: \"Highly Customizable\",
                desc: \"Theme, workflow, and control options designed to match your app perfectly.\",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className=\"flex gap-4\">
                  <div className=\"flex-shrink-0\">
                    <div className=\"flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600\">
                      <Sparkles className=\"h-6 w-6 text-white\" />
                    </div>
                  </div>
                  <div>
                    <h3 className=\"text-xl font-semibold mb-2\">{item.title}</h3>
                    <p className=\"text-muted-foreground\">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
      <Footer /v>

          <div>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" /> Highly Customizable
            </h3>
            <p>
              Theme, workflow, and control options designed to match your app
              perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Futuristic Auth. All rights reserved.
      </footer>
    </div>
  );
}
