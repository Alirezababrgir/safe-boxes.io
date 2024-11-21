import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Linechart() {
    return (

        <div className="col-md-6 col-lg-6">
            <div style={{ borderRadius: "0.4rem" }} className="mb-3 bg-white">
                <div className="row mb-4">
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12] }]}
                        series={[
                            {
                                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8,2,26],
                                showMark: ({ index }) => index % 2 === 0,
                            },
                        ]}
                        width={600}
                        height={450}
                    />
                </div>
            </div>
        </div>
    );
}