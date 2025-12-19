import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Handle both JSON and FormData
    let name, email, phone, service, message, city;
    
    const contentType = request.headers.get('content-type');
    
    if (contentType?.includes('application/json')) {
      // Handle JSON data (from JavaScript fetch)
      const data = await request.json();
      name = data.name;
      email = data.email;
      phone = data.phone;
      service = data.service || data.course; // Support both 'service' and 'course' field names
      message = data.message;
      city = data.city;
    } else {
      // Handle FormData (from HTML form submission)
      const formData = await request.formData();
      name = formData.get('name') as string;
      email = formData.get('email') as string;
      phone = formData.get('phone') as string;
      service = (formData.get('service') || formData.get('course')) as string; // Support both field names
      message = formData.get('message') as string;
      city = formData.get('city') as string;
    }

    // Validate required fields
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check for Web3Forms (easiest option)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    
    if (web3formsKey && web3formsKey !== 'your_web3forms_key_here') {
      // Use Web3Forms (free, no SMTP needed)
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `🚀 New Enquiry from ${name} - ${service}`,
          from_name: 'MyDigital Crown Website',
          to: 'mydigitalcrown@gmail.com',
          name: name,
          email: email,
          phone: phone,
          city: city || 'Not provided',
          service: service,
          message: message || 'No message provided',
        }),
      });

      if (web3formsResponse.ok) {
        console.log('✅ Email sent via Web3Forms:', { name, email, phone, service });
        return NextResponse.json(
          { message: 'Enquiry sent successfully' },
          { status: 200 }
        );
      }
    }

    // Check if Gmail App Password is configured
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    
    if (!gmailPassword || gmailPassword === 'your_gmail_app_password_here') {
      // Fallback: Log to console and return success (for development)
      console.log('\n📧 NEW ENQUIRY RECEIVED:');
      console.log('═══════════════════════════════════════');
      console.log('👤 Name:', name);
      console.log('📧 Email:', email);
      console.log('📱 Phone:', phone);
      if (city) console.log('📍 City:', city);
      console.log('🎯 Service:', service);
      if (message) console.log('💬 Message:', message);
      console.log('⏰ Time:', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
      console.log('═══════════════════════════════════════\n');
      
      // Still return success so user doesn't see error
      // You can manually check terminal/logs for enquiries
      return NextResponse.json(
        { 
          message: 'Enquiry received successfully',
          note: 'Check server console for enquiry details'
        },
        { status: 200 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mydigitalcrown@gmail.com',
        pass: gmailPassword,
      },
    });

    // Email content
    const mailOptions = {
      from: 'mydigitalcrown@gmail.com',
      to: 'mydigitalcrown@gmail.com',
      subject: `🚀 New Enquiry from ${name} - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 5px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { color: #333; font-size: 16px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .badge { display: inline-block; background: #10b981; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Enquiry Received!</h1>
              <div class="badge">HIGH PRIORITY</div>
            </div>
            
            <div class="content">
              <h2 style="color: #667eea; margin-bottom: 20px;">📋 Customer Details</h2>
              
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></div>
              </div>
              
              ${city ? `
              <div class="field">
                <div class="label">📍 City:</div>
                <div class="value">${city}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">🎯 Service Interested In:</div>
                <div class="value" style="font-weight: bold; color: #764ba2; font-size: 18px;">${service}</div>
              </div>
              
              ${message ? `
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message}</div>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding: 20px; background: #ecfdf5; border-radius: 10px; border: 2px solid #10b981;">
                <h3 style="color: #059669; margin-top: 0;">⏰ Action Required:</h3>
                <p style="margin: 10px 0;">Please contact this lead within 2 hours for maximum conversion rate.</p>
                <p style="margin: 10px 0; font-weight: bold;">
                  Quick Call: <a href="tel:${phone}" style="color: #059669; text-decoration: none;">${phone}</a>
                </p>
                <p style="margin: 10px 0; font-weight: bold;">
                  Quick Email: <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p>📧 This email was sent from MyDigital Crown website enquiry form</p>
              <p>⏰ Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              <p style="margin-top: 20px;">
                <strong>MyDigital Crown</strong><br>
                Digital Marketing Company in Mumbai<br>
                📞 +91-83695-11877 | 📧 mydigitalcrown@gmail.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Enquiry sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send enquiry' },
      { status: 500 }
    );
  }
}
