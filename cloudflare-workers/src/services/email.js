// cloudflare-workers/src/services/email.js
// Email Notification Service

import { EMAIL_TEMPLATES } from '../config/constants.js';

/**
 * Send email using ZeptoMail
 */
export async function sendWithZeptoMail(to, subject, html, env) {
  if (!env.ZEPTOMAIL_API_KEY) {
    console.warn('ZeptoMail API key not configured');
    return { success: false, message: 'Email service not configured' };
  }

  const url = 'https://api.zeptomail.com/v1.1/email';

  const payload = {
    from: {
      address: EMAIL_TEMPLATES.vendor.from,
      name: 'Globe Sourcing Procurement'
    },
    to: [{
      email_address: {
        address: to,
        name: 'Recipient'
      }
    }],
    subject: subject,
    htmlbody: html
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Zoho-enczapikey ${env.ZEPTOMAIL_API_KEY}`
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return { success: true };
    } else {
      const error = await response.text();
      console.error('ZeptoMail error:', error);
      return { success: false, message: 'Failed to send email' };
    }

  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, message: error.message };
  }
}

/**
 * Generate vendor confirmation email HTML
 */
function generateVendorEmailHTML(formData) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vendor Registration Confirmation</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
          background: linear-gradient(135deg, #1e3a8a 0%, #059669 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: 600;
        }
        .content {
          padding: 40px 30px;
        }
        .content h2 {
          color: #1e3a8a;
          font-size: 22px;
          margin-top: 0;
        }
        .info-box {
          background: #f8fafc;
          border-left: 4px solid #059669;
          padding: 20px;
          margin: 25px 0;
        }
        .info-box h3 {
          margin-top: 0;
          color: #1e3a8a;
          font-size: 18px;
        }
        .info-item {
          margin: 10px 0;
        }
        .info-item strong {
          color: #1e3a8a;
        }
        .timeline {
          margin: 30px 0;
        }
        .timeline-item {
          display: flex;
          margin: 15px 0;
          padding-bottom: 15px;
          border-bottom: 1px solid #e5e7eb;
        }
        .timeline-item:last-child {
          border-bottom: none;
        }
        .timeline-icon {
          width: 40px;
          height: 40px;
          background: #059669;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
          margin-right: 15px;
        }
        .timeline-content h4 {
          margin: 0 0 5px 0;
          color: #1e3a8a;
        }
        .timeline-content p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }
        .cta-button {
          display: inline-block;
          background: #059669;
          color: white;
          text-decoration: none;
          padding: 12px 30px;
          border-radius: 6px;
          font-weight: 600;
          margin: 20px 0;
        }
        .footer {
          background: #f8fafc;
          padding: 30px;
          text-align: center;
          font-size: 14px;
          color: #64748b;
        }
        .footer a {
          color: #059669;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Registration Confirmed!</h1>
        </div>
        
        <div class="content">
          <h2>Dear ${formData.contactPerson || 'Vendor'},</h2>
          
          <p>Thank you for registering <strong>${formData.companyName}</strong> as a vendor with Globe Sourcing Procurement.</p>
          
          <div class="info-box">
            <h3>📋 Your Application Details</h3>
            <div class="info-item">
              <strong>Company:</strong> ${formData.companyName}
            </div>
            <div class="info-item">
              <strong>Contact:</strong> ${formData.contactPerson}
            </div>
            <div class="info-item">
              <strong>Email:</strong> ${formData.email}
            </div>
            <div class="info-item">
              <strong>Product Category:</strong> ${formData.productCategory}
            </div>
            <div class="info-item">
              <strong>Submitted:</strong> ${new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          <h3>📍 What Happens Next?</h3>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-icon">1</div>
              <div class="timeline-content">
                <h4>Application Review (24-48 hours)</h4>
                <p>Our team will review your company information and product details</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-icon">2</div>
              <div class="timeline-content">
                <h4>Document Verification</h4>
                <p>We'll verify your business credentials and certifications</p>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="timeline-icon">3</div>
              <div class="timeline-content">
                <h4>Approval & Onboarding</h4>
                <p>Once approved, you'll receive vendor portal access and onboarding materials</p>
              </div>
            </div>
          </div>

          <p>If we need any additional information, our verification team will contact you at <strong>${formData.email}</strong>.</p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://globesourceprocurement.com/vendor-portal" class="cta-button">
              Track Your Application
            </a>
          </div>

          <p style="margin-top: 30px;">If you have any questions, please don't hesitate to reach out:</p>
          <p>
            📧 Email: <a href="mailto:info@globesourceprocurement.com">info@globesourceprocurement.com</a><br>
            🌐 Website: <a href="https://globesourceprocurement.com">globesourceprocurement.com</a>
          </p>
        </div>

        <div class="footer">
          <p><strong>Globe Sourcing Procurement</strong></p>
          <p>Saint John Woods, London, United Kingdom</p>
          <p>
            <a href="https://globesourceprocurement.com">Website</a> | 
            <a href="https://globesourceprocurement.com/privacy">Privacy Policy</a> | 
            <a href="https://globesourceprocurement.com/terms">Terms of Service</a>
          </p>
          <p style="margin-top: 20px; font-size: 12px;">
            © ${new Date().getFullYear()} Globe Sourcing Procurement. All rights reserved.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Generate admin notification email HTML
 */
function generateAdminEmailHTML(formData, recordId, env) {
  const crmUrl = `${env.ZOHO_API_URL.replace('api', 'crm')}/tab/${env.ZOHO_CRM_MODULE}/${recordId}`;
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 700px; margin: 0 auto; padding: 20px; }
        .header { background: #1e3a8a; color: white; padding: 20px; border-radius: 5px; }
        .content { background: #f9fafb; padding: 20px; margin-top: 20px; border-radius: 5px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .info-item { padding: 10px; background: white; border-left: 3px solid #059669; }
        .info-item strong { display: block; color: #1e3a8a; margin-bottom: 5px; }
        .button { display: inline-block; background: #059669; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">🔔 New Vendor Registration</h1>
          <p style="margin: 10px 0 0 0;">A new vendor has submitted their application</p>
        </div>

        <div class="content">
          <h2 style="margin-top: 0; color: #1e3a8a;">Company Information</h2>
          
          <div class="info-grid">
            <div class="info-item">
              <strong>Company Name</strong>
              <span>${formData.companyName}</span>
            </div>
            <div class="info-item">
              <strong>Contact Person</strong>
              <span>${formData.contactPerson}</span>
            </div>
            <div class="info-item">
              <strong>Email</strong>
              <span>${formData.email}</span>
            </div>
            <div class="info-item">
              <strong>Phone</strong>
              <span>${formData.phone}</span>
            </div>
            <div class="info-item">
              <strong>Country</strong>
              <span>${formData.country}</span>
            </div>
            <div class="info-item">
              <strong>Registration Date</strong>
              <span>${new Date().toLocaleString()}</span>
            </div>
          </div>

          <h3 style="color: #1e3a8a;">Product Details</h3>
          <div class="info-grid">
            <div class="info-item">
              <strong>Category</strong>
              <span>${formData.productCategory}</span>
            </div>
            ${formData.productSubcategory ? `
            <div class="info-item">
              <strong>Subcategory</strong>
              <span>${formData.productSubcategory}</span>
            </div>
            ` : ''}
            <div class="info-item">
              <strong>MOQ</strong>
              <span>${parseInt(formData.moq || 0).toLocaleString()} units</span>
            </div>
            <div class="info-item">
              <strong>Unit Price</strong>
              <span>${formData.currency} ${parseFloat(formData.unitPrice || 0).toFixed(2)}</span>
            </div>
            <div class="info-item">
              <strong>Packaging</strong>
              <span>${formData.packaging}</span>
            </div>
            ${formData.moq && formData.unitPrice ? `
            <div class="info-item">
              <strong>Min Order Value</strong>
              <span>${formData.currency} ${(parseFloat(formData.unitPrice) * parseInt(formData.moq)).toLocaleString()}</span>
            </div>
            ` : ''}
          </div>

          ${formData.productDescription ? `
          <h3 style="color: #1e3a8a;">Product Description</h3>
          <div style="background: white; padding: 15px; border-left: 3px solid #059669;">
            ${formData.productDescription}
          </div>
          ` : ''}

          ${formData.certifications ? `
          <h3 style="color: #1e3a8a;">Certifications</h3>
          <div style="background: white; padding: 15px; border-left: 3px solid #059669;">
            ${formData.certifications}
          </div>
          ` : ''}

          <div style="text-align: center; margin: 30px 0;">
            <a href="${crmUrl}" class="button" style="color: white;">
              View in Zoho CRM →
            </a>
          </div>

          <div style="background: #fff3cd; border-left: 3px solid #ffc107; padding: 15px; margin: 20px 0;">
            <strong>📌 Action Required:</strong>
            <ul style="margin: 10px 0;">
              <li>Review company information and product details</li>
              <li>Verify business credentials and documents</li>
              <li>Update application status in Zoho CRM</li>
              <li>Contact vendor if additional information is needed</li>
            </ul>
          </div>

          <p><strong>Zoho CRM Record ID:</strong> ${recordId}</p>
        </div>

        <div class="footer">
          <p>This is an automated notification from Globe Sourcing Procurement vendor registration system.</p>
          <p>Do not reply to this email. For support, contact: support@globesourceprocurement.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Send vendor confirmation email
 */
export async function sendVendorConfirmation(formData, env) {
  const html = generateVendorEmailHTML(formData);
  const subject = EMAIL_TEMPLATES.vendor.subject;

  return await sendWithZeptoMail(formData.email, subject, html, env);
}

/**
 * Send admin notification email
 */
export async function sendAdminNotification(formData, recordId, env) {
  const html = generateAdminEmailHTML(formData, recordId, env);
  const subject = `${EMAIL_TEMPLATES.admin.subject}: ${formData.companyName}`;
  const adminEmail = env.ADMIN_EMAIL || 'admin@globesourceprocurement.com';

  return await sendWithZeptoMail(adminEmail, subject, html, env);
}

/**
 * Send both confirmation and notification emails
 */
export async function sendAllNotifications(formData, recordId, env) {
  const results = {
    vendor: { success: false },
    admin: { success: false }
  };

  // Send vendor confirmation
  if (env.ENABLE_EMAIL_NOTIFICATIONS !== 'false') {
    try {
      results.vendor = await sendVendorConfirmation(formData, env);
    } catch (error) {
      console.error('Failed to send vendor confirmation:', error);
    }

    // Send admin notification
    try {
      results.admin = await sendAdminNotification(formData, recordId, env);
    } catch (error) {
      console.error('Failed to send admin notification:', error);
    }
  }

  return results;
}