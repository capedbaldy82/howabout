import { useEffect, useState } from 'react';
import { BASE_URL } from '../../constants';

const checkUser = async () => {
  if (!localStorage.getItem('token')) {
    return false;
  }

  const url = `${BASE_URL}/auth/check`;
  const token = localStorage.getItem('token');

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const result = await response.json();
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log('it is expired');
    console.log(`${err} expired token`);
  }
};

export default checkUser;
