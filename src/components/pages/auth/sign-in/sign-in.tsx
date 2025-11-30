"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/general/input";
import Button from "@/components/general/button/button";
import classes from "./sign-in.module.scss";
import { EButtonVariant } from "@/components/general/button";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    router.push("/jobs");
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Welcome Back</h1>
        <p className={classes.subtitle}>Sign in to access your job matches</p>
      </div>

      <form className={classes.form} onSubmit={handleSubmit}>
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
        >
          Sign In
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
