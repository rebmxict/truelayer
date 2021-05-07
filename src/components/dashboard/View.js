import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import MaterialTable from 'material-table';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { server_url } from 'src/current-env';
import { useParams } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function View({ className }) {
  const classes = useStyles();
  
	const { id } = useParams();

	const accessToken = useSelector((state) => state.resource.accessToken);

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (accessToken && id) {
			setLoading(true);
      const data = { accessToken, accountId: id };

      const config = {
        method: 'post',
        url: `${server_url}/transactions`,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      axios(config)
      .then(function (response) {
				setData(response.data.results);
				setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
		}
	}, [accessToken, id]);

  const emptyValue = () => { return <i style={{color: 'lightgrey'}}>Unavailable</i>; }
  const columns = [
    {
      title: 'Transaction Id',
      field: 'transaction_id',
      emptyValue,
    },
    {
      title: 'Amount',
      field: 'amount',
      emptyValue,
    },
    {
      title: 'Currency',
      field: 'currency',
      emptyValue,
    },
    {
      title: 'Transaction Type',
      field: 'transaction_type',
      emptyValue,
    },
    {
      title: 'Description',
      field: 'description',
      emptyValue,
    },
    {
      title: 'Timestamp',
      field: 'timestamp',
      type: 'date',
      emptyValue,
    },
  ];

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <MaterialTable
        title={<Typography variant="h5">{data.length} Records Found</Typography>}
        columns={columns}
        data={data}
        isLoading={loading}
        options={{
          pageSize: 10,
          pageSizeOptions: [5, 10, 20, 50, 100],
          actionsCellStyle: {
            transform: 'scale(0.8)'
          },
          headerStyle: {
            backgroundColor: '#FAFAFA',
            borderTop: '1px solid #EEEEEE',
            paddingTop: '8px',
            paddingBottom: '8px',
          },
          padding: "dense",
          exportButton: true,
          exportAllData: true,
          exportFileName: 'Payments'
        }}
        localization={{
          header: {
            actions: ''
          }
        }}
      />
    </div>
  );
}

export default View;
