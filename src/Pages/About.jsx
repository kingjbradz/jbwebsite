import React from "react"
import { useNavigate } from "react-router-dom"
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Container } from "../Components/Elements"

const Home = () => {
    const theme = useTheme()
    return (
      <Container sx={{ 
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        alignItems: "flex-start",
        justifyContent: "center"
        }}>
        <Accordion 
          sx={{ 
            bgcolor: "brand.secondary", 
            color: "brand.primary", 
            border: `1px solid ${theme.palette.brand.outline}`,
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{ color: "brand.outline" }}  />}
          >
            <Typography variant="h6">
              BIOGRAPHY
            </Typography>
            </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p">
              I'm a dynamic Australian full-stack developer with 3+ years of industry experience, specialising in ReactJS, AWS and Phoenix.
            </Typography>
            <br /><br />
            <Typography>
              I'm from Brisbane, Australia and currently residing in NYC, I've also lived in:
            </Typography>
            <Typography variant="p">
              • Tokyo, Japan
            </Typography>
            <br />
            <Typography variant="p">
              • Berlin, Germany
            </Typography>
            <br />
            <Typography variant="p">
              • Taipei, Taiwan (R.O.C)
            </Typography>
            <br />
            <Typography variant="p">
              • Vancouver, Canada 
            </Typography>
            <br />
            <Typography variant="p">
              • Melbourne, Australia
            </Typography>
            <br /><br />
            <Typography variant="p">
              In addition to programming, I also enjoy cooking, DJing, nature and organising music events and parties. 
            </Typography>
            <br />
            <Typography variant="p">
              I also have extensive experience working in the music and hospitality industries; as a booker, event organizer, venue manager, PA, bartender, cook, lighting technician and a DJ.
            </Typography>
            <br />
            <Typography variant="p">
              I've performed as a DJ in several countries.
            </Typography>
            <br />
            <Typography variant="p">
              My most recent music project was co-founding a collective in Berlin.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion 
          sx={{ 
            bgcolor: "brand.secondary", 
            color: "brand.primary", 
            border: `1px solid ${theme.palette.brand.outline}`,
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{ color: "brand.outline" }}  />}
          >
            <Typography variant="h6">
              EXPERIENCE
            </Typography>
            </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p">
              Dynamic Australian full-stack developer with 3+ years of industry experience, specialising in ReactJS, AWS and Phoenix.
            </Typography>
            <br /><br />
            <Typography variant="p">
              Some notable achievements I'm particularly proud of:
            </Typography>
            <br />
            <Typography variant="p">
              • Set up a full migration of front-end, back-end and database from Heroku to AWS within my first <i>three months</i> with ensured data continuity and only an hour of downtime.
            </Typography>
            <br />
            <Typography variant="p">
              • Multiple single handed system-wide front-end renewal with design team collaboration
            </Typography>
            <br />
            <Typography variant="p">
              • OWASP best practices integration with outside consultant confirmed approval.
            </Typography>
            <br />
            <Typography variant="p">
              • Same-day turn around component creation
            </Typography>
            <br />
            <Typography variant="p">
              • Multiple cross time-zone collaborations with both in-house and third-party teams
            </Typography>
            <br />
            <Typography variant="p">
              • Mentorship to junior front-end developers
            </Typography>
            <br /><br />
            <Typography variant="p">
              You can see my current CV <a style={{ color: theme.palette.brand.particle }} href="https://jrb-resume-website.s3.ap-southeast-2.amazonaws.com/JordanBradley-CV.pdf">here</a>.
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion 
          sx={{ 
            bgcolor: "brand.secondary", 
            color: "brand.primary", 
            border: `1px solid ${theme.palette.brand.outline}`,
            width: "-webkit-fill-available"
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{ color: "brand.outline" }}  />}
          >
            <Typography variant="h6">
              STACK
            </Typography>
            </AccordionSummary>
          <AccordionDetails sx={{ display: "flex" }}>
            <Box sx={{ width: "100%" }}>
              <Typography variant="p">
                • React
              </Typography>
              <br />
              <Typography variant="p">
                • JavaScript
              </Typography>
              <br />
              <Typography variant="p">
                • Elixir
              </Typography>
              <br />
              <Typography variant="p">
                • Phoenix
              </Typography>
              <br />
              <Typography variant="p">
                • PostgreSQL
              </Typography>
              <br />
              <Typography variant="p">
                • MUI (Material-UI)
              </Typography>
              <br />
              <Typography variant="p">
                • Styled Components
              </Typography>
              <br />
              <Typography variant="p">
                • Font Awesome
              </Typography>
              <br />
              <Typography variant="p">
                • Three.JS
              </Typography>
              <br />
              <Typography variant="p">
                • MySQL
              </Typography>
              <br />
              <Typography variant="p">
                • Ruby
              </Typography>
              <br />
              <Typography variant="p">
                • Tailwind
              </Typography>
              <br />
              <Typography variant="p">
                • Docker
              </Typography>
              <br />
              <Typography variant="p">
                • Ruby on Rails
              </Typography>
              <br />
              <Typography variant="p">
                • Heroku
              </Typography>
              <br />
              <Typography variant="p">
                • Meta Pixel
              </Typography>
              <br />
              <Typography variant="p">
                • Google Analytics
              </Typography>
              <br />
              <Typography variant="p">
                • Google Tag Manager
              </Typography>
              <br />
              <Typography variant="p">
                • TradingView
              </Typography>
              <br />
              <Typography variant="p">
                • Phoenix LiveView
              </Typography>
              <br />
              <Typography variant="p">
                • Git
              </Typography>
              <br />
              <Typography variant="p">
                • GitHub
              </Typography>
              <br />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography variant="p">
                AWS ↓
              </Typography>
              <br />
              <Typography variant="p">
                • Lambda
              </Typography>
              <br />
              <Typography variant="p">
                • Amplify
              </Typography>
              <br />
              <Typography variant="p">
                • Route 53
              </Typography>
              <br />
              <Typography variant="p">
                • ECS
              </Typography>
              <br />
              <Typography variant="p">
                • EC2
              </Typography>
              <br />
              <Typography variant="p">
                • ECR
              </Typography>
              <br />
              <Typography variant="p">
                • Aurora
              </Typography>
              <br />
              <Typography variant="p">
                • Parameter Store
              </Typography>
              <br />
              <Typography variant="p">
                • Secrets Manager
              </Typography>
              <br />
              <Typography variant="p">
                • MongoDB
              </Typography>
              <br />
              <Typography variant="p">
                • Organizations
              </Typography>
              <br />
              <Typography variant="p">
                • S3
              </Typography>
              <br />
              <Typography variant="p">
                • Amazon RDS
              </Typography>
              <br />
              <Typography variant="p">
                • Quicksight
              </Typography>
              <br />
              <Typography variant="p">
                • CodeCommit
              </Typography>
              <br />
              <Typography variant="p">
                • SNS
              </Typography>
              <br />
              <Typography variant="p">
                • SQS
              </Typography>
              <br />
              <Typography variant="p">
                • CloudWatch
              </Typography>
              <br />
              <Typography variant="p">
                • CloudFormation
              </Typography>
              <br />
              <Typography variant="p">
                • CloudFront
              </Typography>
              <br />
              <Typography variant="p">
                • VPC
              </Typography>
              <br />
              <Typography variant="p">
                ...and much more!
              </Typography>
              <br />
            </Box>
            </AccordionDetails>
        </Accordion>
        {/* <Accordion 
          sx={{ 
            bgcolor: "brand.secondary", 
            color: "brand.primary", 
            border: `1px solid ${theme.palette.brand.outline}`,
          }}
        >
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon sx={{ color: "brand.outline" }}  />}
          >
            <Typography variant="h6">
              EXPERIENCE
            </Typography>
            </AccordionSummary>
          <AccordionDetails>
            <Typography variant="p">
              Dynamic Australian full-stack developer with 3+ years of industry experience, specialising in ReactJS, AWS and Phoenix.
            </Typography>
            <br /><br />
            <Typography>
              
            </Typography>
            <Typography variant="p">
              You can see my current CV <a href="https://jrb-resume-website.s3.ap-southeast-2.amazonaws.com/JordanBradley-CV.pdf">here</a>
            </Typography>
            </AccordionDetails>
        </Accordion> */}
      </Container>
    )
}

export default Home