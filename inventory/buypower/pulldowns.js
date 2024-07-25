function aM(year,make,ss,nmplt)
{
	if (v[year]==null)
	{
		v[year]=new Year(year)
	}
	v[year].makes[make]=new Make(make,ss,nmplt)
}
function aV(year,make,model,brandCd)
{
	var modelObj=new Model(model, v[year].makes[make].sellngSrcCd + '^' + v[year].makes[make].nampltCd + '^' + brandCd)
	v[year].models[model]=modelObj
	v[year].makes[make].models[model]=modelObj
}
function Year(yearStr)
{
	this.year=yearStr
	this.models=new Array()
	this.makes=new Array()
}
function Model(n,mab)
{
	this.modelName=n
	this.makeAndBrand=mab
}
function Make(makeName,ss,nmplt)
{
	this.makeName=makeName
	this.sellngSrcCd=ss
	this.nampltCd=nmplt
	this.models=new Array()
	this.bodyStyles=new Array()
}
function buildModelMenu(yearStr,makeStr, selectedModelStr)
{
	document.SDForm.SelectModel.options.length=1
	document.SDForm.SelectModel.options.selectedIndex=0
	var allModels
	if((makeStr=="")||document.SDForm.SelectMake.selectedIndex==0)
	{
		allModels=(v[yearStr]).models
	}
	else
	{
		makes=(v[yearStr]).makes
		allModels=(makes[makeStr]).models
	}
	var i=1
	for(aModelStr in allModels)
	{
		aModel=allModels[aModelStr]
		document.SDForm.SelectModel.options[i]=new Option(aModel.modelName,aModel.makeAndBrand);
		if (aModel.modelName == selectedModelStr)
		{
			document.SDForm.SelectModel.options.selectedIndex=i;
		}
		i++
	}
}
function buildMakeMenu(yearStr, selectedMakeStr)
{
	document.SDForm.SelectMake.options.length=1
	document.SDForm.SelectMake.options.selectedIndex=0
	var makes=(v[yearStr]).makes
	var i=1
	for(aMakeIdx in makes)
	{
		var aMake=makes[aMakeIdx];
		var ssNmpltCombo = aMake.sellngSrcCd + '^' + aMake.nampltCd;
		document.SDForm.SelectMake.options[i]=new Option(aMake.makeName,ssNmpltCombo);
if (aMake.makeName == selectedMakeStr)
{
	document.SDForm.SelectMake.options.selectedIndex=i;
}
		i++;
	}
}
function selectMake(aSelect)
{
	selMakeStr=selectedTextOf(aSelect)
	selYearStr=selectedTextOf(document.SDForm.ModlYrNbr)
	buildModelMenu(selYearStr,selMakeStr)
	document.SDForm.SelectTrim.options.length=1
	document.SDForm.SelectTrim.options[0] = new Option("Which [Model Name] Style?","");
	document.SDForm.SelectTrim.options.selectedIndex=0
}
function selectYear(selectObj)
{
	var yearStr=selectedTextOf(selectObj)
	buildMakeMenu(yearStr,"")
	buildModelMenu(yearStr,"","")
	document.SDForm.SelectTrim.options.length=1
	document.SDForm.SelectTrim.options[0] = new Option("Which [Model Name] Style?","");
	document.SDForm.SelectTrim.options.selectedIndex=0
}
