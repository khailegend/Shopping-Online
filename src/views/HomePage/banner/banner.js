import React from 'react';
import './banner.scss';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Banner1 from '../../../assets/images/banner-1.jpg';
import Banner2 from '../../../assets/images/banner-2.jpg';
import Banner3 from '../../../assets/images/banner-3.jpg';
import Banner4 from '../../../assets/images/banner-4.webp'
import Banner5 from '../../../assets/images/banner-5.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      `${Banner1}`,
  },
  {
    label: 'Bird',
    imgPath:
      `${Banner2}`,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      `${Banner3}`,
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      `${Banner4}`,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      `${Banner5}`,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1370px',
    margin: 'auto',
    position: 'relative',
  },
  img: {
    height: '100%',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
  stepper: {
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: '5%',
    position: 'absolute',
    width: '100%',
  },

  btnChangeBanner: {
    marginBottom: '30%',
    color: '#ff7315',
  }
}));

export default function Banner() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <div className="bannerHome">
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          className={classes.stepper}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button className={classes.btnChangeBanner} size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button className={classes.btnChangeBanner} size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </Button>
          }
        />
      </div>
    </div>
  );
}
