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
                    Hosted by the Google Developer Student Club (GDSC) at ULM, TechXpo ULM is an event that showcases innovative student projects across disciplines.
                    Students can demonstrate how technology enhances their field and share ideas with peers, faculty, and industry professionals.
                </Typography>
            </Box>

            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Why Participate?
                </Typography>
                <ul>
                    <li>Showcase your skills and creativity</li>
                    <li>Network with industry professionals</li>
                    <li>Compete for awards and recognition</li>
                    <li>Receive feedback from experts</li>
                </ul>
            </Box>

            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Key Dates
                </Typography>
                <Typography variant="body1"><strong>Last Submission Date:</strong> November 9, 2024</Typography>
                <Typography variant="body1"><strong>Event Date:</strong> End of November 2024</Typography>
                <Typography variant="body2">
                    Submit early! You can refine your submission as you develop your project, but only the final submission will be judged.
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
                    TechXpo ULM Awards
                </Typography>
                <Grid container spacing={3}>
                    {/* Best Overall Project */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Overall Project</Typography>
                                <Typography variant="body2">Monitor + $25 per team member</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Awarded to the project that excels across all criteria, from innovative ideas to technical precision, recognizing exceptional creativity and problem-solving.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* People’s Choice Award */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">People’s Choice Award</Typography>
                                <Typography variant="body2">Keyboard + $25 per team member</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Chosen by event attendees, this award celebrates the project that resonates most with the audience, highlighting its impact and appeal.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Best Use of Technology */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Use of Technology</Typography>
                                <Typography variant="body2">Mouse + $25 per team member</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Highlights the team that demonstrates the most effective or innovative use of technology, showcasing a deep understanding of tech to enhance their solution.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Best Interdisciplinary Project */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Interdisciplinary Project</Typography>
                                <Typography variant="body2">$25 per team member</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Acknowledges the team that successfully merges insights from multiple fields, such as medtech, biotech, or IT, to create a project with a broad or unique perspective.
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
                                    Outstanding freshman and sophomore projects receive special certificates or university swag, supporting early-stage students as they develop skills and engage with the tech community.
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
