// Everything you are likely to edit lives in this file.

export const site = {
  name: "Salaheddine Masmoudi",
  shortName: "S. Masmoudi",
  school: "INSEA · Decision Sciences & OR",
  intro:
    "Optimization, quantitative finance and machine learning, from econometric studies to routing solvers.",
  // TODO: replace the email placeholder below.
  email: "your.email@example.com",
  github: "https://github.com/salaho05",
  linkedin: "https://www.linkedin.com/in/salaheddine-masmoudi-aa541a331",
};

export type Project = {
  tag: string;
  title: string;
  text: string;
  // TODO: replace each url with the link to the project's own repository.
  url: string;
  style: "accent" | "light" | "dark";
};

export const projects: Project[] = [
  {
    tag: "Econometrics",
    title: "Impact of Monetary Policy on MASI",
    text: "Moroccan stock market study with GARCH/EGARCH, VAR/SVAR and a Chow test for structural breaks.",
    url: "https://github.com/salaho05",
    style: "accent",
  },
  {
    tag: "Risk",
    title: "Financial Fraud Detection",
    text: "SVM, XGBoost and LDA compared, validated with the Friedman test.",
    url: "https://github.com/salaho05",
    style: "light",
  },
  {
    tag: "Optimization",
    title: "Urban Delivery Route Optimization",
    text: "VRPTW on Casablanca data with MiniZinc, CPLEX and LNS, against Clarke-Wright.",
    url: "https://github.com/salaho05",
    style: "light",
  },
  {
    tag: "Numerical methods",
    title: "Non-Linear Optimization Algorithms",
    text: "Six algorithms from scratch, 180 benchmark instances.",
    url: "https://github.com/salaho05",
    style: "dark",
  },
  {
    tag: "NLP",
    title: "SMS Spam Detection",
    text: "TF-IDF and Naive Bayes pipeline, 97.58% accuracy on the UCI SMS Spam Collection.",
    url: "https://github.com/salaho05",
    style: "light",
  },
];

export const stack = [
  "Python",
  "R",
  "SQL",
  "C",
  "VBA",
  "PyTorch",
  "XGBoost",
  "Scikit-learn",
  "CPLEX",
  "MiniZinc",
  "AMPL",
  "Power BI",
];
