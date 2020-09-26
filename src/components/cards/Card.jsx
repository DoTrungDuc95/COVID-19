import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

import style from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed || !recovered || !deaths) {
    return <h2 style={{ top: '50%', position: 'absolute' }}>Loading...</h2>;
  }
  return (
    <div className={style.container}>
      <Grid container justify="center">
        <Grid item xs={12} md={3} className={cx(style.card, style.infected)}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h6">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator="."
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active case of COVID 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} className={cx(style.card, style.recovered)}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h6">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator="."
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recovered from COVID 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3} className={cx(style.card, style.deaths)}>
          <Card>
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h6">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator="."
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths caused by COVID 19
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
