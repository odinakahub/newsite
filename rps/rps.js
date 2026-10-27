let playScore = 0
let compuScore = 0
let count = 0
playerScore.textContent = playScore
computerScore.textContent = compuScore
function playerPick(game, code){
	count++
	
	if(game === 'rock'){
		playerId.innerHTML = `<img class="starter-img" src="${game}.png" alt="" />`
	} else if(game === 'paper'){
		playerId.innerHTML = `<img class="starter-img" src="${game}.png" alt="" />`
	}else if(game === 'scissors'){
		playerId.innerHTML = `<img class="starter-img" src="${game}.png" alt="" />`
	}
	
	const clickValue = Math.floor(Math.random() * 3)
	
	if(clickValue === 0){
		computerId.innerHTML = `<img class="starter-img" src="rock.png" alt="" />`
	}else if(clickValue === 1){
		computerId.innerHTML = `<img class="starter-img" src="paper.png" alt="" />`
	}else if(clickValue === 2){
		computerId.innerHTML = `<img class="starter-img" src="scissors.png" alt="" />`
	}
	
	if(code === 0 && clickValue === 2){
		playScore ++
		playerScore.textContent = playScore
	} else if(code === 1 && clickValue === 0){
		playScore ++
		playerScore.textContent = playScore
	}else if(code === 2 && clickValue === 1){
		playScore ++
		playerScore.textContent = playScore
	}else if(code === 2 && clickValue === 0){
		compuScore ++
		computerScore.textContent = compuScore
	}else if(code === 0 && clickValue === 1){
		compuScore ++
		computerScore.textContent = compuScore
	}else if(code === 1 && clickValue === 2){
		compuScore ++
		computerScore.textContent = compuScore
	} else{
		
	}
	if(count === 20 && playScore > compuScore){
		successMsg.textContent = 'You have won'.toUpperCase()
		gameOver()
	}else if(count === 20 && compuScore > playScore){
		successMsg.textContent = 'Computer have won'.toUpperCase()
		gameOver()
	}
	countId.textContent = count
}




function resetButton(){
	playerId.innerHTML = `<img class="starter-img" src="qplayer.jpg" alt="" />`
	computerId.innerHTML = `<img class="starter-img" src="qcomputer.jpg" alt="" />`
	playerScore.textContent = 0
	computerScore.textContent = 0
	playScore = 0
	compuScore = 0
	myButton[0].disabled = false
	myButton[1].disabled = false
	myButton[2].disabled = false
	successMsg.textContent = 'WAITING FOR THE WINNER!'
}

function gameOver(){
	myButton[0].disabled = true
	myButton[1].disabled = true
	myButton[2].disabled = true
}
