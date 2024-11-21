import { DrawerHeader } from "../../Sidebar/Drawerheader";
import plan0 from "../../../../assets/Bplan/plan0.jpg"
import plan1 from "../../../../assets/Bplan/plan1.jpg"
import plan2 from "../../../../assets/Bplan/plan2.jpg"
import plan3 from "../../../../assets/Bplan/plan3.jpg"
import plan4 from "../../../../assets/Bplan/plan4.jpg"
import { useEffect } from "react";
import { Fab } from "@mui/material";
import { Download } from "@mui/icons-material";
import { useRef } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const images = [
    plan0,
    plan1,
    plan2,
    plan3,
    plan4
];

const Plan = () => {
    
    const containerRef = useRef(null);

    useEffect(() => {
        //scroll top
        if (!window.scrollTo(0, 0)) {
            window.scrollTo(0, 0)
        }
    }, [])

    const downloadPDF = () => {
        const pdf = new jsPDF();

        images.forEach((image, index) => {
            html2canvas(containerRef.current.children[index]).then(canvas => {
                const imgData = canvas.toDataURL('image/jpeg');
                pdf.addImage(imgData, 'JPEG', 10, 10, 180, 240);
                if (index !== images.length - 1) {
                    pdf.addPage();
                } else {
                    pdf.save('safeboxes_plan.pdf');
                }
            });
        });
    };

    return (
        <>
            <DrawerHeader />
            <div ref={containerRef} className="container text-center" style={{ height: "100dvh" }}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={index + 1} style={{ width: '100%' }} />
                    </div>
                ))}
                <Fab sx={{ my: 2 }} color="primary" variant="extended" onClick={downloadPDF}><Download />Download PDF</Fab>
            </div>
        </>
    )
}
export default Plan;