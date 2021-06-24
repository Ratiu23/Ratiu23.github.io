console.info("Salut");
	console.debug(131/2);
	var name="Ratiu Alex";
	console.info(name);
	var age=22;
	console.info(age);
	console.warn("Age:"+age);
	console.warn("Age:",age);
	console.info("name:"+name);


	var skills=["html",'css',`js`];
	console.info("skills:", skills);

	name="Nick";
	console.info("name:"+name);



	var m = document.getElementById("motto");
	console.info("my motto", m);

	m.onclick = function() 
	{
		console.info("Click pe motto", m.innerText);
		if (m.innerText == 'Student la Facultatea de Inginerie Electrica')
		{
			m.innerHTML = "<strong>Student la Universitatea Tehnica</strong>";
	        m.style.color = '#1144dd';
		} else
		{
			m.innerHTML = "<strong>Student la Facultatea de Inginerie Electrica</strong>";
	        m.style.color = '';
		}
	};