import { FormData } from '@/components/contact';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert('Failed to send message. Please try again later.');
      console.error('Send email error:', err);

    });
}



// import { FormData } from '@/components/contact';

// export async function sendEmail(data: FormData) {
//   try {
//     const response = await fetch('/api/email', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) throw new Error('Failed to send');
    
//     alert('Message sent successfully!');
//   } catch (error) {
//     alert('Failed to send message. Please try again later.');
//     console.error('Error:', error);
//   }
// }