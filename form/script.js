document.getElementById('registrationForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const secondName = document.getElementById('secondName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const homeAddress = document.getElementById('homeAddress').value.trim();

    
    if (!firstName || !lastName || !password || !dob || !homeAddress) {
        alert("Please fill in all required fields.");
        return;
    }

    if (password.length < 8) {
        alert("Security Error: Your portal password must be at least 8 characters long.");
        return;
    }

    
    const studentData = {
        fullName: `${firstName} ${secondName ? secondName + ' ' : ''}${lastName}`,
        password: password,
        dateOfBirth: dob,
        address: homeAddress,
        submissionDate: new Date().toLocaleDateString()
    };

   
    console.log("Registration Data Received:", studentData);
    
    alert(`Thank you! The application for ${studentData.fullName} has been successfully submitted to Adren Private School.`);
    

    document.getElementById('registrationForm').reset();
});