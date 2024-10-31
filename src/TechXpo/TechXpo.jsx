import React from 'react';
import { Box, Button, Card, CardContent, Typography, Grid, Container } from '@mui/material';

const TechXpo = () => {
    return (
        <Container maxWidth="md">
            {/* About TechXpo ULM */}
            <Box my={4} textAlign="center">
                <Typography variant="h3" color="primary" gutterBottom>
                     TechXpo
                </Typography>
                <Typography variant="body1">
                    Hosted by the Google Developer Student Club (GDSC) at ULM, TechXpo ULM is an exciting event that showcases innovative student projects from all majors. 
                    It’s your opportunity to demonstrate how technology enhances your field of study and share your ideas with peers, faculty, and industry professionals.
                </Typography>
            </Box>

            {/* Why Participate? */}
            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Why Participate?
                </Typography>
                <ul>
                    <li>Showcase your skills and creativity</li>
                    <li>Network with industry professionals</li>
                    <li>Compete for awards and recognition</li>
                    <li>Tech-driven projects from any discipline are welcome, including software, research, and creative solutions.</li>
                </ul>
            </Box>

            {/* Important Dates */}
            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Important Dates
                </Typography>
                <Typography variant="body1"><strong>Last Submission Date:</strong> November 9, 2024</Typography>
                <Typography variant="body1"><strong>Event Date:</strong> November 22, 2024</Typography>
                <Typography variant="body2">
                    Submit early! You can refine your submission as you develop your project, but only the final submission will be judged.
                </Typography>
            </Box>

            {/* Registration */}
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

            {/* Event Format */}
            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Event Format
                </Typography>
                <ul>
                    <li><strong>10:00 AM – 10:30 AM:</strong> Opening Ceremony and Event Introduction</li>
                    <li><strong>10:30 AM – 12:30 PM:</strong> Tech Showcases and Presentations</li>
                    <li><strong>12:30 PM – 1:30 PM:</strong> Award Ceremony and Closing Remarks</li>
                </ul>
            </Box>

            {/* Project Zones */}
            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Project Zones
                </Typography>
                <Typography variant="body1"><strong>Play Zone:</strong> VR, 3D Printer, Drones. Engage with interactive technology displays.</Typography>
                <Typography variant="body1"><strong>Project Showcase Zone:</strong> Participants will showcase their projects to judges and visitors.</Typography>
            </Box>

            {/* Awards and Prizes */}
            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Awards and Prizes
                </Typography>
                <Grid container spacing={3}>
                    {/* Individual Awards */}
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Overall Project</Typography>
                                <Typography variant="body2">Prize: Monitor + $25 per team member</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Excels in all criteria, recognizing exceptional creativity and problem-solving.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">People’s Choice Award</Typography>
                                <Typography variant="body2">Prize: Keyboard + $25 per team member</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Awarded by audience vote, highlighting impactful and popular projects.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Use of Technology</Typography>
                                <Typography variant="body2">Prize: Mouse + $25 per team member</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Showcases effective or innovative technology usage.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Best Interdisciplinary Project</Typography>
                                <Typography variant="body2">Prize: $25 per team member</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Recognizes cross-disciplinary projects that merge multiple fields.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Domain Expert Award</Typography>
                                <Typography variant="body2">Prize: $25 per team member + Domain expert recognition</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Honors exceptional research contributions within a specific domain.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md = {4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">Honorable Mentions for First-Year and Second-Year Projects</Typography>
                                <Typography variant="body2">
                                    Special certificates and university swag for outstanding freshman and sophomore projects.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Project Judging Criteria */}
            <Box my={4}>
                <Typography variant="h4" color="secondary" gutterBottom>
                    Project Judging Criteria
                </Typography>
                <ul>
                    <li>Innovation and Creativity: Originality in problem-solving.</li>
                    <li>Technical Proficiency: Quality and complexity of technology used.</li>
                    <li>Relevance and Impact: Potential effect on community or industry.</li>
                    <li>Presentation Clarity and Engagement: Communication and audience engagement.</li>
                    <li>Documentation and Research Quality: Thoroughness and research depth.</li>
                </ul>
            </Box>

            

            {/* Contact Information */}
            <Box my={4} textAlign="center">
                <Typography variant="h6" color="primary">
                    Contact Information
                </Typography>
                <Typography variant="body1">
                    For any inquiries, please contact: <a href="mailto:khawasgs@warhawks.ulm.edu">khawasgs@warhawks.ulm.edu</a>
                </Typography>
                <Typography variant="body2">
                    Join us for an engaging day filled with innovation, technology, and collaboration at TechXpo ULM!
                </Typography>
            </Box>
        </Container>
    );
};

export default TechXpo;
