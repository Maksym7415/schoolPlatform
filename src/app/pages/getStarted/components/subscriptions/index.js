import React, { useEffect, useState } from 'react';
import {
  Button, Paper, Typography, Collapse,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../redux/subscriptions/constants/actionConstants';
import useStyles from './styles';
import './styles.scss';
import dive from '../../../../functions/dive';

const subs = [
  {
    id: 0,
    name: 'string',
    price: 10,
    accrual_period: 'week',
    items: {},
  },
  {
    id: 1,
    name: 'string',
    price: 20,
    accrual_period: 'month',
    items: {},
  },
  {
    id: 2,
    name: 'string',
    price: 30,
    accrual_period: 'year',
    items: {},
  },
  {
    id: 4,
    name: 'string',
    price: 30,
    accrual_period: 'year',
    items: {},
  },
];

const Subscriptions = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const subscriptions = useSelector(({ subscriptionsReducer }) => dive`${subscriptionsReducer}subscriptions.data`);
  const [learnMore, setLearnMore] = useState({});
  const [isScroll, setIsScroll] = useState(false);

  const handleLearnMore = (id) => setLearnMore((prev) => ({ ...prev, [id]: !prev[id] }));

  useEffect(() => {
    if (subscriptions) {
      const result = {};
      subscriptions.forEach((subscription) => {
        result[subscription.id] = false;
      });
      setLearnMore(result);
    }
  }, [subscriptions]);

  useEffect(() => {
    Object.values(learnMore).includes(true) ? setIsScroll(true) : setIsScroll(false);
  });

  return (
    <div className='get-started-subscription__container'>
      <div className='get-started-subscription__cards-container' style={(subscriptions && subscriptions.length > 3) || isScroll ? { overflowY: 'scroll' } : { overflowY: 'hidden' }}>
        { subscriptions && subscriptions.map((subscription) => (
            <Paper key={subscription.id} elevation={0} className={`${classes.cardContainer} get-started-subscription__card-container`}>
              <div className='get-started-subscription__card-header-container'>
                <div>
                  {subscription.name}
                </div>
                <div>
                  {`N ${subscription.price} / user /${subscription.accrual_period}`}
                </div>
              </div>
              <div className={`get-started-subscription__description ${learnMore[subscription.id] ? 'get-started-subscription__learn-more' : ''}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit

                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing elit
              </div>
              <Typography onClick={() => handleLearnMore(subscription.id)} className={classes.link}>Learn More</Typography>
            </Paper>
        ))
        }
      </div>
      <div className='get-started-subscription__buttonContainer'>
        <Button
          className={classes.button}
          onClick={props.clickBack }
        >
          Previous
        </Button>
        <Button
          className={classes.button}
          onClick={props.clickNext }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Subscriptions;
