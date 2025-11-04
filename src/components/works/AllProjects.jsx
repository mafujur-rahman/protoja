import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Typography from "@mui/material/Typography";

const AllProjects = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Image
            src={"/assets/scrool/6.png"}
            width={2000}
            height={1000}
            alt="approch"
            className="h-[450px]"
          />
          <Typography variant="subtitle1" className=" font-semibold mt-1 ">
            Rudy Capital | Turning crypto complexity into clarity
          </Typography>
          <Typography variant="body" className="text-[#3c3b3b] font-normal">
            Strategy - Visual Identity - Website
          </Typography>
        </Grid>
        <Grid size={6}>
          <Image
            src={"/assets/scrool/1.png"}
            width={2000}
            height={1000}
            alt="approch"
            className="h-[450px]"
          />
          <Typography variant="subtitle1" className=" font-semibold mt-1 ">
            Nola | Beauty and bullsh*t don’t mix
          </Typography>
          <Typography variant="body" className="text-[#3c3b3b] font-normal">
            Strategy - Visual Identity - Website
          </Typography>
        </Grid>
        <Grid size={6}>
          <Image
            src={"/assets/scrool/3.png"}
            width={2000}
            height={1000}
            alt="approch"
            className="h-[450px]"
          />
          <Typography variant="subtitle1" className=" font-semibold mt-1 ">
            Otterspace | Unleashing the Power of Communities
          </Typography>
          <Typography variant="body" className="text-[#3c3b3b] font-normal">
            Strategy - Visual Identity - Website
          </Typography>
        </Grid>
        <Grid size={6}>
          <Image
            src={"/assets/scrool/4.png"}
            width={2000}
            height={1000}
            alt="approch"
            className="h-[450px]"
          />
          <Typography variant="subtitle1" className=" font-semibold mt-1 ">
            Quivo | Logistics Made Simple
          </Typography>
          <Typography variant="body" className="text-[#3c3b3b] font-normal">
            Strategy - Visual Identity - Website
          </Typography>
        </Grid>
        <Grid size={6}>
          <Image
            src={"/assets/scrool/9.png"}
            width={2000}
            height={1000}
            alt="approch"
            className="h-[450px]"
          />
          <Typography variant="subtitle1" className=" font-semibold mt-1 ">
            Yuri | Biotech in a space for a better life on earth
          </Typography>
          <Typography variant="body" className="text-[#3c3b3b] font-normal">
            Strategy - Visual Identity - Website
          </Typography>
        </Grid>
        <Grid size={6}>
          <Image
            src={"/assets/scrool/6.png"}
            width={2000}
            height={1000}
            alt="approch"
            className="h-[450px]"
          />
          <Typography variant="subtitle1" className=" font-semibold mt-1 ">
            Ascon Systems | Re-imagining Process Automation
          </Typography>
          <Typography variant="body" className="text-[#3c3b3b] font-normal">
            Strategy - Visual Identity - Website
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllProjects;
