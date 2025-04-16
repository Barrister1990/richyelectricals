import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, service, message, timestamp } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // 1. Send notification email to business (Richy Electricals)
    await resend.emails.send({
        to: 'apprenticelabgh@gmail.com',
        from: 'onboarding@resend.dev',  // Replace with verified Resend sender
      subject: 'New Contact Message from Website',
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #FF9933;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Service:</strong> ${service || 'Not specified'}</p>
          <p><strong>Message:</strong><br/>${message}</p>
          <p style="margin-top: 20px; font-size: 12px; color: #888;">Submitted on: ${new Date(timestamp).toLocaleString()}</p>
        </div>
      `,
    });

    // 2. Send auto-reply to user
    await resend.emails.send({
      to: email,
      from: 'onboarding@resend.dev',  // Same verified sender
      subject: 'Thank You for Contacting Richy Electricals',
      html: `
        <div style="font-family: sans-serif; color: #333;">
          <h2 style="color: #FF9933;">We've Received Your Message!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to Richy Electricals. We’ve received your message and will get back to you as soon as possible.</p>
          <p><strong>Your submitted details:</strong></p>
          <ul>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
            <li><strong>Service:</strong> ${service || 'N/A'}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          <p>We appreciate your interest in our services!</p>
          <p style="margin-top: 20px;">Best regards,<br/>The Richy Electricals Team</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Message and confirmation email sent!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
