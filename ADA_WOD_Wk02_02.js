var whiteTile=' '
var blackTile="\#"
var tiles=''

function chessBoard(){
for(x=0; x<8; x++){
    for(y=0; y<8; y++){
      if (x%2==0 && y%2==0) {
        tiles+=blackTile;
      } else if (x%2!==0 && y%2==0){
        tiles+=whiteTile;
      } else if (x%2!==0 && y%2!==0) {
        tiles+=blackTile;
      } else {
        tiles+=whiteTile;
      }
    }
    tiles+="\n"
    //tiles+="<br/>"
  } 
}
chessBoard();
console.log(tiles);
//document.write(tiles)











