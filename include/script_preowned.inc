<script>
<!-- hide this script tag's contents from old browsers

function checkNumber(input,form1,form2)
{
 if(input.value=='')
	{input.value=input.defaultValue}
   status=''
    msg ="This field requires numeric data: " + input.value;

    var str = input.value;
    for (var i = 0; i < str.length; i++) 	
		{var ch = str.substring(i, i + 1)
       	if ((ch < "0" || "9" < ch) && ch != '.') {
   			input.focus()
			input.value=input.defaultValue;
			input.select()
			status=msg;}	           
    }
    add_input(form1,form2)
 }
function add_input(form1,form2)
{    var total1,total2,total3,total5,total6;
	
	total1=(form1.cost1.value*1+form1.cost2.value*1+form1.cost3.value*1+form1.cost4.value*1+form1.cost5.value*1)		
	total2=(total1*1+form1.cost6.value*1+form1.cost7.value*1+form1.cost8.value*1+form1.cost9.value*1+form1.cost10.value*1)
	total3=(total2-form2.incentives.value*1)

	total5=(total3*1+form2.destination.value*1)
	total6=(total5*1 + (('.01' * form2.state_tax.value)* total5))
	form2.total_cost.value=(total6*1 -form2.down_payment.value)
	compute_payments(form2)
}
function compute_payments(form2)
{
    var i = form2.interest_rate.value;
    if (i > 1.0) {
        i = i / 100.0;
        }
    i /= 12;

    var pow = 1;
    for (var j = 0; j < form2.no_of_payments.value; j++)
        pow = pow * (1 + i);
    form2.monthly_payments.value = (form2.total_cost.value * pow * i) / (pow - 1)
}
function selectField(field)
{
	field.select()
}
function clearForm(form1,form2)
{
    	form1.desc1.value = ""
    	form1.cost1.value = "0"
    	form1.desc2.value = ""
	form1.cost2.value = "0"
    	form1.desc3.value = ""
	form1.cost3.value = "0"
    	form1.desc4.value = ""
	form1.cost4.value = "0"
    	form1.desc5.value = ""
	form1.cost5.value = "0"
    	form1.desc6.value = ""
	form1.cost6.value = "0"
    	form1.desc7.value = ""
	form1.cost7.value = "0"
    	form1.desc8.value = ""
	form1.cost8.value = "0"
    	form1.desc9.value = ""
	form1.cost9.value = "0"
    	form1.desc10.value = ""
	form1.cost10.value = "0"
	form2.incentives.value = "0"
	
	form2.destination.value="0"
	form2.down_payment.value = "0"
	form2.total_cost.value="0"
	form2.interest_rate.value="0"
	form2.no_of_payments.value="0"
	form2.monthly_payments.value="0"
 }

<!-- done hiding from old browsers -->
</script>