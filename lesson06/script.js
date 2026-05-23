let balance = 0;

bankingPrompt();

function bankingPrompt() {
  let banking = prompt(`Which Action Would You Like to Perform? (Please type in the corresponding letter):

D for Deposit
W for Withdraw
B for View Balance
Q for Quit`);
  
  if(banking=='d' || banking=='D') {
	depositFunction();
   bankingPrompt();
  }
  else if(banking=='w' || banking=='W') {
    withdrawFunction();
    bankingPrompt();
    }
  else if(banking=='b' || banking=='B') {
    alert('Your Balance Is: $' + balance);
    bankingPrompt();
    }
  else if(banking=='q' || banking=='Q') {
    alert('See You Again Soon!')
  }
  else {
    alert('That is not a valid input. Please enter a valid input.');
    bankingPrompt();
    }
  }

  function depositFunction() {
    let depositPrompt = prompt("How much would you like to deposit?");
    balance += parseFloat(depositPrompt);
  }

  function withdrawFunction() {
    let withdrawPrompt = prompt("How much would you like to withdraw?");
    balance -= parseFloat(withdrawPrompt);
  }