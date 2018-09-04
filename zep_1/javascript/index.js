
/* -------  JavaScript  ------- */


		function activeSearch()
		{
			var searchBar = document.getElementById('searchBar');
			searchBar.style.width="300px";
		}
		
		function inActiveSearch()
		{
			var searchBar = document.getElementById('searchBar');
			searchBar.style.width="200px";
		}
		
		function showPopup()
		{
			var pop = document.getElementById('popup-small');
			
			if ( pop.style.display == "block" )
			{
				pop.style.display="none";
			}
			else
			{
				pop.style.display="block";
			}
		}
		
		function hidePopup()
		{
			var pop = document.getElementById('popup-small');
			pop.style.display="none";
		}
		
		function toggleAskBeroePopUp()
		{
			var pop = document.getElementById('popup-askBeroe');

			if(pop.style.display == "none")
			{
				pop.style.display = "flex";
			}
			else
			{
				pop.style.display = "none";
			}
		}
		
		function extraMatter()
		{

			var ext = document.getElementById('extra-matter');

			var dots = document.getElementById('dots');

			var btn = document.getElementById('myBtn');

			  if (dots.style.display === "none") 
			  {
			    dots.style.display = "inline";
			    btn.innerHTML = "Read more"; 
			    ext.style.display = "none";
			  } 
			  else 
			  {
			    dots.style.display = "none";
			    btn.innerHTML = "Read less"; 
			    ext.style.display = "flex";
			  }

		}

		function toggleAside()
		{
			var aside = document.getElementById('aside-to-hide');

			var sec = document.getElementById('section-to-expand');

			var btn = document.getElementById('banner-to-show');

			var fsec = document.getElementById('f-sec');

			var boxes = sec.getElementsByClassName('box');

			if(aside.style.display == "block")
			{
				aside.style.display="none";
				btn.style.display="inline-block";
				fsec.style.width="63%";
				for(var i = 0; i < boxes.length; i++)
				{
					boxes[i].style.width="30%";
				}
			}

			else
			{
				aside.style.display="block";
				btn.style.display="none";
				fsec.style.width="100%";
				for(var i = 0; i < boxes.length; i++)
				{
					boxes[i].style.width="45%";
				}
			}

		}


		function activateNavLinks()
		{
		// Get the container element
		var btnContainer = document.getElementById("links");

		// Get all buttons with class="linkbutton" inside the container
		var btns = btnContainer.getElementsByClassName("linkbutton");

		// Loop through the buttons and add the active class to the current/clicked button
		for (var i = 0; i < btns.length; i++) {
		  btns[i].addEventListener("click", function() {
		    var current = document.getElementsByClassName("active");

		    // If there's no active class
		    if (current.length > 0) { 
		      current[0].className = current[0].className.replace(" active", "");
		    }

		    // Add the active class to the current/clicked button
		    this.className += " active"; // event.currentTarget.className += " active";
		  });
		}
		}

		function closePopup()
		{
		var modal = document.getElementById('popup-askBeroe');

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}
		}
		
		closePopup();
		activateNavLinks();