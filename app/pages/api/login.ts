import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log(email ,  password)
    return res.status(200).json({ message: 'Login successful' });
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
    res.status(200).json({
        "get request is sucess"
    });
  }
}

