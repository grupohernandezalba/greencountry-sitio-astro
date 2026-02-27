import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !phone || !service || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "All fields are required."
        }),
        { status: 400 }
      );
    }

    // Email interno
    await resend.emails.send({
      from: `info@greencountryls.com`,
      to: `${email}`,
      cc:   [
                "info@greencountryls.com"
            ],
      subject: "Green Country new contact message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Interested In:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/thanks"
      }
    });

  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Error sending message."
      }),
      { status: 500 }
    );
  }
};
