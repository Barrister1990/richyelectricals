import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, company, address, service, message } = req.body;

    try {
      // Internal notification email to Richy Electricals
      const emailContent = `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 650px; margin: auto;">
          <!-- Header -->
          <div style="background-color: #FF9933; padding: 25px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Quote Request</h1>
            <p style="color: white; margin: 5px 0 0; font-size: 16px;">From your website contact form</p>
          </div>
          
          <!-- Content -->
          <div style="background-color: #ffffff; padding: 30px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">Hello Richy Electricals team,</p>
            <p style="font-size: 16px; line-height: 1.5; margin-bottom: 25px;">You've received a new request for a quote. Here are the details:</p>
            
            <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tbody>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 30%;">Name:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${firstName} ${lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #FF9933; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;"><a href="tel:${phone}" style="color: #FF9933; text-decoration: none;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Company:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${company || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Address:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${address}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; font-weight: bold;">Service Required:</td>
                    <td style="padding: 12px 5px;"><span style="background-color: #FFF0E0; color: #FF9933; padding: 5px 10px; border-radius: 20px; font-size: 14px;">${service}</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style="margin-top: 30px;">
              <h3 style="color: #444; border-bottom: 2px solid #FF9933; padding-bottom: 8px; display: inline-block;">Client Message:</h3>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #FF9933;">
                <p style="margin: 0; line-height: 1.6;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 35px; background-color: #FFF0E0; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-weight: bold; color: #FF9933;">Please respond to this request within 24 hours</p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #333; color: white; padding: 20px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">This message was automatically generated from the Richy Electricals website.</p>
          </div>
        </div>
      `;

      // Client auto-reply email
      const autoReplyContent = `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 650px; margin: auto;">
          <!-- Header with Logo -->
          <div style="background-color: #FF9933; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Richy Electricals</h1>
            <p style="color: white; margin: 10px 0 0; font-size: 16px;">Quality Electrical Solutions</p>
          </div>
          
          <!-- Content -->
          <div style="background-color: #ffffff; padding: 30px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
            <h2 style="color: #FF9933; margin-top: 0; margin-bottom: 25px; font-size: 24px;">Thank You For Your Request!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hello ${firstName},</p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Thank you for reaching out to <strong>Richy Electricals</strong>. We've received your quote request and our team is reviewing it now.</p>
            
            <div style="background-color: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
              <h3 style="color: #FF9933; margin-top: 0; font-size: 18px;">Your Request Summary:</h3>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 40%;">Service Requested:</td>
                  <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;"><span style="background-color: #FFF0E0; color: #FF9933; padding: 5px 10px; border-radius: 20px; font-size: 14px;">${service}</span></td>
                </tr>
                <tr>
                  <td style="padding: 12px 5px; font-weight: bold; vertical-align: top;">Your Message:</td>
                  <td style="padding: 12px 5px;">
                    <div style="background-color: #ffffff; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0;">
                      ${message}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">We aim to respond to all inquiries within 24 hours during business days. One of our specialists will contact you shortly with more information about your requested service.</p>
            
            <div style="text-align: center; margin: 35px 0;">
              <div style="display: inline-block; background-color: #FF9933; color: white; padding: 12px 25px; border-radius: 4px; font-weight: bold; font-size: 16px;">We're Looking Forward to Serving You!</div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div style="background-color: #f5f5f5; padding: 20px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
            <table style="width: 100%;">
              <tr>
                <td style="text-align: center; padding: 10px;">
                  <div style="font-size: 14px; color: #666;">
                    <strong style="color: #333; display: block; margin-bottom: 5px;">Contact Us</strong>
                    <span>Phone: +447491565676</span><br>
                    <a href="mailto:info@richyelectricals.co.uk" style="color: #FF9933; text-decoration: none;">info@richyelectricals.co.uk</a>
                  </div>
                </td>
                <td style="text-align: center; padding: 10px;">
                  <div style="font-size: 14px; color: #666;">
                    <strong style="color: #333; display: block; margin-bottom: 5px;">Business Hours</strong>
                    <span>Monday - Friday: 8am - 5pm</span><br>
                    <span>Saturday: 9am - 2pm</span>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #333; color: white; padding: 20px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">© ${new Date().getFullYear()} Richy Electricals. All rights reserved.</p>
          </div>
        </div>
      `;

      // 1. Send email to Richy Electricals
      await resend.emails.send({
        to: 'info@richyelectricals.co.uk',
        from: 'Richy Electricals <noreply@richyelectricals.co.uk>', // Use a verified domain from Resend
        subject: 'New Quote Request from Richy Electricals Website',
        html: emailContent,
      });

      // 2. Auto-reply to user
      await resend.emails.send({
        to: email,
        from: 'Richy Electricals <noreply@richyelectricals.co.uk>', // Must be same or another verified sender
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