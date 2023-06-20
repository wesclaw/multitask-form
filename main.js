const form = document.querySelector('form')

const plans = document.querySelectorAll('.plan')

function submitForm(e){
  e.preventDefault()
  const right_side_step_one = document.querySelector('.right-side-step-one')
  const right_side_step_two = document.querySelector('.right-side-step-two')
  const step_num_one = document.querySelector('.step-num-one')
  const step_num_two = document.querySelector(".step-num-two")
  const step_num_three = document.querySelector('.step-num-three')

  const step_two_btn = document.querySelector('.step-two-btn')
  const right_side_step_three = document.querySelector('.right-side-step-three')
  const right_side_step_four = document.querySelector('.right-side-step-four')

  right_side_step_one.style.display = 'none'
  right_side_step_two.style.display = 'block'
  step_num_one.style.backgroundColor = 'white'
  step_num_one.style.color = 'black'

  back_btn_one.addEventListener('click',()=>{
    right_side_step_one.style.display = 'block'
    right_side_step_two.style.display = 'none'
    step_num_one.style.backgroundColor = 'transparent'
    step_num_one.style.color = 'white'
  })

  back_btn_two.addEventListener('click',()=>{
    right_side_step_three.style.display = 'none'
    right_side_step_two.style.display = 'block'
    step_num_two.style.backgroundColor = 'transparent'
    step_num_two.style.color = 'white'
  })

  step_two_btn.addEventListener('click',(e)=>{
    const red_plan_text = document.querySelector('.red-plan-text')
    plans.forEach((plan)=>{  
      if(!hasBorder){
        red_plan_text.style.display = 'block'
        return step_two_btn.removeEventListener('click')
      } 
    })
    red_plan_text.style.display = 'none'
    right_side_step_two.style.display = 'none'
    right_side_step_three.style.display = 'block'
    step_num_two.style.backgroundColor = 'white'
    step_num_two.style.color = 'black'
  })

  const last_step_btn = document.querySelector('.last-step-btn')

  last_step_btn.addEventListener('click',()=>{
    right_side_step_three.style.display = 'none'
    right_side_step_four.style.display = 'block'
    step_num_three.style.backgroundColor = 'white'
    step_num_three.style.color = 'black'
  })

  const last_go_back_btn = document.querySelector('.last-go-back-btn')

  last_go_back_btn.addEventListener('click',()=>{
    right_side_step_four.style.display = 'none'
    right_side_step_three.style.display = 'block'
    step_num_three.style.backgroundColor = 'transparent'
    step_num_three.style.color = 'white'
  })
}

form.addEventListener('submit', submitForm)

const back_btn_one = document.querySelector('.go-back-btn-one')
const back_btn_two = document.querySelector('.go-back-btn-two')

let hasBorder = false

const arcade_monthly = document.querySelector('.arcade-monthly')
const advanced_monthly = document.querySelector('.advanced-main-monthly')
const pro_monthly = document.querySelector('.pro-main-monthly')

plans.forEach((plan)=>{
  plan.addEventListener('click',(e)=>{
    const pick = e.currentTarget.classList;
    if(pick.contains('arcade')){
      arcade_monthly.style.display = 'flex'
      advanced_monthly.style.display = 'none'
      pro_monthly.style.display = 'none'
    }else if(pick.contains('advanced')){
      advanced_monthly.style.display = 'flex'
      arcade_monthly.style.display = 'none'
      pro_monthly.style.display = 'none'
    }else if(pick.contains('pro')){
      pro_monthly.style.display = 'flex'
      advanced_monthly.style.display = 'none'
      arcade_monthly.style.display = 'none'
    } 
    plans.forEach((p)=>{
      p.style.border =  '0px solid rgba(128, 0, 128, 0.466)'
    })
    plan.style.border =  '2px solid rgba(128, 0, 128, 0.466)'
    hasBorder = true
  })
})


const monthly_and_yearly_ball = document.querySelectorAll('.monthly-and-yearly-ball')

const yearlyPlanTextPrices = ['$108/yr', '$144/yr', '$180/yr']
const monthlyPlanTextPrices = ['$9/mo', '$12/mo', '$15/mo']

const arcade_main_yearly = document.querySelector('.arcade-main-yearly')
const advanced_main_yearly = document.querySelector('.advanced-main-yearly')
const pro_main_yearly = document.querySelector('.pro-main-yearly')

monthly_and_yearly_ball.forEach((text)=>{
  text.addEventListener('click',(e)=>{
    const moveBall = e.target.textContent;
    const ball = document.querySelector('.ball-inner')
    let plan_cost_text = document.querySelectorAll('.plan-cost-text')

    const add_on_yearly_customizable_profile = document.querySelector('.add-on-yearly-customizable-profile')
    const add_on_yearly_larger_storage = document.querySelector('.add-on-yearly-larger-storage')
    const add_on_yearly_online_service = document.querySelector('.add-on-yearly-online-service')

    const online_service = document.querySelector('.online-service')
    const larger_storage = document.querySelector('.larger-storage')
    const customizable_profile = document.querySelector('.customizable-profile')

    if(moveBall==='Yearly'){
      ball.classList.add('ball-move')  
      online_service.style.display = 'none'
      larger_storage.style.display = 'none'
      customizable_profile.style.display = 'none'

      add_on_yearly_online_service.style.display = 'block'
      add_on_yearly_larger_storage.style.display = 'block'
      add_on_yearly_customizable_profile.style.display = 'block'

      for(let i=0;i<plan_cost_text.length; i++){
        plan_cost_text[i].textContent = yearlyPlanTextPrices[i]
      } 
      plans.forEach((plan)=>{
        plan.addEventListener('click',(e)=>{
          const pick = e.currentTarget.classList;
          if(pick.contains('arcade')){
            arcade_main_yearly.style.display = 'flex'
            advanced_main_yearly.style.display = 'none'
            pro_main_yearly.style.display = 'none'
            arcade_monthly.style.display = 'none'
          }else if(pick.contains('advanced')){
            advanced_main_yearly.style.display = 'flex'
            arcade_main_yearly.style.display = 'none'
            pro_main_yearly.style.display = 'none'
            advanced_monthly.style.display = 'none'
          }else if(pick.contains('pro')){
            pro_main_yearly.style.display = 'flex'
            arcade_main_yearly.style.display = 'none'
            advanced_main_yearly.style.display = 'none'
            pro_monthly.style.display = 'none'
          }
        })
      })
    } else {
      ball.classList.remove('ball-move')
      add_on_yearly_online_service.style.display = 'none'
      add_on_yearly_larger_storage.style.display = 'none'
      add_on_yearly_customizable_profile.style.display = 'none'

      online_service.style.display = 'block'
      larger_storage.style.display = 'block'
      customizable_profile.style.display = 'block'

      for(let i=0;i<plan_cost_text.length; i++){
        plan_cost_text[i].textContent = monthlyPlanTextPrices[i]
      }  

      plans.forEach((plan)=>{
        plan.addEventListener('click',(e)=>{
          const pick = e.currentTarget.classList;
          if(pick.contains('arcade')){
            arcade_main_yearly.style.display = 'none'
            advanced_main_yearly.style.display = 'none'
            pro_main_yearly.style.display = 'none'
            arcade_monthly.style.display = 'flex'
          }else if(pick.contains('advanced')){
            advanced_main_yearly.style.display = 'none'
            arcade_main_yearly.style.display = 'none'
            pro_main_yearly.style.display = 'none'
            advanced_monthly.style.display = 'flex'
          }else if(pick.contains('pro')){
            pro_main_yearly.style.display = 'none'
            arcade_main_yearly.style.display = 'none'
            advanced_main_yearly.style.display = 'none'
            pro_monthly.style.display = 'flex'
          }
        })
      })
    } 
  })
})

const monthlyFinalPrices = []
const yearlyFinalPrices = []

const online_service_price_monthly = document.querySelector('.online-service-price-monthly')
const larger_storage_price_monthly = document.querySelector('.larger-storage-price-monthly')
const custom_profile_price_monthly = document.querySelector('.custom-profile-price-monthly')
const final_price_monthly = document.querySelector('.final-price-monthly')

const checkboxes = document.querySelectorAll('.checkbox')

checkboxes.forEach((checkbox)=>{
  checkbox.addEventListener('click', monthlyAddOns)
})

// so change above to query select the monthly classes only and then add that function to it. change the html too. change html classname for the monthly to checkbox1 checkbox1 checkbox1
// i might need to make the monthly checkboxes all 'checkboxMonthly' on name for the monthly and year select all and make diff name for yearly checkboxes then add the function


function monthlyAddOns(){
  const checkbox1 = document.getElementById('checkbox1')
  const checkbox2 = document.getElementById('checkbox2')
  const checkbox3 = document.getElementById('checkbox3')
  if(checkbox1.checked && !checkbox2.checked && !checkbox3.checked){
    online_service_price_monthly.style.display = 'flex'
    larger_storage_price_monthly.style.display = 'none'
    custom_profile_price_monthly.style.display = 'none'
  }else if(checkbox1.checked && checkbox2.checked && !checkbox3.checked){

  }else if(checkbox1.checked && checkbox2.checked && checkbox3.checked){

  }else if(!checkbox1.checked && !checkbox2.checked && !checkbox3.checked){

  }else if(!checkbox1.checked && !checkbox2.checked && checkbox3.checked){

  }else if(!checkbox1.checked && checkbox2.checked && checkbox3.checked){

  }else if(!checkbox1.checked && checkbox2.checked && !checkbox3.checked){

  }else if(checkbox1.checked && !checkbox2.checked && checkbox3.checked){

  }
}

function yearlyAddOns(){

}