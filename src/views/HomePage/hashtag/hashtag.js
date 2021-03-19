import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Hashtag1 from '../../../assets/images/hashtag/hashtag1.webp';
import Hashtag2 from '../../../assets/images/hashtag/hashtag2.webp';
import Hashtag3 from '../../../assets/images/hashtag/hashtag3.webp';
import Hashtag4 from '../../../assets/images/hashtag/hashtag4.webp';
import Hashtag5 from '../../../assets/images/hashtag/hashtag5.webp';
import Hashtag6 from '../../../assets/images/hashtag/hashtag6.webp';
import Hashtag7 from '../../../assets/images/hashtag/hashtag7.webp';
import Hashtag8 from '../../../assets/images/hashtag/hashtag8.webp';

import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '1200px',
      margin: 'auto',
    },
}));

export default function Hashtag(props) {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid className={classes.root} spacing={2} container >
            <Grid item lg={3}>
                <div >
                    <img style={{width: '100%'}} src={Hashtag1} />
                    <img style={{width: '100%'}} src={Hashtag4} />
                </div>
            </Grid>
            <Grid item lg={6}>
                <div >
                    <img style={{width: '100%'}} src={Hashtag2} />
                </div>
            </Grid>
            <Grid item lg={3}>
                <div >
                    <img style={{width: '100%'}} src={Hashtag3} />
                    <img style={{width: '100%'}} src={Hashtag7} />
                </div>
            </Grid>
            <Grid item lg={6}>
                <div >
                    <img style={{width: '100%'}} src={Hashtag5} />
                </div>
            </Grid>
            <Grid item lg={3}>
                <div >
                    <img style={{width: '100%'}} src={Hashtag5} />
                    <img style={{width: '100%'}} src={Hashtag7} />
                </div>
            </Grid>
            <Grid item lg={3}>
                <div >
                    <img style={{width: '100%'}} src={Hashtag6} />
                    <img style={{width: '100%'}} src={Hashtag8} />
                </div>
            </Grid>
        </Grid>
    );
}   
