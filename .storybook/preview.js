import React from 'react';
import { enableMocks } from '../src/mocks';
import { useState, useEffect, addDecorator } from '@storybook/client-api';

const mockReady = enableMocks();

// Defers initial load of stories, but only happens once in the entire lifecycle of Storybook
addDecorator((storyFn) => {
  const [isMockReady, ready] = useState(global.mockReady);
  useEffect(() => {
    // subscribe to mock being ready
    mockReady.then(() => {
      global.mockReady = true;
      ready(global.mockReady);
    })
  }, []);

  if (isMockReady) { return storyFn() };

  return <div>Loading mocks...</div>;
});