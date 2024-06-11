import { NextResponse } from 'next/server';

export async function POST(request) {
	const formData = await request.json();

	const data = {
		firstName: formData?.firstName,
		email: formData?.email,
		message: formData?.message,
	};

	if (!data.firstName || !data.email || !data.message) {
		return NextResponse.json(
			{ message: 'İsim soyisim, e-mail ve mesaj alanları zorunludur.' },
			{ status: 400 }
		);
	}

	return NextResponse.json({ message: 'Formunuz başarıyla gönderildi' });
}
