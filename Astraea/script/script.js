
const contestantList = []
  let Account = {
    first_name: "Luna",
    last_name: "Thao",
    username:"luthao123",
    ticket :5,
    address: "W246N6690 Champany ct",
    email:"lunathao92@gmail.com"
  }


function addList(ticket, username){
  if(ticket <= 0){
    console.log("insufficient ticket: "+ ticket);
  }else{
    console.log("you have enter the contest successfully!")
    Account.ticket--
    contestantList.push(username)
  }
}

addList(Account.ticket,Account.username)

console.log(contestantList)
  
 console.log(Account.first_name)