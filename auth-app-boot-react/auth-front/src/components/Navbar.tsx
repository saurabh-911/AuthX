import { Button } from "./ui/button";
import { NavLink, useNavigate } from "react-router";
import useAuth from "@/auth/store";

function Navbar() {
  const checkLogin = useAuth((state) => state.checkLogin);
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* brand */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <span className="text-white font-bold text-lg">Ax</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              AuthX
            </span>
          </NavLink>

          <div className="flex gap-3 items-center">
            {checkLogin() ? (
              <div className="flex gap-3 items-center">
                <div className="text-sm font-medium text-muted-foreground hidden sm:inline">
                  Welcome, {user?.name}
                </div>
                <NavLink to={"/dashboard/profile"}>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-lg hover:bg-primary/10"
                  >
                    Dashboard
                  </Button>
                </NavLink>
                <Button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  size="sm"
                  className="cursor-pointer rounded-lg"
                  variant="outline"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex gap-2 sm:gap-3">
                <NavLink to={"/login"}>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="rounded-lg hidden sm:inline-flex"
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink to={"/signup"}>
                  <Button
                    size="sm"
                    className="rounded-lg bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  >
                    Sign Up
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
