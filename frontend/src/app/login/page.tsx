"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
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
          <CardTitle className="text-2xl font-bold text-black tracking-tight">Welcome back</CardTitle>
          <CardDescription className="text-gray-500">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-8">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-black">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                required 
                className="border-gray-300 focus-visible:ring-black focus-visible:border-black rounded-md px-4 py-6"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-semibold text-black">Password</Label>
                <Link href="#" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                className="border-gray-300 focus-visible:ring-black focus-visible:border-black rounded-md px-4 py-6"
              />
            </div>
            <div className="pt-2">
              <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 rounded-md py-6 text-sm font-bold transition-colors">
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-gray-100 py-6 bg-gray-50/50 rounded-b-xl">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-bold text-black hover:underline transition-all">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
