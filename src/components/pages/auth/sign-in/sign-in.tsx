"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/general/input";
import Button from "@/components/general/button/button";
import classes from "./sign-in.module.scss";
import { EButtonVariant } from "@/components/general/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

const SignIn: React.FC = () => {
  const router = useRouter();
  const { signIn, isLoading, error, isAuthenticated, clearError } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/jobs");
    }
  }, [isAuthenticated, router]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    
    if (error) {
      clearError();
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    await signIn({ email: formData.email, password: formData.password });
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Welcome Back</h1>
        <p className={classes.subtitle}>Sign in to access your job matches</p>
      </div>

      <form className={classes.form} onSubmit={handleSubmit}>
        {error && (
          <div className={classes.error}>
            {error}
          </div>
        )}

        <Input
          type="email"
          label="Email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={(value) => handleInputChange("email", value)}
          required
        />

        <Input
          type="password"
          label="Password"
          placeholder="••••••••"
          value={formData.password}
          onChange={(value) => handleInputChange("password", value)}
          required
        />

        <Button
          variant={EButtonVariant.PRIMARY}
          className={classes.submitButton}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </Button>
      </form>

      <div className={classes.footer}>
        <p className={classes.footerText}>
          Don't have an account?{" "}
          <Link href="/auth/signup" className={classes.linkButton}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
