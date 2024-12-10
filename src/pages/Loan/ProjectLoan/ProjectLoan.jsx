import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
  Card,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ProjectLoan = () => {
  const projectLoans = [
    {
      title: "Infrastructure Project Loan",
      description:
        "Used for financing infrastructure development such as roads, bridges, ports, airports, and power plants. These loans are typically long-term and may come with government support or guarantees.",
    },
    {
      title: "Industrial Project Loan",
      description:
        "RICE MILL, FLAUR MILL, POULTRY FARM, DRUG PLANT AND ANY OTHER MANUFACTURING PLANT: Used by manufacturing businesses for the construction of factories, purchase of machinery, and setting up production lines. These loans can be secured or unsecured depending on the lender's requirements.",
    },
    {
      title: "Real Estate Project Loan",
      description:
        "Used by builders and real estate developers to finance the construction of residential, commercial, or mixed-use developments. Repayment is often linked to the sale of properties or revenue from leasing.",
    },
    {
      title: "Green/Environmentally Sustainable Project Loan",
      description:
        "Specifically meant for projects aimed at sustainability, such as renewable energy ventures (solar, wind, etc.), waste management projects, and water conservation projects. These loans may come with additional benefits like lower interest rates under government schemes.",
    },
  ];

  const processSteps = [
    {
      step: "Prepare a Business Plan",
      description:
        "A well-detailed business plan or project proposal is required. This should outline the project objectives, timelines, cost estimates, expected revenue, and the impact of the project. (Loanraasta.com will facilitate)",
    },
    {
      step: "Submit Financial Documents",
      description:
        "Banks or financial institutions will require your business’s financial records, including balance sheets, profit and loss statements, tax returns, and any other relevant financial documentation. (Loanraasta.com will facilitate)",
    },
    {
      step: "Choose a Lender",
      description:
        "Project loans can be applied for through commercial banks, majority Nationalised Banks. (Loanraasta.com will facilitate)",
    },
    {
      step: "Sign Agreement & Receive Funds",
      description:
        "Once approved, you’ll sign a loan agreement, after which funds are disbursed based on project requirements or milestones.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: { xs: 2, sm: 4 },
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: 2, sm: 4 },
          marginBottom: 4,
          backgroundColor: "#efefef",
          borderRadius: 3,
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", sm: "50%" }, color: "#fff" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              fontSize: { xs: "1.4rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Project Loan
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
              maxWidth: { xs: "100%", sm: "80%" },
              marginBottom: 3,
            }}
          >
            A Project Loan is a type of financing provided by banks, financial
            institutions, or other lenders to fund specific projects, typically
            large-scale business ventures, infrastructure development, or
            capital-intensive initiatives. These loans are structured to finance
            projects where the revenue generated from the project itself is
            expected to repay the loan.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              fontSize: { xs: "1rem", sm: "1.1rem" },
              boxShadow: 3,
            }}
          >
            Apply Now
          </Button>
        </Box>
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: "50%" },
            marginTop: { xs: 3, sm: 0 },
          }}
        >
          <img
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Business Growth"
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Features Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 6,
        }}
      >
        <Box
          sx={{
            flex: 1,
            position: { xs: "unset", sm: "unset", md: "sticky" },
            top: { xs: "unset", sm: "unset", md: "6rem" },
          }}
        >
          <img
            src="https://images.pexels.com/photos/7731326/pexels-photo-7731326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Loan Features"
            style={{
              width: "100%",
              maxHeight: "440px",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginLeft: { xs: 0, sm: 3 },
            color: "#333",
            marginBottom: { xs: 3, sm: 0 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              marginBottom: 3,
              fontSize: { xs: "1.25rem", sm: "1.5rem" },
            }}
          >
            Key Features of a Project Loan
          </Typography>
          <List>
            <Typography>
              <strong>1. Purpose:</strong> Project loans are used to fund
              specific business or infrastructure projects, such as:
            </Typography>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Construction or development of a building, factory, or plant" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Infrastructure projects like roads, bridges, and power plants" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Expansion of business operations" />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Purchase of machinery and equipment for large-scale production like Rice Mill, Flaur Mill, Poultry Farm, Dressing Plant, Drug Plant etc" />
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>2. Loan Amount:</strong>
            </Typography>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="The loan amount for a project loan typically depends on the scope of the project and the capital required." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Project loans can be large, ranging from ₹10 lakhs to several crores it may be 100+ crores, depending on the scale of the project and the borrower’s needs." />
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>3. Interest Rates:</strong>
            </Typography>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Interest rates on project loans can vary depending on the lender, project type, and risk profile of the borrower." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="They can range from 8% to 10% or more, with competitive rates offered for projects with low risk and strong revenue generation potential." />
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>4. Collateral:</strong>
            </Typography>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="Depending on the lender and the nature of the project, a project loan can either be secured or unsecured." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="For larger or riskier projects, collateral such as land, machinery, or other assets may be required." />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "primary.main" }}>
                <CheckCircle />
              </ListItemIcon>
              <ListItemText primary="In some cases, government schemes or guarantees may reduce the need for collateral, especially for sectors like infrastructure, renewable energy, and manufacturing." />
            </ListItem>
          </List>

          <List>
            <Typography>
              <strong>5. Disbursement:</strong> Funds are provided after meeting
              pre-defined conditions and achieving certain project development
              milestones.
            </Typography>
          </List>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      <Box>
        <Box
          sx={{
            backgroundColor: "#f9f9f9",
            padding: { xs: 2, sm: 4 },
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "primary.main",
              marginBottom: 4,
              fontSize: { xs: "1.8rem", sm: "2.2rem" },
            }}
          >
            Types of Project Loans
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 4,
            }}
          >
            {projectLoans.map((loan, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  backgroundColor: "#ffffff",
                  color: "#333",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 2,
                    fontSize: "1.2rem",
                  }}
                >
                  {loan.title}
                </Typography>
                <Typography sx={{ fontSize: "1rem", lineHeight: 1.5 }}>
                  {loan.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: { xs: 2, sm: 4 },
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "primary.main",
            marginBottom: 4,
            fontSize: { xs: "1.8rem", sm: "2.2rem" },
          }}
        >
          Process for Project Loan
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 4,
          }}
        >
          {processSteps.map((step, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                padding: 3,
                borderRadius: 3,
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                gap: 2,
                backgroundColor: "#ffffff",
                color: "#333",
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CheckCircleOutlineIcon
                color="primary"
                sx={{ fontSize: "2.5rem", flexShrink: 0 }}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: 1,
                    fontSize: "1.2rem",
                  }}
                >
                  {`${index + 1}. ${step.step}`}
                </Typography>
                <Typography sx={{ fontSize: "1rem", lineHeight: 1.5 }}>
                  {step.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Box>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Conclusion Section */}
      <Box sx={{ textAlign: "center", marginTop: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            marginBottom: 3,
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Conclusion
        </Typography>
        <Typography
          sx={{
            color: "#333",
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
            maxWidth: 900,
            marginX: "auto",
            paddingBottom: 3,
          }}
        >
          A Project Loan is a crucial financial tool for businesses or entities
          that need capital to undertake large-scale projects. Whether for
          infrastructure, industrial development, or new ventures, project loans
          can help bring your business ideas to life. However, careful planning,
          a solid financial track record, and a well-structured project plan are
          essential to secure financing for such ventures. Loanraasta.com will
          facilitate entire process smoothly.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            padding: { xs: "10px 20px", sm: "12px 25px" },
            boxShadow: 4,
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#0288d1",
            },
          }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectLoan;
