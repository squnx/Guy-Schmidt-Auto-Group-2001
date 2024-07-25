function selectedTextOf(aSelectObj)
{
	var selectIdx=aSelectObj.selectedIndex
	var selectStr
	if (selectIdx<0)
	{
		selectStr=""
	}
	else
	{
		selectStr=(aSelectObj.options[selectIdx]).text
	}
	return selectStr
}
// Returns the selected value of a Select object.
function selectedValue( aSelectObj )
{
    var selectIdx = aSelectObj.selectedIndex;
    var selectStr = (aSelectObj.options[ selectIdx ]).value;
    return selectStr;
}

// Opens popup window with trim overview page
function trimOverview (pModlYrNbr, pBrand, pPVC)
{
// pModlYrNbr - The Model Year Number
// pBrand     - Either a Brand Code, or a caret-delimited (^) string where
//              Brand Code is the third element (as the Year, Make, Model, Trim
//              pages will pass it).
// pPVC       - Either a PVC Code or a caret-delimited (^) string where PVCId 
//              is the first element (as the Year, Make, Model, Trim pages will
//              pass it).
// Can be called with:
//    1) No parms
//    2) pModlYrNbr and pBrand
//    3) pModlYrNbr, a pBrand (which can be an empty string), and pPVC
   var parmList = "?PopupIndctr=Y&OvrvwTypeId=T";
   
      // If ModlYrNbr is null, Brand and PVC must also be null and I need to do nothing. 
      if (pModlYrNbr != null)
      {
         // If Model Year is empty, display error.
         if (pModlYrNbr == "")
         {
            errorPopup ('Please select<br>a model<br>to continue.','select');
            return;
         }
         else
         {
            // PVC is more specific. If have that, ignore Brand
            if (pPVC == null || pPVC == "")
            {
               if (pBrand == null || pBrand == "")
               {
                  // Model Year has a value, but neither Brand or PVC do. display an error.
                  errorPopup ('Please select<br>a model<br>to continue.','select');
                  return;
               }
               else
               {
                  // Have a Brand and Model Year, but not a PVC. Send Model Year and Brand
                  
                  // Check if the pBrand parm is tokenized
                  if (pBrand.indexOf("^") >= 0)
                  {
                     arrayBrand = pBrand.split("^");
                     // BrandCd is the third element
                     BrandCd = arrayBrand[2];
                  }
                  else
                  {
                     BrandCd = pBrand;
                  }

                  parmList = parmList+"&ModlYrNbr="+pModlYrNbr+"&BrandCd="+BrandCd;
               }
            }
            else
            {
               // Have a Model Year and PVC. Send Model and PVC
                  
               // Check if the pPVC parm is tokenized
               if (pPVC.indexOf("^") >= 0)
               {
                  arrayPVC = pPVC.split("^");
                  // PVCId is the first element
                  PVCId = arrayPVC[0];
               }
               else
               {
                  PVCId = pPVC;
               }

               parmList = parmList+"&ModlYrNbr="+pModlYrNbr+"&PVCId="+PVCId;
            }
         }
      }
               

   linkTo='/cgi-bin/gx.cgi/AppLogic+COM.gm.BuyPower.applications.modelInfo.ViewModelDetailsOverview'+parmList;

   // The Trim Overview returns its own frameset, so open an unframed popup window.
   popupSingle (640,420,linkTo);
}

