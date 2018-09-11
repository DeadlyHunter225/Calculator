+(function(){

	var btnList = document.getElementById('button-list'),
		inp = document.getElementById('formula');

	inp.focus();

	inp.addEventListener('keyup', function(e){
		console.log(e);
		if (e.key === 'Enter') {
			inp.value = eval(inp.value);
		}
	}, false);

	var buttons = "789*456-123+0./=".split('');

	for(var i in buttons) {
		var col = document.createElement('div');
		col.classList.add('col-md-3');
		col.classList.add('p-3');

		var btn = document.createElement('button');
		btn.classList.add('btn');
		btn.classList.add('btn-default');
		btn.style.width = '100%';
		btn.style.hight = '100%';
		btn.innerHTML = buttons[i];

		col.appendChild(btn);
		btnList.appendChild(col);

		btn.addEventListener('click', function(e){
			var val = e.target.innerHTML;

			if (val === '=') {
				inp.value = eval(inp.value);
			} else {
				inp.value = inp.value + val;
			}
		});
	}

}());