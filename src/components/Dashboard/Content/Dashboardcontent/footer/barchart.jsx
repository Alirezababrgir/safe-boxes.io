import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Barchart({ paymentsum, poolReceiptSum, mlmReceiptSum }) {


    const series = [
        {
            label: 'Total Volume',
            data: [
                paymentsum
            ]
        },
        {
            label: 'All receipt',
            data: [
                poolReceiptSum + mlmReceiptSum
            ]
        }
    ].map((s) => ({ ...s, highlightScope }));

    return (


        <div className="col-md-6 col-lg-6">
            <div style={{ borderRadius: "0.4rem" }} className="bg-white">
                <div className="row mb-4 p-4">
                    <Box sx={{ width: '100%' }}>
                        <BarChart
                            xAxis={[{ scaleType: 'band', data: ['System Volume Details']}]}
                            height={400}
                            series={paymentsum ? series : serieb}
                        />
                    </Box>
                </div>
            </div>
        </div>
    );
}

const highlightScope = {
    highlighted: 'series',
    faded: 'global',
};

const serieb = [
    {
        label: 'series 2',
        data: [
            2362, 2254, 1962, 1336, 586, 1069, 2194, 1629, 2173, 2031, 1757, 862, 2446,
            910, 2430, 2300, 805, 1835, 1684, 2197,
        ],
    },
].map((s) => ({ ...s, highlightScope }));