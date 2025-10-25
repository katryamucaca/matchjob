"use client";

import React, { useState } from "react";
import classes from "./faq.module.scss";
import cn from "classnames";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How does MatchJob work?",
    answer:
      "MatchJob uses AI technology to analyze your resume and match you with relevant job opportunities. Simply upload your resume or fill out our short form, and our AI will find the best matches for your skills and experience.",
  },
  {
    id: 2,
    question: "Is MatchJob free to use?",
    answer:
      "Yes, MatchJob is completely free for job seekers. We help you find your perfect job match without any cost.",
  },
  {
    id: 3,
    question: "What file formats do you accept for resumes?",
    answer:
      "We accept PDF and DOCX files for resume uploads. The maximum file size is 5MB.",
  },
  {
    id: 4,
    question: "How accurate are the job matches?",
    answer:
      "Our AI technology provides highly accurate matches based on your skills, experience, and preferences. We continuously improve our matching algorithm to ensure the best results.",
  },
  {
    id: 5,
    question: "Can I track my job applications?",
    answer:
      "Yes! Once you sign up, you can use our Progress Tracker to monitor your applications through different stages: Applied, Interview, Test Task, and Offer.",
  },
  {
    id: 6,
    question: "How do I contact support?",
    answer:
      "You can reach our support team at support@matchjob.ai. We're here to help you with any questions or issues you may have.",
  },
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.header}>
          <h1 className={classes.title}>Frequently Asked Questions</h1>
          <p className={classes.subtitle}>
            Find answers to common questions about MatchJob and how our
            AI-powered job matching works.
          </p>
        </div>

        <div className={classes.faqList}>
          {faqData.map((item) => (
            <div key={item.id} className={classes.faqItem}>
              <button
                className={classes.question}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <span>{item.question}</span>
                <span
                  className={cn(classes.icon, {
                    [classes.open]: openItems.includes(item.id),
                  })}
                >
                  +
                </span>
              </button>
              {openItems.includes(item.id) && (
                <div className={classes.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
