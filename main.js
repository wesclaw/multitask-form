const form = document.querySelector('form')

const plans = document.querySelectorAll('.plan')

function submitForm(e){
  e.preventDefault()
  const right_side_step_one = document.querySelector('.right-side-step-one')
  const right_side_step_two = document.querySelector('.right-side-step-two')
  const step_num_one = document.querySelector('.step-num-one')
  const step_num_two = document.querySelector(".step-num-two")

  const step_two_btn = document.querySelector('.step-two-btn')
  const right_side_step_three = document.querySelector('.right-side-step-three')

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

  step_two_btn.addEventListener('click',()=>{
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
}

form.addEventListener('submit', submitForm)

const back_btn_one = document.querySelector('.go-back-btn-one')

let hasBorder = false

plans.forEach((plan)=>{
  plan.addEventListener('click',()=>{
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

monthly_and_yearly_ball.forEach((text)=>{
  text.addEventListener('click',(e)=>{
    const moveBall = e.target.textContent;
    const ball = document.querySelector('.ball-inner')
    let plan_cost_text = document.querySelectorAll('.plan-cost-text')

    if(moveBall==='Yearly'){
      ball.classList.add('ball-move') 
      
      for(let i=0;i<plan_cost_text.length; i++){
        plan_cost_text[i].textContent = yearlyPlanTextPrices[i]
      }
    }else {
      ball.classList.remove('ball-move')
    
      for(let i=0;i<plan_cost_text.length; i++){
        plan_cost_text[i].textContent = monthlyPlanTextPrices[i]
      }    
    } 
  })
})




