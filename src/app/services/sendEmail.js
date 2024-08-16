// import axios from 'axios';

// const sendEmail = async (data) => {
//   try {
//     const response = await axios.post('https://emailserver-gzcz.onrender.com/api/email/', data);
//     return response.data;
//   } catch (error) {
//     console.error('Erro ao enviar email:', error);
//     throw error;
//   }
// };

// export default sendEmail;
import dotenv from 'dotenv';
import crypto from 'crypto';
import axios from 'axios';

dotenv.config();

const sendEmail = async (data) => {
  console.log(data);
  try {
    const secret = process.env.SECRET_HMAC;

    if (!secret) {
      throw new Error('SECRET_HMAC não está definido');
    }

    const payload = JSON.stringify(data);
    const signature = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');
    console.log(signature);

    const response = await axios.post('http://localhost:8000/api/email', data, {
      headers: {
        'x-signature': signature
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
};

export default sendEmail;