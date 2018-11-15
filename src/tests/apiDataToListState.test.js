/**
 * When the donation list component mounts, the function getDonationData should be called and response
 * should be stored in the component state in the appropriate format
 */

jest.mock('../components/api/request');

import React from 'react';
import {shallow} from 'enzyme';
import DonationList from '../components/DonationList';

describe('DonationList API call on mount', async () => {
  const donationListWrapper = await shallow(<DonationList />);
  await donationListWrapper.update();

  it('makes a call to the API on component mount and sets the state', () => {
    expect(donationListWrapper.state('donations').length).toEqual(1);
  });

  it('formats the donation results in the state correctly', () => {
    expect(donationListWrapper.state('donations')).toHaveProperty(amount, '10.00');
    expect(donationListWrapper.state('donations')).toHaveProperty(donationDate, 'Thursday, 15/11/2018, 19:06:05 GMT');
    expect(donationListWrapper.state('donations')).toHaveProperty(donorDisplayName, 'John Smith');
    expect(donationListWrapper.state('donations')).toHaveProperty(imgUrl, 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif');
    expect(donationListWrapper.state('donations')).toHaveProperty(messageUrl, 'Lorem Ipsum');
  });
});