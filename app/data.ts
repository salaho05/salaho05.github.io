// Everything you are likely to edit lives in this file.

export const site = {
  name: "Salaheddine Masmoudi",
  shortName: "S. Masmoudi",
  school: "INSEA · Decision Sciences & OR",
  intro:
    "Optimization, quantitative finance and machine learning, from econometric studies to routing solvers.",
  email: "masmoudisalaheddine2@gmail.com",
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
    text: "How Bank Al-Maghrib decisions move the Casablanca index: 121 monthly observations (2015–2025), OLS, GARCH/EGARCH, VAR/SVAR and a Chow test for the post-COVID break.",
    url: "https://github.com/salaho05",
    style: "accent",
  },
  {
    tag: "Risk",
    title: "Financial Fraud Detection",
    text: "SVM, LDA and XGBoost compared on 284,807 card transactions (0.17% fraud), validated with the Friedman test across precision, recall, F1 and AUC.",
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
  "SQL",
  "VBA",
  "R",
  "C",
  "Scikit-learn",
  "XGBoost",
  "PyTorch",
  "TensorFlow",
  "CPLEX",
  "MiniZinc",
  "AMPL",
  "Power BI",
  "Docker",
  "MLflow",
  "Git",
];

export const experience = [
  {
    date: "Jul – Aug 2026",
    place: "ONEE",
    title: "Leak detection on a drinking water network",
    points: [
      "Decision-support tool for preventive pipe maintenance, from exploratory analysis to evaluation.",
      "Five algorithms compared (Logistic Regression, Random Forest, Gradient Boosting, XGBoost, LightGBM) with GroupKFold and GridSearchCV.",
      "SHAP interpretability and a cost-benefit analysis to set the intervention threshold.",
    ],
  },
  {
    date: "Jun – Jul 2025",
    place: "Taqa Nadifa",
    title: "Observation internship in renewable energy",
    points: [
      "Machine learning applied to industrial data: time series forecasting and anomaly detection.",
    ],
  },
];

export const education = [
  {
    date: "2024 – 2027",
    title: "Engineering degree, Decision Sciences and Operational Research",
    place: "INSEA, Rabat",
  },
  {
    date: "2022 – 2024",
    title: "Preparatory classes (MP)",
    place: "Lycée Salmane Al Farissi, Salé",
  },
];
