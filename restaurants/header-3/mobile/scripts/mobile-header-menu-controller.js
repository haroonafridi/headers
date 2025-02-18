const showMenu = document.querySelector('.mobile-header-menu-open');

const menu = document.querySelector('.mobile-header-menu');

const clickEvent = function()
{
		if('none'==menu.style.display || ""==menu.style.display)
		{
			menu.style.display = 'block';
		} 
		else 
		{
			menu.style.display = 'none';
		}				
}

showMenu.addEventListener('click',clickEvent);



