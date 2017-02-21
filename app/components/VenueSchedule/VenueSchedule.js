import React, {Component} from 'react';
import { Text, View, Picker, ScrollView, Button } from 'react-native';
import scheduleDummyData from './scheduleDummyData.json'
import ScheduleRow from './ScheduleRow';
import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';

console.log("DropDown: ", DropDown);
console.log("dummyData: ",scheduleDummyData);

export default class VenueSchedule extends Component{
	constructor(props) {
		console.log("hree");
	    super(props);
	    this.state = {
	      selectedDate: "Select Date..",
	      dummyData: "",
	      date:"August, 8"
	    };
	}
	// chooseDate() {
	// 	var months = ['null','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	//  	var obj={};
	//  	var arr=[];
	//  	scheduleDummyData.forEach(function(item){
	//  		if(item.day in obj) {

	//  		}
	//  		else {
	//  			obj[item.day] = item.day;
	//  		}
	//  	});
	//  	for(var key in obj) {
	//  		var date=obj[key].split("/");
	//  		var month=months[date[0]]
	//  		var day=date[1]
	//  		arr.push(month+", "+day);
	//  	}
	//  	return arr;
	// }

	render () {
	    return (
	      <View>
		 <ScrollView>

	      {scheduleDummyData.map((item, index) => {
	          return (
	            <ScheduleRow
	              key={index}
	              name={item.name}
	              startTime={item.starttime}
	              endTime={item.endtime}
	              geoFences={item.geofence}
	              day={item.day}
	            
	            />
	         
	          );       
	      })}
    	</ScrollView>
	      </View>
	    )
  	}
}

 


