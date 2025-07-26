import React from 'react'
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
const Footer = () => {
  return (
    <div>
        <h2 style={{color: "#82405d"}}>Nutrition</h2>
        <h3>The table below shows nutritional values per serving without the additional fillings.</h3>
        <Grid container spacing={2} style={{marginTop: ""}}>
            <Grid size={{xs:6, md:6, sm:6}}>Calories</Grid>
            <Grid size={{xs:6, md:6, sm:6}}>
                <b style={{color: "#82405d"}}>277kcal</b>   
            </Grid>
            
        </Grid >

        <Divider style={{marginTop: "10px"}}/>
        <Grid container spacing={2} style={{marginTop: "20px"}}>
            <Grid size={{xs:6, md:6, sm:6}}>
                Carbs   
            </Grid>
            <Grid size={{xs:6, md:6, sm:6}}>
                <b style={{color: "#82405d"}}>0g</b>   
            </Grid>

            
        </Grid >
        <Divider style={{marginTop: "10px"}}/>
        <Grid container spacing={2} style={{marginTop: "20px"}}>
            <Grid size={{xs:6, md:6, sm:6}}>Protein</Grid>
            <Grid size={{xs:6, md:6, sm:6}}>
                <b style={{color: "#82405d"}}>20g</b>   
            </Grid>
            
        </Grid >
        <Divider style={{marginTop: "10px"}}/>
        <Grid container spacing={2} style={{marginTop: "20px"}}>
            <Grid size={{xs:6, md:6, sm:6}}>
                Fat   
            </Grid>
            <Grid size={{xs:6, md:6, sm:6}}>
                <b style={{color: "#82405d"}}>22g</b>   
            </Grid>
            
        </Grid >
        
    </div>
  )
}

export default Footer