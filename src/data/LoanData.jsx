import businessImg from '../assets/images/Tiny bankrupt business people getting subsidy from government.jpg'
import personalImg from '../assets/images/Gold coins and banknotes 3d cartoon style icon.jpg'
import professionalImg from '../assets/images/Stack of money and gold coins 3d cartoon style icon.jpg'
import secureImg from '../assets/images/Mar-Business_11.jpg'
import instantImg from '../assets/images/Wavy_Bus-21_Single-10.jpg'

import business from '../assets/images/BusinessHandshakeSilhouette.jpeg'
import personal from '../assets/images/BusinessHandshakeSilhouette.jpeg'
import professional from '../assets/images/BusinessHandshakeSilhouette.jpeg'
import secure from '../assets/images/BusinessHandshakeSilhouette.jpeg'
import instant from '../assets/images/BusinessHandshakeSilhouette.jpeg'

import oneClick from '../assets/images/one-click.png'
import onlineDocumentaion from '../assets/images/online-documentation.png'
import quickDisbursal from '../assets/images/quick-disbursal.png'

import bank1 from '../assets/images/bob.png'
import bank2 from '../assets/images/cbi.png'
import bank3 from '../assets/images/sbi.png'
import bank4 from '../assets/images/union.png'
import bank5 from '../assets/images/boi.png'
import bank6 from '../assets/images/canera.jpeg'
import bank7 from '../assets/images/pnjab&sindh.png'
import bank8 from '../assets/images/HDFC-Bank-logo.png'
import bank9 from '../assets/images/icici.png'
import bank10 from '../assets/images/pnb.png'
import bank11 from '../assets/images/Indian_Bank_logo.svg.png'

import blog1 from '../assets/images/Euro Banknotes Illuminated.jpeg' 
import blog2 from '../assets/images/BusinessHandshakeSilhouette.jpeg' 
import blog3 from '../assets/images/Mar-Business_11.jpg' 


// Trending Loans Data
export const loanData = [
  {
    title: "MSME Loan",
    description: "Financial support for micro, small, and medium enterprises.",
    image: instantImg,
    borderColor: "#F44336", // Red
    buttonColor: "error", // Refers to MUI's error color
  },
  {
    title: "Project Loan",
    description: "Funding for various projects to ensure successful completion.",
    image: instantImg,
    borderColor: "#FF9800", // Orange
    buttonColor: "warning", // Refers to MUI's warning color
  },
  {
    title: "Factory Loan",
    description: "Loans tailored for setting up or expanding manufacturing units.",
    image: secureImg,
    borderColor: "#9C27B0", // Purple
    buttonColor: "secondary",
  },
  {
    title: "CO/CD Loan",
    description: "Loans for cash credit and current account overdrafts.",
    image: professionalImg,
    borderColor: "#4CAF50", // Green
    buttonColor: "success", // Refers to MUI's success color
  },
  {
    title: "Business Loan",
    description: "Comprehensive funding solutions for all business needs.",
    image: businessImg,
    borderColor: "#2196F3", // Blue
    buttonColor: "primary", // Refers to MUI's primary color
  },  
  {
    title: "Personal Loan",
    description: "Unsecured loans for personal expenses or emergencies.",
    image: personalImg,
    borderColor: "#FF5722", // Deep Orange
    buttonColor: "error", // Refers to MUI's error color
  },  
  {
    title: "House Loan",
    description: "Loans to help you buy or build your dream home.",
    image: instantImg,
    borderColor: "#FFC107", // Amber
    buttonColor: "warning", // Refers to MUI's warning color
  },
];
  
  // Loan Sections Data (for the alternating loan info sections)
  export const loanSections = [
    {
      title: "MSME Loan",
      paragraph:
        "Empower your small or medium-sized enterprise with our MSME Loan. Whether you need funding for business expansion, working capital, or new equipment, we provide customized financial solutions tailored to the specific needs of MSMEs. Enjoy low interest rates, flexible repayment options, and fast processing to help your business grow without hassle.",
      image: business, // Assuming MSME loan uses the same image
    },
    {
      title: "Project Loan",
      paragraph:
        "Secure financing for your large-scale projects with our Project Loan. Ideal for infrastructure development, construction projects, or new business ventures, our project loan offers long-term repayment plans, lower interest rates, and specialized financing structures. Let us help you turn your ambitious projects into reality with a tailored approach to funding.",
      image: business, // Assuming Project Loan uses the same image
    },
    {
      title: "Factory Loan",
      paragraph:
        "Upgrade or expand your manufacturing facility with our Factory Loan. Whether you’re looking to purchase new machinery, expand your production capacity, or optimize your supply chain, our loan solutions provide flexible repayment options and competitive interest rates. Benefit from our specialized loan offerings to grow your factory operations and stay ahead in the industry.",
      image: business, // Updated to match the loan type
    },
    {
      title: "CO/CD Loan",
      paragraph:
        "Our Construction and Development (CO/CD) Loan is designed to provide comprehensive financing for property development, real estate projects, or large-scale infrastructure. With flexible loan terms, competitive rates, and a focus on funding large construction or development projects, we support your vision to build, develop, or expand real estate ventures. Let our financial solutions drive your success.",
      image: business, // Updated to match the loan type
    },
    {
      title: "Business Loan",
      paragraph:
        "Expand your business, launch new projects, or manage your cash flow with our Business Loan solutions. We offer flexible loan terms to support both small and large businesses, whether you're investing in equipment, expanding operations, or funding a new initiative. Our business loans are designed with competitive interest rates and quick processing to ensure your business stays agile.",
      image: business, // Same as original
    },
    {
      title: "Personal Loan",
      paragraph:
        "Need funds for personal financial needs? Our Personal Loan is here to offer you quick access to funds for medical expenses, vacations, education, or other personal needs. With flexible repayment terms and competitive interest rates, we provide a hassle-free solution for your immediate financial requirements. No collateral required and easy documentation for fast approval.",
      image: business, // Same as original
    },
    {
      title: "House Loan",
      paragraph:
        "Achieve your dream of owning a home with our House Loan. Whether you're purchasing a new home, refinancing an existing mortgage, or building your dream house, we offer flexible repayment options, competitive interest rates, and easy approval processes. Enjoy long-term repayment plans that suit your financial situation, and take the first step toward your dream home today.",
      image: business, // Assuming the same image for House Loan
    },
  ];
  
  
  // Process Steps Data (How it works section)
 export const processSteps = [
  {
    title: "2-Minute Discussion with Our Finance Expert",
    description: "Start your loan journey by having a quick 2-minute conversation with our expert. We’ll guide you through your options and recommend the best loan for your needs.",
    icon: oneClick, 
  },
  {
    title: "Checking of Documentation",
    description: "We thoroughly review your documents to ensure everything is in order, simplifying the process and ensuring you meet all loan criteria with ease.",
    icon: onlineDocumentaion, 
  },
  {
    title: "Quick Approval & Disbursal",
    description: "Once your documents are verified, get fast approval and disbursal. You can access the loan amount within hours, straight to your account.",
    icon: quickDisbursal, 
  },
];

  
  // Blog Section Data (Recent Blog posts)
  export const blogs = [
    {
      title: "The Future of Personal Loans in 2024",
      description: "An in-depth look at the trends shaping personal loans this year.",
      image: blog1,
      date: "September 10, 2024",
      link: "/blogs/future-of-personal-loans-2024",
    },
    {
      title: "5 Tips for Quick Loan Approval",
      description: "Learn how to get your loan approved quickly with these top tips.",
      image: blog2,
      date: "August 25, 2024",
      link: "/blogs/quick-loan-approval-tips",
    },
    {
      title: "Understanding Loan Interest Rates",
      description: "A comprehensive guide to understanding how loan interest rates work.",
      image: blog3,
      date: "July 30, 2024",
      link: "/blogs/understanding-loan-interest-rates",
    },
  ];
  
  // Bank Logos Data (Associated Banks section)
  export const bankLogos = [
    {
      name: "Bank of America",
      logo: bank1, // Example logo path
    },
    {
      name: "Chase Bank",
      logo: bank2,
    },
    {
      name: "Wells Fargo",
      logo: bank3,
    },
    {
      name: "Citibank",
      logo: bank4,
    },
    {
      name: "Citibank",
      logo: bank5,
    },
    {
      name: "Citibank",
      logo: bank6,
    },
    {
      name: "Citibank",
      logo: bank7,
    },
    {
      name: "Citibank",
      logo: bank8,
    },
    {
      name: "Citibank",
      logo: bank9,
    },
    {
      name: "Citibank",
      logo: bank10,
    },
    {
      name: "Citibank",
      logo: bank11,
    },
  ];
  