//listing element

document.getElementById("resumeForm")?.addEventListener('submit',function(event){
    event.preventDefault();

    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experiencceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

   if(nameElement && emailElement && phoneElement && educationElement && experiencceElement && skillsElement){
        const name = nameElement.value;
         
   }
   
   
   
   
   
   
    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name :</strong> ${name} </p>

    `

})