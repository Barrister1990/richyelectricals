import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://richyelectricals.co.uk'); // Allow your specific domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  
  const { name, email, phone, service, message, timestamp } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  
  try {
    // Format timestamp for display
    const formattedDate = new Date(timestamp).toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
    
    // 1. Send notification email to business (Richy Electricals)
    await resend.emails.send({
      to: 'info@richyelectricals.co.uk',
      from: 'Richy Electricals <noreply@richyelectricals.co.uk>', // Replace with verified Resend sender
      subject: `New Contact Message: ${name}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 650px; margin: auto;">
          <!-- Header -->
          <div style="background-color: #FF9933; padding: 25px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Website Inquiry</h1>
            <p style="color: white; margin: 5px 0 0; font-size: 16px; opacity: 0.9;">From Richy Electricals Contact Form</p>
          </div>
          
          <!-- Content -->
          <div style="background-color: #ffffff; padding: 30px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
            <p style="font-size: 16px; line-height: 1.5;">You've received a new contact form submission with the following details:</p>
            
            <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin: 25px 0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tbody>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 30%;">Name:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;"><strong>${name}</strong></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #FF9933; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">${phone || 'Not provided'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold;">Service Interest:</td>
                    <td style="padding: 12px 5px; border-bottom: 1px solid #e0e0e0;">
                      ${service ? `<span style="background-color: #FFF0E0; color: #FF9933; padding: 5px 10px; border-radius: 20px; font-size: 14px;">${service}</span>` : 'Not specified'}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 5px; font-weight: bold; vertical-align: top;">Submission Time:</td>
                    <td style="padding: 12px 5px; color: #666; font-size: 14px;">${formattedDate}</td>
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
              <p style="margin: 0; font-weight: bold; color: #FF9933;">Please respond to this inquiry promptly</p>
            </div>
            
            <div style="margin-top: 25px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background-color: #FF9933; color: white; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-weight: bold;">Reply to ${name}</a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #333; color: white; padding: 15px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">This is an automated notification from the Richy Electricals website.</p>
          </div>
        </div>
      `,
    });
    
    // 2. Send auto-reply to user
    await resend.emails.send({
      to: email,
      from: 'Richy Electricals <noreply@richyelectricals.co.uk>', // Same verified sender
      subject: 'Thank You for Contacting Richy Electricals',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; max-width: 650px; margin: auto;">
          <!-- Header with Logo -->
          <div style="background-color: #FF9933; padding: 30px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Richy Electricals</h1>
            <p style="color: white; margin: 10px 0 0; font-size: 16px;">Expert Electrical Solutions</p>
          </div>
          
          <!-- Content -->
          <div style="background-color: #ffffff; padding: 35px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
            <h2 style="color: #FF9933; margin-top: 0; margin-bottom: 25px; font-size: 24px;">We've Received Your Message!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Hello ${name},</p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">Thank you for reaching out to <strong>Richy Electricals</strong>. This automatic confirmation is to let you know we've received your message and one of our team members will be in touch with you soon.</p>
            
            <div style="background-color: #f9f9f9; border-radius: 8px; padding: 25px; margin: 30px 0;">
              <h3 style="color: #FF9933; margin-top: 0; font-size: 18px;">Your Message Details:</h3>
              
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                ${service ? `
                <tr>
                  <td style="padding: 10px 5px; border-bottom: 1px solid #e0e0e0; font-weight: bold; width: 130px;">Service Interest:</td>
                  <td style="padding: 10px 5px; border-bottom: 1px solid #e0e0e0;">
                    <span style="background-color: #FFF0E0; color: #FF9933; padding: 4px 10px; border-radius: 20px; font-size: 14px;">${service}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 10px 5px; vertical-align: top; font-weight: bold;">Your Message:</td>
                  <td style="padding: 10px 5px;">
                    <div style="background-color: #ffffff; padding: 10px 15px; border-radius: 4px; border: 1px solid #e0e0e0; font-style: italic;">
                      "${message}"
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6;">We typically respond to all inquiries within 24-48 hours during business days. If your matter requires immediate attention, please don't hesitate to call us directly.</p>
            
            <div style="text-align: center; margin: 35px 0 25px;">
              <div style="display: inline-block; background-color: #FF9933; color: white; padding: 15px 30px; border-radius: 4px; font-weight: bold; font-size: 16px;">Thank You For Choosing Richy Electricals!</div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div style="background-color: #f5f5f5; padding: 25px; border-left: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;">
            <table style="width: 100%;">
              <tr>
                <td style="text-align: center; padding: 10px; width: 50%; vertical-align: top; border-right: 1px solid #e0e0e0;">
                  <div style="font-size: 14px; color: #666;">
                    <strong style="color: #333; display: block; margin-bottom: 8px; font-size: 16px;">Contact Us</strong>
                    <span>Phone: +447491565676</span><br>
                    <a href="mailto:info@richyelectricals.co.uk" style="color: #FF9933; text-decoration: none;">info@richyelectricals.co.uk</a><br>
                    <span style="display: block; margin-top: 8px;">115 Butts Road, Walsall, West Midlands, WS4 2BL, United Kingdom</span>
                  </div>
                </td>
                <td style="text-align: center; padding: 10px; width: 50%; vertical-align: top;">
                  <div style="font-size: 14px; color: #666;">
                    <strong style="color: #333; display: block; margin-bottom: 8px; font-size: 16px;">Business Hours</strong>
                    <span>Monday - Friday: 8am - 5pm</span><br>
                    <span>Saturday: 9am - 2pm</span><br>
                    <span>Sunday: Closed</span>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          
         
          
          <!-- Footer -->
          <div style="background-color: #333; color: white; padding: 20px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="margin: 0 0 10px; font-size: 14px;">© ${new Date().getFullYear()} Richy Electricals. All rights reserved.</p>
            <p style="margin: 0; font-size: 12px; color: #aaa;">Please do not reply to this automated message. To contact us, please use the contact information provided above.</p>
          </div>
        </div>
      `,
    });
    
    return res.status(200).json({ message: 'Message and confirmation email sent!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}