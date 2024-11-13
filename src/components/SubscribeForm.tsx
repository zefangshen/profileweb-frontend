'use client';
import { useState } from 'react';
import { BACKEND_API_URL, apiClient } from '@/api/api-client';
import { Input, Button } from '@nextui-org/react';

export default function SubscribeForm({ baseURL }) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    // prevent page reload
    e.preventDefault();

    try {
      // const data = await apiClient.postSubscribe(
      const data = await fetch(
        `${baseURL}/api/subscribe/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email })
        }
      ); 
      setEmail('')
    } catch (error) {
      console.log('An error occurred.')
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='email'>
        Get the latest news to your inbox:
      </label>
      <div className='flex items-center gap-1'>
        <Input
          type="email"
          label="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          size="sm"
        />
        <Button type="submit" color="primary" size="lg" radius="sm">Subscribe</Button>
      </div>
    </form>
  )
}