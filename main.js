const monthlyArcPrices = ['$9/mo', '$10/mo', '$12/mo', '$14/mo', '$13/mo', '$11/mo']
const monthlyAdvanPrices = ['$12/mo', '$13/mo', '$14/mo', '$16/mo', '$15/mo', '$17/mo']
const monthlyProPrices = ['$15/mo', '$16/mo', '$17/mo', '$18/mo', '$19/mo', '$20/mo']

const yearlyArcPrices = ['', '']
const yearlyAdvanPrices = ['', '']
const yearlyProPrices = ['', '']

///monthly addons
const online_service_price_monthly = document.querySelector('.online-service-price-monthly')
const larger_storage_price_monthly = document.querySelector('.larger-storage-price-monthly')
const custom_profile_price_monthly = document.querySelector('.custom-profile-price-monthly')

// yearly addons
const online_service_price_yearly = document.querySelector('.online-service-price-yearly')
const larger_storage_price_yearly = document.querySelector('.larger-storage-price-yearly')
const custom_profile_price_yearly = document.querySelector('.custom-profile-price-yearly')
// 

const yearCheckbox1 = document.getElementById('yearCheckbox1')
const yearCheckbox2 = document.getElementById('yearCheckbox2')
const yearCheckbox3 = document.getElementById('yearCheckbox3')

// call the function in the monthly and year events? these checkboxes need to also be gotten for the yearly checkboxes. i was only getting the monthly checkboxes???????????????????????? im only getting the checkbox for the monnthly checkboxes. i need to get make an id for the yearly checkboxes and get those then put those into the function. and yes, i will need to put in each function display none to the other function. the exact same as before

const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById('checkbox2')
const checkbox3 = document.getElementById('checkbox3')

function yearlyAddOns(){
  // yes display none here for the other function addons and do the same for the yearly function. i forgot to get the id for the yearly checkboxes. i just coptied the checkbox1 but that isnt even the correct checbox for the yearly add on. unbelievable

    online_service_price_monthly.style.display = 'none'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'none'
  
  if(yearCheckbox1.checked && !yearCheckbox2.checked && !yearCheckbox3.checked){
    online_service_price_yearly.style.display = 'flex'
    larger_storage_price_yearly.style.display = 'none'
    custom_profile_price_yearly.style.display = 'none'
  }else if(yearCheckbox1.checked && yearCheckbox2.checked && !yearCheckbox3.checked){
    online_service_price_yearly.style.display = 'flex'
    larger_storage_price_yearly.style.display = 'flex'
    custom_profile_price_yearly.style.display = 'none'
  }else if(yearCheckbox1.checked && yearCheckbox2.checked && yearCheckbox3.checked){
    online_service_price_yearly.style.display = 'flex'
    larger_storage_price_yearly.style.display = 'flex'
    custom_profile_price_yearly.style.display = 'flex'
  }else if(!yearCheckbox1.checked && !yearCheckbox2.checked && !yearCheckbox3.checked){
    online_service_price_yearly.style.display = 'none'
    larger_storage_price_yearly.style.display = 'none'
    custom_profile_price_yearly.style.display = 'none'
  }else if(!yearCheckbox1.checked && !yearCheckbox2.checked && yearCheckbox3.checked){
    online_service_price_yearly.style.display = 'none'
    larger_storage_price_yearly.style.display = 'none'
    custom_profile_price_yearly.style.display = 'flex'
  }else if(!yearCheckbox1.checked && yearCheckbox2.checked && yearCheckbox3.checked){
    online_service_price_yearly.style.display = 'none'
    larger_storage_price_yearly.style.display = 'flex'
    custom_profile_price_yearly.style.display = 'flex'
  }else if(!yearCheckbox1.checked && yearCheckbox2.checked && !yearCheckbox3.checked){
    online_service_price_yearly.style.display = 'none'
    larger_storage_price_yearly.style.display = 'flex'
    custom_profile_price_yearly.style.display = 'none'
  }else if(yearCheckbox1.checked && !yearCheckbox2.checked && yearCheckbox3.checked){
    online_service_price_yearly.style.display = 'flex'
    larger_storage_price_yearly.style.display = 'none'
    custom_profile_price_yearly.style.display = 'flex'
  }
}


function monthlyAddOns(){
 
    online_service_price_yearly.style.display = 'none'
    larger_storage_price_yearly.style.display = 'none'
    custom_profile_price_yearly.style.display = 'none'
  
  if(checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    online_service_price_monthly.style.display = 'flex'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'none'
  }else if(checkbox1.checked && checkbox2.checked && !checkbox3.checked){
    online_service_price_monthly.style.display = 'flex'
    larger_storage_price_monthly.style.display = 'flex'
    custom_profile_price_monthly.style.display = 'none'
  }else if(checkbox1.checked && checkbox2.checked && checkbox3.checked){
    online_service_price_monthly.style.display = 'flex'
    larger_storage_price_monthly.style.display = 'flex'
    custom_profile_price_monthly.style.display = 'flex'
  }else if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    online_service_price_monthly.style.display = 'none'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'none'
  }else if(!checkbox1.checked && !checkbox2.checked && checkbox3.checked){
    online_service_price_monthly.style.display = 'none'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'flex'
  }else if(!checkbox1.checked && checkbox2.checked && checkbox3.checked){
    online_service_price_monthly.style.display = 'none'
    larger_storage_price_monthly.style.display = 'flex'
    custom_profile_price_monthly.style.display = 'flex'
  }else if(!checkbox1.checked && checkbox2.checked && !checkbox3.checked){
    online_service_price_monthly.style.display = 'none'
    larger_storage_price_monthly.style.display = 'flex'
    custom_profile_price_monthly.style.display = 'none'
  }else if(checkbox1.checked && !checkbox2.checked && checkbox3.checked){
    online_service_price_monthly.style.display = 'flex'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'flex'
  }
}
// 

const addOns = document.querySelectorAll('.add-on')

const get_year_add_on = document.querySelectorAll('.get-year-add-on')
// 

get_year_add_on.forEach((yearly_add_on)=>yearly_add_on.addEventListener('click', yearlyAddOns))

addOns.forEach((addOn)=>addOn.addEventListener('click', monthlyAddOns))

const right_side_step_one = document.querySelector('.right-side-step-one')
const form = document.querySelector('form')
const right_side_step_two = document.querySelector('.right-side-step-two')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  right_side_step_one.style.display = 'none'
  right_side_step_two.style.display = 'block'
})

const arcade = document.querySelector('.arcade')
const advanced = document.querySelector('.advanced')
const pro = document.querySelector('.pro')

let hasBorder = false;

// monthly make these display block on click for each plan
const arcade_monthly = document.querySelector('.arcade-monthly')
const advanced_monthly = document.querySelector('.advanced-main-monthly')
const pro_monthly = document.querySelector('.pro-main-monthly')
// 
// yearly 
const arcade_main_yearly = document.querySelector('.arcade-main-yearly')
const advanced_main_yearly = document.querySelector('.advanced-main-yearly')
const pro_main_yearly = document.querySelector('.pro-main-yearly')
 // 

arcade.addEventListener('click',()=>{
  arcade.classList.add('plan-active-click')
  advanced.classList.remove('plan-active-click')
  pro.classList.remove('plan-active-click')
  
  hasBorder = true

  arcade_monthly.style.display = 'flex'
  advanced_monthly.style.display = 'none'
  pro_monthly.style.display = 'none'
  // 

  // 
  arcade_main_yearly.style.display = 'none'
  advanced_main_yearly.style.display = 'none'
  pro_main_yearly.style.display = 'none'
  // 

  // 
  if(arcade.classList.contains("plan-active-click")){
    console.log('the arcade has a border') ///need to addd the above code for display none to each of these if statements
    arcade_monthly.style.display = 'flex'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
  }else if(advanced.classList.contains('plan-active-click')){
    console.log('advanced has a border')
    // all three here but switch arcade none
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'flex'
    pro_monthly.style.display = 'none'
  }else if(pro.classList.contains('pro')){
    console.log('pro has a border')
    // all three here
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'flex'
  }

  // check to see if the ball has a classlist added or not and then console.log based on that
  if(ball_inner.classList.contains('ball-move')){
    console.log('yearly')
    // yearly 3 here
    // 
    arcade_main_yearly.style.display = 'flex'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
    // ? add the display none to all three plans here?
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
  }else{
    console.log('monthly')
    // we are still in the arcade listener. so we dont need to check for the other plans just add the 3 here with arcade display flex
    // 
    arcade_monthly.style.display = 'flex'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
  }
})

advanced.addEventListener('click',()=>{
  advanced.classList.add('plan-active-click')
  pro.classList.remove('plan-active-click')
  arcade.classList.remove('plan-active-click')

  hasBorder = true
  // 
  arcade_monthly.style.display = 'none'
  advanced_monthly.style.display = 'flex'
  pro_monthly.style.display = 'none'
  // 
   // 
   arcade_main_yearly.style.display = 'none'
   advanced_main_yearly.style.display = 'none'
   pro_main_yearly.style.display = 'none'
   // 

  // 
  if(arcade.classList.contains("plan-active-click")){
    console.log('the arcade has a border')
    arcade_monthly.style.display = 'flex'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
  }else if(advanced.classList.contains('plan-active-click')){
    console.log('advanced has a border')
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'flex'
    pro_monthly.style.display = 'none'
  }else if(pro.classList.contains('plan-active-click')){
    ///classlist of pro??? or plan-active-click
    console.log('pro has a border')
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'flex'
  }

  // check to see if the ball has a classlist added or not and then console.log based on that
  if(ball_inner.classList.contains('ball-move')){
    console.log('yearly')
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'flex'
    pro_main_yearly.style.display = 'none'
    // 

    // this is where the bug was?
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
  }else{
    console.log('monthly')
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'flex'
    pro_monthly.style.display = 'none'
    // 
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
  }
})

pro.addEventListener('click',()=>{
  pro.classList.add('plan-active-click')
  advanced.classList.remove('plan-active-click')
  arcade.classList.remove('plan-active-click')

  hasBorder = true

  // 
  arcade_monthly.style.display = 'none'
  advanced_monthly.style.display = 'none'
  pro_monthly.style.display = 'flex'
  // 
   // 
   arcade_main_yearly.style.display = 'none'
   advanced_main_yearly.style.display = 'none'
   pro_main_yearly.style.display = 'none'
   // 
  // 
  if(arcade.classList.contains("plan-active-click")){
    console.log('the arcade has a border')
    arcade_monthly.style.display = 'flex'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
  }else if(advanced.classList.contains('plan-active-click')){
    console.log('advanced has a border')
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'flex'
    pro_monthly.style.display = 'none'
  }else if(pro.classList.contains('plan-active-click')){
    // pro classlist?? or plan-active-click?
    console.log('pro has a border')
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'flex'
  }
  
  // check to see if the ball has a classlist added or not and then console.log based on that
  if(ball_inner.classList.contains('ball-move')){
    console.log('yearly')
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'flex'
    // 
    // this is where the bug was?
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
  }else{
    console.log('monthly')
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'flex'
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
  }
})

const go_back_btn_one = document.querySelector('.go-back-btn-one')

go_back_btn_one.addEventListener('click',()=>{
  right_side_step_one.style.display = 'block'
  right_side_step_two.style.display = 'none'
})

const yearly_text = document.querySelector('.yearly-text')
const monthly_text = document.querySelector('.monthly-text')
const ball_inner = document.querySelector('.ball-inner')

const yearlyPlanTextPrices = ['$108/yr', '$144/yr', '$180/yr']
const monthlyPlanTextPrices = ['$9/mo', '$12/mo', '$15/mo']

const plan_cost_text = document.querySelectorAll('.plan-cost-text')

const add_on_yearly = document.querySelectorAll('.add-on-yearly')
// 
const add_on_yearly_online_service = document.querySelector('.add-on-yearly-online-service')
const add_on_yearly_larger_storage = document.querySelector('.add-on-yearly-larger-storage')
const add_on_yearly_customizable_profile = document.querySelector('.add-on-yearly-customizable-profile')

const customizable_profile= document.querySelector('.customizable-profile')
const larger_storage = document.querySelector('.larger-storage')
const online_service = document.querySelector('.online-service')


yearly_text.addEventListener('click',()=>{
  ball_inner.classList.add('ball-move')
  yearlyAddOns()
  for(let i = 0; i < yearlyPlanTextPrices.length; i++){
    plan_cost_text[i].textContent = yearlyPlanTextPrices[i]
  }  
  add_on_yearly_online_service.style.display = 'flex'
  add_on_yearly_larger_storage.style.display = 'flex'
  add_on_yearly_customizable_profile.style.display = 'flex'

  customizable_profile.style.display = 'none'
  larger_storage.style.display = 'none'
  online_service.style.display = 'none'
  // need to add all the display none again here. code gets big and messy
  if(arcade.classList.contains("plan-active-click")){
    console.log('the arcade has a yearly border')
    // 
    arcade_main_yearly.style.display = 'flex'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    //
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
    yearlyAddOns()
  }else if(advanced.classList.contains('plan-active-click')){
    console.log('advanced has a yearly border')
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'flex'
    pro_main_yearly.style.display = 'none'
    // 
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
    yearlyAddOns()
  }else if(pro.classList.contains('pro')){
    console.log('pro has a yearly border')
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'flex'
    // 

    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
    yearlyAddOns()
  }
})

monthly_text.addEventListener('click',()=>{
  ball_inner.classList.remove('ball-move')
  monthlyAddOns()
  for(let i = 0; i < monthlyPlanTextPrices.length; i++){
    plan_cost_text[i].textContent = monthlyPlanTextPrices[i]
  }
  customizable_profile.style.display = 'flex'
  larger_storage.style.display = 'flex'
  online_service.style.display = 'flex'

  add_on_yearly_online_service.style.display = 'none'
  add_on_yearly_larger_storage.style.display = 'none'
  add_on_yearly_customizable_profile.style.display = 'none'

  // 
  if(arcade.classList.contains("plan-active-click")){
    console.log('the arcade has a monthly border')
    // 
    arcade_monthly.style.display = 'flex'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
    monthlyAddOns()
  }else if(advanced.classList.contains('plan-active-click')){
    console.log('advanced has a monthly border')
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'flex'
    pro_monthly.style.display = 'none'
    // 

    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
    monthlyAddOns()
  }else if(pro.classList.contains('pro')){
    console.log('pro has a monthly border')
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'flex'
    // 

    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
    monthlyAddOns()
  }
})

const step_two_btn = document.querySelector('.step-two-btn')
const right_side_step_three = document.querySelector('.right-side-step-three')
const red_plan_text = document.querySelector('.red-plan-text')

step_two_btn.addEventListener('click',()=>{
  if(hasBorder===true){
    right_side_step_two.style.display = 'none'
    right_side_step_three.style.display = 'block'
    red_plan_text.style.display = 'none'
  }else{
    red_plan_text.style.display = 'block'
  }
})

const go_back_btn_two = document.querySelector('.go-back-btn-two')

go_back_btn_two.addEventListener('click',()=>{
  right_side_step_three.style.display = 'none'
  right_side_step_two.style.display = 'block'
})

const right_side_step_four = document.querySelector('.right-side-step-four')
const last_step_btn = document.querySelector('.last-step-btn')

last_step_btn.addEventListener('click',()=>{
  right_side_step_four.style.display = 'block'
  right_side_step_three.style.display = 'none'
})

const last_go_back_btn = document.querySelector('.last-go-back-btn')

last_go_back_btn.addEventListener('click',()=>{
  right_side_step_four.style.display = 'none'
  right_side_step_three.style.display = 'block'
})

