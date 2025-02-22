import React from 'react';
import { Box, Typography, Container, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';
import './CodeClash.css';

const NeonText = styled(Typography)({
  textShadow: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #00f2ff, 0 0 82px #00f2ff, 0 0 92px #00f2ff',
  color: '#fff',
  animation: 'flicker 1.5s infinite alternate',
  fontWeight: 800,
  letterSpacing: '2px',
});

const NeonButton = styled(Button)({
  background: 'linear-gradient(45deg, #00f2ff 30%, #ff00ff 90%)',
  border: 0,
  borderRadius: '12px',
  boxShadow: '0 3px 5px 2px rgba(0, 242, 255, .3)',
  color: 'white',
  height: 56,
  padding: '0 30px',
  margin: '20px 0',
  fontWeight: 600,
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 15px rgba(0, 242, 255, .5)',
  },
});

const FeatureCard = styled(Paper)({
  background: 'rgba(13, 13, 44, 0.7)',
  backdropFilter: 'blur(10px)',
  padding: '24px',
  borderRadius: '16px',
  border: '1px solid rgba(0, 242, 255, 0.1)',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 242, 255, 0.2)',
    border: '1px solid rgba(0, 242, 255, 0.3)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '48px',
    marginBottom: '16px',
    color: '#00f2ff',
  },
});

const EventInfo = styled(Box)({
  background: 'rgba(13, 13, 44, 0.8)',
  backdropFilter: 'blur(10px)',
  padding: '32px',
  borderRadius: '20px',
  border: '1px solid rgba(0, 242, 255, 0.2)',
  marginTop: '40px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
});

const GradientText = styled(Typography)({
  background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  fontWeight: 700,
});

const LeaderboardContainer = styled(Box)({
  marginTop: '60px',
  marginBottom: '40px',
});

const StyledTableContainer = styled(Paper)({
  background: 'rgba(13, 13, 44, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: '1px solid rgba(0, 242, 255, 0.2)',
  marginTop: '20px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  overflow: 'hidden',
});

// Mock data for the leaderboard
const leaderboardData = [
  { rank: 1, name: "Coming Soon", score: 0, challenges: 0 },
];

const CodeClash = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <NeonText variant="h1" align="center" gutterBottom>
          CODE CLASH
        </NeonText>
        
        <Typography variant="h5" align="center" color="primary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
          Solve LeetCode-style programming challenges, sharpen your skills,
          compete with peers, and have a blast while prepping for your dream job!
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <FeatureCard>
                <CodeIcon />
                <GradientText variant="h6" gutterBottom>
                  Real Problems
                </GradientText>
                <Typography color="white">
                  Industry-standard coding challenges that mirror real technical interviews
                </Typography>
              </FeatureCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <FeatureCard>
                <GroupsIcon />
                <GradientText variant="h6" gutterBottom>
                  Peer Learning
                </GradientText>
                <Typography color="white">
                  Collaborate and compete with fellow developers in real-time
                </Typography>
              </FeatureCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <FeatureCard>
                <EmojiEventsIcon />
                <GradientText variant="h6" gutterBottom>
                  Win Prizes
                </GradientText>
                <Typography color="white">
                  Top performers get recognized and rewarded at Hawkathon 2025
                </Typography>
              </FeatureCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div whileHover={{ scale: 1.02 }}>
              <FeatureCard>
                <WorkIcon />
                <GradientText variant="h6" gutterBottom>
                  Career Ready
                </GradientText>
                <Typography color="white">
                  Build the skills that top tech companies are looking for
                </Typography>
              </FeatureCard>
            </motion.div>
          </Grid>
        </Grid>

        <EventInfo>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Typography variant="h4" color="secondary" align="center" gutterBottom>
              BI-WEEKLY EVENT
            </Typography>
            <Typography variant="h2" color="primary" align="center" gutterBottom sx={{ fontWeight: 700 }}>
              FEB 21
            </Typography>
            <Typography variant="h4" color="white" align="center">
              12-2PM
            </Typography>
            <Typography variant="h5" color="white" align="center" gutterBottom>
              Hemphill Hall 203
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <NeonButton variant="contained" size="large">
                Register Now
              </NeonButton>
            </Box>
          </motion.div>
        </EventInfo>

        <LeaderboardContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <GradientText variant="h2" align="center" gutterBottom>
              Leaderboard
            </GradientText>
            
            <StyledTableContainer>
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Challenges Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((row) => (
                    <tr key={row.rank}>
                      <td className="rank-cell">
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {row.rank <= 3 && <EmojiEventsIcon className={`rank-${row.rank}`} />}
                          {row.rank}
                        </Box>
                      </td>
                      <td>{row.name}</td>
                      <td className="score-cell">{row.score.toLocaleString()}</td>
                      <td>{row.challenges}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </StyledTableContainer>
          </motion.div>
        </LeaderboardContainer>

        <Typography variant="body1" color="white" align="center" sx={{ mt: 4 }}>
          Top performers and the participants with the most attendance will be awarded
          at our grand Hawkathon 2025!
        </Typography>
      </motion.div>
    </Container>
  );
};

export default CodeClash; 