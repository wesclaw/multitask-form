const monthlyArcPrices = ['$9/mo', '$10/mo', '$12/mo', '$14/mo', '$13/mo', '$11/mo']
const monthlyAdvanPrices = ['$12/mo', '$13/mo', '$14/mo', '$16/mo', '$15/mo', '$17/mo']
const monthlyProPrices = ['$15/mo', '$16/mo', '$17/mo', '$18/mo', '$19/mo', '$20/mo']

const yearlyArcPrices = ['$108/yr', '$118/yr', '$128/yr', '$138/yr', '$148/yr', '$158/yr']
const yearlyAdvanPrices = ['$144/yr', '$154/yr', '$164/yr', '$184/yr', '$174/yr', '$194/yr']
const yearlyProPrices = ['$180/yr', '$190/yr', '$200/yr', '$220/yr', '$210/yr', '$230/yr']

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

const checkbox1 = document.getElementById('checkbox1')
const checkbox2 = document.getElementById('checkbox2')
const checkbox3 = document.getElementById('checkbox3')

const final_price_monthly = document.querySelector('.final-price-monthly')
const final_price_monthly_text = document.querySelector('.final-price-monthly-text')

const final_price_yearly = document.querySelector('.final-price-yearly')
const final_price_yearly_text = document.querySelector('.final-price-yearly-text')
// 

function yearlyAddOns(){
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

const checkboxes = document.querySelectorAll('.checkbox-online')

function getMonthArcadePrices() {
  if(checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyArcPrices[1]
  }else if(checkbox1.checked && checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyArcPrices[2]
  }else if(checkbox1.checked && checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyArcPrices[3]
  }else if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyArcPrices[0]
  }else if(!checkbox1.checked && !checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyArcPrices[5]
  }else if(!checkbox1.checked && checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyArcPrices[4]
  }else if(!checkbox1.checked && checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyArcPrices[5]
  }else if(checkbox1.checked && !checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyArcPrices[2]
  }
}
// 

function getMonthAdvanPrices() {
  if(checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyAdvanPrices[1]
  }else if(checkbox1.checked && checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyAdvanPrices[4]
  }else if(checkbox1.checked && checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyAdvanPrices[5]
  }else if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyAdvanPrices[0]
  }else if(!checkbox1.checked && !checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyAdvanPrices[2]
  }else if(!checkbox1.checked && checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyAdvanPrices[3]
  }else if(!checkbox1.checked && checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyAdvanPrices[2]
  }else if(checkbox1.checked && !checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyAdvanPrices[4]
  }
}

function getMonthProPrices() {
  if(checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyProPrices[1]
  }else if(checkbox1.checked && checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyProPrices[3]
  }else if(checkbox1.checked && checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyProPrices[5]
  }else if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyProPrices[0]
  }else if(!checkbox1.checked && !checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyProPrices[2]
  }else if(!checkbox1.checked && checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyProPrices[4]
  }else if(!checkbox1.checked && checkbox2.checked && !checkbox3.checked){
    final_price_monthly_text.textContent = monthlyProPrices[2]
  }else if(checkbox1.checked && !checkbox2.checked && checkbox3.checked){
    final_price_monthly_text.textContent = monthlyProPrices[3]
  }
}

function yearAdvanPrices() {
  if(yearCheckbox1.checked && !yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyAdvanPrices[1]
  }else if(yearCheckbox1.checked && yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyAdvanPrices[4]
  }else if(yearCheckbox1.checked && yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyAdvanPrices[5]
  }else if(!yearCheckbox1.checked && !yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyAdvanPrices[0]
  }else if(!yearCheckbox1.checked && !yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyAdvanPrices[2]
  }else if(!yearCheckbox1.checked && yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyAdvanPrices[3]
  }else if(!yearCheckbox1.checked && yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyAdvanPrices[2]
  }else if(yearCheckbox1.checked && !yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyAdvanPrices[4]
  }
}

function yearArcadePrices() {
  if(yearCheckbox1.checked && !yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyArcPrices[1]
  }else if(yearCheckbox1.checked && yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyArcPrices[3]
  }else if(yearCheckbox1.checked && yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyArcPrices[5]
  }else if(!yearCheckbox1.checked && !yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyArcPrices[0]
  }else if(!yearCheckbox1.checked && !yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyArcPrices[2]
  }else if(!yearCheckbox1.checked && yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyArcPrices[4]
  }else if(!yearCheckbox1.checked && yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyArcPrices[2]
  }else if(yearCheckbox1.checked && !yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyArcPrices[3]
  }
}

function yearProPrices() {
  if(yearCheckbox1.checked && !yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyProPrices[1]
  }else if(yearCheckbox1.checked && yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyProPrices[4]
  }else if(yearCheckbox1.checked && yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyProPrices[5]
  }else if(!yearCheckbox1.checked && !yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyProPrices[0]
  }else if(!yearCheckbox1.checked && !yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyProPrices[2]
  }else if(!yearCheckbox1.checked && yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyProPrices[3]
  }else if(!yearCheckbox1.checked && yearCheckbox2.checked && !yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyProPrices[2]
  }else if(yearCheckbox1.checked && !yearCheckbox2.checked && yearCheckbox3.checked){
    final_price_yearly_text.textContent = yearlyProPrices[4]
  }
}
 
const addOns = document.querySelectorAll('.add-on')

const get_year_add_on = document.querySelectorAll('.get-year-add-on')

get_year_add_on.forEach((yearly_add_on)=>yearly_add_on.addEventListener('click', yearlyAddOns))

addOns.forEach((addOn)=>addOn.addEventListener('click', monthlyAddOns))

const right_side_step_one = document.querySelector('.right-side-step-one')
const form = document.querySelector('form')
const right_side_step_two = document.querySelector('.right-side-step-two')

const step_num_one = document.querySelector('.step-num-one')
const step_num_two = document.querySelector('.step-num-two')
const step_num_three = document.querySelector('.step-num-three')
const step_num_four = document.querySelector('.step-num-four')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  right_side_step_one.style.display = 'none'
  right_side_step_two.style.display = 'block'
  step_num_one.classList.add('white-num-bg')
})

///////////////////////////
const change_btn = document.querySelectorAll('.change-btn')
change_btn.forEach((changeBtn)=>{
  changeBtn.addEventListener('click',()=>{
    right_side_step_two.style.display = 'block'
    right_side_step_four.style.display = 'none'
  })
})
//////////////////////////////

const arcade = document.querySelector('.arcade')
const advanced = document.querySelector('.advanced')
const pro = document.querySelector('.pro')

let hasBorder = false;

const arcade_monthly = document.querySelector('.arcade-monthly')
const advanced_monthly = document.querySelector('.advanced-main-monthly')
const pro_monthly = document.querySelector('.pro-main-monthly')
// 
const arcade_main_yearly = document.querySelector('.arcade-main-yearly')
const advanced_main_yearly = document.querySelector('.advanced-main-yearly')
const pro_main_yearly = document.querySelector('.pro-main-yearly')

arcade.addEventListener('click',()=>{

  final_price_monthly.style.display = 'flex'
  final_price_monthly_text.textContent = monthlyArcPrices[0]
 
  checkboxes.forEach((checkbox)=>{
    checkbox.checked = false
    online_service_price_monthly.style.display = 'none'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'none'
    checkbox.addEventListener('click',()=>{
      getMonthArcadePrices()
    })
  })
  // 
  arcade.classList.add('plan-active-click')
  advanced.classList.remove('plan-active-click')
  pro.classList.remove('plan-active-click')
  
  hasBorder = true

  arcade_monthly.style.display = 'flex'
  advanced_monthly.style.display = 'none'
  pro_monthly.style.display = 'none'
  // 
  arcade_main_yearly.style.display = 'none'
  advanced_main_yearly.style.display = 'none'
  pro_main_yearly.style.display = 'none'
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
  }else if(pro.classList.contains('pro')){
    console.log('pro has a border')
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'flex'
  }
  // 
  if(ball_inner.classList.contains('ball-move')){
    console.log('yearly')
    final_price_monthly.style.display = 'none'
    final_price_yearly.style.display = 'flex'
    final_price_yearly_text.textContent = yearlyArcPrices[0]

    checkboxes.forEach((checkbox)=>{
      checkbox.checked = false
      online_service_price_yearly.style.display = 'none'
      larger_storage_price_yearly.style.display = 'none'
      custom_profile_price_yearly.style.display = 'none'
      checkbox.addEventListener('click',()=>{
        yearArcadePrices()
      })
    })
  
    arcade_main_yearly.style.display = 'flex'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
  }else{
    console.log('monthly')
    // 
    arcade_monthly.style.display = 'flex'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
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
  // 
  final_price_monthly.style.display = 'flex'
  final_price_monthly_text.textContent = monthlyAdvanPrices[0]

  checkboxes.forEach((checkbox)=>{
    checkbox.checked = false
    online_service_price_monthly.style.display = 'none'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'none'
    checkbox.addEventListener('click',()=>{
      getMonthAdvanPrices()
    })
  })
  // 
  hasBorder = true
  // 
  arcade_monthly.style.display = 'none'
  advanced_monthly.style.display = 'flex'
  pro_monthly.style.display = 'none'
  // 
   arcade_main_yearly.style.display = 'none'
   advanced_main_yearly.style.display = 'none'
   pro_main_yearly.style.display = 'none'
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
    console.log('pro has a border')
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'flex'
  }
  if(ball_inner.classList.contains('ball-move')){
    console.log('yearly')

     final_price_monthly.style.display = 'none'
     final_price_yearly.style.display = 'flex'
     final_price_yearly_text.textContent = yearlyAdvanPrices[0]
     checkboxes.forEach((checkbox)=>{
       checkbox.checked = false
       online_service_price_yearly.style.display = 'none'
       larger_storage_price_yearly.style.display = 'none'
       custom_profile_price_yearly.style.display = 'none'
       checkbox.addEventListener('click',()=>{
         yearAdvanPrices()
       })
     })
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'flex'
    pro_main_yearly.style.display = 'none'
    // 
    
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

  final_price_monthly.style.display = 'flex'
  final_price_monthly_text.textContent = monthlyProPrices[0]
  // 
  checkboxes.forEach((checkbox)=>{
    checkbox.checked = false
    online_service_price_monthly.style.display = 'none'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'none'
    checkbox.addEventListener('click',()=>{
      getMonthProPrices()
    })
  }) 
  // 
  arcade_monthly.style.display = 'none'
  advanced_monthly.style.display = 'none'
  pro_monthly.style.display = 'flex'
  // 
   arcade_main_yearly.style.display = 'none'
   advanced_main_yearly.style.display = 'none'
   pro_main_yearly.style.display = 'none'
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
    console.log('pro has a border')
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'flex'
  }
  
  if(ball_inner.classList.contains('ball-move')){
    console.log('yearly')
     final_price_monthly.style.display = 'none'
     final_price_yearly.style.display = 'flex'
     final_price_yearly_text.textContent = yearlyProPrices[0]
     checkboxes.forEach((checkbox)=>{
       checkbox.checked = false
       online_service_price_yearly.style.display = 'none'
       larger_storage_price_yearly.style.display = 'none'
       custom_profile_price_yearly.style.display = 'none'
       checkbox.addEventListener('click',()=>{
         yearProPrices()
       })
     })
    
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'flex'
    // 
    // 
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
  step_num_one.classList.remove('white-num-bg')
})

const yearly_text = document.querySelector('.yearly-text')
const monthly_text = document.querySelector('.monthly-text')
const ball_inner = document.querySelector('.ball-inner')

const yearlyPlanTextPrices = ['$108/yr', '$144/yr', '$180/yr']
const monthlyPlanTextPrices = ['$9/mo', '$12/mo', '$15/mo']

const plan_cost_text = document.querySelectorAll('.plan-cost-text')

const add_on_yearly = document.querySelectorAll('.add-on-yearly')

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
  // 
  if(arcade.classList.contains("plan-active-click")){
    console.log('the arcade has a yearly border')
    final_price_yearly.style.display = 'flex'
    final_price_yearly_text.textContent = yearlyArcPrices[0]

    final_price_monthly.style.display = 'none'
    checkboxes.forEach((checkbox)=>{
      checkbox.checked = false
      online_service_price_yearly.style.display = 'none'
      larger_storage_price_yearly.style.display = 'none'
      custom_profile_price_yearly.style.display = 'none'

      checkbox.addEventListener('click',()=>{
        yearArcadePrices()
      })
    })
    arcade_main_yearly.style.display = 'flex'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    //
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
  }else if(advanced.classList.contains('plan-active-click')){
    console.log('advanced has a yearly border')
    final_price_yearly.style.display = 'flex'
    final_price_yearly_text.textContent = yearlyAdvanPrices[0]
    final_price_monthly.style.display = 'none'

    checkboxes.forEach((checkbox)=>{
      checkbox.checked = false
      online_service_price_yearly.style.display = 'none'
      larger_storage_price_yearly.style.display = 'none'
      custom_profile_price_yearly.style.display = 'none'

      checkbox.addEventListener('click',()=>{
        yearAdvanPrices()
      })
    })

    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'flex'
    pro_main_yearly.style.display = 'none'
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
  }else if(pro.classList.contains('plan-active-click')){
    console.log('pro has a yearly border')
    final_price_yearly.style.display = 'flex'
    final_price_yearly_text.textContent = yearlyProPrices[0]
    final_price_monthly.style.display = 'none'

    checkboxes.forEach((checkbox)=>{
      checkbox.checked = false
      online_service_price_yearly.style.display = 'none'
      larger_storage_price_yearly.style.display = 'none'
      custom_profile_price_yearly.style.display = 'none'

      checkbox.addEventListener('click',()=>{
        yearProPrices()
      })
    })
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'flex'
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
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
      final_price_monthly.style.display = 'flex'
      final_price_monthly_text.textContent = monthlyArcPrices[0]
      final_price_yearly.style.display = 'none'

      checkboxes.forEach((checkbox)=>{
        checkbox.checked = false
        online_service_price_monthly.style.display = 'none'
        larger_storage_price_monthly.style.display = 'none'
        custom_profile_price_monthly.style.display = 'none'
  
        checkbox.addEventListener('click',()=>{
          getMonthArcadePrices()
        })
      })

    arcade_monthly.style.display = 'flex'
    advanced_monthly.style.display = 'none'
    pro_monthly.style.display = 'none'
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
  }else if(advanced.classList.contains('plan-active-click')){
    console.log('advanced has a monthly border')
       final_price_monthly.style.display = 'flex'
       final_price_monthly_text.textContent = monthlyAdvanPrices[0]
       final_price_yearly.style.display = 'none'

       checkboxes.forEach((checkbox)=>{
         checkbox.checked = false
         online_service_price_monthly.style.display = 'none'
         larger_storage_price_monthly.style.display = 'none'
         custom_profile_price_monthly.style.display = 'none'
   
         checkbox.addEventListener('click',()=>{
           getMonthAdvanPrices()
         })
       })
    // 
    arcade_monthly.style.display = 'none'
    advanced_monthly.style.display = 'flex'
    pro_monthly.style.display = 'none'
    // 
    arcade_main_yearly.style.display = 'none'
    advanced_main_yearly.style.display = 'none'
    pro_main_yearly.style.display = 'none'
    // 
  }else if(pro.classList.contains('plan-active-click')){
    console.log('pro has a monthly border')
    
    final_price_monthly.style.display = 'flex'
    final_price_monthly_text.textContent = monthlyProPrices[0]
    final_price_yearly.style.display = 'none'

    checkboxes.forEach((checkbox)=>{
      checkbox.checked = false
      online_service_price_monthly.style.display = 'none'
      larger_storage_price_monthly.style.display = 'none'
      custom_profile_price_monthly.style.display = 'none'

      checkbox.addEventListener('click',()=>{
        getMonthProPrices()
      })
    })
    
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

const step_two_btn = document.querySelector('.step-two-btn')
const right_side_step_three = document.querySelector('.right-side-step-three')
const red_plan_text = document.querySelector('.red-plan-text')

step_two_btn.addEventListener('click',()=>{
  if(hasBorder===true){
    right_side_step_two.style.display = 'none'
    right_side_step_three.style.display = 'block'
    red_plan_text.style.display = 'none'
    step_num_two.classList.add('white-num-bg')
  }else{
    red_plan_text.style.display = 'block'
  }
})

const go_back_btn_two = document.querySelector('.go-back-btn-two')

go_back_btn_two.addEventListener('click',()=>{
  right_side_step_three.style.display = 'none'
  right_side_step_two.style.display = 'block'
  step_num_two.classList.remove('white-num-bg')
})

const right_side_step_four = document.querySelector('.right-side-step-four')
const last_step_btn = document.querySelector('.last-step-btn')

last_step_btn.addEventListener('click',()=>{
  right_side_step_four.style.display = 'block'
  right_side_step_three.style.display = 'none'
  step_num_three.classList.add('white-num-bg')
})

const last_go_back_btn = document.querySelector('.last-go-back-btn')

last_go_back_btn.addEventListener('click',()=>{
  right_side_step_four.style.display = 'none'
  right_side_step_three.style.display = 'block'
  step_num_three.classList.remove('white-num-bg')
})

const confirm_btn = document.querySelector('.confirm-btn').addEventListener('click',()=>{
  const confetti = document.querySelectorAll('.confetti')
  const finish_up = document.querySelector('.last-section-finish-up')
  finish_up.innerHTML = `<img src="icon-thank-you.svg">
  <h1>Thank you!</h1>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur magnam porro, rem sapiente dolorum repudiandae reiciendis tempore consectetur sit laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellendus.</p>
  </div>`
  finish_up.classList.add('thank-you-section')
  step_num_four.classList.add('white-num-bg')
  confetti.forEach((confet)=>{
    confet.style.display = 'block'
  })
})

