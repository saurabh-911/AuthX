import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Mail, Lock, User, Github, Chrome } from "lucide-react";
import React, { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import type RegisterData from "@/models/RegisterData";
import { registerUser } from "@/services/AuthService";
import { useNavigate } from "react-router";
import OAuth2Buttons from "@/components/OAuth2Buttons";

function Signup() {
  const [data, setData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // text input, email, password, number , textarea
  // handling form change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setData((value) => ({
      ...value,
      [event.target.name]: event.target.value,
    }));
  };

  // handling form submit
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(data);

    //validations
    if (data.name.trim() === "") {
      toast.error("Name is required !");
      return;
    }

    if (data.email.trim() === "") {
      toast.error("Email is required !");
      return;
    }

    if (data.password.trim() === "") {
      toast.error("Password is required !");
      return;
    }

    //form submit for registrations
    try {
      const result = await registerUser(data);
      console.log(result);
      toast.success("User register successfully...");
      setData({
        name: "",
        email: "",
        password: "",
      });
      //navigate : login
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Error in registering the user...");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-background/80 text-foreground px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <Card className="bg-card/90 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl p-8">
          <CardContent>
            {/* Heading */}
            <motion.div className="text-center mb-8">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                Create Account
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center text-muted-foreground mt-2"
            >
              Join the next-generation authentication platform
            </motion.p>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="mt-8 space-y-5">
              {/* Name */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="pl-10 bg-input/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                  />
                </div>
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-input/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-input/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full mt-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </motion.button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-4">
                <div className="flex-1 h-[1px] bg-border"></div>
                <span className="text-muted-foreground text-sm">OR</span>
                <div className="flex-1 h-[1px] bg-border"></div>
              </div>

              {/* OAuth Buttons */}
              <OAuth2Buttons />
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

export default Signup;
