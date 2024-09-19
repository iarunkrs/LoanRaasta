import React from 'react';
import { Box, Button, Container, Divider, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

// Dynamic content as constants
const loanTypes = [
  { title: 'Marriage Loan', img: 'marriage-loan.jpg', description: 'Cover wedding expenses with ease and peace of mind.' },
  { title: 'Holiday Loan', img: 'holiday-loan.jpg', description: 'Plan your dream vacation and turn it into reality.' },
  { title: 'Personal Loan', img: 'personal-loan.jpg', description: 'For all your personal needs, from emergencies to shopping.' },
];

const eligibilityCriteria = ['18+ years old', 'Valid ID proof', 'Stable income', 'Good credit history'];

const bankOffers = [
  {
    name: 'Bank A',
    rateOfInterest: '10% - 12%',
    processingFees: '1.5%',
    loanTenure: '12 to 60 months',
    latePaymentCharges: '2%',
    img: 'https://via.placeholder.com/100'
  },
  {
    name: 'Bank B',
    rateOfInterest: '11% - 13%',
    processingFees: '2%',
    loanTenure: '24 to 60 months',
    latePaymentCharges: '1.5%',
    img: 'https://via.placeholder.com/100'
  },
  {
    name: 'Bank C',
    rateOfInterest: '9% - 11%',
    processingFees: '1%',
    loanTenure: '36 to 72 months',
    latePaymentCharges: '3%',
    img: 'https://via.placeholder.com/100'
  },
  {
    name: 'Bank D',
    rateOfInterest: '10.5% - 12.5%',
    processingFees: '1.75%',
    loanTenure: '18 to 54 months',
    latePaymentCharges: '2.5%',
    img: 'https://via.placeholder.com/100'
  }
];


const loanDetails = [
  {
    title: 'Rate of Interest',
    text: 'Personal loan interest rates typically range between 10% and 15%, depending on the lender and your credit score.',
    img: 'https://via.placeholder.com/100',
    extra: 'Rates can be lower if you have an excellent credit profile, and rates may also vary based on your loan tenure.'
  },
  {
    title: 'Processing Fees',
    text: 'A one-time fee charged by lenders, typically ranging from 1% to 3% of the loan amount.',
    img: 'https://via.placeholder.com/100',
    extra: 'Make sure to factor in this fee when calculating the total cost of the loan.'
  },
  {
    title: 'Loan Tenure',
    text: 'Personal loan tenures range from 12 months to 60 months, offering flexible repayment options.',
    img: 'https://via.placeholder.com/100',
    extra: 'Choosing a longer tenure can reduce your EMI, but you may end up paying more in interest over time.'
  },
  {
    title: 'Late Payment Charges',
    text: 'Typically, lenders charge 2% of the outstanding loan amount as a penalty for late payments.',
    img: 'https://via.placeholder.com/100',
    extra: 'Late payments can also negatively affect your credit score, so it’s essential to pay on time.'
  }
];

const factorsAffectingLoan = [
  {
    title: "Credit Score",
    description: "A high credit score (typically 700 and above) increases your chances of getting a better loan offer with lower interest rates. Lenders view individuals with strong credit histories as less risky borrowers."
  },
  {
    title: "Income Level",
    description: "Your income plays a significant role in determining your loan eligibility. Higher income levels mean you're more likely to be approved for larger loans, and you may receive more favorable interest rates."
  },
  {
    title: "Employment Status",
    description: "Stable, long-term employment reassures lenders of your ability to make regular loan payments. Self-employed individuals may face more scrutiny."
  },
  {
    title: "Debt-to-Income Ratio",
    description: "Lenders prefer borrowers whose monthly debt payments make up less than 40% of their income. A high ratio could suggest you're over-leveraged and may struggle with additional debt."
  },
  {
    title: "Loan Amount & Tenure",
    description: "The larger the loan amount or the longer the repayment period, the higher the risk for the lender, which may lead to increased interest rates or stricter approval requirements."
  },
  {
    title: "Current Financial Obligations",
    description: "Outstanding debts such as mortgages, car loans, or credit card balances are taken into consideration when applying for a personal loan."
  }
];

const loanImprovementStrategies = [
  {
    title: "Improve Your Credit Score",
    description: "A strong credit score can significantly improve your chances of loan approval. To boost your credit score, regularly check your credit report, pay off outstanding debts, and maintain a good payment history. A higher credit score not only enhances your approval chances but also helps secure lower interest rates.",
    image: "https://via.placeholder.com/500x300?text=Credit+Score"
  },
  {
    title: "Maintain Stable Employment",
    description: "Lenders prefer borrowers with stable employment, as it indicates a reliable income stream. If you have a history of long-term employment or a steady job, it strengthens your application. Be prepared to provide proof of employment and consistent income.",
    image: "https://via.placeholder.com/500x300?text=Stable+Employment"
  },
  {
    title: "Lower Your Debt-to-Income Ratio",
    description: "A low debt-to-income (DTI) ratio shows that you manage your debts well compared to your income. Work on paying down existing debts and avoid taking on new ones to lower your DTI ratio. Keeping it below 40% can improve your loan approval odds.",
    image: "https://via.placeholder.com/500x300?text=Debt-to-Income+Ratio"
  },
  {
    title: "Compare Lenders",
    description: "Different lenders offer varying terms and interest rates. Take time to compare loan options from multiple lenders to find the best deal for your financial situation. Use online tools to compare rates and terms to ensure you get the most favorable loan conditions.",
    image: "https://via.placeholder.com/500x300?text=Compare+Lenders"
  },
  {
    title: "Use a Co-Signer",
    description: "If your credit score or income level is not ideal, consider using a co-signer with a stronger financial profile. A co-signer shares responsibility for the loan, which can enhance your application and increase your chances of approval.",
    image: "https://via.placeholder.com/500x300?text=Co-Signer"
  },
  {
    title: "Prepare Proper Documentation",
    description: "Having all necessary documents ready can speed up the loan application process. Ensure you have your proof of income, identification, credit history, and any other required documents in advance. Well-organized documentation reflects professionalism and preparedness.",
    image: "https://via.placeholder.com/500x300?text=Documentation"
  }
];

// Dynamic content
const eligibilityData = {
  heading: "Eligibility Criteria for Personal Loans",
  criteriaLeft: [
    "Must be a citizen or permanent resident of the country.",
    "Minimum age of 21 years and maximum age of 65 years.",
    "Stable source of income or employment.",
  ],
  criteriaRight: [
    "Good credit score, generally above 600.",
    "Valid identification documents like Aadhar card, passport, etc.",
    "Proof of residence and income such as utility bills or bank statements.",
  ],
  imageSrc: "https://via.placeholder.com/400",
};

const featuresBenefitsData = {
  heading: "Features & Benefits of Personal Loans",
  content: [
    "Flexible Payment Terms: Choose a repayment schedule that fits your financial situation, with options ranging from short-term to long-term loans.",
    "Competitive Interest Rates: Benefit from low-interest rates compared to credit cards and other forms of credit.",
    "Minimal Paperwork: Simplified documentation process ensures quick approval and disbursement.",
    "Fast Approval: Receive funds quickly after approval, often within 24-48 hours.",
    "Versatile Use: Use the funds for various needs, including medical emergencies, education, home renovations, and more.",
    "No Collateral Required: Personal loans are unsecured, meaning you don't have to put up assets as collateral."
  ],
  gradientColors: ['#0099ff', '#66ccff'], 
};


const PersonalLoan = () => {
  return (
    <Box>
      {/* Banner Section */}
      <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', md: 'row' }, 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '400px', 
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://via.placeholder.com/1200x800)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      color: '#fff', 
      textAlign: 'center', 
      padding: '40px',
      // borderRadius: '10px', 
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
    }}
  >
    <Box sx={{ flex: 1, p: '20px', maxWidth: '500px', margin: 'auto' }}>
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold', mb: '20px' }}>
        Personal Loan
      </Typography>
      <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, mb: '20px' }}>
        Get the financial support you need for life's important moments. Whether it's for a wedding, vacation, or unexpected expenses, our personal loans offer the flexibility and convenience you need.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ 
          px: '20px', 
          py: '12px', 
          borderRadius: '25px', 
          fontSize: '1rem', 
          backgroundColor: '#1A4CFF', 
          '&:hover': { 
            backgroundColor: '#0031CC' 
          } 
        }}
      >
        Apply Now
      </Button>
    </Box>
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px' }}>
      <img 
        src="https://via.placeholder.com/500" 
        alt="Personal Loan" 
        style={{ 
          borderRadius: '15px', 
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', 
          width: '100%', 
          maxWidth: '400px'
        }} 
      />
    </Box>
  </Box>

    <Container>
      {/* Types of Loans Section */}
      <Box sx={{ padding: '40px 20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {loanTypes.map((loan, index) => (
          <Box key={index} sx={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
            <img src={`https://via.placeholder.com/150`} alt={loan.title} width="100%" style={{ borderRadius: '10px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: '10px' }}>{loan.title}</Typography>
            <Typography sx={{ marginY: '10px' }}>{loan.description}</Typography>
            <Button variant="outlined" color="primary">Read More</Button>
          </Box>
        ))}
      </Box>

      {/* Features & Benefits Section */}
      <Box sx={{ padding: '40px 20px', background: `linear-gradient(135deg, ${featuresBenefitsData.gradientColors[0]} 0%, ${featuresBenefitsData.gradientColors[1]} 100%)`, borderRadius: '10px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px', color: '#1A4CFF', fontWeight: 'bold' }}>
        {featuresBenefitsData.heading}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', justifyContent: 'center' }}>
        {/* Left Column */}
        <Box sx={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Typography sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Key Features:</Typography>
          <ul>
            {featuresBenefitsData.content.slice(0, 3).map((feature, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>{feature}</li>
            ))}
          </ul>
        </Box>
        {/* Right Column */}
        <Box sx={{ flex: 1, backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <Typography sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Additional Benefits:</Typography>
          <ul>
            {featuresBenefitsData.content.slice(3).map((benefit, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>{benefit}</li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>

      {/* What is a Personal Loan Section */}
      <Box sx={{ display: 'flex', padding: '40px 20px', alignItems: 'center', background: '#fff' }}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>What is a Personal Loan?</Typography>
          <Typography sx={{ marginY: '20px', lineHeight: 1.8 }}>
            A personal loan is an unsecured loan that provides you with access to funds without requiring collateral. Unlike home or car loans, which are tied to a specific purchase, personal loans can be used for virtually any purpose—from financing a major purchase or consolidating high-interest debt to covering unexpected expenses. 
            <br /><br />
            Personal loans typically come with fixed interest rates and are repaid over a set period, usually ranging from 12 months to 5 years. They are an ideal solution for those looking for quick, flexible financing without the need for asset-backed security.
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src="https://via.placeholder.com/400" alt="What is Personal Loan" width="100%" />
        </Box>
      </Box>

      {/* Eligibility Section */}
      <Box sx={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f5f5f5' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A4CFF', marginBottom: '40px' }}>
        {eligibilityData.heading}
      </Typography>

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '20px'
        }}
      >
        {/* Left Criteria List */}
        <Box 
          sx={{ 
            flex: 1, 
            backgroundColor: '#ffffff', 
            borderRadius: '10px', 
            padding: '20px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            textAlign: 'center',
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>Left Side Criteria</Typography>
          <List>
            {eligibilityData.criteriaLeft.map((item, index) => (
              <ListItem key={index} sx={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Center Image */}
        <Box 
          sx={{ 
            flex: 1, 
            textAlign: 'center', 
            display: 'flex', 
            justifyContent: 'center',
            marginY: { xs: '20px', md: '0' }
          }}
        >
          <img 
            src={eligibilityData.imageSrc} 
            alt="Eligibility" 
            style={{ 
              borderRadius: '10px', 
              maxWidth: '100%', 
              height: 'auto'
            }} 
          />
        </Box>

        {/* Right Criteria List */}
        <Box 
          sx={{ 
            flex: 1, 
            backgroundColor: '#ffffff', 
            borderRadius: '10px', 
            padding: '20px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            textAlign: 'center',
            display: { xs: 'none', md: 'block' }
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>Right Side Criteria</Typography>
          <List>
            {eligibilityData.criteriaRight.map((item, index) => (
              <ListItem key={index} sx={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      {/* Mobile View - Stacks Image Above and Lists Below */}
      <Box 
        sx={{ 
          display: { xs: 'block', md: 'none' }, 
          marginTop: '20px'
        }}
      >
        <Box 
          sx={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '10px', 
            padding: '20px', 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
            marginBottom: '20px'
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>Eligibility Criteria</Typography>
          <List>
            {eligibilityData.criteriaLeft.concat(eligibilityData.criteriaRight).map((item, index) => (
              <ListItem key={index} sx={{ padding: '10px', borderBottom: '1px solid #eee' }}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box 
          sx={{ 
            textAlign: 'center'
          }}
        >
          <img 
            src={eligibilityData.imageSrc} 
            alt="Eligibility" 
            style={{ 
              borderRadius: '10px', 
              maxWidth: '100%', 
              height: 'auto'
            }} 
          />
        </Box>
      </Box>
    </Box>

      {/* Strategies to Improve Loan Odds */}
      <Box sx={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '40px' }}>
      Strategies to Improve Loan Odds
    </Typography>
    
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
        gap: '20px',
      }}
    >
      {loanImprovementStrategies.map((strategy, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-10px)',
              boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
            },
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}
        >
          <img
            src={strategy.image}
            alt={strategy.title}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px 10px 0 0',
            }}
          />
          <Box sx={{ padding: '20px' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              {strategy.title}
            </Typography>
            <Typography sx={{ marginBottom: '20px' }}>
              {strategy.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>



      {/* Factors Affecting Personal Loan */}
      <Box sx={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', textAlign: 'center', marginBottom: '20px' }}>
          Factors Affecting Personal Loan
        </Typography>
        
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', 
              sm: 'repeat(1, 1fr)', 
              md: 'repeat(2, 1fr)' 
            }, 
            gap: '20px' 
          }}
        >
          {factorsAffectingLoan.map((factor, index) => (
            <Box 
              key={index} 
              sx={{ 
                backgroundColor: '#fff', 
                padding: '20px', 
                borderRadius: '10px', 
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>{factor.title}</Typography>
              <Typography>{factor.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>


        {/* Personal Loan Details */}
        <Box sx={{ padding: '60px 20px', backgroundColor: '#f7faff' }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'black', 
              textAlign: 'center', 
              marginBottom: '40px' 
            }}
          >
            Personal Loan Details
          </Typography>

          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
              gap: '20px' 
            }}
          >
            {loanDetails.map((detail, index) => (
              <Box 
                key={index} 
                sx={{ 
                  padding: '20px', 
                  backgroundColor: '#fff', 
                  borderRadius: '15px', 
                  textAlign: 'center', 
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': { transform: 'translateY(-10px)', boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)' }
                }}
              >
                <img 
                  src={detail.img} 
                  alt={detail.title} 
                  style={{ width: '80px', height: '80px', marginBottom: '15px', objectFit: 'cover' }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>{detail.title}</Typography>
                <Typography sx={{ marginBottom: '10px' }}>{detail.text}</Typography>
                <Typography sx={{ color: '#666', fontStyle: 'italic' }}>{detail.extra}</Typography>
              </Box>
            ))}
          </Box>
        </Box>


     {/* How to Apply for a Personal Loan */}
      <Box sx={{ padding: '60px 20px', background: '#e5f3fe' }}>
        <Typography 
          variant="h4" 
          sx={{ 
            fontWeight: 'bold', 
            color: 'black', 
            textAlign: 'center', 
            marginBottom: '30px' 
          }}
        >
          How to Apply for a Personal Loan
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: '30px', justifyContent: 'center' }}>
          {[
            { step: 1, text: "Research and compare loan offers from multiple lenders.", img: 'https://via.placeholder.com/100' },
            { step: 2, text: "Check your eligibility by ensuring you meet the lender's criteria.", img: 'https://via.placeholder.com/100' },
            { step: 3, text: "Prepare necessary documents like proof of identity, address, income, and bank statements.", img: 'https://via.placeholder.com/100' },
            { step: 4, text: "Submit your loan application online or in person.", img: 'https://via.placeholder.com/100' },
            { step: 5, text: "Once approved, review the loan agreement carefully before signing.", img: 'https://via.placeholder.com/100' }
          ].map((step, index) => (
            <Box 
              key={index} 
              sx={{ 
                padding: '20px', 
                background: '#fff', 
                borderRadius: '10px', 
                textAlign: 'center', 
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': { transform: 'translateY(-10px)', boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)' }
              }}
            >
              <img src={step.img} alt={`Step ${step.step}`} style={{ marginBottom: '15px', width: '80px', height: '80px', objectFit: 'cover' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1A4CFF', marginBottom: '10px' }}>Step {step.step}</Typography>
              <Typography sx={{ lineHeight: 1.6 }}>{step.text}</Typography>
            </Box>
          ))}
        </Box>

        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            marginTop: '40px', 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            padding: '12px 40px', 
            backgroundColor: '#1A4CFF', 
            '&:hover': { backgroundColor: '#0031CC' } 
          }}
        >
          Apply Now
        </Button>
      </Box>


      {/* List of Banks */}
      <Box sx={{ padding: '40px 20px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
          Banks Offering Personal Loans
        </Typography>
        
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { 
              xs: '1fr', sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(4, 1fr)' 
            }, 
            gap: '20px', 
            marginTop: '20px' 
          }}
        >
          {bankOffers.map((bank, index) => (
            <Box
              key={index}
              sx={{
                border: '1px solid #ccc',
                padding: '30px',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.15)',
                },
                backgroundColor: '#fff',
              }}
            >
              <img
                src={bank.img}
                alt={bank.name}
                style={{ 
                  borderRadius: '50%', 
                  marginBottom: '15px', 
                  width: '100px', 
                  height: '100px', 
                  objectFit: 'cover' 
                }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px' }}>
                {bank.name}
              </Typography>
              <Box sx={{ width: '100%', textAlign: 'left' }}>
                <Typography><strong>Rate of Interest:</strong> {bank.rateOfInterest}</Typography>
                <Typography><strong>Processing Fees:</strong> {bank.processingFees}</Typography>
                <Typography><strong>Loan Tenure:</strong> {bank.loanTenure}</Typography>
                <Typography><strong>Late Payment Charges:</strong> {bank.latePaymentCharges}</Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ 
                  marginTop: '20px', 
                  width: '100%', 
                  // borderRadius: '25px',
                  padding: '10px',
                  backgroundColor: '#1A4CFF',
                  '&:hover': { backgroundColor: '#0031CC' }
                }}
              >
                Apply Now
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
      </Container>

    </Box>
  );
}

export default PersonalLoan
