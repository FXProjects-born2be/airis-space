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
      `New Request from "Work at Airis" form`,
      `
      <p><b>Full Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Position:</b> ${position}</p>
      <p><b>Link to Portfolio or LinkedIn:</b> ${link || "N/A"}</p>
      `,
      attachments
    );

    await gmail.users.messages.send({
      userId: "me",
      resource: { raw: adminEmailBody },
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
