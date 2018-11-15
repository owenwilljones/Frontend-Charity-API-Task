/**
 * Donation list component
 * 
 * Parent list of donor cards. dictates data for donor cards based on API data, fetched on mount
 */

import React, { Component } from 'react';
import request from './api/request';
import getSymbolFromCurrency from 'currency-symbol-map';

class DonationList extends Component {
  constructor() {
    super();

    this.state = {
      donations: []
    };
  }

  async componentWillMount() {
    const result = await request();
    let formattedData = [];

    for(let donor of result.donations) {
      formattedData.push({
        amount: `${getSymbolFromCurrency(donor.currencyCode)}${donor.amount.toFixed(2)}`,
        donationDate: this.formatDate(donor.donationDate),
        donorDisplayName: donor.donorDisplayName,
        imageUrl: donor.imageUrl,
        message: donor.message
      });
    }
    
    this.setState({donations: formattedData});
  }

  formatDate(date) {
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const timestamp = date.substring(date.indexOf('(') + 1, date.indexOf('+'));
    const dateObj = new Date(parseInt(timestamp));


    const weekday = weekdays[dateObj.getDay()];
    const mins = this.setMinimumLengthForDateAttr(dateObj.getMinutes());
    const hours = this.setMinimumLengthForDateAttr(dateObj.getHours());
    const day = this.setMinimumLengthForDateAttr(dateObj.getDate());
    const month = this.setMinimumLengthForDateAttr(dateObj.getMonth() + 1);
    const year = dateObj.getFullYear();
    
    return `${weekday}, ${day}/${month}/${year}, ${hours}:${mins}`;
  }

  setMinimumLengthForDateAttr(attr) {
    return attr.toString().length < 2 ? `0${attr}` : attr;
  }

  render() {
    return (
      <div>
        <h1>Latest Donations</h1>
        {this.state.donations.map((donor, key) => (
          <div key={key}>
            <img src={donor.imageUrl} />
            <h2>{donor.donorDisplayName}</h2>
            <div>{donor.amount}</div>
            <div>{donor.donationDate}</div>
            <div>{donor.message}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default DonationList;