import { FormData } from '@/components/contact';

export async function sendEmail(data: FormData, callback: () => void) {
  const apiEndpoint = '/api/email';

  try {
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    
    if (res.ok) {
      alert(response.message || 'Message sent successfully!');
    } else {
      alert(response.message || 'Failed to send message');
    }
  } catch (err) {
    alert('Network error. Please try again later.');
    console.error('Send email error:', err);
  } finally {
    callback();
  }
}
