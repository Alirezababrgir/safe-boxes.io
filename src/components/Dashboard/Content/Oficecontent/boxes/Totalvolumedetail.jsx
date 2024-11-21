import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect } from 'react';
import Web3 from 'web3';
import { Contract_abi, Contract_address } from "../../../../../services/abis";


export default function TOTALVOLUMEDETAIL() {


    const [seriesNb, setSeriesNb] = React.useState(2);
    const [itemNb, setItemNb] = React.useState(5);
    const [skipAnimation, setSkipAnimation] = React.useState(false);

    const handleItemNbChange = (event, newValue) => {
        if (typeof newValue !== 'number') {
            return;
        }
        setItemNb(newValue);
    };
    const handleSeriesNbChange = (event, newValue) => {
        if (typeof newValue !== 'number') {
            return;
        }
        setSeriesNb(newValue);
    };

    const [uid, setuid] = React.useState();
    const [alllevel, setalllevel] = React.useState();
    const [tenlevel, settenlevel] = React.useState();

    //barchart start data

    const highlightScope = {
        highlighted: 'series',
        faded: 'global',
    };

    const series = [
        {
            label: 'All Level',
            data:
                alllevel

        },
        {
            label: 'Ten Level',
            data:
                tenlevel

        }

    ].map((s) => ({ ...s, highlightScope }));

    const serieb = [
        {
            label: 'All Level',
            data:
                [alllevel]

        },
        {
            label: 'Ten Level',
            data:
                [tenlevel]

        }

    ].map((s) => ({ ...s, highlightScope }));


    useEffect(() => {
        const RunPie = async () => {

            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(window.ethereum);

                const safebox = new web3.eth.Contract(JSON.parse(Contract_abi), Contract_address);

                //CHECKING MY !IMPORTANT
                const ChildrenSales = await safebox.methods.getMyChildrenSales().call({ "from": accounts[0] });
                console.log(ChildrenSales)
                settenlevel(ChildrenSales.map((item, index) => (String(item._tenLevelSales) / 1000000)))
                setuid(ChildrenSales.map((item, index) => String(item._uid)))
                setalllevel(ChildrenSales.map((item, index) => (String(item._allLevelSales) / 1000000)))

            } catch {

            }

        }
        RunPie()

    }, [])

    console.log(uid)

    return (
        <div className="col-md-12 col-lg-12">
            <div style={{ borderRadius: "0.4rem" }} className="mb-3 bg-white">
                <div className="row mb-4 p-4">
                    <Box sx={{ width: '100%' }}>
                        <BarChart
                            xAxis={tenlevel && alllevel ? [{ scaleType: 'band', data:uid}] : [{ scaleType: 'band', data:"not found"}] }
                            height={300}
                            series={tenlevel && alllevel ? series
                                .slice(0, seriesNb)
                                .map((s, id) => ({ ...s, data: s.data.slice(0, itemNb) })) : serieb
                                    .slice(0, seriesNb)
                                    .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
                            skipAnimation={skipAnimation}
                        />
                        <FormControlLabel
                            checked={skipAnimation}
                            control={
                                <Checkbox onChange={(event) => setSkipAnimation(event.target.checked)} />
                            }
                            label="skipAnimation"
                            labelPlacement="end"
                        />
                        <Typography id="input-item-number" gutterBottom>
                            number of lines
                        </Typography>
                        <Slider
                            value={itemNb}
                            onChange={handleItemNbChange}
                            valueLabelDisplay="auto"
                            min={1}
                            max={uid ? uid.length : 10}
                            aria-labelledby="input-item-number"
                        />
                        <Typography id="input-series-number" gutterBottom>
                             volume of item 
                        </Typography>
                        <Slider
                            value={seriesNb}
                            onChange={handleSeriesNbChange}
                            valueLabelDisplay="auto"
                            min={1}
                            max={2}
                            aria-labelledby="input-series-number"
                        />
                    </Box>
                </div>
            </div>
        </div>
    );


}
