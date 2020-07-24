import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, CardHeader, CardContent, Typography, CardActions, Button,
} from '@material-ui/core';
import useStyles from './styles';
import * as actions from '../../../../../redux/subscriptions/constants/actionConstants';
import { actionChooseSubscription } from '../../../../../redux/tenants/constants/actionConstants';
import dive from '../../../../../functions/dive';

const AdminSubscriptions = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const subscriptions = useSelector(({ subscriptionsReducer }) => dive`${subscriptionsReducer}subscriptions.data`);

  useEffect(() => {
    dispatch(actions.actionGetSubscriptions());
  }, []);

  const handleSubscribe = (id) => dispatch(actionChooseSubscription({ id, on_date: '2021-01-01' }));

  return (
    <div className={classes.container}>
      {
       subscriptions && subscriptions.map((item) => <Card key={item.id} className={classes.card}>
          <CardHeader
            title={item.name}
            titleTypographyProps={{ align: 'center' }}
            className={classes.cardHeader}
          />
        <CardContent>
          <div className={classes.cardPricing}>
            <Typography component="h2" variant="h3" color="textPrimary">
              ${item.price}
            </Typography>
            {/* <Typography variant="h6" color="textSecondary">
              /mo
            </Typography> */}
          </div>
          {/* <ul>
            {tier.description.map((line) => (
              <Typography component="li" variant="subtitle1" align="center" key={line}>
                {line}
              </Typography>
            ))}
          </ul> */}
          <Typography component="li" variant="subtitle1" align="center">
            Accrual Period: {item.accrual_period}
          </Typography>
          </CardContent>
          <CardActions>
          <Button onClick={() => handleSubscribe(item.id)} fullWidth variant='outlined' color="primary">
            Subscribe
          </Button>
          </CardActions>
        </Card>)
      }
    </div>
  );
};

export default AdminSubscriptions;
