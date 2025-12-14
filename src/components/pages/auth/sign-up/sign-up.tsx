import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/general/input";
import Button from "@/components/general/button/button";
import classes from "./sign-up.module.scss";
import { EButtonVariant } from "@/components/general/button";
import { useRouter } from "next/navigation";

const SignUp: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
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
        <h1 className={classes.title}>Create Account</h1>
        <p className={classes.subtitle}>Join MatchJob to find your perfect role</p>
      </div>

      <form className={classes.form} onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Full Name"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={(value) => handleInputChange("fullName", value)}
          required
        />

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
          onClick={handleSubmit}
          className={classes.submitButton}
        >
          Sign Up
        </Button>
      </form>

      <div className={classes.footer}>
        <p className={classes.footerText}>
          Already have an account?{" "}
          <Link href="/auth/signin" className={classes.linkButton}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
