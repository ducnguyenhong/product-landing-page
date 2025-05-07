import { findNetworkByPrefix } from '@/utils/helper-server';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, address, createdAt, productId, productName, productSize } = body;

    const scriptUrl = process.env.GOOGLE_SHEET_SCRIPT;

    const response = await axios.post(scriptUrl, {
      fullName,
      phone,
      address,
      createdAt,
      status: 'Mới',
      network: findNetworkByPrefix(phone)?.name || 'Không xác định',
      productName,
      productSize,
      productId
    });

    return NextResponse.json({ message: 'Success', data: response.data });
  } catch (error) {
    console.error('Error posting to Google Sheet:', error);
    return NextResponse.json({ message: 'Error posting to Google Sheet' }, { status: 500 });
  }
}
