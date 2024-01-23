import { NextResponse } from 'next/server';
import https from 'https';

export async function GET(request) {
    try {
        const params = {
            email: 'bjayzee@gmail.com',
            amount: 100000,
        };

        const options = {
            hostname: 'api.paystack.co',
            port: 443,
            path: '/transaction/initialize',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        };

        const data = JSON.stringify(params);

        const req = https.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                console.log(responseData);
                return NextResponse.json(responseData);
            });
        });

        req.on('error', (error) => {
            console.error(error);
            return NextResponse.json({ error: 'Failed to initialize transaction' });
        });

        req.write(data);
        req.end();

        // Pause execution until the request is complete
        await new Promise((resolve) => req.on('close', resolve));

        // Note: You might need to adjust the above line based on your specific needs

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to initialize transaction' });
    }
}