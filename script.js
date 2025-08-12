// Function to handle the demo audio request
async function handleDemoAudio() {
  const data = {
    name: document.getElementById('name').value,
    number: document.getElementById('number').value,
    people_count: document.getElementById('people_count').value
  };

  try {
    const response = await fetch('https://app.tingting.io/api/demo-audio-handler/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    console.log('Success:', result);
    // Handle success response
  } catch (error) {
    console.error('Error:', error);
    // Handle error
  }
}

// Function to get OTP
async function getOTP() {
  const data = {
    name: document.getElementById('name').value,
    number: document.getElementById('number').value,
    people_count: document.getElementById('people_count').value
  };

  try {
    const response = await fetch('https://app.tingting.io/api/demo-call-handler/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    console.log('OTP Success:', result);
    // Handle OTP success response
  } catch (error) {
    console.error('OTP Error:', error);
    // Handle error
  }
}

// Function to verify OTP
async function verifyOTP() {
  const data = {
    name: document.getElementById('name').value,
    number: document.getElementById('number').value,
    people_count: document.getElementById('people_count').value,
    otp: document.getElementById('otp').value
  };

  try {
    const response = await fetch('https://app.tingting.io/api/demo-call-handler/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    console.log('Verify OTP Success:', result);
    // Handle verification success response
  } catch (error) {
    console.error('Verify OTP Error:', error);
    // Handle error
  }
}