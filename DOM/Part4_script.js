count = 1;
resume = true;
points = [[11,12,13],[21,22,23],[31,32,33]]

message = document.querySelector("#game_message");
restart = document.querySelector("#restart");
p1_score = document.querySelector(".p1_score");
p2_score = document.querySelector(".p2_score");
blocks = document.querySelectorAll("td");

restart.addEventListener("click", reset);

blocks.forEach(add_event);

function add_event(tag){
  tag.addEventListener("click", function(){
    if(resume){
      mark(tag);
    }
    else{
      alert("!! Game Over !! Please Restart")
    }
  });
}

//----------for marking the moves on board and displying turns------------------

function mark(tag){

  if(tag.textContent == "O" || tag.textContent == "X"){
    alert("Invalid Move");
  }
  else{
    index = tag.id.split("");
    x = index[0];
    y = index[1];

    if(count%2 == 0){
      points[x][y] = 2;
      tag.textContent = "O";
      message.textContent = ("Player 1 Turn");
    }
    else{
      points[x][y] = 1;
      tag.textContent = "X";
      message.textContent = ("Player 2 Turn");
    }
    count++;
    win_check(x,y);
  }
}

//------------for checking winner after each move-------------------------------

function win_check(x,y){
  if(points[x][0] == points[x][1] && points[x][1] == points[x][2]
    || points[0][y] == points[1][y] && points[1][y] == points[2][y]
    || points[0][0] == points[1][1] && points[1][1] == points[2][2]
    || points[0][2] == points[1][1] && points[1][1] == points[2][0]){
    message.textContent = ("Player "+points[x][y]+" Wins!");
    if(points[x][y] == 1){
      message.textContent = ("Player 1 Wins!");
      p1_score.id++;
    }
    else{
      message.textContent = ("Player 2 Wins!");
      p2_score.id++;
    }
    resume = false;
  }
  else if(count>9){
    resume = false;
    message.textContent = ("!! MATCH DRAW !!");
  }

    p1_score.textContent = p1_score.id
    p2_score.textContent = p2_score.id

}

// -------------for reseting the board------------------------------------------

function reset(){
  points = [[11,12,13],[21,22,23],[31,32,33]];
  resume = true;
  count = 1;

  blocks.forEach((tag) => {
    tag.textContent = "";
  });

  message.textContent = "Player 1 Turn";
}
