import React, {useState, useEffect } from 'react';
import {ethers} from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const TransactContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers
}