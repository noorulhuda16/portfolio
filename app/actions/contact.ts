"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactForm(data: ContactFormData) {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  // Format the email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to yourself
    replyTo: data.email,
    subject: `Contact Form: ${data.subject || "New Message"}`,
    text: `
      Name: ${data.name}
      Email: ${data.email}
      
      Message:
      ${data.message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
        <p><strong>From:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject || "No subject"}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <p style="margin: 0;"><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${data.message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #64748b;">This email was sent from your portfolio contact form.</p>
      </div>
    `,
  }

  // Send the email
  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

