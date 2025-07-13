import { FormData } from '@/components/contact';

export function sendEmail(data: FormData, callback: () => void) {
  // const apiEndpoint = '/api/email';

  // fetch(apiEndpoint, {
  //   method: 'POST',
  //   headers: {
  //       'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // })
  //   // .then((res) => res.json())
  //   // .then((response) => {
  //   //   alert(response.message);
  //   // })
  //   // .catch((err) => {
  //   //   alert('Failed to send message. Please try again later.');
  //   //   console.error('Send email error:', err);

  //   // });
  //   .then(async (res) => {
  //     const response = await res.json();
  //     if (res.ok) {
  //       alert(response.message || 'Message sent successfully!');
  //     } else {
  //       alert(response.message || response.error || 'Failed to send message');
  //     }
  //   })
  //   .catch((err) => {
  //     alert('Network error. Please try again later.');
  //     console.error('Send email error:', err);
  //   });
  //   .finally(() => {
  //     callback(); // Call the callback function regardless of success/failure
  //   });
  
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
