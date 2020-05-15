import React , {useState} from 'react';
import { View , TextInput , Button , StyleSheet , Modal} from 'react-native';

const GoalInput = props => {
const [enteredGoal , setenteredGoal] = useState('');

const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText);
  };

  const addGoalHandler = () => {
     props.onAddGoal(enteredGoal);
     setenteredGoal('');
  };
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput
         placeholder="Coarse Goal" 
         style={styles.textInput}
         onChangeText={goalInputHandler}
         value= {enteredGoal}
         />
        <View style={styles.butonContainer}>
            <View style={styles.button}>
            <Button title="CANCEL" color='red' onPress={props.onCancel} /> 
            </View>
            <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler}/>
            </View>
        </View> 
        
      </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      textInput:{
        width:'80%' ,
        borderBottomColor:'black',
        borderWidth:1 , 
        padding:10,
        marginBottom:10
      },
      butonContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'50%'
      },
      button:{
          width:'45%'
      }
});

export default GoalInput