import React ,{useState}from 'react';
import { Text, View, StyleSheet,TouchableOpacity,StatusBar,Image } from 'react-native';

export default function TicTocToe() {
  const[pos1,setPos1]=useState('X');
  const[pos2,setPos2]=useState('X');
  const[pos3,setPos3]=useState('X');
  const[pos4,setPos4]=useState('X');
  const[pos5,setPos5]=useState('X');
  const[pos6,setPos6]=useState('X'); 
  const[pos7,setPos7]=useState('X');
  const[pos8,setPos8]=useState('X');
  const[pos9,setPos9]=useState('X');

  const[turn,setTurn]=useState('P1');
  const[player1,setP1]=useState('P1');
  const[player2,setP2]=useState('P2');
  const[winnerPlayer,setwinnerPlayer]=useState('');
  const[gameStatus,setGameStatus]=useState('Game is continous');
  const[alreadyWinner,setAlreadyWinner]=useState('NO');
 
  function checkWinerP1(){
    if(pos1==player1 && pos2==player1 && pos3==player1 ){setwinnerPlayer('P1');                   setGameStatus('CONGRATULATIONS PLAYER1! YOU WON THE GAME');AlreadyWinnerChecker()}
    if(pos4==player1 && pos5==player1 && pos6==player1 ){setwinnerPlayer('P1');                  setGameStatus('CONGRATULATIONS PLAYER1! YOU WON THE GAME');AlreadyWinnerChecker()}

    if(pos7==player1 && pos8==player1 && pos9==player1 ){setwinnerPlayer('P1');                  setGameStatus('CONGRATULATIONS PLAYER1! YOU WON THE GAME');AlreadyWinnerChecker()}
    if(pos1==player1 && pos5==player1 && pos9==player1 ){setwinnerPlayer('P1');                   setGameStatus('CONGRATULATIONS PLAYER1! YOU WON THE GAME');AlreadyWinnerChecker()}
    if(pos3==player1 && pos5==player1 && pos7==player1 ){setwinnerPlayer('P1');                   setGameStatus('CONGRATULATIONS PLAYER1! You WON THE GAME');AlreadyWinnerChecker()}
    
    if(pos1==player1 && pos4==player1 && pos7==player1 ){setwinnerPlayer('P1');                   setGameStatus('CONGRATULATIONS PLAYER1! YOU WON THE GAME');AlreadyWinnerChecker()}
    
    if(pos2==player1 && pos5==player1 && pos8==player1 ){setwinnerPlayer('P1');                   setGameStatus('CONGRATULATIONS PLAYER1! YOU WON THE GAME');AlreadyWinnerChecker()}
    
    if(pos3==player1 && pos6==player1 && pos9==player1 ){setwinnerPlayer('P1');                   setGameStatus('CONGRATULATIONS PLAYER1! YOU WON THE GAME');AlreadyWinnerChecker()}

  }
  function checkWinerP2(){
    if(pos1==player2 && pos2==player2 && pos3==player2 ){setwinnerPlayer('P2');                   setGameStatus('CONGRATULATIONS PLAYER2! YOU WON THE GAME');AlreadyWinnerChecker()}
    if(pos4==player2 && pos5==player2 && pos6==player2 ){setwinnerPlayer('P2');                   setGameStatus('CONGRATULATIONS PLAYER2! YOU WON THE GAME');AlreadyWinnerChecker()}
    if(pos7==player2 && pos8==player2 && pos9==player2 ){setwinnerPlayer('P2');                   setGameStatus('CONGRATULATIONS PLAYER2! YOU WON THE GAME');AlreadyWinnerChecker()}

    if(pos1==player2 && pos5==player2 && pos9==player2 ){setwinnerPlayer('P2');                   setGameStatus('CONGRATULATIONS PLAYER2! You WON THE GAME');AlreadyWinnerChecker()}
    if(pos3==player2 && pos5==player2 && pos7==player2 ){setwinnerPlayer('P2');                   setGameStatus('CONGRATULATIONS PLAYER2! You WON THE GAME');AlreadyWinnerChecker()}
    if(pos1==player2 && pos4==player2 && pos7==player2 ){setwinnerPlayer('P2');                   setGameStatus('CONGRATULATIONS PLAYER2! YOU WON THE GAME');AlreadyWinnerChecker()}
    if(pos2==player2 && pos5==player2 && pos8==player2 ){setwinnerPlayer('P2');                   setGameStatus('CONGRATULATIONS PLAYER2! YOU WON THE GAME');AlreadyWinnerChecker()}
    if(pos3==player2 && pos6==player2 && pos9==player2 ){setwinnerPlayer('P2');                   setGameStatus('CONGRATULATIONS PLAYER2! YOU WON THE GAME');AlreadyWinnerChecker()}
  }
 
function AlreadyWinnerChecker(){
   if(winnerPlayer=='P1'){setAlreadyWinner('YES'); }
   else if(winnerPlayer=='P2'){setAlreadyWinner('YES'); }
 }



  return (
    <View style={styles.container}>
    <StatusBar barStyle='light-content' backgroundColor='black'/>
      <View>
          { /*  TextDescription for users */}
        <Text style={styles.gameDescription}>TICTOCTOE GAME</Text>
        <View style={styles.imageCon}>
           <Image  style={styles.image}source={{uri:'https://www.cityam.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-24-at-18.31.17.png'}}/>
        </View>
        <Text style={styles.intro}> START PLAYING FROM PLAYER P1 </Text>
      </View>
      <View style={styles.container1}>
          <View style={styles.container2}>
           <TouchableOpacity onPress={()=>{if(alreadyWinner=='NO'){ if(pos1=='X'){
              if(turn==player1){setPos1('P1');setTurn(player2)}
              else if(turn==player2){setPos1('P2');setTurn(player1)} checkWinerP1();checkWinerP2()}}}}>
               <Text  style={styles.position}>{pos1}</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>{if(pos2=='X'){
              if(turn==player1){setPos2('P1');setTurn(player2)}
              else if(turn==player2){setPos2('P2');setTurn(player1)}checkWinerP1();checkWinerP2()}}}> 
               <Text style={styles.position}>{pos2}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ if(pos3=='X'){
              if(turn==player1){setPos3('P1');setTurn(player2)}
              else if(turn==player2){setPos3('P2');setTurn(player1)}checkWinerP1();checkWinerP2()}}}> 
               <Text style={styles.position}>{pos3}</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.container0}>
          <View style={styles.container2}>
           <TouchableOpacity onPress={()=>{if(pos4=='X'){
              if(turn==player1){setPos4('P1');setTurn(player2)}
              else if(turn==player2){setPos4('P2');setTurn(player1)}checkWinerP1();checkWinerP2()}}}> 
               <Text style={styles.position}>{pos4}</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>{if(pos5=='X'){
              if(turn==player1){setPos5('P1');setTurn(player2)}
              else if(turn==player2){setPos5('P2');setTurn(player1)}checkWinerP1();checkWinerP2()}}}> 
               <Text style={styles.position}>{pos5}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{if(pos6=='X'){
              if(turn==player1){setPos6('P1');setTurn(player2)}
              else if(turn==player2){setPos6('P2');setTurn(player1)}checkWinerP1();checkWinerP2()}}}> 
               <Text style={styles.position}>{pos6}</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.container0}>
          <View style={styles.container2}>
           <TouchableOpacity onPress={()=>{if(pos7=='X'){
              if(turn==player1){setPos7('P1');setTurn(player2)}
              else if(turn==player2){setPos7('P2');setTurn(player1)}checkWinerP1();checkWinerP2()}}}> 
               <Text style={styles.position}>{pos7}</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={()=>{if(pos8=='X'){
              if(turn==player1){setPos8('P1');setTurn(player2)}
              else if(turn==player2){setPos8('P2');setTurn(player1)}checkWinerP1();checkWinerP2()}}}> 
               <Text style={styles.position}>{pos8}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{if(pos9=='X'){
              if(turn==player1){setPos9('P1');setTurn(player2)}
              else if(turn==player2){setPos9('P2');setTurn(player1)}checkWinerP1();checkWinerP2()}}}> 
               <Text style={styles.position}>{pos9}</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.statusContainer}>
         <Text style={styles.status}> Status </Text>
         <Text style={styles.statusText}> {gameStatus}</Text>
      </View>
      <View style={styles.containerButton}>
         <TouchableOpacity onPress={()=>{setPos1('X');setPos2('X');setPos3('X');setPos4('X');setPos5('X');setPos6('X');setPos7('X');setPos8('X');setPos9('X');setTurn('P1');setwinnerPlayer('');setGameStatus('Game is continous');setAlreadyWinner('NO')}}>
          <Text style={styles.buttonText}>RESET</Text>
         </TouchableOpacity>
      </View>
      <Text style={styles.myInfo}> Developed by MUHAMMAD ASIM</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
  },
  intro:{
    paddingTop:10,    
    paddingLeft:20,
    fontSize:20,
    color:'#FFFFED'
  },
  imageCon:{
    alignItems:'center',paddingTop:5,
  },
  image:{
    height:160,
    width:250,
    borderRadius:50,
    
  },
  gameDescription:{
   // color:'white',
      
    paddingLeft:60,
    fontSize:30,
    color:'white'
  },
  container1:{
    paddingTop:30,

  },
    container0:{
    paddingTop:20,

  },
  container2:{
    flexDirection:'row',
    justifyContent:'space-around',
    borderWidth:1,
    borderRadius:40,
    height:70,
    padding:7,
    borderColor:'coral',
    
  },
  position:{
    fontSize:40,
    borderWidth:1,
    borderRadius:10,
    borderColor:'coral',
    color:'pink',
  },
  statusContainer:{
    paddingTop:15,
  },
  status:{
    color:'blue',
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:10,
  },
  statusText:{
    paddingLeft:50,
    color:'white',
    fontSize:20,
  },
  containerButton:{
    paddingTop:20,
        alignItems:'center',

  },
  buttonText:{
    color:'pink',
    fontSize:30,
    borderWidth:1,
    borderColor:'pink',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:60,
    paddingRight:60,
    borderRadius:20,
    backgroundColor:'blue',
  },
  myInfo:{
      color:'pink',
      paddingLeft:47,
      paddingTop:10,
  }

})

