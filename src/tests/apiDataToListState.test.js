/**
 * When the donation list component mounts, the function getDonationData should be called and response
 * should be stored in the component state in the appropriate format
 */

jest.mock('../components/api/request');

import React from 'react';
import {shallow} from 'enzyme';
import DonationList from '../components/DonationList';

describe('DonationList API call on mount', () => {

  it('makes a call to the API on component mount and sets the state', async () => {
    const donationListWrapper = await shallow(<DonationList />);
    await donationListWrapper.instance().componentWillMount();
    expect(donationListWrapper.state('donations').length).toEqual(1);
  });

  it('formats the donation results in the state correctly', async () => {
    const donationListWrapper = await shallow(<DonationList />);
    await donationListWrapper.instance().componentWillMount();

    const mockDonationValue = donationListWrapper.state('donations')[0];
    expect(mockDonationValue).toHaveProperty('amount', '£10.00');
    expect(mockDonationValue).toHaveProperty('donationDate', 'Monday, 01/10/2018, 01:00');
    expect(mockDonationValue).toHaveProperty('donorDisplayName', 'John Smith');
    expect(mockDonationValue).toHaveProperty('imageUrl', 'https://www.justgiving.com/content/images/graphics/icons/avatars/facebook-avatar.gif');
    expect(mockDonationValue).toHaveProperty('message', 'Lorem Ipsum');
  });
});