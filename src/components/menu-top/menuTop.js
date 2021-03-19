import React from 'react';
import './menuTop.scss';
import clsx from 'clsx';
import { themme ,makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import CssBaseline from '@material-ui/core/CssBaseline';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../assets/images/logobitis.png'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MoreIcon from '@material-ui/icons/MoreVert';

const drawerWidth = 240;
const primary = '#ff7315'
const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: '1200px',
    },
    menuContact: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    menuTab: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    appBar: {
        backgroundColor: 'white',
    },
    logo: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10px'
        },
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        color: 'grey',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    searchBox: {
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#e0e0e0',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ff7315',
    },

    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        color: '#3a3535',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: primary,
        color: 'white'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        color: 'white'
    },
    btnScrollTop: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: false,
        threshold: 0,
        target: window ? window() : undefined,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined })
    return (
        <Slide appear={false} direction="down" in={trigger}>
            {children}
        </Slide>
    );
}

function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth'});
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.btnScrollTop}>
                {children}
            </div>
        </Zoom>
    );
}

export default function PrimarySearchAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    ScrollTop.propTypes = {
        children: PropTypes.element.isRequired,
        window: PropTypes.func,
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const handleChangeTabMenu = (event, newValue) => {
        setValue(newValue);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={0} showZero className={classes.bgBadge}>
                        <FavoriteBorderIcon />
                    </Badge>
                </IconButton>
                <p>Liked</p>
            </MenuItem>
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={0} showZero className={classes.bgBadge}>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Your cart</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className="menuHeader" >

            <AppBar position="static" className={classes.appBar} id="back-to-top-anchor">
                <div className={classes.menuContact}>
                    <Container>
                        <ul className="list-menu">
                            <li className="menu-item">
                                <a href="#">Hotline: 123456789 </a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Liên hệ với chúng tôi</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Về Bitis Hunter</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">kiểm tra đơn hàng</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Đăng nhập</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Đăng kí</a>
                            </li>
                        </ul>
                    </Container>
                </div>
                <Container >
                    <Toolbar >
                        <Grid
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={1} className={classes.menuButton}>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    className={clsx(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={10} sm={8} md={3}>
                                <img className={classes.logo} alt="logo" src={Logo} />
                            </Grid>

                            <Grid item xs={1} >
                                <IconButton
                                    className={classes.sectionMobile}
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="default"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Grid>


                            <Grid item sx={12} lg={3} className={classes.searchBox}>
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Nhập thông tin cần tìm"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </Grid>

                            <div className={classes.sectionDesktop}>
                                <Grid item xs={12}>
                                    <IconButton >
                                        <Badge className={classes.bgBadge} badgeContent={0} showZero>
                                            <FavoriteBorderIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton >
                                        <Badge className={classes.bgBadge} badgeContent={0} showZero>
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </Grid>
                            </div>

                            <Grid item lg={12}>
                                <Tabs
                                    className={classes.menuTab}
                                    onChange={handleChangeTabMenu}
                                    value={value}
                                    variant="scrollable"
                                >
                                    <Tab className="tabItem" label="Trang chủ" />
                                    <Tab className="tabItem" label="Hot" />
                                    <Tab className="tabItem" label="Nam" />
                                    <Tab className="tabItem" label="Nữ" />
                                    <Tab className="tabItem" label="Gosto" />
                                    <Tab className="tabItem" label="Sale" />
                                </Tabs>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container> 
            </AppBar>

            <ElevationScroll {...props}>
                <HideOnScroll {...props} >
                    <AppBar position="fixed" className={classes.appBar}>
                        <Container >
                            <Toolbar >
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Grid item xs={1} className={classes.menuButton}>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            aria-label="open drawer"
                                            onClick={handleDrawerOpen}
                                            className={clsx(classes.menuButton, open && classes.hide)}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={10} sm={8} md={3}>
                                        <img className={classes.logo} alt="logo" src={Logo} />
                                    </Grid>

                                    <Grid item xs={1} >
                                        <IconButton
                                            className={classes.sectionMobile}
                                            aria-label="show more"
                                            aria-controls={mobileMenuId}
                                            aria-haspopup="true"
                                            onClick={handleMobileMenuOpen}
                                            color="default"
                                        >
                                            <MoreIcon />
                                        </IconButton>
                                    </Grid>


                                    <Grid item sx={12} lg={3} className={classes.searchBox}>
                                        <div className={classes.search}>
                                            <div className={classes.searchIcon}>
                                                <SearchIcon />
                                            </div>
                                            <InputBase
                                                placeholder="Nhập thông tin cần tìm"
                                                classes={{
                                                    root: classes.inputRoot,
                                                    input: classes.inputInput,
                                                }}
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </div>
                                    </Grid>

                                    <div className={classes.sectionDesktop}>
                                        <Grid item xs={12}>
                                            <IconButton >
                                                <Badge className={classes.bgBadge} badgeContent={0} showZero>
                                                    <FavoriteBorderIcon />
                                                </Badge>
                                            </IconButton>
                                            <IconButton >
                                                <Badge className={classes.bgBadge} badgeContent={0} showZero>
                                                    <ShoppingCartIcon />
                                                </Badge>
                                            </IconButton>
                                            <IconButton
                                                edge="end"
                                                aria-label="account of current user"
                                                aria-controls={menuId}
                                                aria-haspopup="true"
                                                onClick={handleProfileMenuOpen}
                                            >
                                                <AccountCircle />
                                            </IconButton>
                                        </Grid>
                                    </div>

                                    <Grid item lg={12}>
                                        <Tabs
                                            className={classes.menuTab}
                                            onChange={handleChangeTabMenu}
                                            value={value}
                                            variant="scrollable"
                                        >
                                            <Tab className="tabItem" label="Trang chủ" />
                                            <Tab className="tabItem" label="Hot" />
                                            <Tab className="tabItem" label="Nam" />
                                            <Tab className="tabItem" label="Nữ" />
                                            <Tab className="tabItem" label="Gosto" />
                                            <Tab className="tabItem" label="Sale" />
                                        </Tabs>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </HideOnScroll>
            </ElevationScroll>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {renderMobileMenu}
            {renderMenu}
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </div>
    );
}