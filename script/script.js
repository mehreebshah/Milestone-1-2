// function generateResume(){
//     const name = (document.getElementById("name")as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLInputElement).value;
//     const experience = (document.getElementById('experience') as HTMLInputElement).value;
//    const resumeHTML = `
//    <h3>${name}</h3>
//     <p><strong>Email:</strong> ${email}</p>
//     <h4>Education</h4>
//     <p>${education}</p>
//     <h4>Experience</h4>
//     <p>${experience}</p>
//     `;
//     const resumeContainer = document.getElementById('generatedResume');
//     if(resumeContainer){
//         resumeContainer.innerHTML = resumeHTML   
//       }
// }
document.addEventListener('DOMContentLoaded', function () {
    // Handle photo upload and preview
    var photoUpload = document.getElementById('photo-upload');
    var photoPreview = document.getElementById('photo-preview');
    photoUpload.addEventListener('change', function () {
        var _a;
        var file = (_a = photoUpload.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                    photoPreview.src = e.target.result;
                    photoPreview.style.display = 'block';
                }
            };
            reader.readAsDataURL(file);
        }
    });
    // Toggle section visibility (for educational purposes, though not strictly required by the given structure)
    var toggleSection = function (buttonId, sectionId) {
        var button = document.getElementById(buttonId);
        var section = document.getElementById(sectionId);
        button.addEventListener('click', function () {
            if (section.style.display === 'none') {
                section.style.display = 'block';
                button.textContent = Hide;
                $;
                {
                    sectionId.replace('-', ' ');
                }
                ;
            }
            else {
                section.style.display = 'none';
                button.textContent = Show;
                $;
                {
                    sectionId.replace('-', ' ');
                }
                ;
            }
        });
    };
    // Example of how you could use the toggleSection function
    // (You can add toggle buttons for other sections if needed)
    toggleSection('toggle-education', 'education-fieldset');
    toggleSection('toggle-skills', 'skills-fieldset');
    toggleSection('toggle-experience', 'experience-fieldset');
    // Handle form submission
    var form = document.getElementById('Resumeform');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        var name = document.getElementById('name').value;
        var contact = document.getElementById('contact').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        // Display or process the form data as needed
        // alert(Name: ${name}\n Contact: ${contact}\nEducation: ${education}\nSkills: ${skills}\nExperience: ${experience});
    });
});
