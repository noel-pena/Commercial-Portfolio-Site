import { Link } from "react-scroll";
import {
    AppBar,
    Link as MuiLink,
    Stack,
    Toolbar,
    Typography,
    Box,
} from "@mui/material";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";

export const Header = () => {
    return (
        <Stack>
            <AppBar className="header" position="fixed">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <MuiLink href="/" sx={{ display: 'flex', alignItems: 'center' }}>
                            <VerticalSplitIcon
                                sx={{
                                    pr: 1,
                                    color: "rgb(103, 131, 110, 0.7)",
                                }}
                            />
                        </MuiLink>
                        <MuiLink
                            href="/"
                            sx={{
                                textDecoration: "none",
                                textDecorationColor: "none",
                                color: "white",
                                display: 'flex', alignItems: 'center' // Add this for vertical align
                            }}
                        >
                            <Typography
                                sx={{
                                    display: { xs: "none", md: "flex" },
                                }}
                                variant="h7"
                                noWrap
                            >
                                JBC Professional LLC
                            </Typography>
                        </MuiLink>
                    </Box>
                    <Stack direction="row" gap={3}>
                        <Link
                            className="nav-items"
                            sx={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: 300,
                            }}
                            to="services-section"
                            smooth={true}
                            duration={500}
                        >
                            Services
                        </Link>
                        <Link
                            className="nav-items"
                            sx={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: 300,
                            }}
                            to="about-section"
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                        <MuiLink
                            href="/gallery"
                            className="nav-items"
                            sx={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: 300,
                            }}
                        >
                            Gallery
                        </MuiLink>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Stack>
    );
};