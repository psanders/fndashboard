import { createContext, useContext, useState, ReactNode } from "react";
import { WebClient as Client } from "@fonoster/sdk/dist/web/fonoster.min.js";

interface AuthContextType {
  isSignedIn: boolean;
  client: Client | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    const token = localStorage.getItem("accessToken");
    return !!token;
  });

  const [client, setClient] = useState<Client | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      const client = new Client();
      await client.login(email, password);

      localStorage.setItem("accessToken", client.getAccessToken());

      setClient(client);
      setIsSignedIn(true);
    } catch (error) {
      console.error("Authentication failed:", error);
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem("accessToken");
    setClient(null);
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, client, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
} 