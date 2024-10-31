import React from 'react';
import { Box, Button, Card, CardContent, Typography, Grid, Container } from '@mui/material';

const TechXpo = () => {
    return (
        <Container maxWidth="md">
            <Box my={4} textAlign="center">
                <Typography variant="h3" color="primary" gutterBottom>
                    About TechXpo ULM
                </Typography>
                <Typography variant="body1">
                    Hosted by the Google Developer Student Club (GDSC) at ULM, TechXpo ULM showcases innovative student projects from all majors. Share your ideas, demonstrate how technology enhances your field, and connect with peers, faculty, and industry professionals.
                </Typography>
            </Box>

            <Box my={4} textAlign="center">
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="https://webservices.ulm.edu/webforms/form/gdsc-project-showcase-application"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Apply Now
                </Button>
            </Box>

            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Awards
                </Typography>
                <Grid container spacing={3}>
                    {/* Best Overall Project */}
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Overall Project</Typography>
                                <Typography variant="body2">Monitor + $25 Gift Card (per team member)</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Awarded to the project that excels across all criteria, from innovative ideas to technical precision, recognizing creativity, problem-solving, and execution.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* People’s Choice Award */}
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">People’s Choice Award</Typography>
                                <Typography variant="body2">Keyboard + $25 Gift Card (per team member)</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Chosen by event attendees, this award celebrates the project that resonates most with the audience, highlighting engagement and impact.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Best Use of Technology */}
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Use of Technology</Typography>
                                <Typography variant="body2">Mouse + $25 Gift Card (per team member)</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Recognizes the team that demonstrates the most effective or innovative use of technology, showcasing a deep understanding of tech to enhance their solution.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Most Innovative Solution */}
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Most Innovative Solution</Typography>
                                <Typography variant="body2">$25 (per team member)</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Given to the team that introduces creative solutions to real-world challenges, especially those addressing underserved issues.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Best Interdisciplinary Project */}
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Interdisciplinary Project</Typography>
                                <Typography variant="body2">$15 (per team member)</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    For projects that effectively combine insights from multiple fields like medtech, biotech, or IT, creating a broad or unique perspective.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Honorable Mentions */}
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Honorable Mentions for First-Year and Second-Year Projects</Typography>
                                <Typography variant="body2">
                                    Outstanding freshman and sophomore projects receive certificates or university swag, supporting early-stage students in their tech journey.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TechXpo;
