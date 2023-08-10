import { useState, useEffect } from "react";
import { Document, Page } from 'react-pdf';
import Header from "../components/Header.jsx";
import { Box, Typography, styled, TextField, Button, Slider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { routhPath } from "../routes1/routes";
import { useNavigate } from "react-router-dom";
import { saveResponse } from "../services1/api";

const Component = styled(Box)({
    padding: "100px 200px",
    background: "#f5f5f5",
});

const FormWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
    padding: 20,
    background: "#ffffff",
    borderRadius: "20px",
    "& > *": {
        marginTop: "20px !important ",
    },
});

const defaultObj = {
    rating: "",
    smart_recruit: false,
    suggestions: false,
};

function CV() {
    
    const [data, setData] = useState(defaultObj);
    const [pdfResponse, setPdfResponse] = useState();
    
    let pageNumber = 1;
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('');
                const res = await response.data();
                setPdfResponse(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = async () => {
        await saveResponse(data);
        navigate(routhPath.home);
    };

    return (
        <>
          <Header />
          <Component>
            <Component>
              <Document file={pdfResponse}>
                <Page pageNumber={pageNumber}/>
              </Document>
              <FormWrapper>
                <p>Rate applicant out of 10</p>
                <Slider
                  label="rating"
                  name="rating"
                  defaultValue={5}
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  step={1}
                  marks={true}
                  min={0}
                  max={10}
                />
                <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Smart Recruit" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Suggestions" />
                </FormGroup>
                
                <Button onClick={() => submit()} variant="contained">
                  Submit Review
                </Button>

              </FormWrapper>                            
            </Component>
            
            <Component>
              // Output stream
            </Component>
            
          </Component>          
        </>
    );
}
export default CV;
