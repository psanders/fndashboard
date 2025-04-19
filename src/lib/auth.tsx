import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { WebClient as Client } from "@fonoster/sdk/dist/web/fonoster.min.js";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  isSignedIn: boolean;
  client: Client | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

interface Access {
  accessKeyId: string;
  role: string;
}

interface DecodedToken {
  accessKeyId: string;
  access: Access[];
}

interface AuthContextType {
  isSignedIn: boolean;
  client: Client | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  workspaceAccessKeyId?: string;
  loading: boolean;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [workspaceAccessKeyId, setWorkspaceAccessKeyId] = useState<string>();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(() => {
    const token = localStorage.getItem("accessToken");
    return !!token;
  });

  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const initializeClient = async () => {
      const token = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (token && refreshToken) {
        const client = new Client();
        try {
          await client.loginWithRefreshToken(refreshToken);
          setClient(client);
          setIsSignedIn(true);

          const extracted = extractWorkspaceAccessKeyId(token);
          if (extracted) setWorkspaceAccessKeyId(extracted);
        } catch (err) {
          console.error("Failed to login with refresh token", err);
          setClient(null);
          setIsSignedIn(false);
        }
      }
      setLoading(false);
    };

    initializeClient();
  }, []);
  

  const extractWorkspaceAccessKeyId = (token: string) => {
    try {
      const decoded = jwtDecode<DecodedToken>(token);
      return decoded.access?.[0]?.accessKeyId;
    } catch (err) {
      console.error("Failed to decode token", err);
      return undefined;
    }
  };


  const signIn = async (email: string, password: string) => {
    try {
      const client = new Client();
      await client.login(email, password);

      localStorage.setItem("accessToken", client.getAccessToken());
      localStorage.setItem("refreshToken", client.getRefreshToken());

      setClient(client);
      setIsSignedIn(true);
    } catch (error) {
      console.error("Authentication failed:", error);
      throw error;
    }
  };

  const signOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setClient(null);
    setIsSignedIn(false);
    setWorkspaceAccessKeyId(undefined);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, client, signIn, signOut, workspaceAccessKeyId, loading }}>
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