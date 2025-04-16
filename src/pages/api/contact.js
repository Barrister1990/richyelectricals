import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, company, address, service, message } = req.body;

    try {
      const emailContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; padding: 30px;">
          <h2 style="color: #FF9933; text-align: center;">New Quote Request - Richy Electricals</h2>
          <p>Hello Richy Electricals,</p>
          <p>You’ve received a new request for a quote through your website. Here are the details:</p>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tbody>
              <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${company || 'N/A'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Address:</td><td style="padding: 8px;">${address}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Service Required:</td><td style="padding: 8px;">${service}</td></tr>
            </tbody>
          </table>

          <h3 style="margin-top: 30px; color: #444;">Message:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FF9933; border-radius: 5px;">${message}</p>

          <p style="margin-top: 40px;">Please reach out to the user via their provided contact details to respond with a quote.</p>
          <p style="margin-top: 30px; font-size: 14px; color: #888;">This message was sent from the Richy Electricals website contact form.</p>
        </div>
      `;

      const autoReplyContent = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 10px; padding: 30px;">
          <h2 style="color: #FF9933; text-align: center;">Thanks for reaching out!</h2>
          <p>Hi ${firstName},</p>
          <p>Thank you for contacting <strong>Richy Electricals</strong>. We’ve received your quote request and our team will get back to you shortly with more details.</p>
          <p>Here’s a summary of your request:</p>

          <ul>
            <li><strong>Service Requested:</strong> ${service}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>

          <p>If you have any urgent questions, feel free to call us or reply to this email.</p>
          <p style="margin-top: 30px;">Warm regards,<br/>Richy Electricals Team</p>
        </div>
      `;

      // 1. Send email to Richy Electricals
      await resend.emails.send({
        to: 'apprenticelabgh@gmail.com',
        from: 'onboarding@resend.dev', // Use a verified domain from Resend
        subject: 'New Quote Request from Richy Electricals Website',
        html: emailContent,
      });

      // 2. Auto-reply to user
      await resend.emails.send({
        to: email,
        from: 'onboarding@resend.dev', // Must be same or another verified sender
        subject: 'We Received Your Request - Richy Electricals',
        html: autoReplyContent,
      });

      res.status(200).json({ message: 'Message and confirmation sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send message.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
