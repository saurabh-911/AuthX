import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Mail, Lock, Github, Chrome, CheckCircle2Icon } from "lucide-react";
import { useState, type FormEvent } from "react";
import type LoginData from "@/models/LoginData";
import toast from "react-hot-toast";
import { loginUser } from "@/services/AuthService";
import { useNavigate } from "react-router";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Spinner } from "@/components/ui/spinner";
import useAuth from "@/auth/store";
import OAuth2Buttons from "@/components/OAuth2Buttons";
function Login() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const navigate = useNavigate();
  const login = useAuth((state) => state.login);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    //validation:
    if (loginData.email.trim() === "") {
      toast.error("Input required !");
      return;
    }
    if (loginData.password.trim() === "") {
      toast.error("Input required !");
      return;
    }

    //server call for login
    // console.log(event.target);
    // console.log(loginData);

    try {
      setLoading(true);
      // const userInfo = await loginUser(loginData);

      //login function : useAuth
      await login(loginData);
      toast.success("Login success");
      // console.log(userInfo);
      navigate("/dashboard");

      //save the current user logged in informations
      //localstorage
    } catch (error: any) {
      console.log(error);

      toast.error("Error !!");
      if (error?.status == 400) {
        setError(error);
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
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
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-center"
            >
              Welcome Back
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-muted-foreground mt-2"
            >
              Login to access your authentication app
            </motion.p>

            {/* error section */}
            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className=\"mt-6\">
                <Alert variant=\"destructive\" className=\"bg-red-500/10 border border-red-500/50 rounded-lg\">
                  <CheckCircle2Icon />
                  <AlertTitle className=\"text-red-600 text-sm\">
                    {error?.response
                      ? error?.response?.data?.message
                      : error?.message}
                  </AlertTitle>
                </Alert>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="mt-8 space-y-5">
              {/* Email */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 bg-input/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="email"
                    value={loginData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-input/50 border border-border/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                  />
                </div>
              </motion.div>

              <motion.button
                type="submit"
                disabled={loading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Spinner />
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </motion.button>
                {loading ? (
                  <>
                    <Spinner />
                    Please wait...
                  </>
                ) : (
                  "Login"
                )}
              </Button>

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

export default Login;
