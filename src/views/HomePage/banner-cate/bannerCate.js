import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BannerCate1 from '../../../assets/images/bannercate1.webp';
import BannerCate2 from '../../../assets/images/bannercate2.webp';
import BannerCate3 from '../../../assets/images/bannercate3.webp';
import BannerCate4 from '../../../assets/images/bannercate4.jpg';
import BannerCate5 from '../../../assets/images/bannercate5.webp';
import BannerCate6 from '../../../assets/images/bannercate6.webp';
import BannerCate7 from '../../../assets/images/bannercate7.webp';

const fontPrimary = 'Lobster, cursive';
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        maxWidth: '1200px',
        margin: 'auto',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: fontPrimary,
        fontSize: '30px',
        fontWeight: '700',
        color: '#ff7315',
        [theme.breakpoints.down('sm')]: {
            fontSize: '15px'
        },
    },
    imgCateFirst: {
        width: '100%',
        height: '100%',
        paddingBottom: '5px'    
    },

    bannerLink: {
        paddingRight: '5px',
        paddingLeft: '5px'

    },
    imgCate: {
        width: '100%',
        height: '100%',
    },
    changeSize: {
        fontFamily: fontPrimary,
        fontSize: '20px',
        color: '#3a3535',
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px'
        },
    },
    smallText: {
        fontSize: '14px',
        fontFamily: fontPrimary,
        [theme.breakpoints.down('sm')]: {
            fontSize: '7px'
        },
    }
}));

export default function BannerCate() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className={classes.root}>
            <Grid className={classes.container} container>
                <Grid item xs={12} lg={12}>
                    <p className={classes.title}> Nâng niu bàn chân Việt </p>
                </Grid>
                <Grid item xs={2} lg={2} >
                    <a href="#" >
                        <img className={classes.imgCateFirst} src={BannerCate1} alt="banner cate" />
                    </a>
                </Grid>

                <Grid item container direction="row" spacing={1} xs={5} lg={5}>
                    <Grid item xs={12} lg={12} className={classes.bannerLink}>
                        <a href="#">
                            <img src={BannerCate2} className={classes.imgCate} alt="banner cate" />
                        </a>
                    </Grid>
                    <Grid item xs={6} lg={6} className={classes.bannerLink}>
                        <a href="#">
                            <img src={BannerCate3} className={classes.imgCate} alt="banner cate" />
                        </a>
                    </Grid>
                    <Grid item xs={6} lg={6} className={classes.bannerLink}>
                        <a href="#">
                            <img src={BannerCate4} className={classes.imgCate} alt="banner cate" />
                        </a>
                    </Grid>
                </Grid>

                <Grid item container direction="row" spacing={1} xs={5} lg={5}>
                    <Grid item xs={12} lg={12} className={classes.bannerLink}>
                        <a href="#" >
                            <img src={BannerCate5} className={classes.imgCate} alt="banner cate" />
                        </a>
                    </Grid>
                    <Grid item xs={6} lg={6} className={classes.bannerLink}>
                        <a href="#">
                            <img src={BannerCate6} className={classes.imgCate} alt="banner cate" />
                        </a>
                    </Grid>
                    <Grid item xs={6} lg={6} className={classes.bannerLink}>
                        <a href="#" >
                            <img src={BannerCate7} className={classes.imgCate} alt="banner cate" />
                        </a>
                    </Grid>
                </Grid>
            </Grid>
            <p className={classes.changeSize}>
                Đổi size miễn phí <small className={classes.smallText}>tại tất cả các cửa hàng trong vòng 1 tuần </small>
            </p>
        </div>
    );
}

