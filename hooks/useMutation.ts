import { useState } from 'react';
import cookies from 'react-cookies';

interface UseMutationState<T> {
  loading: boolean;
  data?: T;
  error: undefined | any;
}

type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

const useMutation = <T = any>(
  method: string,
  url: string,
  token?: string
): UseMutationResult<T> => {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });

  function mutation(data: any) {
    const token = cookies.load('accessToken');
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then((json) => setState((prev) => ({ ...prev, data: json })))
      .catch((error) => setState((prev) => ({ ...prev, error: error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }

  return [mutation, { ...state }];
};

export default useMutation;
