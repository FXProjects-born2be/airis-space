import { NextResponse } from "next/server";
const { google } = require("googleapis");

function makeBody(to, from, subject, message, attachments) {
  const boundary = "boundary_" + Date.now(); // Unique boundary string
  let email = [
    `To: ${to}`,
    `From: ${from}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/mixed; boundary=${boundary}`,
    "",
    `--${boundary}`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    message,
  ].join("\n");

  // Add attachments
  attachments.forEach(({ filename, mimeType, data }) => {
    email += `
--${boundary}
Content-Type: ${mimeType}
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename="${filename}"

${data}`;
  });

  // End the MIME message
  email += `
--${boundary}--`;

  return Buffer.from(email)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(request) {
  try {
    const bodyJSON = await request.json();

    const { name, email, phone, position, link, cv } = bodyJSON;

    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      process.env.EMAIL_CLIENT_ID,
      process.env.EMAIL_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.EMAIL_REFRESH_TOKEN,
    });

    const accessToken = await oauth2Client.getAccessToken();
    if (!accessToken.token) {
      throw new Error("Failed to generate access token.");
    }

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    let attachments = [];
    if (cv) {
      attachments.push(cv);
    }

    // Email content for admin
    const adminEmailBody = makeBody(
      process.env.EMAIL_USER,
      process.env.EMAIL_USER,
      `New Request from "Work at AIris" form`,
      `
      <p><b>Full Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Position:</b> ${position}</p>
      <p><b>Link to Portfolio or LinkedIn:</b> ${link || "N/A"}</p>
      `,
      attachments
    );

    const clientEmailBody = makeBody(
      email, // Client email
      process.env.EMAIL_USER, // Sender (admin)
      "AIris: Your Application Received", // Subject
      `
      <table width="640" style="border-collapse: collapse; margin: 0 auto; font-style: sans-serif;">
        <thead>
          <tr>
              <td>
                  <img style="width: 100%" src="https://airis.space/images/email_header.png" alt="Header" />
              </td>
          </tr>
        </thead>
            <tbody>
                <tr>
                    <td style="padding: 50px 40px; font-family: Roboto, sans-serif; color:#0A0A0A;">
                        <h2 style="text-align: left; font-size: 20px;">Dear ${name},</h2>
                        <p style="font-size: 16px; line-height: 19px;">Thank you for submitting your application to AIris. We have received your details, and our HR team is reviewing your submission.</p>
                        <p style="font-size: 16px; line-height: 19px;">We will get in touch with you soon to discuss the next steps. If you have any questions in the meantime, feel free to reply to this email.</p>
                         <p style="font-size: 16px; line-height: 19px;">Thank you for your interest in joining our team!</p>
                       <p style="font-size: 16px; line-height: 19px; font-weight: 600;">
                            Best regards,
                            <br>The AIris Team
                        </p>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td style="background:#09090B;padding:24px;color:#F7F7F7;font-size:24px;font-weight:400;text-align:center;">
                      Thanks for using AIris
                  </td>
                </tr>
            </tfoot>
        </table>
      `
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
    });

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: clientEmailBody },
    });

    return NextResponse.json({ message: "Request sent successfully." });
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { message: "Failed to send the request.", error: error.message },
      { status: 500 }
    );
  }
}
