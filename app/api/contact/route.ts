export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'All fields required' },
        { status: 400 }
      )
    }

    // Option A: Send email using Resend, SendGrid, or similar
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'contact@amir-seo.com',
    //     to: 'hello@amir-seo.com',
    //     subject: `New Contact: ${name}`,
    //     html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    //   }),
    // })

    // Option B: Log to database
    console.log(`[Contact] New message from ${name} (${email}): ${message}`)

    return Response.json(
      { message: 'Message received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact error:', error)
    return Response.json(
      { error: 'Message failed to send' },
      { status: 500 }
    )
  }
}
