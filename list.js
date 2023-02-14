const input = document.querySelector('input');
		const butn = document.querySelector('.add > button');

		butn.addEventListener('click', listadd);
		input.addEventListener('keyup', (e)=>{
			(e.keyCode === 13 ? listadd(e) : null);
		})

		function listadd(e){
			const notcomplete = document.querySelector('.notcomplete');
			const complete = document.querySelector('.complete');

			const newList = document.createElement('li');
			const checkButn = document.createElement('button');
			const delButn = document.createElement('button');

			checkButn.innerHTML = '<i class="fa fa-check"></i>';
			delButn.innerHTML = '<i class="fa fa-trash"></i>';


			if(input.value !==''){
				newList.textContent = input.value;
				input.value = '';
				notcomplete.appendChild(newList);
				newList.appendChild(checkButn);
				newList.appendChild(delButn);
			}

			checkButn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
				complete.appendChild(parent);
				checkButn.style.display = 'none';
			});

			delButn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
			});
		}
