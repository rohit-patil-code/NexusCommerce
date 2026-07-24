"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { registerUser } from "@/services/api";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      await registerUser({ fullName, email, password });
      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Failed to register");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 font-sans py-12">
      <Card className="w-full max-w-md shadow-xl border-gray-200">
        <CardHeader className="space-y-6 text-center pt-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
              <span className="text-white font-bold text-2xl leading-none">N</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-black">
              NexusCommerce
            </span>
          </div>
          <CardTitle className="text-2xl font-bold text-black tracking-tight">Create an account</CardTitle>
          <CardDescription className="text-gray-500">
            Join NexusCommerce to start shopping
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-200">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-semibold text-black">Full Name</Label>
              <Input 
                id="fullName" 
                type="text" 
                placeholder="John Doe" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required 
                className="border-gray-300 focus-visible:ring-black focus-visible:border-black rounded-md px-4 py-6"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-black">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="border-gray-300 focus-visible:ring-black focus-visible:border-black rounded-md px-4 py-6"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-semibold text-black">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="border-gray-300 focus-visible:ring-black focus-visible:border-black rounded-md px-4 py-6"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-semibold text-black">Confirm Password</Label>
              <Input 
                id="confirmPassword" 
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
                className="border-gray-300 focus-visible:ring-black focus-visible:border-black rounded-md px-4 py-6"
              />
            </div>
            <div className="pt-2">
              <Button type="submit" disabled={isLoading} className="w-full bg-black text-white hover:bg-gray-800 rounded-md py-6 text-sm font-bold transition-colors">
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-gray-100 py-6 bg-gray-50/50 rounded-b-xl">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-bold text-black hover:underline transition-all">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
