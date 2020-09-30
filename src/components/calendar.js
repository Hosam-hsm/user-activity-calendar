
// Calendar component

import _ from 'lodash';
import React, { memo, useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import { ExpandableCalendar, AgendaList, CalendarProvider } from 'react-native-calendars';
import { SKYBLUE } from '../constants/colors';


const getDaysArray = (s, e) => {
    for (var a = [], d = new Date(s); d <= e; d.setDate(d.getDate() + 1)) {
        a.push(new Date(d));
    }
    return a;
};  // function to return array of dates between any two dates



const CalendarComponent = ({ selectedUser }) => {
    const [activityPeriods, setActivityPeriods] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const items = []
        items.push({
            title: Date.now(),
            data: [{}]
        }) // always show todays activity first

        selectedUser?.activity_periods.map(activity_period => {
            let startTime = activity_period.start_time.split(' ')[1]
            let endTime = activity_period.end_time.split(' ')[1]
            let startDate = activity_period.start_time.split(' ')[0]
            let endDate = activity_period.end_time.split(' ')[0]
            let title = startDate == endDate ? startDate : (startDate)

            items.push({
                title: title,
                data: [{
                    "start_date": startDate,
                    "end_date": endDate,
                    "start_time": startTime,
                    "end_time": endTime
                }]
            })
            setActivityPeriods(items)
            setLoading(false)
        }) // get activities

    }, [selectedUser])

    const renderEmptyActivity = () => {
        return (
            <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>No Activities Today</Text>
            </View>
        );
    }

    const renderActivity = ({ item }) => {
        if (_.isEmpty(item)) {
            return renderEmptyActivity();
        }
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.item}
            >
                <Text style={styles.itemTitleText}>{item.start_date}</Text>
                <Text style={styles.itemTitleText}>{item.start_time}</Text>
                <Text style={styles.itemTitleText}>to</Text>
                <Text style={styles.itemTitleText}>{item.end_date}</Text>
                <Text style={styles.itemTitleText}>{item.end_time}</Text>
            </TouchableOpacity>
        );
    }

    const getMarkedDates = () => {
        const markedDates = {}
        selectedUser?.activity_periods.forEach(item => {
            let startDate = item.start_time.split(' ')[0]
            let endDate = item.end_time.split(' ')[0]

            if (startDate == endDate) {
                markedDates[startDate] = { selected: true, startingDay: true, endingDay: true, color: 'lightblue' };
            } // if both dates are same 
            else {
                var daysBetween = getDaysArray(new Date(startDate), new Date(endDate)) // get dates in range [startDate,endDate]
                daysBetween.map((d) => {
                    let date = d.toISOString().slice(0, 10)
                    markedDates[date] = { selected: true, color: 'lightblue' };
                })
                markedDates[startDate] = { selected: true, startingDay: true, color: 'lightblue' };
                markedDates[endDate] = { selected: true, endingDay: true, color: 'lightblue' };   // To mark starting and ending dates differently
            }
        });
        return markedDates;
    }

    return (
        <CalendarProvider
            date={Date.now()}
            disabledOpacity={0.6}
        >
            <ExpandableCalendar
                disableAllTouchEventsForDisabledDays
                markingType={'period'}
                firstDay={1}
                markedDates={getMarkedDates()}
            />
            <Text style={styles.activityText}>ACTIVITIES</Text>
            {
                loading ?
                    <View style={{ marginTop: 100 }}>
                        <ActivityIndicator size={'large'} color={SKYBLUE} />
                    </View>
                    :
                    <AgendaList
                        sections={activityPeriods}
                        renderItem={renderActivity}
                    />
            }
        </CalendarProvider>
    )
};
export default memo(CalendarComponent);

const styles = StyleSheet.create({
    item: {
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row'
    },
    itemTitleText: {
        color: 'black',
        marginLeft: 5,
        fontWeight: 'bold',
        fontSize: 16
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    emptyItemText: {
        color: 'lightgrey',
        fontSize: 14
    },
    activityText: {
        margin: 16,
        fontSize: 17,
        alignSelf: 'center',
        marginBottom: 0,
        fontWeight: '700',
        color: SKYBLUE
    }
})