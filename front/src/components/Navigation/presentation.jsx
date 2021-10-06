import React from "react";

import { DatePicker } from "@material-ui/pickers";


import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Toolbar, Typography } from "@material-ui/core";

const StyledDatePicker = withStyles({
	root: { marginLeft: 30 }
  })(DatePicker);
  
  
  
  

  const Navigation = ({ setNextMonth, setPreviousMonth, setMonth, month }) => {

	return (
		<StyledToolbar>
		  <IconButton>
			<DehazeIcon />
		  </IconButton>
		  <img src="/images/calendar_icon.png" width="40" height="40" />
		  <StyledTypography color="textSecondary" variant="h5" component="h1">
			カレンダー
		  </StyledTypography>
		  <IconButton size="small" onClick={setPreviousMonth}>
			<ArrowBackIos />
		  </IconButton>
		  <IconButton size="small" onClick={setNextMonth}>
			<ArrowForwardIos />
		  </IconButton>
		  <StyledDatePicker
			value={month}
			onChange={setMonth}
			variant="inline"
			format="YYYY年 M月"
			animateYearScrolling
			disableToolbar
		  />
		</StyledToolbar>
	  );
	};
	

export default Navigation;