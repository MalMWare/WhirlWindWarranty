let element, label

element = document.createElement('h1')
element.innerHTML = 'WhirlWind Warranty Registration'
document.body.appendChild(element);

element = document.createElement('h2') 
element.innerHTML = 'Warranty Information'
document.body.appendChild(element);

label = document.createElement('label')
label.innerHTML = "First Name"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element);

label = document.createElement('label')
label.innerHTML = "Last Name"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Company Name"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Email"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "email")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Phone Number"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "tel")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Fax Number"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "tel")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Address"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "City"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "State"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Zip"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Country"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element)

element = document.createElement('h2') 
element.innerHTML = 'Device Information'
document.body.appendChild(element);

label = document.createElement('label')
label.innerHTML = "Date of Purchase"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "date")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Model Number"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element)

label = document.createElement('label')
label.innerHTML = "Warranty Serial Number"
document.body.appendChild(label);
element = document.createElement('input')
element.setAttribute("type", "text")
document.body.appendChild(element);

element = document.createElement('input')
element.setAttribute("type", "button")
element.setAttribute("value", "Save")
document.body.appendChild(element)

element = document.createElement('input')
element.setAttribute("type", "button")
element.setAttribute("value", "Close")
document.body.appendChild(element)

