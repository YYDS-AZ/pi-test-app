export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { paymentId } = req.body;

  if (!paymentId) {
    return res.status(400).json({ error: 'Missing paymentId' });
  }

  console.log('Approving payment ID:', paymentId);

  // Testnet 直接返回批准（生产需真实 Pi API 调用）
  res.status(200).json({ status: 'approved' });
}
