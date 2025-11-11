import { NextResponse } from 'next/server';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name = '',
      email = '',
      phone = '',
      subject = '',
      message = '',
      company = '',
    } = body || {};

    if (company.trim().length > 0) {
      return NextResponse.json({ success: false, message: 'Spam detected.' }, { status: 400 });
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error('WEB3FORMS_ACCESS_KEY is not set.');
      return NextResponse.json({ success: false, message: 'Form is temporarily unavailable.' }, { status: 500 });
    }

    const siteUrl = process.env.SITE_URL || 'https://mrvirul.com';

    const payload = {
      access_key: accessKey,
      name,
      email,
      phone,
      subject,
      message,
      from_name: 'Portfolio Contact Form',
      redirect: `${siteUrl}/thank-you`,
    };

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      console.error('Web3Forms error', data);
      return NextResponse.json({ success: false, message: 'Unable to send message right now.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed', error);
    return NextResponse.json({ success: false, message: 'Unable to send message right now.' }, { status: 500 });
  }
}
